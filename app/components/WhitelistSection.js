'use client'

import { useState } from 'react'

const CONFIG = {
	dimensions: {
		section: {
			width: '100%',
			maxWidth: '1200px',
		},
	},
	colors: {
		borderSuccess: 'border-green-500',
		borderError: 'border-red-500',
		title: 'text-black',
		button: 'bg-green-500 hover:bg-green-600',
		successText: 'text-green-600',
		errorText: 'text-red-600',
	},
	text: {
		title: 'Whitelist Check',
		placeholder: 'bcvdxoljkm46kjgb2.r45sdfcgbpolkmndgfck,m',
		buttonText: 'Check',
		description:
			'Enter the wallet address to check the status in the Whitelist',
		successMessage: 'Eligible',
		successDetail: 'Your wallet is in the Whitelist.',
		errorMessage: 'Not Eligible',
		errorDetail: 'Unfortunately, your wallet is not in the Whitelist.',
	},
}

export default function WhitelistSection() {
	const [walletAddress, setWalletAddress] = useState('')
	const [notification, setNotification] = useState(null)

	const checkWhitelist = async () => {
		if (!walletAddress.trim()) {
			setNotification({
				message: 'Please enter a wallet address!',
				type: 'error',
			})
			return
		}

		try {
			const response = await fetch('/api/wallet')
			const wallets = await response.json()

			if (!Array.isArray(wallets)) {
				throw new Error('Request error')
			}

			const isWhitelisted = wallets.some(
				wallet =>
					wallet.key_wallet.toLowerCase() === walletAddress.toLowerCase()
			)

			setNotification(
				isWhitelisted
					? {
							message: CONFIG.text.successMessage,
							detail: CONFIG.text.successDetail,
							type: 'success',
					  }
					: {
							message: CONFIG.text.errorMessage,
							detail: CONFIG.text.errorDetail,
							type: 'error',
					  }
			)
		} catch (error) {
			setNotification({
				message: 'Error checking. Please try again.',
				type: 'error',
			})
			console.error('Error:', error)
		}
	}

	return (
		<section
			id='whitelist'
			className='flex justify-center px-4'
			style={{
				marginTop: '100px',
				marginBottom: '100px',
			}}
		>
			<div
				className='w-full rounded-lg p-6 text-center'
				style={{
					maxWidth: '1200px',
				}}
			>
				<h1
					className='font-black text-black pixel-font'
					style={{
						fontSize: 'calc(14px + 4vw)',
						padding: '0px',
					}}
				>
					{CONFIG.text.title}
				</h1>
				<p
					className='text-black my-4 mainText'
					style={{ fontSize: 'calc(12px + 10px)', marginBottom: '30px' }}
				>
					{CONFIG.text.description}
				</p>
				<input
					type='text'
					value={walletAddress}
					onChange={e => setWalletAddress(e.target.value)}
					className='px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none mainText'
					style={{
						maxWidth: '800px',
						width: '100%',
						border: '2px solid #FFC60D',
						padding: '15px 20px',
						marginBottom: '30px',
					}}
					placeholder={CONFIG.text.placeholder}
				/>
				<hr />
				<button
					onClick={checkWhitelist}
					className='text-white transition font-bold buttonShadowPixel w-full pixel-font'
					style={{
						backgroundImage: "url('/images/buttonCheck.png')",
						backgroundRepeat: 'no-repeat',
						objectFit: 'cover',
						minWidth: '100px',
						maxWidth: '270px',
						width: '100%',
						maxHeight: '70px',
						height: '100%',
						textAlign: 'center',
						fontSize: 'calc(12px + 10px)',
					}}
				>
					{CONFIG.text.buttonText}
				</button>

				{notification && (
					<div
						className={`mt-4 p-3 rounded-md pixel-font ${
							notification.type === 'success'
								? CONFIG.colors.successText
								: CONFIG.colors.errorText
						}`}
					>
						<p
							className='my-4 font-bold mainText'
							style={{ fontSize: 'calc(12px + 7px)', marginBottom: '30px' }}
						>
							{notification.message}
						</p>
						<p
							className='my-4 mainText'
							style={{ fontSize: 'calc(12px + 5px)', marginBottom: '30px' }}
						>
							{notification.detail}
						</p>
					</div>
				)}
			</div>
		</section>
	)
}
