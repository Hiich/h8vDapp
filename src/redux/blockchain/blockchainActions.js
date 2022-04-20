import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// log
import { fetchData } from "../data/dataActions";
import { CONFIG } from "../config.ts";
import {
  GameAbi,
  ArenaAbi,
  ExcaliburAbi,
  NFTAbi,
  PotionAbi,
  PowerUpAbi,
  WorldAbi,
} from "../../abi";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const initContracts = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    console.log("Init...");
    //get contracts ABI
    // const gameAbiResponse = await fetch("/config/contracts/Game.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // });
    // const gameAbi = await gameAbiResponse.json();

    // const worldAbiResponse = await fetch("/config/contracts/World.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // });
    // const worldAbi = await worldAbiResponse.json();

    // const nftAbiResponse = await fetch("/config/contracts/NFT.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // });
    // const nftAbi = await nftAbiResponse.json();

    // const arenaAbiResponse = await fetch("/config/contracts/Arena.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // });
    // const arenaAbi = await arenaAbiResponse.json();

    // const ringAbiResponse = await fetch("/config/contracts/Potion.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // });
    // const ringAbi = await ringAbiResponse.json();

    // const amuletAbiResponse = await fetch("/config/contracts/PowerUp.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // });
    // const amuletAbi = await amuletAbiResponse.json();

    // const excaliburAbiResponse = await fetch(
    //   "/config/contracts/Excalibur.json",
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   }
    // );
    // const excaliburAbi = await excaliburAbiResponse.json();

    const { ethereum } = window;
    // const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    // if (metamaskIsInstalled) {
    Web3EthContract.setProvider(ethereum);
    let web3 = new Web3(ethereum);
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // if (networkId === CONFIG.NETWORK.ID) {
      const game = new Web3EthContract(GameAbi, CONFIG.GAME_ADDRESS)
      console.log("ok")

      const arena = new Web3EthContract(ArenaAbi, CONFIG.ARENA_ADDRESS)
      const nft = new Web3EthContract(NFTAbi, CONFIG.NFT_ADDRESS)
      const ring = new Web3EthContract(PotionAbi, CONFIG.POTION_ADDRESS)
      const amulet = new Web3EthContract(PowerUpAbi, CONFIG.POWERUP_ADDRESS)
      const excalibur = new Web3EthContract(ExcaliburAbi, CONFIG.EXCALIBUR_ADDRESS)
      const world = new Web3EthContract(WorldAbi, CONFIG.WORLD_ADDRESS)

      dispatch(
        connectSuccess({
          account: accounts[0],
          game: game,
          arena: arena,
          nft: nft,
          ring: ring,
          amulet: amulet,
          excalibur: excalibur,
          world: world,
          web3: web3,
        })
      );
      // Add listeners start
      ethereum.on("accountsChanged", (accounts) => {
        dispatch(updateAccount(accounts[0]));
      });
      ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      // Add listeners end
      // } else {
      //   dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
      // }
    } catch (err) {
      dispatch(connectFailed("Something went wrong."));
    }
    // } else {
    //   dispatch(connectFailed("Install Metamask."));
    // }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
