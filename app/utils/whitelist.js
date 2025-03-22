import { CONFIG } from '../config'

export class WhitelistChecker {
	constructor() {
		this.connectedWallet = null
	}

	createModal(content, type = 'info') {
		if (typeof document === 'undefined') return // Проверка, что код выполняется на клиенте

		const modal = document.createElement('div')
		modal.classList.add('whitelist-modal', `modal-${type}`)
		modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>Проверка Whitelist</h2>
          <button class="close-modal">✕</button>
        </div>
        <div class="modal-body">${content}</div>
      </div>
    `

		modal.querySelector('.close-modal').addEventListener('click', () => {
			modal.remove()
		})

		document.body.appendChild(modal)
		return modal
	}

	async checkWhitelist(walletAddress) {
		return new Promise(resolve => {
			setTimeout(() => {
				const isWhitelisted = CONFIG.WHITELIST.includes(walletAddress)
				resolve(isWhitelisted)
			}, 1000)
		})
	}

	async verifyWhitelist() {
		if (!this.connectedWallet) {
			this.createModal(CONFIG.MESSAGES.CONNECT_WALLET, 'warning')
			return false
		}

		if (new Date() < new Date(CONFIG.MINT_DATE)) {
			this.createModal(CONFIG.MESSAGES.MINT_SOON, 'info')
			return false
		}

		const isWhitelisted = await this.checkWhitelist(this.connectedWallet)

		if (isWhitelisted) {
			this.createModal(CONFIG.MESSAGES.WL_SUCCESS, 'success')
			return true
		} else {
			this.createModal(CONFIG.MESSAGES.WL_FAIL, 'error')
			return false
		}
	}

	async connectWallet() {
		return new Promise(resolve => {
			setTimeout(() => {
				this.connectedWallet = `0x${Math.random()
					.toString(36)
					.substring(2, 16)}`
				resolve(this.connectedWallet)
			}, 1500)
		})
	}
}
