'use client'

import {
	Bars3Icon,
	MusicalNoteIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
	const [isPlaying, setIsPlaying] = useState(
		typeof window !== 'undefined'
			? localStorage.getItem('musicPlaying') !== 'false'
			: true
	)
	const [isOpen, setIsOpen] = useState(false)
	const audioRef = useRef(null)

	useEffect(() => {
		if (!audioRef.current) return

		audioRef.current.volume = 0.3
		audioRef.current.loop = true

		if (isPlaying) {
			audioRef.current
				.play()
				.catch(error => console.error('Error playing music:', error))
		}

		const handleBeforeUnload = () => {
			localStorage.setItem('musicPlaying', isPlaying)
		}

		window.addEventListener('beforeunload', handleBeforeUnload)
		return () => window.removeEventListener('beforeunload', handleBeforeUnload)
	}, [isPlaying])

	const toggleMusic = () => {
		setIsPlaying(prev => !prev)
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause()
			} else {
				audioRef.current
					.play()
					.catch(error => console.error('Error playing music:', error))
			}
		}
		localStorage.setItem('musicPlaying', !isPlaying)
	}

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	// Функция плавной прокрутки к блоку
	const scrollToSection = id => {
		const element = document.getElementById(id)
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 80, // Учитываем высоту хедера
				behavior: 'smooth',
			})
		}
		setIsOpen(false) // Закрываем меню после клика
	}

	return (
		<nav className='fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-lg'>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				{/* Логотип */}
				<Link href='/' className='flex items-center gap-2'>
					<span
						className='text-3xl font-black farm-logo pixel-font'
						style={{ color: '#EF3124' }}
					>
						Ordinals Farm
					</span>
				</Link>

				{/* Бургер-кнопка */}
				<button className='md:hidden' onClick={toggleMenu}>
					{isOpen ? (
						<XMarkIcon className='w-10 h-10 text-red-500' />
					) : (
						<Bars3Icon className='w-10 h-10 text-gray-800' />
					)}
				</button>

				{/* Навигация */}
				<div
					className={`menu md:flex gap-8 items-center ${
						isOpen ? 'open' : 'hidden'
					}`}
				>
					<div className='hidden md:flex gap-6 items-center pixel-font'>
						{[
							{ text: 'How to Play', id: 'how-to-play' },
							{ text: 'Collection', id: 'collection' },
							{ text: 'Check Whitelist', id: 'whitelist' },
						].map(({ text, id }) => (
							<button
								key={id}
								onClick={() => scrollToSection(id)}
								className='nav-item pixel-font'
							>
								{text}
							</button>
						))}
					</div>

					{/* Меню для мобильных */}
					<div
						className={`mobile-menu md:hidden ${
							isOpen ? 'block' : 'hidden'
						} absolute top-full left-0 w-full bg-white shadow-lg`}
					>
						{[
							{ text: 'How to Play', id: 'how-to-play' },
							{ text: 'Collection', id: 'collection' },
							{ text: 'Check Whitelist', id: 'whitelist' },
						].map(({ text, id }) => (
							<button
								key={id}
								onClick={() => scrollToSection(id)}
								className='block w-full text-left py-3 px-6 border-b hover:bg-gray-100 pixel-font'
							>
								{text}
							</button>
						))}
					</div>

					{/* Кнопка музыки */}
					<button
						className={`music-toggle-btn w-10 h-10 rounded-md flex items-center justify-center transition-colors duration-300 ${
							isPlaying ? 'bg-red-500' : 'bg-gray-500'
						}`}
						onClick={toggleMusic}
					>
						<MusicalNoteIcon className='h-6 w-6 text-white' />
					</button>
				</div>
			</div>

			{/* Аудио-плеер (скрытый) */}
			<audio ref={audioRef} src='/music/track1.mp3' />
		</nav>
	)
}
