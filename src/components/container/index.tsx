import React from "react";
import styles from "./styles.module.scss";

export function Container({ children }: { children: React.ReactNode }) {
	return <div className={styles.container}>{children}</div>;
}
