import { configure } from "@testing-library/react";
import store from "../store";
import { CONFIG } from "../config.ts";
import dataReducer from "./dataReducer";
const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    let stakes = await store.getState().blockchain.arena.methods.getStake(account).call();
    let potionBalance = await store.getState().blockchain.game.methods.getBalanceOfActivePotions(account).call();
    let powerUpBalance = await store.getState().blockchain.game.methods.getBalanceOfActivePowerUps(account).call();
    let stakedTokenIds = await store.getState().blockchain.arena.methods.getStakedTokenIds(account).call();
    let rewards = await store.getState().blockchain.game.methods.calculateAllStakingRewards(stakedTokenIds).call();

    try {
      dispatch(
        fetchDataSuccess({
          stakes,
          potionBalance,
          powerUpBalance,
          stakedTokenIds,
          rewards
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};

export const mintGen0 = async (account, amount) => {
  let totalcost = CONFIG.WEI_COST * amount;

  await store
    .getState()
    .blockchain.game.methods.mintGen0(amount)
    .send({ to: CONFIG.GAME_ADDRESS, from: account, value: totalcost })
    .once("error", (err) => {
      console.log(err);
    })
    .then(async (receipt) => {
      console.log(receipt);
    });
};

// minting methods
export const mintGen1 = async (account, amount) => {
  let totalcost = CONFIG.WEI_COST * amount;

  await store
    .getState()
    .blockchain.game.methods.mintGen1(amount)
    .send({ to: CONFIG.GAME_ADDRESS, from: account, value: totalcost })
    .once("error", (err) => {
      console.log(err);
    })
    .then(async (receipt) => {
      console.log(receipt);
    });
};

export const mintPotion = async (account, amount) => {
  let totalcost = CONFIG.WEI_COST * amount;

  await store
    .getState()
    .blockchain.game.methods.mintPotion(amount)
    .send({ to: CONFIG.GAME_ADDRESS, from: account, value: totalcost })
    .once("error", (err) => {
      console.log(err);
    })
    .then(async (receipt) => {
      console.log(receipt);
    });
};

export const mintPowerUp = async (account, amount) => {
  let totalcost = CONFIG.WEI_COST * amount;

  await store
    .getState()
    .blockchain.game.methods.mintPowerUp(amount)
    .send({ to: CONFIG.GAME_ADDRESS, from: account, value: totalcost })
    .once("error", (err) => {
      console.log(err);
    })
    .then(async (receipt) => {
      console.log(receipt);
    });
};

export const mintExcalibur = async (account, amount) => {
  let totalcost = CONFIG.WEI_COST * amount;

  await store
    .getState()
    .blockchain.game.methods.mintExcalibur(amount)
    .send({ to: CONFIG.GAME_ADDRESS, from: account, value: totalcost })
    .once("error", (err) => {
      console.log(err);
    })
    .then(async (receipt) => {
      console.log(receipt);
    });
};

//staking methods
//tokens = array of tokens
export const stakeNFTs = async (account, aTokens) => {
  await store
    .getState()
    .blockchain.arena.methods.stakeManyToArena(aTokens)
    .send({ to: CONFIG.ARENA_ADDRESS, from: account })
    .once("error", (err) => {
      console.log(err);
    })
    .then(async (receipt) => {
      console.log(receipt);
    });
};

//bUnstake == true to unstake tokens
export const claimUnstake = async (account, aTokens, bUnstake) => {
  await store
    .getState()
    .blockchain.arena.methods.claimManyFromArena(aTokens, bUnstake)
    .send({ to: CONFIG.ARENA_ADDRESS, from: account })
    .once("error", (err) => {
      console.log(err);
    })
    .then(async (receipt) => {
      console.log(receipt);
    });
};

export const levelUpManyHeros = async (account, tokensIds, levelsToUpgrade) => {
  await store
    .getState()
    .blockchain.game.methods.levelUpManyHeros(tokensIds, levelsToUpgrade)
    .send({ to: CONFIG.ARENA_ADDRESS, from: account })
    .once("error", (err) => {
      console.log(err);
    })
    .then(async (receipt) => {
      console.log(receipt);
    });
};

