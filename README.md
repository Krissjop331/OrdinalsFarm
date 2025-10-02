# OrdinalsFarm — лендинг + админка (Next.js 15, Prisma, R3F, Tailwind)

> Готовый проект для портфолио: одностраничный сайт о коллекции **OrdinalsFarm** с 3D‑оформлением, разделом Whitelist и простой админ‑панелью для управления адресами кошельков (whitelist). Используются **Next.js App Router**, **Prisma + PostgreSQL**, **TailwindCSS**, **React‑Three‑Fiber/three.js**, SEO-конфиги и готовые Docker‑файлы для деплоя на VPS.

## 🚀 Ключевые фичи

- **Лендинг** с секциями: Hero/OrdinalsFarm, FarmRuneIntro, HowToPlay, PfpFermers, FarmersCollection, WhitelistSection, GameForEveryone, Footer.
- **Whitelist**: проверка адреса (UI/логика) и **админка** `/admin` для добавления/удаления адресов (таблица `Wallet` в Postgres).
- **API (Next.js Route Handlers)**: `/api/wallet` — список/добавление/удаление кошельков.
- **3D‑элементы** на базе `@react-three/fiber` + `three` (в папке `public/images/*.obj` есть 3D‑ресурсы).
- **TailwindCSS** + кастомные шрифты (IBM Plex Mono, Pixelify Sans) и toasts через `react-hot-toast`.
- **SEO**: `next-seo.config.js`, `next-sitemap.config.js`, `robots.txt`.
- **Docker** (`Dockerfile`, `docker-compose.yml`) и **nginx** пример конфигурации для обратного прокси.
- Подготовлено к деплою на **VPS** (Node 22 в контейнере) или на **Vercel** (с внешней БД).

## 🧰 Технологии

- **Next.js 15** (App Router), **React 19**
- **TailwindCSS 3**
- **Prisma 6 + PostgreSQL**
- **three.js**, **@react-three/fiber**, **@react-three/drei**
- **react-hot-toast**, **@heroicons/react**
- **ESLint 9**, **TypeScript конфиги** (проект содержит `tsconfig.json`, но основные компоненты на JS)

## 📂 Структура (важные файлы)

```
app/
  page.js                 # Главная: лендинг с ленивыми секциями
  layout.js               # Глобальный layout + шрифты
  globals.css             # Tailwind и базовые стили

  components/             # Блоки лендинга
    Header.js, Footer.js, OrdinalsFarm.js, ...
    HowToPlay.js, HowWhitelist.js, WhitelistSection.js
    PfpFermers.js, FarmersCollection.js, FarmRuneIntro.js

  api/wallet/route.ts     # REST для whitelist-кошельков (Prisma, Postgres)

  admin/
    page.js               # Простая админка: список/добавление/удаление
    Admin.model.css

  styles/, utils/         # Вспомогательные стили и функции

prisma/
  schema.prisma           # Модель Wallet (id, key_wallet, type, block?)

public/
  images/*                # Изображения + .obj модели
  music/*                 # Медиа
  lazy1.gif, video_game.mp4

Dockerfile
docker-compose.yml
nginx.conf
next.config.mjs           # Настройки, в т.ч. remotePatterns для картинок
next-seo.config.js        # SEO (title, description, openGraph)
next-sitemap.config.js    # Сайтмап (использует SITE_URL)
robots.txt
```

## 🗃️ База данных

`prisma/schema.prisma` содержит модель:

```prisma
model Wallet {
  id         Int      @id @default(autoincrement())
  key_wallet String
  type       String
  block      Boolean? @default(false)
}
```

— хранит адрес кошелька (`key_wallet`) и тип (например, `GTD`/`ORD` и т.п.).

## 🔧 Быстрый старт (локально)

**Требования:** Node.js ≥ 20 (рекомендуется 22.x), PostgreSQL, npm или pnpm.

1. Скопируйте репозиторий и установите зависимости:

```bash
npm i
# или
pnpm i
```

2. Создайте `.env` на основе `.env.example` и заполните переменные:

```bash
cp .env.example .env
```

3. Синхронизируйте БД Prisma (один из вариантов):

```bash
# Создаст миграции и применит их в dev-среде
npx prisma migrate dev --name init

# Либо быстро «запушить» схему без миграций (для прототипов)
# npx prisma db push
```

4. Сгенерируйте клиент и запустите dev:

```bash
npx prisma generate
npm run dev
```

Приложение будет на `http://localhost:3000`Админка — `http://localhost:3000/admin`

> В админке можно управлять whitelist‑адресами. API доступно на `/api/wallet`.

## 🌐 ENV‑переменные

Файл `.env.example` уже подготовлен. Минимум нужны:

- `DATABASE_URL` — строка подключения к PostgreSQL
- `SHADOW_DATABASE_URL` — отдельная «теневая» БД для миграций Prisma
- `SITE_URL` — базовый URL сайта (для sitemap)

## 🧪 API кратко

`/api/wallet` (Route Handler):

- **GET** — список кошельков
- **POST** — добавить кошелек `{ key_wallet, type }`
- **DELETE** — удалить кошелек `{ key_wallet, type }`

> При необходимости добавьте PUT (например, блокировка `block: true/false`).

## 🐳 Запуск в Docker

```bash
# Сборка и старт
docker compose up -d --build

# Применить миграции (в контейнере)
docker compose exec nextjs npx prisma migrate deploy
```

- Контейнер слушает **3000** порт.
- Переменные берутся из `.env` (см. `docker-compose.yml`).

## 🔐 Nginx (VPS)

В репо есть `nginx.conf` — пример обратного прокси HTTPS→Next.js.

- Замените `server_name` на ваш домен.
- Пропишите реальный upstream (IP:порт) вашего приложения.
- Установите SSL (например, certbot).

## 🧱 Скрипты

```bash
npm run dev     # локальная разработка (Next + Turbopack)
npm run build   # сборка
npm run start   # запуск собранного (production)
npm run lint    # ESLint
```
MIT (по желанию).

---

**Автор:** MangoDevelopment / (укажите себя).
**Контакты:** (почта/телеграм/сайт — опционально)
