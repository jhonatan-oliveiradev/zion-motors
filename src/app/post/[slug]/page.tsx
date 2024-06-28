import { getItemBySlug } from "@/utils/actions/get-data";
import { PostModel } from "@/utils/post.type";

import { Hero } from "@/components/hero";
import { Container } from "@/components/container";

import { PhoneIcon } from "lucide-react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
	params: { slug }
}: {
	params: { slug: string };
}): Promise<Metadata> {
	try {
		const { objects }: PostModel = await getItemBySlug(slug).catch(() => {
			return {
				title: "Zion Motors - Sua oficina especializada!",
				description: "Oficina de carros especializada em veículos elétricos."
			};
		});

		return {
			title: `${objects[0].title} - Zion Motors`,
			description: objects[0].metadata.description.text,
			keywords: ["oficina", "mecânica", "carros", "manutenção de carros"],
			openGraph: {
				title: `${objects[0].title} - Zion Motors`,
				images: [objects[0].metadata.banner.url]
			},
			robots: {
				index: true,
				follow: true,
				nocache: true,
				googleBot: {
					index: true,
					follow: true,
					noimageindex: true
				}
			}
		};
	} catch (err) {
		return {
			title: "Zion Motors - Sua oficina especializada!",
			description: "Oficina de carros especializada em veículos elétricos.",
			keywords: ["oficina", "mecânica", "carros", "manutenção de carros"],
			openGraph: {
				title: "Zion Motors - Sua oficina especializada!",
				images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`]
			},
			robots: {
				index: true,
				follow: true,
				nocache: true,
				googleBot: {
					index: true,
					follow: true,
					noimageindex: true
				}
			}
		};
	}
}

export default async function Page({
	params: { slug }
}: {
	params: { slug: string };
}) {
	const { objects }: PostModel = await getItemBySlug(slug);

	return (
		<section className={styles.container}>
			<Hero
				heading={objects[0].title}
				buttonTitle={objects[0].metadata.button.title}
				buttonUrl={objects[0].metadata.button.url}
				bannerUrl={objects[0].metadata.banner.url}
				icon={<PhoneIcon size={16} color="#FFFFFF" />}
			/>

			<Container>
				<div className={styles.about}>
					<article className={styles.innerAbout}>
						<h1>{objects[0].metadata.description.title}</h1>
						<p>{objects[0].metadata.description.text}</p>
						{objects[0].metadata.description.button_active && (
							<Link
								href={objects[0].metadata.description.button_url as string}
								target="_blank"
								className={styles.link}
							>
								{objects[0].metadata.description.button_title}
							</Link>
						)}
					</article>
					<div className={styles.aboutBanner}>
						<Image
							className={styles.aboutImage}
							src={objects[0].metadata.description.banner.url}
							alt={objects[0].title}
							fill
							quality={100}
							priority
							sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
