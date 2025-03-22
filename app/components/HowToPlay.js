'use client'

import Image from 'next/image'

export default function HowToPlay() {
	return (
		<section
			id='how-to-play'
			className='flex flex-col items-center py-16 px-4'
			style={{ marginTop: '100px' }}
		>
			{/* Заголовок */}
			<h1
				className='text-green-600 text-4xl lg:text-5xl font-bold pixel-font'
				style={{
					fontSize: 'calc(14px + 4vw)',
					padding: '0px',
					textShadow: '2px 2px text-green-800',
				}}
			>
				HOW TO PLAY?
			</h1>

			{/* Комбинация зверьков */}
			<div className='flex flex-col items-center mt-8 space-y-4 md:flex-row md:space-x-8 md:space-y-0'>
				<Image
					src='/images/++=.png'
					alt='Creature 1'
					className=''
					width={500}
					height={500}
					style={{
						width: '60vw',
						height: '100%',
						marginLeft: '-8vw',
						marginTop: '-10vw',
					}}
				/>
			</div>

			{/* Описание */}
			<p
				className='text-black text-center mt-6 px-4 mainText'
				style={{
					fontSize: 'calc(12px + 8px)',
					marginLeft: '0%',
					marginTop: '-6vw',
					maxWidth: '600px',
					fontWeight: 'normal',
				}}
			>
				Combine the animals using swipes to get a new one that It will make
				money!
			</p>
		</section>
	)
}
