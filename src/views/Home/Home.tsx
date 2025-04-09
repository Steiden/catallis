"use client";

import { getProducts } from "@/entities/products/api";
import { Product } from "@/entities/products/types";
import { Button } from "@/shared/ui/Button/Button";
import { Header } from "@/shared/ui/Header/Header";
import { ProductCard } from "@/widgets/ProductCard/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Home = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		async function fetchData() {
			setProducts(await getProducts());
		}

		fetchData();
	}, []);

	return (
		<section className="flex flex-col gap-4">
			<div className="flex flex-col px-20 py-10 relative rounded-[32px] overflow-hidden h-[680px]">
				<Image
					src="/images/bg.png"
					alt="background image"
					width={1360}
					height={680}
					className="absolute inset-0 z-[-1] h-full object-cover bg-[linear-gradient(270deg, #111111 18.24%, rgba(7, 16, 22, 0) 96.76%)]"
				/>
				<Header />
				<hr className="w-full h-[1px] bg-[#282828]" />
				<div className="h-full flex justify-center flex-col grow-1">
					<h1 className="text-white text-[64px]/[1.1] font-medium w-[612px]">Премиальное обслуживание вашего автомобиля</h1>
					<div className="flex items-center gap-4 mt-9">
						<Button variant="solid">Запись в сервис</Button>
						<Button variant="flat">Консультация</Button>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4">
				{products?.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</section>
	);
};
