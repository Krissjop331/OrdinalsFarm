'use client'

import Image from 'next/image'

export default function PfpFarmers() {
	return (
		<section
			className='flex justify-center py-16 px-4'
			style={{ marginTop: '-50px' }}
		>
			<div
				className='flex flex-col lg:flex-row items-center w-full gap-12'
				style={{
					width: '80%',
					gap: '5%',
					marginBottom: '100px',
					justifyContent: 'space-evenly',
				}}
			>
				{/* Left part */}
				<div className='text-center lg:text-left'>
					<h1
						className='text-black text-4xl lg:text-5xl font-bold pixel-font'
						style={{
							fontSize: 'calc(14px + 4vw)',
							padding: '0px',
							textShadow: '2px 2px text-green-800',
						}}
					>
						UNIQUE PFP FARMERS
					</h1>
					<p
						className='text-black mt-4 mainText'
						style={{
							fontSize: 'calc(12px + 5px)',
							marginLeft: '15%',
							marginTop: '35px',
							maxWidth: '600px',
							fontWeight: 'normal',
						}}
					>
						Collection of exclusive PFP farmers on Bitcoin Ordinals. Owners get
						access to unique game mechanics and powerful boosts.
					</p>
				</div>
				{/* Right part (smartphone with the game) */}
				<div className='border-black overflow-hidden'>
					<Image
						width={500}
						height={500}
						src='/Video0001.gif'
						alt='Farmer'
						unoptimized={true} // Добавляем, чтобы Next.js не пытался оптимизировать GIF
						className='w-full h-auto object-cover'
						style={{
							minWidth: '100px',
							maxHeight: '1000px',
							minHeight: '150px',
							width: '100%',
							height: '100%',
						}}
					/>
				</div>
			</div>
		</section>
	)
}
