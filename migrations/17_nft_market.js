const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const SkillToken = artifacts.require("SkillToken");
const CryptoBlades = artifacts.require("CryptoBlades");
const NFTMarket = artifacts.require("NFTMarket");

module.exports = async function (deployer, network) {
  let skillTokenAddress;
  if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
    skillTokenAddress = '0x931ad0628aa11791c26ff4d41ce23e40c31c5e4e';
  }
  else {
    skillTokenAddress = SkillToken.address;
  }

  await deployProxy(NFTMarket, [skillTokenAddress, CryptoBlades.address], { deployer });
};
