export class ParticleSystem {
	constructor(container, options = {}) {
		if (!container) return

		this.container = container
		this.options = {
			particleCount: 30,
			particleSize: {
				min: 5,
				max: 10,
			},
			animationDuration: 8000,
			...options,
		}

		this.init()
	}

	init() {
		this.clearParticles()
		for (let i = 0; i < this.options.particleCount; i++) {
			const particle = this.createParticle()
			this.container.appendChild(particle)
		}
	}

	createParticle() {
		const particle = document.createElement('div')
		particle.classList.add('particle')

		particle.style.left = `${Math.random() * 100}%`
		particle.style.animationDelay = `${
			Math.random() * this.options.animationDuration
		}ms`
		particle.style.opacity = `${Math.random() * 0.5 + 0.3}`

		const size =
			Math.random() *
				(this.options.particleSize.max - this.options.particleSize.min) +
			this.options.particleSize.min

		particle.style.width = `${size}px`
		particle.style.height = `${size}px`

		return particle
	}

	addParticles(count) {
		for (let i = 0; i < count; i++) {
			const particle = this.createParticle()
			this.container.appendChild(particle)
		}
	}

	clearParticles() {
		this.container.innerHTML = ''
	}
}

