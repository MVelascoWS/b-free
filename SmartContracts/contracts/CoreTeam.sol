// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract CoreTeam {
    struct Member {
        string name;
        uint credibility;
    }

    mapping(address => Member) public members;
    address[] public memberAddresses;

    // Event declarations
    event MemberAdded(address indexed memberAddress, string name);
    event MemberRemoved(address indexed memberAddress);
    event CredibilityUpdated(address indexed memberAddress, uint credibility);

    // Function to add a member to the list
    function addMember(address _memberAddress, string memory _name) public {
        require(bytes(members[_memberAddress].name).length == 0, "Member already exists!");
        members[_memberAddress] = Member(_name, 0);
        memberAddresses.push(_memberAddress);
        emit MemberAdded(_memberAddress, _name);
    }

    // Function to remove a member from the list
    function removeMember(address _memberAddress) public {
        require(bytes(members[_memberAddress].name).length != 0, "Member does not exist!");
        delete members[_memberAddress];

        // Remove member address from memberAddresses array
        int index = getIndex(_memberAddress);
        if (index != -1) {
            memberAddresses[uint(index)] = memberAddresses[memberAddresses.length - 1];
            memberAddresses.pop();
        }

        emit MemberRemoved(_memberAddress);
    }

    // Function to update the credibility of a member
    function updateCredibility(address _memberAddress, uint _credibility) public {
        require(bytes(members[_memberAddress].name).length != 0, "Member does not exist!");
        members[_memberAddress].credibility = _credibility;
        emit CredibilityUpdated(_memberAddress, _credibility);
    }

    // Helper function to find the index of an address in the memberAddresses array
    function getIndex(address _memberAddress) private view returns (int) {
        for (uint i = 0; i < memberAddresses.length; i++) {
            if (memberAddresses[i] == _memberAddress) {
                return int(i);
            }
        }
        return -1; // Return -1 if the address is not found
    }
}