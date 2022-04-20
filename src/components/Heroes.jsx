import { useWallet } from "../context/WalletContext";
//web3 imports
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect, initContracts } from "../redux/blockchain/blockchainActions";
import {
  stakeNFTs,
  getStake,
  mintGen1,
  mintGen0,
  mintExcalibur,
  mintPotion,
  mintPowerUp,
  levelUpManyHeros,
  fetchData,
} from "../redux/data/dataActions";

export default function Heroes({ setHero }) {
  const { address, loading } = useWallet();

  //web3 data imports
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(initContracts());
    dispatch(fetchData());
  }, []);

  const [gen, setGen] = useState(1)

  const handleGenChange = ({ target: { value } }) => {
    setGen(value >= 0 ? value : 1)
  }


  return (
    <div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
      <div class="box-red-bg box-red-bg-game">
        <div id="nfts-box" class="p-3">
          {loading && (
            <div class="loading-con d-flex align-items-center justify-content-center">
              <div class="loading-text">Loading...</div>
            </div>
          )}
          <div class="refresh-btn">
            <a href="#">
              <i class="fas fa-sync"></i>
            </a>
          </div>

          <h2>Heroes & Villains</h2>
          <hr />
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center mb-3">
              <input
                class="form-control bg-secondary text-warning"
                style={{ maxWidth: '70px' }}
                value={gen}
                onChange={handleGenChange}
              />
              <button
                onClick={() => gen > 0 && mintGen0(blockchain.account, gen)}
                class="btn btn-primary btn-yellow mx-3 h5 m-0"
              > MINT GEN0</button>
              <button
                onClick={() => gen > 0 && mintGen1(blockchain.account, gen)}
                class="btn btn-primary btn-yellow h5 m-0">MINT GEN1</button>
            </div>
          </div>
          <span style={{ fontSize: '14px' }}>
            GEN-1 mints can be stolen by Villains! (10% chance)
          </span>
          <hr />
          <span class="fs-4">STAKE</span>
          <p style={{ fontSize: '14px' }}>
            When claiming, Villains will steal 20% of claimed $WORLD. When un-staking, Villains have a 50% chance to steal ALL unclaimed $WORLD
          </p>
          <div class="mb-2">
            <button class="btn btn-primary btn-yellow mb-2 me-2">CLAIM</button>
            <button class="btn btn-primary btn-yellow mb-2 ms-2">
              UNSTAKE
            </button>
          </div>

          <div class="btn btn-outline-warning" style={{ width: "fit-content" }}>
            <span class="fs-6">Level Up Selected</span>
          </div>

          <div class="my-3">Heroes Earnings :</div>

          <h3
            class="px-4 py-1 mb-4 mx-auto rounded-2 border border-dark bg-secondary"
            style={{ maxWidth: "250px" }}
          >
            {data.rewards} $WORLD
          </h3>

          <div class="row">
            {heroes_data.map((hero) => {
              const { id, level_progress, level, img } = hero;
              return (
                <div key={id} class="col-4 col-lg-3 rounded-3 mb-4">
                  <div class="hero_abs">
                    <img src={`/img/${img}`} />
                    <div
                      class="level_bg"
                      style={{ width: level_progress }}
                    ></div>
                    <div class="level_num">Level {level}</div>
                  </div>
                  <div
                    class="text-white level-up"
                    onClick={() => setHero(hero)}
                  >
                    Level up
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const heroes_data = [
  { id: 1, type: "Hero", level_progress: "70%", img: "hero1.png", level: 4 },
  { id: 2, type: "Hero", level_progress: "40%", img: "hero2.png", level: 2 },
  { id: 3, type: "Hero", level_progress: "80%", img: "hero3.png", level: 3 },
  { id: 4, type: "Hero", level_progress: "40%", img: "hero4.png", level: 3 },
  { id: 5, type: "Hero", level_progress: "90%", img: "hero5.webp", level: 5 },
  {
    id: 6,
    type: "Villain",
    level_progress: "20%",
    img: "villain1.png",
    level: 4,
  },
  {
    id: 7,
    type: "Villain",
    level_progress: "30%",
    img: "villain2.png",
    level: 4,
  },
  {
    id: 8,
    type: "Villain",
    level_progress: "80%",
    img: "villain3.webp",
    level: 3,
  },
  {
    id: 9,
    type: "Villain",
    level_progress: "70%",
    img: "villain4.webp",
    level: 1,
  },
];
