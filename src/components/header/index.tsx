"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { FanIcon } from "lucide-react";

export function Header() {
	const [top, setTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 10 ? setTop(false) : setTop(true);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [top]);

	return (
		<header
			className={`${styles.header} ${!top ? styles.fixed : styles.background}`}
		>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.contentLogo}>
						<Link href="/">
							<FanIcon size={18} /> Zion Motors
						</Link>
					</div>
					<nav className={styles.nav}>
						<Link href="/">Home</Link>
						<Link href="/#servicos">Serviços</Link>
						<Link href="/#contato">Contato</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
