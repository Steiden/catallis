import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles["header"]}>
			<Link href="/">
				<Image src="/images/logo.svg" alt="logo" width={142} height={26} />
			</Link>

			<nav>
				<ul className={styles["header__list"]}>
					<li className={styles["header__item"]}>
						<Link href="/">Работы</Link>
					</li>
					<li className={styles["header__item"]}>
						<Link href="/">О компании</Link>
					</li>
					<li className={styles["header__item"]}>
						<Link href="/">Акции</Link>
					</li>
					<li className={styles["header__item"]}>
						<Link href="/">Контакты</Link>
					</li>
					<li className={styles["header__item"]}>
						<Link href="tel:84952077570">+7 (495) 207-75-70</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
