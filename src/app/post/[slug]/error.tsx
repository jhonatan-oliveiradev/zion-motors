"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { CornerDownLeft } from "lucide-react";

import styles from "./error.module.scss";

export default function Error() {
	return (
		<Container>
			<div className={styles.content}>
				<h1>Ops, essa página não existe...</h1>
				<Image
					src="/404.png"
					alt="404"
					width={380}
					height={380}
					className={styles.image}
				/>
				<p>Você está perdido?</p>
				<Link href="/">
					<CornerDownLeft className={styles.icon} size={16} />
					Página Inicial
				</Link>
			</div>
		</Container>
	);
}
