import { HomeModel } from "@/utils/home.types";
import Link from "next/link";
import { Clock10Icon, MailIcon, MapIcon, PhoneIcon } from "lucide-react";
import styles from "./styles.module.scss";

export function Contact({ object }: HomeModel) {
	return (
		<footer className={styles.footer} id="contato">
			<section className={styles.section}>
				<h2 className={styles.title}>Contato</h2>
				<div className={styles.content}>
					<div className={styles.item}>
						<MailIcon color="#FFFFFF" size={18} />
						<div>
							<strong>E-mail</strong>
							<p>{object.metadata.contact.email}</p>
						</div>
					</div>

					<div className={styles.item}>
						<MapIcon color="#FFFFFF" size={18} />
						<div>
							<strong>Endereço</strong>
							<p>{object.metadata.contact.address}</p>
						</div>
					</div>

					<div className={styles.item}>
						<PhoneIcon color="#FFFFFF" size={18} />
						<div>
							<strong>WhatsApp</strong>
							<p>{object.metadata.contact.phone}</p>
						</div>
					</div>

					<div className={styles.item}>
						<Clock10Icon color="#FFFFFF" size={18} />
						<div>
							<strong>Horário</strong>
							<p>{object.metadata.contact.time}</p>
						</div>
					</div>
				</div>
			</section>

			<Link
				href={object.metadata.cta_button.url || "/"}
				target="_blank"
				className={styles.link}
			>
				<PhoneIcon size={18} color="#FFFFFF" />
				{object.metadata.cta_button.title}
			</Link>
		</footer>
	);
}
