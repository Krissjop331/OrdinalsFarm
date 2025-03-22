export class CountdownTimer {
	constructor(targetDate, updateCallback) {
		this.targetDate = new Date(targetDate).getTime()
		this.updateCallback = updateCallback
		this.intervalId = null
	}

	calculateTimeRemaining() {
		const now = new Date().getTime()
		const distance = this.targetDate - now

		return {
			total: distance,
			days: Math.floor(distance / (1000 * 60 * 60 * 24)),
			hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
			seconds: Math.floor((distance % (1000 * 60)) / 1000),
		}
	}

	start() {
		if (this.intervalId) return

		this.updateCallback(this.calculateTimeRemaining())
		this.intervalId = setInterval(() => {
			const timeData = this.calculateTimeRemaining()
			if (timeData.total <= 0) {
				this.stop()
				return
			}
			this.updateCallback(timeData)
		}, 1000)
	}

	stop() {
		clearInterval(this.intervalId)
		this.intervalId = null
	}
}
