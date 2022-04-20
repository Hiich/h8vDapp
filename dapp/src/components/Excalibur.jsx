import React, { useEffect, useState } from "react";
import { useWallet } from '../context/WalletContext'

//web3 imports
import { useDispatch, useSelector } from "react-redux";
import { connect, initContracts } from "../redux/blockchain/blockchainActions";
import { mintExcalibur, fetchData } from "../redux/data/dataActions";

export default function Excalibur() {
    const { loading } = useWallet()

    //web3 data imports
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(initContracts());
        dispatch(fetchData());
    }, []);

    const [excalibur, setExcalibur] = useState(1)

    const handleExcaliburChange = ({ target: { value } }) => {
        setExcalibur(value >= 0 ? value : 1)
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

                    <div class="d-flex">
                        <div class="p-1 rounded-3 bg-primary">
                            <img src="/img/excalibur.webp" style={{ maxWidth: '110px' }} />
                        </div>

                        <div>
                            <h4 class="ms-4">MINT EXCALIBUR SWORD</h4>
                            <span style={{ fontSize: '14px' }}>
                                Costing 2million $WORLD this mighty sword will allow users to earn royalties from NFT sales!
                            </span>
                            <h6 class="text-left ms-4">2M $WORLD</h6>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end">
                        <input
                            value={excalibur}
                            onChange={handleExcaliburChange}
                            class="form-control bg-secondary text-warning me-3"
                            style={{ maxWidth: '70px' }}
                        />
                        <button
                            onClick={() => excalibur > 0 && mintExcalibur(blockchain.account, excalibur)}
                            class="btn btn-primary btn-yellow h5 m-0">MINT</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
