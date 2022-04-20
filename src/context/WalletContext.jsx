import React, { createContext, useContext, useEffect, useState } from 'react'


const WalletContext = createContext(null)



export default function WalletProvider({ children }) {
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(true)

    const connect = () => {

        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(address => {
                    setAddress(address)
                    setLoading(false)
                })
        }
    }

    useEffect(() => {
        connect()
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', address => setAddress(address))
        }
    }, [])

    return (
        <WalletContext.Provider
            value={{ address, connect, loading }}
        >
            {children}
        </WalletContext.Provider>
    )
}


export const useWallet = () => {
    return useContext(WalletContext)
}