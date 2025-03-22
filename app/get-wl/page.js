'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiLogoDiscord, BiLogoTwitter, BiSolidShareAlt } from 'react-icons/bi'
import Header from '../components/Header'

export default function GetWhitelist() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [videoError, setVideoError] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (videoError) {
				setVideoError(true)
			}
		}, 5000)

		return () => clearTimeout(timeout)
	}, [videoError])

	return (
		<div className='text-gray-800 flex flex-col min-h-screen bg-blue-50'>
			<Header />
			<main
				className='container mx-auto px-4 py-16 flex-grow'
				style={{ marginTop: '80px' }}
			>
				<div
					className='max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full'
					style={{ borderRadius: '25px' }}
				>
					<h1 className='text-3xl sm:text-4xl font-black text-center mb-8 text-red-500'>
						Get Whitelist
					</h1>

					<div className='grid md:grid-cols-2 gap-8 items-center'>
						{/* Левая колонка - условия */}
						<div className='w-full'>
							<h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800'>
								How to Get WL?
							</h2>
							<ul className='space-y-4 sm:space-y-6'>
								<li>
									<a href='https://twitter.com/OrdinalsFarm' target='_blank'>
										<div className='flex items-center bg-blue-50 hover:bg-blue-100 p-4 rounded-xl shadow-md transition-all max-w-[250px] md:max-w-full'>
											<BiLogoTwitter className='w-6 h-6 md:w-8 md:h-8 text-blue-500 mr-3' />
											<div>
												<h3 className='font-bold text-blue-800 text-sm md:text-lg'>
													Follow on Twitter
												</h3>
												<p className='text-xs md:text-sm text-blue-600'>
													Join our Twitter community
												</p>
											</div>
										</div>
									</a>
								</li>
								<li
									onClick={() => setIsModalOpen(true)}
									className='cursor-pointer'
								>
									<div className='flex items-center bg-green-50 hover:bg-green-100 p-4 rounded-xl shadow-md transition-all max-w-[250px] md:max-w-full'>
										<BiSolidShareAlt className='w-6 h-6 md:w-8 md:h-8 text-green-500 mr-3' />
										<div>
											<h3 className='font-bold text-green-800 text-sm md:text-lg'>
												Repost Announcement
											</h3>
											<p className='text-xs md:text-sm text-green-600'>
												Share our project with the community
											</p>
										</div>
									</div>
								</li>
								<li>
									<a href='https://discord.gg/OrdinalsFarm' target='_blank'>
										<div className='flex items-center bg-purple-50 hover:bg-purple-100 p-4 rounded-xl shadow-md transition-all max-w-[250px] md:max-w-full'>
											<BiLogoDiscord className='w-6 h-6 md:w-8 md:h-8 text-purple-500 mr-3' />
											<div>
												<h3 className='font-bold text-purple-800 text-sm md:text-lg'>
													Join Discord
												</h3>
												<p className='text-xs md:text-sm text-purple-600'>
													Connect with our community
												</p>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>

						{/* Правая колонка - видео (скрыто на маленьких экранах) */}
						<div className='w-full flex items-center justify-center md:block hidden'>
							<div className='w-full  aspect-video rounded-xl  flex items-center justify-center'>
								{videoError ? (
									<div className='text-center p-8'>
										<p className='text-red-500 font-bold mb-4'>
											😢 Video failed to load
										</p>
										<p className='text-gray-600'>Try refreshing the page</p>
									</div>
								) : (
									<img
										src='/Video0001.gif'
										alt='Transparent GIF'
										className='w-full h-full object-cover'
										onError={() => setVideoError(true)}
										style={{ width: '400px', height: '390px' }}
									/>
								)}
							</div>
						</div>
					</div>

					{/* Кнопка "На главную" */}
					<div className='mt-6 sm:mt-8 flex justify-center'>
						<Link
							href='/'
							className='px-5 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-lg text-base sm:text-lg font-bold transition hover:bg-gray-900'
						>
							⬅ Back to Home
						</Link>
					</div>
				</div>
			</main>

			{/* Modal Window */}
			{isModalOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
					<div className='bg-white p-5 sm:p-6 rounded-xl max-w-md w-full'>
						<h2 className='text-lg sm:text-xl font-bold mb-3 text-center'>
							Repost Announcement
						</h2>
						<div className='bg-blue-100 p-3 sm:p-4 rounded-lg mb-3'>
							<p className='text-blue-800 text-xs sm:text-sm'>
								🚜 Get ready for a revolution in the NFT world with Ordinals
								Farm! Unique farms, exciting gameplay, and a world of crypto
								agriculture awaits you! #OrdinalsFarm #NFTGaming #Bitcoin
							</p>
						</div>
						<a
							href='https://twitter.com/intent/tweet?text=🚜%20Get%20ready%20for%20a%20revolution%20in%20the%20NFT%20world%20with%20Ordinals%20Farm!'
							target='_blank'
							className='w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition text-center block text-base sm:text-lg'
						>
							Publish on Twitter
						</a>
						<button
							onClick={() => setIsModalOpen(false)}
							className='mt-3 w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition text-base sm:text-lg'
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
