import { Suspense, lazy } from 'react'

// Компоненты первой отрисовки (без lazy)
import Footer from './components/Footer'
import GameForEveryone from './components/GameForEveryone'
import Header from './components/Header'
import OrdinalsFarm from './components/OrdinalsFarm'

// Ленивая загрузка остальных компонентов
const FarmRuneIntro = lazy(() => import('./components/FarmRuneIntro'))
const HowToPlay = lazy(() => import('./components/HowToPlay'))
const PfpFermers = lazy(() => import('./components/PfpFermers'))
const FarmersCollection = lazy(() => import('./components/FarmersCollection'))
const HowWhitelist = lazy(() => import('./components/HowWhitelist'))
const Whitelist = lazy(() => import('./components/WhitelistSection'))

export default function HomePage() {
	return (
		<div className='text-gray-800'>
			{/* Основной контент */}
			<Header />
			<OrdinalsFarm />
			<GameForEveryone />

			{/* Ленивая загрузка */}
			<Suspense fallback={<div>Loading...</div>}>
				<FarmRuneIntro />
				<HowToPlay />
				<PfpFermers />
				<FarmersCollection />
				<HowWhitelist />
				<Whitelist />
			</Suspense>

			<Footer />
		</div>
	)
}
