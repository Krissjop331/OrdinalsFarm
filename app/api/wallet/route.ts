import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
	try {
		const wallets = await prisma.wallet.findMany()
		return NextResponse.json(wallets)
	} catch (error) {
		console.error('Ошибка при загрузке кошельков:', error)
		return NextResponse.json(
			{ error: 'Ошибка загрузки данных' },
			{ status: 500 }
		)
	}
}

export async function POST(req: Request) {
	try {
		const body = await req.json()
		const { key_wallet, block = false, type } = body

		if (!type) {
			return NextResponse.json(
				{ error: 'Поле type обязательно' },
				{ status: 400 }
			)
		}

		if (
			!key_wallet ||
			(!key_wallet.startsWith('bc') && !key_wallet.startsWith('0x'))
		) {
			return NextResponse.json(
				{ error: "Кошелек должен начинаться с 'bc' или '0x'" },
				{ status: 400 }
			)
		}

		const existingWallet = await prisma.wallet.findFirst({
			where: { key_wallet, type },
		})
		if (existingWallet) {
			return NextResponse.json(
				{ error: 'Кошелек с таким типом уже зарегистрирован' },
				{ status: 400 }
			)
		}

		const newWallet = await prisma.wallet.create({
			data: { key_wallet, block, type },
		})

		return NextResponse.json(newWallet)
	} catch (error) {
		console.error('Ошибка при создании кошелька:', error)
		return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
	}
}

export async function DELETE(req: Request) {
	try {
		const body = await req.json()
		const { key_wallet, type } = body

		if (!key_wallet || !type) {
			return NextResponse.json(
				{ error: 'Не указан кошелек или его тип' },
				{ status: 400 }
			)
		}

		const existingWallet = await prisma.wallet.findFirst({
			where: { key_wallet, type },
		})

		if (!existingWallet) {
			return NextResponse.json({ error: 'Кошелек не найден' }, { status: 404 })
		}

		await prisma.wallet.delete({
			where: { id: existingWallet.id },
		})

		return NextResponse.json({ message: 'Кошелек удален' })
	} catch (error) {
		console.error('Ошибка при удалении кошелька:', error)
		return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
	}
}
