import React, { useEffect, useState } from "react"
import { useWallet } from '../context/WalletContext'
import { useDispatch, useSelector } from "react-redux"
import { connect, initContracts } from "../redux/blockchain/blockchainActions"
import { mintPotion, mintPowerUp, fetchData, } from "../redux/data/dataActions"

export default function PowerUps() {

    const { loading } = useWallet()

    //web3 data imports
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);

    console.log(data)

    useEffect(() => {
        dispatch(initContracts());
        dispatch(fetchData());
    }, []);

    const [potion, setPotion] = useState(1)
    const [powerUp, setPowerUp] = useState(1)

    const handlePotionChange = ({ target: { value } }) => {
        setPotion(value >= 0 ? value : 1)
    }

    const handlePowerUpChange = ({ target: { value } }) => {
        setPowerUp(value >= 0 ? value : 1)
    }

    return (
        <div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-4">

            <div class="box-red-bg box-red-bg-game mb-4">
                <div id="upgrade-nfts-box" class="p-3">
                    {
                        loading && <div class="loading-con d-flex align-items-center justify-content-center">
                            <div class="loading-text">Loading...</div>
                        </div>
                    }

                    <div class="refresh-btn">
                        <a href="#">
                            <i class="fas fa-sync"></i>
                        </a>
                    </div>
                    <h2>Potions & Power Ups</h2>
                    <span style={{ fontSize: '14px' }}>
                        Potions can be used to prevent your Hero from losing a level by 2 days. This means if a Hero hasn’t been upgraded for 7 days instead of 5 they will lose a level.
                    </span>
                    <hr />

                    <div class="d-flex align-items-center">
                        <div class="p-1 rounded-3 bg-primary">
                            <img src="/img/potion.webp" style={{ maxWidth: '90px' }} />
                        </div>
                        <input
                            value={potion}
                            onChange={handlePotionChange}
                            class="form-control bg-secondary mx-3 text-warning"
                            style={{ maxWidth: '70px' }}
                        />
                        <button
                            onClick={() => potion > 0 && mintPotion(blockchain.account, potion)}
                            class="btn btn-primary btn-yellow h5 m-0">MINT POTION</button>
                    </div>
                    <span style={{ fontSize: '14px' }}>
                        Power Ups allow your Hero to gain +20 $WORLD per level, per Hero! The more Power Ups, the stronger your Heroes are and they will compound $WORLD faster. After 10 Power Up NFTs, they will lose 5% per additional Power Up.
                    </span>

                    <hr />

                    <div class="d-flex align-items-center">
                        <div class="p-1 rounded-3 bg-primary">
                            <img src="/img/powerup.webp" style={{ maxWidth: '90px' }} />
                        </div>
                        <input
                            value={powerUp}
                            onChange={handlePowerUpChange}
                            class="form-control bg-secondary mx-3 text-warning"
                            style={{ maxWidth: '70px' }}
                        />
                        <button
                            onClick={() => powerUp > 0 && mintPowerUp(blockchain.account, powerUp)}
                            class="btn btn-primary btn-yellow h5 m-0">MINT POWER UP</button>
                    </div>
                    <h5 class="mt-3 mb-5">Power Up Earning :</h5>

                    <h3 class="px-4 py-1 mx-auto rounded-2 border border-dark bg-secondary w-50">
                        0 $WORLD
                    </h3>
                </div>
            </div>
        </div>
    )
}
