export class WalletConnection {
	constructor() {
		this.isConnected = false
		this.walletAddress = null
	}

	async connect() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const success = Math.random() > 0.3
				if (success) {
					this.isConnected = true
					this.walletAddress = this.generateWalletAddress()
					resolve(this.walletAddress)
				} else {
					reject(new Error('Wallet connection failed'))
				}
			}, 1500)
		})
	}

	async mint(amount) {
		if (!this.isConnected) {
			throw new Error('Wallet not connected')
		}

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const success = Math.random() > 0.4
				if (success) {
					resolve({
						amount: amount,
						transactionHash: this.generateTransactionHash(),
					})
				} else {
					reject(new Error('Minting failed'))
				}
			}, 2000)
		})
	}

	generateWalletAddress() {
		const chars = '0123456789ABCDEFabcdef'
		return (
			'0x' +
			Array.from(
				{ length: 40 },
				() => chars[Math.floor(Math.random() * chars.length)]
			).join('')
		)
	}

	generateTransactionHash() {
		return crypto.randomUUID()
	}
}
