'use client'

import Image from 'next/image'

export default function GameForEveryone() {
	return (
		<section
			className='flex justify-center items-center p-6'
			style={{ marginTop: '100px' }}
		>
			<div
				className='flex flex-col md:flex-row'
				style={{
					maxWidth: '75vw',
					width: '100%',
					justifyContent: 'space-between',
					gap: '5%',
					marginBottom: '100px',
				}}
			>
				{/* Text part */}
				<div
					className='md:w-2/3 text-left'
					style={{ maxWidth: '800px', minWidth: '150px' }}
				>
					<h1
						className='font-black text-black pixel-font'
						style={{
							fontSize: 'calc(14px + 4vw)',
							padding: '0px',
							textShadow: '5px 5px gray',
						}}
					>
						GAME FOR EVERYONE
					</h1>
					<p
						className='text-black font-normal mainText'
						style={{
							fontSize: 'calc(12px + 5px)',
							marginLeft: '5%',
							marginTop: '10px',
							maxWidth: '600px',
						}}
					>
						<strong>Ordinals Farm</strong> is an engaging merge farming game
						accessible to everyone. Develop your farm, combine resources, and
						create unique combinations.
					</p>
				</div>

				{/* Image */}
				<div className='md:w-1/3 flex justify-center mt-6 md:mt-0'>
					<Image
						src='/images/PixelAuthomatic.png'
						alt='Arcade'
						width={400}
						height={471}
						style={{
							maxWidth: '400px',
							minWidth: '100px',
							maxHeight: '470px',
							minHeight: '150px',
							width: '90%',
							height: '100%',
						}}
					/>
				</div>
			</div>
		</section>
	)
}
