'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function OrdinalsFarm() {
	const [isMobile, setIsMobile] = useState(false)

	// Проверяем размер экрана
	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768)
		}
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	const scrollToSection = id => {
		const element = document.getElementById(id)
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 80, // Учитываем высоту хедера
				behavior: 'smooth',
			})
		}
	}

	return (
		<section className='hero-section relative w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen'>
			<div
				className={`container flex ${
					isMobile ? 'flex-col-reverse items-center' : 'items-center'
				} justify-center text-left`}
				style={{ gap: isMobile ? '30px' : '20%', maxWidth: '80vw' }}
			>
				{/* Text part */}
				<div className='text-center md:text-left'>
					<h1
						className='font-black text-black pixel-font'
						style={{
							fontFamily: 'Pixelify Sans, sans-serif',
							fontSize: isMobile ? 'calc(20px + 4vw)' : 'calc(14px + 4vw)',
							padding: '0px',
							textShadow: '5px 5px gray',
						}}
					>
						Ordinals Farm
					</h1>
					<p
						className='text-black font-semibold mainText'
						style={{
							fontSize: isMobile ? 'calc(14px + 6px)' : 'calc(12px + 10px)',
							marginBottom: '30px',
						}}
					>
						First Bitcoin Merge Game
					</p>
					<div
						className='flex flex-col md:flex-row gap-4'
						style={{ height: '50px' }}
					>
						<Link
							href='/play'
							className='text-white px-6 py-2 font-bold text-lg buttonShadowPixel'
							style={{
								backgroundImage: "url('/images/buttonYellow.png')",
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
								minWidth: isMobile ? '80px' : '100px',
								maxWidth: isMobile ? 'none' : '210px',
								width: '100%',
								maxHeight: isMobile ? '50px' : '60px',
								height: '100%',
								textAlign: 'center',
								fontSize: isMobile ? '14px' : '16px',
							}}
						>
							Play now
						</Link>
						<button
							onClick={() => scrollToSection('how-to-getwl')}
							className='text-white px-6 py-2 font-bold text-lg buttonShadowPixel'
							style={{
								backgroundImage: "url('/images/buttonGreen.png')",
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
								minWidth: isMobile ? '80px' : '100px',
								maxWidth: isMobile ? 'none' : '170px',
								width: '100%',
								maxHeight: isMobile ? '50px' : '60px',
								height: '100%',
								textAlign: 'center',
								fontSize: isMobile ? '14px' : '16px',
							}}
						>
							Get WL
						</button>
					</div>
				</div>

				{/* Image */}
				<div className='relative flex flex-col items-center'>
					<Image
						src='/images/MainImageNoText.png'
						alt='Best Farmer'
						width={800}
						height={800}
						className='w-full h-full object-contain'
						style={{
							width: isMobile ? '80vw' : '25vw',
							maxWidth: '100%',
						}}
					/>
				</div>
			</div>
		</section>
	)
}
