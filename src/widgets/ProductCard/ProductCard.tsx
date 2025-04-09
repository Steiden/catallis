import { Product } from "@/entities/products/types";
import { Card } from "@gravity-ui/uikit";

type ProductCardProps = {
	product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	return <Card type="container">{product.name}</Card>;
};
