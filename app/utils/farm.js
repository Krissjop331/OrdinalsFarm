export class Farm {
	constructor(type, level = 1) {
		this.type = type
		this.level = level
		this.productivity = this.calculateProductivity()
	}

	// Расчет производительности в зависимости от типа и уровня фермы
	calculateProductivity() {
		const baseProductivity = {
			wheat: 5,
			river: 12,
			magic: 25,
			gold: 50,
		}

		return baseProductivity[this.type] * this.level
	}

	// Улучшение фермы
	upgrade() {
		if (this.level < 5) {
			// Максимальный уровень - 5
			this.level++
			this.productivity = this.calculateProductivity()
			return true
		}
		return false
	}

	// Получение информации о ферме
	getInfo() {
		return {
			type: this.type,
			level: this.level,
			productivity: this.productivity,
		}
	}
}

export class FarmManager {
	constructor() {
		this.farms = []
	}

	// Создание новой фермы
	createFarm(type) {
		const farm = new Farm(type)
		this.farms.push(farm)
		return farm
	}

	// Получение всех ферм
	getAllFarms() {
		return this.farms
	}

	// Слияние ферм
	mergeFarms(farm1, farm2) {
		if (farm1.type === farm2.type && farm1.level === farm2.level) {
			const mergedFarm = new Farm(farm1.type, farm1.level + 1)

			// Удаление исходных ферм
			this.farms = this.farms.filter(f => f !== farm1 && f !== farm2)
			this.farms.push(mergedFarm)

			return mergedFarm
		}
		throw new Error('Фермы должны быть одного типа и уровня')
	}
}
