export class MergeSystem {
	constructor() {
		this.selectedFarms = []
		this.maxSelectedFarms = 2
	}

	// Добавление фермы для объединения
	addFarmForMerge(farm) {
		if (this.selectedFarms.length >= this.maxSelectedFarms) {
			throw new Error('Можно выбрать максимум 2 фермы для объединения')
		}

		if (this.selectedFarms.includes(farm)) {
			throw new Error('Эта ферма уже выбрана')
		}

		this.selectedFarms.push(farm)
	}

	// Проверка возможности объединения
	canMerge() {
		if (this.selectedFarms.length !== this.maxSelectedFarms) {
			return false
		}

		const [farm1, farm2] = this.selectedFarms
		return farm1.type === farm2.type && farm1.level === farm2.level
	}

	// Выполнение объединения
	merge() {
		if (!this.canMerge()) {
			throw new Error('Невозможно объединить выбранные фермы')
		}

		const [farm1, farm2] = this.selectedFarms
		const mergedFarm = {
			type: this.getNextFarmType(farm1.type),
			level: farm1.level + 1,
			productivity: this.calculateMergedProductivity(farm1, farm2),
		}

		this.reset()

		return mergedFarm
	}

	// Определение следующего типа фермы
	getNextFarmType(currentType) {
		const farmTypeHierarchy = {
			wheat: 'river',
			river: 'magic',
			magic: 'gold',
			gold: 'gold', // Максимальный уровень
		}

		return farmTypeHierarchy[currentType] || currentType
	}

	// Расчет производительности объединенной фермы
	calculateMergedProductivity(farm1, farm2) {
		const baseProductivity = (farm1.productivity + farm2.productivity) / 2
		const levelBonus = farm1.level * 0.2

		return Math.round(baseProductivity * (1 + levelBonus))
	}

	// Генерация визуального эффекта объединения
	createMergeAnimation() {
		return {
			type: 'glow',
			color: this.getMergeAnimationColor(),
			duration: 1500,
		}
	}

	getMergeAnimationColor() {
		const colorMap = {
			wheat: '#4ade80',
			river: '#3b82f6',
			magic: '#8b5cf6',
			gold: '#f59e0b',
		}

		const [farm1] = this.selectedFarms
		return colorMap[farm1?.type] || '#ef4444'
	}

	// Очистка выбранных ферм
	reset() {
		this.selectedFarms = []
	}
}
