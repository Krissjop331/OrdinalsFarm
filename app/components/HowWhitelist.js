'use client'

import Image from 'next/image'
import Link from 'next/link'

const steps = [
	{
		id: 1,
		icon: '/images/IconTwitter.png',
		background: "url('/images/link_discord.png')",
		title: 'Follow us on Twitter',
		description: 'Join our community on Twitter.',
		bgColor: 'border-blue-400',
		link: 'https://x.com/OrdinalsFarm',
	},
	{
		id: 2,
		icon: '/images/IconRepost.png',
		background: "url('/images/link_repost.png')",
		title: 'Repost the announcement',
		description: 'Share our project with your community.',
		bgColor: 'border-green-400',
		link: 'https://twitter.com/intent/tweet?text=I%20am%20now%20a%20farmer%20in%20the%20@OrdinalsFarm%20project.%20Join%20us%20to%20become%20one%20too,%20and%20get%20early%20bonuses!',
	},
	{
		id: 3,
		icon: '/images/IconDiscord.png',
		background: "url('/images/link_twitter.png')",
		title: 'Join Discord',
		description: 'Connect with our community.',
		bgColor: 'border-purple-400',
		link: 'https://discord.gg/E4zE9RjR5Y',
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
							fontSize: 'calc(14px + 3vw)',
						}}
					>
						How to get <span className='text-black'>Whitelist?</span>
					</h1>

					<div className='space-y-6'>
						{steps.map(step => (
							<Link key={step.id} href={step.link} target='_blank'>
								<div
									className='p-4 flex items-center rounded-lg cursor-pointer transition-all hover:opacity-70 relative max-md:h-[20px]'
									style={{
										backgroundImage: step.background,
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'contain',
										width: '80%',
										height: '100px',
										minHeight: '20px',
										marginBottom: '20px',
										gap: '5%',
										maxWidth: '80vw',
										flexDirection: 'row',
										marginLeft: '20%',
									}}
								></div>
							</Link>
						))}
					</div>
				</div>

				{/* Правая часть (скрываем на мобильных, показываем на десктопе) */}
				<div className='lg:w-1/3 flex justify-center mt-8 lg:mt-0 hidden lg:flex'>
					<Image
						src='/images/PonyWhat.png'
						alt='Pixel Dog'
						width={300} // Уменьшите ширину
						height={350} // Уменьшите высоту
						className='max-w-full h-auto'
					/>
				</div>

				{/* Мобильная версия изображения */}
				{/* <div className='lg:hidden flex justify-center mt-8'>
					<Image
						src='/images/PonyWhat.png'
						alt='Pixel Dog'
						width={200} // Уменьшите ширину для мобильной версии
						height={200} // Уменьшите высоту для мобильной версии
						className='max-w-full h-auto'
					/>
				</div> */}
			</div>
		</section>
	)
}
