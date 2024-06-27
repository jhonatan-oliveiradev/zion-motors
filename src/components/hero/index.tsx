import { ReactNode } from "react";
import Image from "next/image";

import { getFileType } from "@/utils/get-file-type";

import styles from "./styles.module.scss";

interface HeroProps {
	heading: string;
	buttonUrl: string;
	buttonTitle: string;
	bannerUrl: string;
	icon: ReactNode;
}

export function Hero({
	heading,
	buttonUrl,
	buttonTitle,
	bannerUrl,
	icon
}: HeroProps) {
	const bannerType = getFileType(bannerUrl);

	return (
		<section className={styles.main}>
			<div className={styles.containerHero}>
				<h1 className={styles.title}>{heading}</h1>
				<a href={buttonUrl} target="_blank" className={styles.link}>
					{icon}
					<span>{buttonTitle}</span>
				</a>
			</div>

			<div className={styles.contentBanner}>
				{bannerType === "video" ? (
					<video
						src={bannerUrl}
						autoPlay
						loop
						muted
						playsInline
						className={styles.banner}
					/>
				) : (
					<Image
						src={bannerUrl}
						alt={heading}
						width={1920}
						height={768}
						quality={100}
						priority
						sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
						className={styles.banner}
					/>
				)}
			</div>
		</section>
	);
}
