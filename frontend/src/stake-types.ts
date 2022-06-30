import { allStakeTypes, isStakeType, StakeType } from './interfaces';

let availableStakingContracts = allStakeTypes;

if(process.env.VUE_APP_STAKE_TYPES_AVAILABLE) {
  availableStakingContracts = process.env.VUE_APP_STAKE_TYPES_AVAILABLE
    .split(',')
    .filter(isStakeType);
}

export interface StakingContractEntry {
  stakingRewardsAddress: string;
  stakingTokenAddress: string;
}

export const stakingContractsInfo: Partial<Record<StakeType, Partial<StakingContractEntry>>> = {
  skill: {
    stakingRewardsAddress: process.env.VUE_APP_SKILL_STAKING_REWARDS_CONTRACT_ADDRESS,
    stakingTokenAddress: process.env.VUE_APP_SKILL_TOKEN_CONTRACT_ADDRESS
  }
};

if(availableStakingContracts.includes('skill2')) {
  stakingContractsInfo.skill2 = {
    stakingRewardsAddress: process.env.VUE_APP_SKILL2_STAKING_REWARDS_CONTRACT_ADDRESS,
    stakingTokenAddress: process.env.VUE_APP_SKILL2_TOKEN_CONTRACT_ADDRESS
  };
}

if(availableStakingContracts.includes('lp')) {
  stakingContractsInfo.lp = {
    stakingRewardsAddress: process.env.VUE_APP_LP_STAKING_REWARDS_CONTRACT_ADDRESS,
    stakingTokenAddress: process.env.VUE_APP_LP_TOKEN_CONTRACT_ADDRESS
  };
}

if(availableStakingContracts.includes('lp2')) {
  stakingContractsInfo.lp2 = {
    stakingRewardsAddress: process.env.VUE_APP_LP_2_STAKING_REWARDS_CONTRACT_ADDRESS,
    stakingTokenAddress: process.env.VUE_APP_LP_2_TOKEN_CONTRACT_ADDRESS
  };
}

interface HumanReadableDetailsForStakeType {
  stakeTokenName: string;
  rewardTokenName: string;
  stakeTitle: string;
  deprecated?: boolean;
}

const defaultHumanReadableDetailsForStakeTypes: Record<StakeType, HumanReadableDetailsForStakeType> = {
  skill: {
    stakeTokenName: 'PEGASUS',
    rewardTokenName: 'PEGASUS',
    stakeTitle: 'PGS for PGS (Old)',
    deprecated: true
  },
  skill2: {
    stakeTokenName: 'PEGASUS',
    rewardTokenName: 'PEGASUS',
    stakeTitle: 'PGS for PGS'
  },
  lp: {
    stakeTokenName: 'PGS-WBNB',
    rewardTokenName: 'PEGASUS',
    stakeTitle: 'PGS-WBNB for PGS'
  },
  lp2: {
    stakeTokenName: 'PGS-BNB',
    rewardTokenName: 'PEGASUS',
    stakeTitle: 'PGS-BNB for PGS V2'
  },
};

export const humanReadableDetailsForStakeTypes = defaultHumanReadableDetailsForStakeTypes;

const stakeTypeForUnclaimedRewards = process.env.VUE_APP_STAKE_TYPE_FOR_UNCLAIMED_REWARDS;

export const stakeTypeThatCanHaveUnclaimedRewardsStakedTo: StakeType =
  stakeTypeForUnclaimedRewards && isStakeType(stakeTypeForUnclaimedRewards)
    ? stakeTypeForUnclaimedRewards
    : 'skill';
