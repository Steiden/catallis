import { Product } from "@/entities/products/types";

type ProductCardProps = {
	product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	return <div>{product.name}</div>;
};
