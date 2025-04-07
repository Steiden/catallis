"use client";

import { getProducts } from "@/entities/products/api";
import { Product } from "@/entities/products/types";
import { ProductCard } from "@/widgets/ProductCard/ProductCard";
import { useEffect, useState } from "react";

export const Products = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		async function fetchData() {
			setProducts(await getProducts());
		}

		fetchData();
	}, []);

	return (
		<section>
			<h1>Products</h1>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</section>
	);
};
