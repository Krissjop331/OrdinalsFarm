'use client'

import Image from 'next/image'

export default function FarmRuneIntro() {
	return (
		<section
			className='flex justify-center items-center py-12 px-6'
			style={{ marginTop: '100px' }}
		>
			<div
				className='flex flex-col md:flex-row gap-8 p-8'
				style={{
					maxWidth: '80vw',
					width: '100%',
					gap: '15%',
					justifyContent: 'space-between',
				}}
			>
				{/* Image */}
				<div className='flex justify-center items-center'>
					<Image
						src='/images/PixelMani.png'
						alt='Arcade'
						width={400}
						height={471}
						style={{
							maxWidth: '718px',
							minWidth: '100px',
							maxHeight: '663px',
							minHeight: '150px',
							width: '90%',
							height: '100%',
							transform: 'scale(1.1)',
						}}
					/>
				</div>

				{/* Text part */}
				<div
					className='flex-1 text-center md:text-left'
					style={{ marginLeft: '10vw' }}
				>
					<h1
						className='font-black text-black pixel-font'
						style={{
							fontSize: 'calc(14px + 4vw)',
							padding: '0px',
							textShadow: '5px 5px gray',
							marginLeft: '-50px',
						}}
					>
						THE FARM RUNE
					</h1>
					<p
						className='text-black font-normal mainText'
						style={{
							fontSize: 'calc(12px + 5px)',
							marginLeft: '10%',
							marginTop: '10px',
							maxWidth: '600px',
						}}
					>
						Play and earn in-game coins that can later be converted into The
						Farm Rune — the exclusive currency of the
						<span className='font-bold'> Ordinals Farm</span> ecosystem.
					</p>
				</div>
			</div>
		</section>
	)
}
