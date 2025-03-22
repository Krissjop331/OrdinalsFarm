import { IBM_Plex_Mono, Pixelify_Sans } from "next/font/google"
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });
const pixelifySans = Pixelify_Sans({ subsets: ["latin"], weight: ["600"] });

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<title>Ordinals Farm</title>
				<meta name='description' content='Ordinals Farm' />
				<link
					rel='icon'
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚜</text></svg>"
				/>
			</head>
			<body className={`${ibmPlexMono.className} ${pixelifySans.className}`}>
				<main className='content'>{children}</main>
			</body>
		</html>
	)
}
