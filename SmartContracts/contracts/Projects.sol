// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Projects {
    enum State { Proposed, Approved, Rejected, Funded }

    struct Project {
        State state;
        address owner;
        string name;
        string uriImage;
        string description;
    }

    Project[] public projects;

    // Event declarations
    event ProjectAdded(uint projectId, address owner, string name);
    event ProjectApproved(uint projectId);
    event ProjectRejected(uint projectId);
    event ProjectFunded(uint projectId);

    // Add a new project
    function addProject(string memory _name, string memory _uriImage, string memory _description) public {
        projects.push(Project({
            state: State.Proposed,
            owner: msg.sender,
            name: _name,
            uriImage: _uriImage,
            description: _description
        }));
        emit ProjectAdded(projects.length - 1, msg.sender, _name);
    }

    // Approve a project
    function approveProject(uint _projectId) public {
        require(_projectId < projects.length, "Project does not exist!");
        require(projects[_projectId].state == State.Proposed, "Project must be in Proposed state!");
        projects[_projectId].state = State.Approved;
        emit ProjectApproved(_projectId);
    }

    // Reject a project
    function rejectProject(uint _projectId) public {
        require(_projectId < projects.length, "Project does not exist!");
        require(projects[_projectId].state == State.Proposed, "Project must be in Proposed state!");
        projects[_projectId].state = State.Rejected;
        emit ProjectRejected(_projectId);
    }

    // Fund a project
    function fundProject(uint _projectId) public {
        require(_projectId < projects.length, "Project does not exist!");
        require(projects[_projectId].state == State.Approved, "Only approved projects can be funded!");
        projects[_projectId].state = State.Funded;
        emit ProjectFunded(_projectId);
    }
}
