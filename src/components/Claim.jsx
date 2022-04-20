import React from 'react'
import { useWallet } from '../context/WalletContext'

export default function Claim() {

    const { loading } = useWallet()

    return (
        <div className="row text-center justify-content-center mb-4">

            <div className="col-lg-6 col-md-12 col-sm-12 col-12">

                <div className="box-red-bg box-red-bg-game">
                    <div id="blood-box" className="p-3">

                        {
                            loading && <div className="loading-con d-flex align-items-center justify-content-center">
                                <div className="loading-text">Loading...</div>
                            </div>
                        }


                        <div className="refresh-btn">
                            <a href="#">
                                <i className="fas fa-sync"></i>
                            </a>
                        </div>

                        <h2 className="text-left">0 $WORLD</h2>

                        <h4 className="text-secondary text-left">100 $WORLD claimable</h4>

                        <div className="d-flex align-items-center justify-content-end mb-2">
                            <a style={{ minWidth: '120px' }} className="btn btn-primary btn-yellow me-4" href="#"
                                target="_blank">BUY</a>

                            <a style={{ minWidth: '120px' }} className="btn btn-primary btn-yellow" href="#"
                                target="_blank">STAKE</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
