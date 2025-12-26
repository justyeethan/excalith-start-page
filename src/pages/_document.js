import { Html, Head, Main, NextScript } from "next/document"
import { Analytics } from "@vercel/analytics/react"

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<body>
				<Analytics />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
