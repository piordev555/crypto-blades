const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const SkillStakingRewardsUpgradeable = artifacts.require("SkillStakingRewardsUpgradeable");

module.exports = async function (deployer, network, accounts) {
  if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
    const skillTokenAddress = '0x931ad0628aa11791c26ff4d41ce23e40c31c5e4e';

    await deployProxy(SkillStakingRewardsUpgradeable, [accounts[0], accounts[0], skillTokenAddress, skillTokenAddress, 7 * 24 * 60 * 60], { deployer });
  }
};
