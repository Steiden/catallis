import { Product } from "@/entities/products/types";
import Image from "next/image";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
	product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<article className={styles["product-card"]}>
			<p className={styles["product-card__title"]}>{product.name}</p>
			<p className={styles["product-card__description"]}>
				от <span className={styles["product-card__price"]}>{product.price.toLocaleString("RU-ru")} ₽</span>
			</p>
			{product.is_promo && <div className={styles["product-card__promo"]}>АКЦИЯ</div>}
			{product.image && (
				<Image src={`/images/${product.image}`} alt={product.name} width={100} height={100} className={styles["product-card__img"]} />
			)}
		</article>
	);
};
