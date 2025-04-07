import { Category } from "@/entities/categories/types";

export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
	categoryId: string;
	category?: Category;
};
