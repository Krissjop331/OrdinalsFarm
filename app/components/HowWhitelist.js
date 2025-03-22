'use client'

import Image from 'next/image'
import Link from 'next/link'

const steps = [
	{
		id: 1,
		icon: '/images/IconTwitter.png',
		background: "url('/images/BackgroundTwitter.png')",
		title: 'Follow us on Twitter',
		description: 'Join our community on Twitter.',
		bgColor: 'border-blue-400',
		link: 'https://twitter.com/OrdinalsFarm',
	},
	{
		id: 2,
		icon: '/images/IconRepost.png',
		background: "url('/images/BackgroundRepost.png')",
		title: 'Repost the announcement',
		description: 'Share our project with your community.',
		bgColor: 'border-green-400',
		link: 'https://twitter.com/intent/tweet?text=🚜%20Get%20ready%20for%20a%20revolution%20in%20the%20NFT%20world%20with%20Ordinals%20Farm!',
	},
	{
		id: 3,
		icon: '/images/IconDiscord.png',
		background: "url('/images/BackgroundDiscord.png')",
		title: 'Join Discord',
		description: 'Connect with our community.',
		bgColor: 'border-purple-400',
		link: 'https://discord.gg/OrdinalsFarm',
	},
]

export default function HowWhitelist() {
	return (
		<section
			id='how-to-getwl'
			className='py-12 px-4 flex justify-center mt-[100px]'
		>
			<div className='max-w-[80vw] w-full flex flex-col lg:flex-row items-center'>
				{/* Левая часть */}
				<div className='lg:w-2/3 text-center lg:text-left'>
					<h1
						className='font-black text-black pixel-font mb-8'
						style={{
							fontSize: 'calc(14px + 4vw)',
						}}
					>
						How to get <span className='text-black'>Whitelist?</span>
					</h1>

					<div className='space-y-6'>
						{steps.map(step => (
							<Link key={step.id} href={step.link} target='_blank'>
								<div
									className='p-4 flex items-center rounded-lg cursor-pointer transition hover:opacity-80 relative'
									style={{
										backgroundImage: step.background,
										backgroundSize: 'contain',
										backgroundRepeat: 'no-repeat',
										backgroundPosition: 'left center',
										marginBottom: '20px',
										gap: '20px',
										flexDirection: 'row',
									}}
								>
									<div className='p-2'>
										<Image
											src={step.icon}
											alt={step.title}
											width={48}
											height={48}
											className='w-12 h-12'
										/>
									</div>
									<div>
										<p className='font-bold text-black text-lg'>{step.title}</p>
										<p className='text-gray-600 text-sm'>{step.description}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>

				{/* Правая часть (скрываем на мобильных, показываем на десктопе) */}
				<div className='lg:w-1/3 flex justify-center mt-8 lg:mt-0 hidden lg:flex'>
					<Image
						src='/images/PonyWhat.png'
						alt='Pixel Dog'
						width={400}
						height={400}
						className='max-w-full h-auto'
					/>
				</div>

				{/* Мобильная версия изображения */}
				<div className='lg:hidden flex justify-center mt-8'>
					<Image
						src='/images/PonyWhat.png'
						alt='Pixel Dog'
						width={300}
						height={300}
						className='max-w-full h-auto'
					/>
				</div>
			</div>
		</section>
	)
}
