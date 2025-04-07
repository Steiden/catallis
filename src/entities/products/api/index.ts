import { api, API_ENDPOINTS } from "@/shared/api";
import { Product } from "../types";
import axios from "axios";

export const getProducts = async (): Promise<Product[]> => {
	try {
		const response = await axios.get("/api/products", {
			headers: {
				"Access-Control-Allow-Origin": "http://localhost:3000",
			},
		});
		return response.data;
	} catch (err) {
		console.log("Ошибка при получении продуктов: " + err);
		return [];
	}
};
