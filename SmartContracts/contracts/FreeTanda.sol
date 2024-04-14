// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract FreeTanda {
    enum State { Created, Started, Finished }

    struct Member {
        string name;
        address addr;
        uint credibility;
        uint fund;
    }

    struct Tanda {
        Member[] members;
        uint startTime;
        uint endTime;
        uint period;
        uint step;
        uint penalty;
        uint bfreeBoost;
        State state;
    }

    Tanda[] public tandas;

    // Create a new Tanda
    function createFreeTanda(uint _period, uint _step, uint _penalty, uint _bfreeBoost) public {
        tandas.push(Tanda({
            members: new Member ,
            startTime: 0,
            endTime: 0,
            period: _period,
            step: _step,
            penalty: _penalty,
            bfreeBoost: _bfreeBoost,
            state: State.Created
        }));
    }

    // Add a member to a Tanda
    function addMember(uint _tandaId, string memory _name, address _address, uint _credibility) public {
        require(_tandaId < tandas.length, "Tanda does not exist");
        require(tandas[_tandaId].state == State.Created, "Cannot add new members unless the tanda is in Created state");
        tandas[_tandaId].members.push(Member({
            name: _name,
            addr: _address,
            credibility: _credibility,
            fund: 0
        }));
    }

    // Start a Tanda
    function startTanda(uint _tandaId) public {
        require(_tandaId < tandas.length, "Tanda does not exist");
        require(tandas[_tandaId].state == State.Created, "Tanda is not in Created state");
        tandas[_tandaId].state = State.Started;
        tandas[_tandaId].startTime = block.timestamp;
        tandas[_tandaId].endTime = block.timestamp + tandas[_tandaId].period;
    }

    // Finish a Tanda
    function finishTanda(uint _tandaId) public {
        require(_tandaId < tandas.length, "Tanda does not exist");
        require(tandas[_tandaId].state == State.Started, "Tanda must be Started to finish");
        tandas[_tandaId].state = State.Finished;
        // Logic to distribute funds with additional earnings here
    }

    // Member pays into their Tanda fund
    function payFund(uint _tandaId, uint _amount) public payable {
        require(_tandaId < tandas.length, "Tanda does not exist");
        require(tandas[_tandaId].state == State.Started, "Tanda is not in Started state");
        // Assuming msg.sender is the member who is paying
        for (uint i = 0; i < tandas[_tandaId].members.length; i++) {
            if (tandas[_tandaId].members[i].addr == msg.sender) {
                tandas[_tandaId].members[i].fund += _amount;
                break;
            }
        }
    }

    // Check if all members have paid the fund in the current period
    function finishPeriod(uint _tandaId) public {
        require(_tandaId < tandas.length, "Tanda does not exist");
        require(tandas[_tandaId].state == State.Started, "Tanda is not in Started state");
        bool allPaid = true;
        for (uint i = 0; i < tandas[_tandaId].members.length; i++) {
            if (tandas[_tandaId].members[i].fund < tandas[_tandaId].period) {
                allPaid = false;
                break;
            }
        }
        require(allPaid, "Not all members have paid the required fund");
        // Proceed to next period
    }
}
