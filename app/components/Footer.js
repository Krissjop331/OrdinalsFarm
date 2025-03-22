import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className=' text-white py-8 px-4' style={{ background: '#3B3B3B' }}>
			<div
				className='container mx-auto text-center md:text-left'
				style={{ display: 'flex', justifyContent: 'space-between' }}
			>
				{/* Logo and social media */}
				<div>
					<h1
						className='font-bold pixel-font'
						style={{ fontSize: 'calc(14px + 1vw)', color: '#EF3124' }}
					>
						Ordinals Farm
					</h1>
					{/* <p className='text-gray-400 mt-2'>Join our community</p> */}
				</div>
				<div
					style={{
						display: 'flex',
						gap: '2vw',
					}}
				>
					<Link href='https://discord.gg/E4zE9RjR5Y'>
						<Image
							src='/images/graydiscord.png'
							alt='discord'
							width={50}
							height={50}
							style={{ width: '40px', height: '40px' }}
						/>
					</Link>
					<Link href='https://x.com/OrdinalsFarm'>
						<Image
							src='/images/graytwitter.png'
							alt='discord'
							width={50}
							height={50}
							style={{ width: '40px', height: '40px' }}
						/>
					</Link>
				</div>
			</div>
		</footer>
	)
}
