"use client";

import { getProducts } from "@/entities/products/api";
import { Product } from "@/entities/products/types";
import { Button } from "@/shared/ui/Button/Button";
import { Header } from "@/shared/ui/Header/Header";
import { ProductCard } from "@/widgets/ProductCard/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export const Home = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		async function fetchData() {
			setProducts(await getProducts());
		}

		fetchData();
	}, []);

	return (
		<section className={styles["home"]}>
			<div className={styles["home__banner"]}>
				<Image src="/images/bg.png" alt="background image" width={1360} height={680} className={styles["home__banner-background"]} />
				<Header />
				<hr className={styles["home__banner-divider"]} />
				<div className={styles["home__banner-content"]}>
					<h1 className={styles["home__title"]}>Премиальное обслуживание вашего автомобиля</h1>
					<div className={styles["home__banner-actions"]}>
						<Button variant="solid">Запись в сервис</Button>
						<Button variant="flat">Консультация</Button>
					</div>
				</div>
			</div>

			<div className={styles["home__list"]}>
				{products?.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</section>
	);
};
