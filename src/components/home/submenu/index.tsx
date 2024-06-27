"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { MenuIcon, X } from "lucide-react";
import { MenuModel } from "@/utils/menu.type";

interface SubMenuProps {
	menu: MenuModel;
}

export function SubMenu({ menu }: SubMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	function toggleMenu() {
		setIsOpen(!isOpen);
	}

	return (
		<section className={styles.submenu}>
			<div className={styles.submenuIcon} onClick={toggleMenu}>
				<MenuIcon size={34} color="#121212" />
				Serviços
			</div>

			<ul className={`${styles.ul} ${isOpen ? styles.opened : ""}`}>
				{isOpen && (
					<button onClick={toggleMenu} className={styles.closeBtn}>
						<X size={54} color="#121212" />
					</button>
				)}

				{menu.objects.map((item) => (
					<li key={item.slug}>
						<Link href={`/post/${item.slug}`}>{item.title}</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
