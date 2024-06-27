import { Header } from "@/components/header";
import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.scss";

const sans = Open_Sans({
	weight: ["400", "500", "600", "700"],
	style: "normal",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Zion Motors - Sua oficina especializada!",
	description: "Oficina de carros especializada em veículos elétricos."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={sans.className}>
				<Header />
				<main>{children}</main>
				<p
					style={{
						textAlign: "center",
						marginTop: 54,
						marginBottom: 24,
						fontSize: 14
					}}
				>
					© {new Date().getFullYear()} <strong>Zion Motors</strong> - Todos os
					direitos reservados.
				</p>
			</body>
		</html>
	);
}
