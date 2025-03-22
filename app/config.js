export const CONFIG = {
	// Основные настройки проекта
	PROJECT_NAME: 'Ordinals Farm',
	MINT_DATE: '2025-03-01T00:00:00',
	TOTAL_FARMS: 4444,
	MINTED_FARMS: 1234,
	MINT_PRICE: 0.01, // BTC

	// Whitelist кошельки
	WHITELIST: [
		'0x1234567890123456789012345678901234567890', // Пример
		'0x0987654321098765432109876543210987654321',
		'bc1qt0dhgffvuj39xlax2eyvg3ak8h7trd662mhwc3', // Пример
	],

	// Настройки для минта
	MINT_SETTINGS: {
		MAX_PER_WALLET: 10,
		MIN_PER_MINT: 1,
		WHITELIST_ONLY: true,
	},

	// Сообщения
	MESSAGES: {
		WL_SUCCESS: 'Ваш кошелек в белом списке! Вы можете участвовать в минте.',
		WL_FAIL: 'К сожалению, ваш кошелек не в белом списке.',
		CONNECT_WALLET: 'Подключите кошелек для проверки',
		MINT_CLOSED: 'Минт пока закрыт',
		MINT_SOON: 'Минт скоро откроется',
	},
}
