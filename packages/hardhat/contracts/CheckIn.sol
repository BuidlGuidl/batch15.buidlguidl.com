//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import {BatchRegistry} from "./BatchRegistry.sol";

interface IBatchRegistry {
    // External getter functions of public state variables
    function BATCH_NUMBER() external view returns (uint16);
    function allowList(address builder) external view returns (bool);
    function yourContractAddress(address builder) external view returns (address);
    function graduatedTokenId(address builder) external view returns (uint256);
    function graduationAllowList(address builder) external view returns (bool);
    function isOpen() external view returns (bool);
    function checkedInCounter() external view returns (uint256);

    // Errors
    error BatchNotOpen();
    error NotAContract();
    error NotInAllowList();
    error AlreadyGraduated();
    error NotCheckedIn();
    error NotInGraduationAllowList();

    // Functions
    function updateAllowList(address[] calldata builders, bool[] calldata statuses) external;
    function updateGraduationAllowList(address[] calldata builders, bool[] calldata statuses) external;
    function toggleBatchOpenStatus() external;
    function checkIn() external;
    function graduate() external;
    function withdraw() external;
}

contract CheckIn {
    address private immutable i_batchRegistry;

    constructor(address _batchRegistry) {
        i_batchRegistry = _batchRegistry;
    }

    function callCheckIn() external {
        IBatchRegistry(i_batchRegistry).checkIn();
    }

    receive() external payable {}
}
