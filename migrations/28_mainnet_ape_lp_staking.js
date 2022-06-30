const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const LPStakingRewardsUpgradeable = artifacts.require("LPStakingRewardsUpgradeable");

module.exports = async function (deployer, network, accounts) {
  if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
    const rewardDistributorAddress = '0xC2573A26297a0c952C92bb48Fdcb6929524F7F48';

    const skillTokenAddress = '0x931ad0628aa11791c26ff4d41ce23e40c31c5e4e';
    const lpTokenAddress = '0x0dEB588c1EC6f1D9f348126D401f05c4c7B7a80c';

    await deployProxy(LPStakingRewardsUpgradeable, [accounts[0], rewardDistributorAddress, skillTokenAddress, lpTokenAddress, 0], { deployer });
  }
};

