import { HomeModel } from "@/utils/home.types";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Services({ object }: HomeModel) {
	return (
		<>
			<section className={styles.aboutContainer} id="servicos">
				<article className={styles.innerAbout}>
					<h2 className={styles.title}>Sobre</h2>
					<p className={styles.description}>
						{object.metadata.about.description}
					</p>
				</article>
				<div className={styles.aboutBanner}>
					<Image
						className={styles.aboutImage}
						src={object.metadata.about.banner.url}
						alt={object.metadata.about.description}
						fill
						quality={100}
						priority
						sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
					/>
				</div>
			</section>

			<h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

			<section className={styles.services}>
				{object.metadata.services.map((service) => (
					<article key={service.image.url} className={styles.service}>
						<div className={styles.innerService}>
							<Image
								className={styles.serviceImage}
								src={service.image.url}
								alt={service.description}
								quality={100}
								fill
								priority
								sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
							/>
						</div>
						<p>{service.description}</p>
					</article>
				))}
			</section>
		</>
	);
}
