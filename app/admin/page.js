'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import './Admin.model.css'

export default function AdminWalletPanel() {
	const [wallets, setWallets] = useState([])
	const [walletInput, setWalletInput] = useState('')
	const [walletType, setWalletType] = useState('GTD') // По умолчанию GTD
	const router = useRouter()

	useEffect(() => {
		fetchWallets()
	}, [])

	async function fetchWallets() {
		try {
			const res = await fetch('/api/wallet')
			if (!res.ok) throw new Error('Ошибка при загрузке кошельков')
			const data = await res.json()
			setWallets(data)
		} catch (error) {
			toast.error('Не удалось загрузить кошельки')
		}
	}

	async function addWallet() {
		const trimmedWallet = walletInput.trim()

		if (!trimmedWallet.startsWith('bc') && !trimmedWallet.startsWith('0x')) {
			toast.error("Кошелек должен начинаться с 'bc' или '0x'")
			return
		}

		if (
			wallets.some(w => w.key_wallet === trimmedWallet && w.type === walletType)
		) {
			toast.error('Кошелек с таким типом уже существует')
			return
		}

		try {
			const res = await fetch('/api/wallet', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					key_wallet: trimmedWallet,
					type: walletType,
					block: false,
				}),
			})

			const data = await res.json()
			if (!res.ok)
				throw new Error(data.error || 'Ошибка при добавлении кошелька')

			setWallets(prev => [...prev, data])
			setWalletInput('')
			toast.success('Кошелек добавлен!')
		} catch (error) {
			toast.error(error.message)
		}
	}

	async function deleteWallet(key_wallet, type) {
		try {
			const res = await fetch('/api/wallet', {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ key_wallet, type }), // Передаем key_wallet и type
			})

			const data = await res.json()
			if (!res.ok) throw new Error(data.error || 'Ошибка удаления')

			setWallets(prev =>
				prev.filter(w => !(w.key_wallet === key_wallet && w.type === type))
			)
			toast.success('Кошелек удалён')
		} catch (error) {
			toast.error(error.message)
		}
	}

	const groupedWallets = wallets.reduce((acc, wallet) => {
		if (!acc[wallet.key_wallet]) acc[wallet.key_wallet] = []
		acc[wallet.key_wallet].push(wallet)
		return acc
	}, {})

	return (
		<div className='flex min-h-screen bg-gray-100'>
			<div className='w-2/5 bg-white p-6 shadow-lg relative'>
				<button
					onClick={() => router.push('/')}
					className='absolute top-4 right-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400'
				>
					На главную
				</button>
				<h2 className='text-xl font-semibold mb-4'>Добавить кошелек</h2>

				<div className='mb-4'>
					<label className='block text-gray-700 mb-2'>Тип кошелька</label>
					<div className='flex space-x-4'>
						<button
							className={`px-4 py-2 rounded ${
								walletType === 'GTD' ? 'bg-blue-500 text-white' : 'bg-gray-300'
							}`}
							onClick={() => setWalletType('GTD')}
						>
							GTD
						</button>
						<button
							className={`px-4 py-2 rounded ${
								walletType === 'FCFS' ? 'bg-blue-500 text-white' : 'bg-gray-300'
							}`}
							onClick={() => setWalletType('FCFS')}
						>
							FCFS
						</button>
					</div>
				</div>

				<input
					type='text'
					className='w-full p-2 border rounded mb-4'
					placeholder='Введите номер кошелька (bc... / 0x...)'
					value={walletInput}
					onChange={e => setWalletInput(e.target.value)}
				/>
				<button
					onClick={addWallet}
					className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
				>
					Добавить
				</button>
			</div>

			<div className='w-3/5 p-6'>
				<h2 className='text-xl font-semibold mb-4'>Список кошельков</h2>
				<ul className='bg-white shadow-lg rounded-md p-4'>
					{Object.keys(groupedWallets).length > 0 ? (
						Object.entries(groupedWallets).map(([key_wallet, walletGroup]) => (
							<li key={key_wallet} className='border-b p-4'>
								<div className=' text-base mb-2'>
									<p>
										<b style={{ marginRight: '5px' }}>Номер кошелька:</b>{' '}
										{key_wallet}
									</p>
								</div>
								<ul>
									{walletGroup.map(wallet => (
										<li
											key={wallet.id}
											className='flex justify-between items-center border p-2 rounded-md bg-gray-100 mb-2'
										>
											<span className='text-sm'>
												<p>
													<b style={{ marginRight: '5px' }}>Тип:</b>{' '}
													{wallet.type}
												</p>
											</span>
											<button
												onClick={() =>
													deleteWallet(wallet.key_wallet, wallet.type)
												} // Передаем key_wallet и type
												className='text-red-500 hover:text-red-700'
											>
												❌
											</button>
										</li>
									))}
								</ul>
							</li>
						))
					) : (
						<p className='text-gray-500'>Кошельков пока нет</p>
					)}
				</ul>
			</div>
		</div>
	)
}
