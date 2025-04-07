import { api, API_ENDPOINTS } from "@/shared/api";
import { Product } from "../types";

export const getProducts = async (): Promise<Product[]> => {
	try {
		const response = await api.get(API_ENDPOINTS.products);
		return response.data;
	} catch (err) {
		console.log("Ошибка при получении продуктов: " + err);
		return [];
	}
};
