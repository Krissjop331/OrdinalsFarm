import { useState } from 'react'

export default function useWallet() {
	const [isConnected, setIsConnected] = useState(false)
	const [walletAddress, setWalletAddress] = useState(null)

	const connectWallet = async () => {
		return new Promise(resolve => {
			setTimeout(() => {
				const address = `0x${Math.random().toString(36).substring(2, 16)}`
				setIsConnected(true)
				setWalletAddress(address)
				resolve(address)
			}, 1000)
		})
	}

	const mintNFT = async amount => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const success = Math.random() > 0.5
				if (success) {
					alert(`Successfully minted ${amount} NFTs!`)
					resolve()
				} else {
					reject(new Error('Mint failed'))
				}
			}, 1000)
		})
	}

	return { isConnected, walletAddress, connectWallet, mintNFT }
}
