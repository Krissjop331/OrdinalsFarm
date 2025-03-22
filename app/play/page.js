'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import './Play.model.css'

export default function PlayPage() {
	const [unityInstance, setUnityInstance] = useState(null)
	const router = useRouter()

	useEffect(() => {
		const script = document.createElement('script')
		script.src = '/build/OrdinalsFarmGame.loader.js'
		script.onload = () => {
			createUnityInstance(
				document.getElementById('unity-canvas'),
				{
					dataUrl: '/build/OrdinalsFarmGame.data.unityweb',
					frameworkUrl: '/build/OrdinalsFarmGame.framework.js.unityweb',
					codeUrl: '/build/OrdinalsFarmGame.wasm.unityweb',
					streamingAssetsUrl: 'StreamingAssets',
					companyName: 'MangoDevelopment',
					productName: 'Zoo Farm',
					productVersion: '1.0.0',
					showBanner: unityShowBanner,
				},
				progress => {
					document.getElementById('unity-progress-bar-full').style.width =
						100 * progress + '%'
				}
			).then(instance => {
				setUnityInstance(instance)
				document.getElementById('unity-loading-bar').style.display = 'none'
				document.getElementById('unity-fullscreen-button').onclick = () => {
					instance.SetFullscreen(1)
				}
			})
		}

		document.body.appendChild(script)
	}, [])

	function unityShowBanner(msg, type) {
		const warningBanner = document.getElementById('unity-warning')
		const div = document.createElement('div')
		div.innerHTML = msg
		div.style =
			type === 'error'
				? 'background: red; padding: 10px;'
				: 'background: yellow; padding: 10px;'
		warningBanner.appendChild(div)

		if (type !== 'error') {
			setTimeout(() => {
				warningBanner.removeChild(div)
			}, 5000)
		}
	}

	// 🚨 **Принудительное уничтожение Unity + Остановка звука**
	const destroyUnity = async () => {
		try {
			// 1️⃣ **Полностью выключаем Unity**
			if (unityInstance) {
				await unityInstance.Quit(() => console.log('Unity WebGL закрыт'))
				setUnityInstance(null)
			}

			// 2️⃣ **Удаляем WebGL Canvas**
			const unityCanvas = document.getElementById('unity-container')
			if (unityCanvas) {
				unityCanvas.remove()
			}

			// 3️⃣ **Полностью перезапускаем AudioContext, чтобы убрать фоновые звуки**
			if (window.AudioContext || window.webkitAudioContext) {
				let audioCtx = new (window.AudioContext || window.webkitAudioContext)()
				audioCtx.close().then(() => console.log('AudioContext закрыт'))
			}

			// 4️⃣ **Очищаем глобальные переменные Unity**
			window.UnityLoader = undefined
			window.unityInstance = undefined

			// 5️⃣ **Принудительная перезагрузка страницы (если звук всё ещё остаётся)**
			setTimeout(() => {
				window.location.href = '/'
			}, 500) // 🔥 Перезагрузить страницу через 0.5 сек
		} catch (err) {
			console.warn('Ошибка при уничтожении Unity:', err)
		}
	}

	// 🏠 **Переход на главную + выключение Unity**
	const handleExit = () => {
		destroyUnity()
	}

	return (
		<div className='bg-blue-50 text-gray-800 min-h-screen flex flex-col'>
			{/* Фиксированная кнопка выхода */}
			<button
				onClick={handleExit}
				className='fixed top-4 left-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition z-50'
			>
				На главную
			</button>

			{/* Main Content */}
			<main className='flex flex-col items-center justify-center flex-grow'>
				<div id='unity-container' className='unity-desktop relative'>
					<canvas
						id='unity-canvas'
						width='720'
						height='500'
						className='border border-gray-300 w-full h-screen'
						style={{ padding: '80px' }}
					/>
					<div
						id='unity-loading-bar'
						className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white'
					>
						<div id='unity-logo' className='mb-4'></div>
						<div id='unity-progress-bar-empty' className='w-64 h-2 bg-gray-200'>
							<div
								id='unity-progress-bar-full'
								className='h-full bg-blue-500'
							></div>
						</div>
					</div>
					<div
						id='unity-warning'
						className='absolute bottom-2 left-2 text-sm text-red-600'
					></div>
					<div
						id='unity-footer'
						className='absolute bottom-0 left-0 w-full flex justify-between p-2 bg-white'
					>
						<div id='unity-webgl-logo'></div>
						<button
							id='unity-fullscreen-button'
							className='px-4 py-2 bg-blue-600 text-white rounded'
						>
							Fullscreen
						</button>
					</div>
				</div>
			</main>
		</div>
	)
}
