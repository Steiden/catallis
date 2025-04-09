import { Product } from "@/entities/products/types";
import Image from "next/image";

type ProductCardProps = {
	product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<article className="flex flex-col justify-between rounded-[32px] bg-[#1E1E1E] p-10 relative overflow-hidden h-[244px]">
			<p className="font-[24px]/1.4 font-medium text-white z-1">{product.name}</p>
			<p className="fo">от <span>{product.price.toLocaleString("RU-ru")} ₽</span></p>
			{product.is_promo && <span className="h-[24px] rounded-[40px] bg-[#FF001D] p-2 text-white text-[12px] font-bold absolute top-[15%] right-[15%]">АКЦИЯ</span>}
			{product.image && <Image src={`/images/${product.image}`} alt={product.name} width={539} height={229} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />}
		</article>
	);
};
