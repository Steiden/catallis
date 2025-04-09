import { Product } from "@/entities/products/types";
import Image from "next/image";

type ProductCardProps = {
	product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<article className="flex flex-col justify-between rounded-[32px] bg-[#1E1E1E] p-10 relative overflow-hidden h-[244px]">
			<p className="text-[24px]/[1.4] font-medium text-white z-1">{product.name}</p>
			<p className="text-[16px]/[1.4] text-white z-1">
				от <span className="text-[24px]/[1.4]">{product.price.toLocaleString("RU-ru")} ₽</span>
			</p>
			{product.is_promo && (
				<div className="flex items-center justify-center h-[24px] rounded-[40px] bg-[#FF001D] p-2 text-white text-[12px] font-bold absolute top-[15%] right-[9%]">
					АКЦИЯ
				</div>
			)}
			{product.image && (
				<Image
					src={`/images/${product.image}`}
					alt={product.name}
					width={100}
					height={100}
					className="h-[90%] w-auto absolute right-0 top-1/2 -translate-y-1/2"
				/>
			)}
		</article>
	);
};
