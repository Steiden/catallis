import axios from "axios";
import { API_URL } from "./config";

export const api = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
		"Access-Control-Allow-Origin": "http://localhost:3000",
		// "Access-Control-Allow-Credentials": "true",
		// "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});
