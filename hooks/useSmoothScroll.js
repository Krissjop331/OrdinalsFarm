import { useEffect } from 'react'

export default function useSmoothScroll() {
	useEffect(() => {
		const handleClick = event => {
			const target = event.target.closest("a[href^='#']")
			if (target) {
				event.preventDefault()
				const element = document.querySelector(target.getAttribute('href'))
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			}
		}

		document.addEventListener('click', handleClick)
		return () => document.removeEventListener('click', handleClick)
	}, [])
}
