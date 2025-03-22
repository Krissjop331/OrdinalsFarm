'use client'

import { IBM_Plex_Mono } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
const ibmPlexMono = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
})

const initialFarmers = [
	{
		id: 1,
		image: '/images/collection/IMGB-1.png',
		name: 'FARMER 1',
	},
	{
		id: 2,
		image: '/images/collection/IMGB-2.png',
		name: 'FARMER 2',
	},
	{
		id: 3,
		image: '/images/collection/IMGB-3.png',
		name: 'FARMER 3',
	},
	{
		id: 4,
		image: '/images/collection/IMGB-4.png',
		name: 'FARMER 4',
	},
	{
		id: 5,
		image: '/images/collection/IMGB-5.png',
		name: 'FARMER 5',
	},
	{
		id: 6,
		image: '/images/collection/IMGB.png',
		name: 'FARMER 6',
	},
]

const moreFarmers = [
	{
		id: 7,
		image: '/images/collection/IMGB.png',
		name: 'FARMER 7',
	},
	{
		id: 8,
		image: '/images/collection/IMGB-3.png',
		name: 'FARMER 8',
	},
	{
		id: 9,
		image: '/images/collection/IMGB-2.png',
		name: 'FARMER 9',
	},
]

export default function FarmersCollection() {
	const [farmers, setFarmers] = useState(initialFarmers)
	const [showMore, setShowMore] = useState(true)

	const handleLoadMore = () => {
		setFarmers([...farmers, ...moreFarmers])
		setShowMore(false) // hide the button after loading
	}

	return (
		<section
			id='collection'
			className='py-12 px-4 flex justify-center'
			style={{ marginTop: '50px' }}
		>
			<div className='max-w-[80vw] w-full text-center'>
				<h1
					className='font-black text-black pixel-font'
					style={{
						fontSize: 'calc(14px + 4vw)',
						padding: '0px',
						marginBottom: '30px',
					}}
				>
					Collection
				</h1>

				{/* Grid of cards */}
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-14 justify-center'>
					{farmers.map(farmer => (
						<div
							key={farmer.id}
							className='bg-[#E9D2B8] p-4 border-4 border-[#3B352E]'
						>
							<Image
								src={farmer.image}
								alt={farmer.name}
								width={500}
								height={500}
								className='w-full h-auto rounded-md'
							/>
							<div className='mt-7 text-left'>
								<p
									className={`${ibmPlexMono.className} text-black font-bold pixel-font`}
									style={{
										fontSize: 'calc(12px + 8px)',
										marginLeft: '10px',
									}}
								>
									{farmer.name}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
