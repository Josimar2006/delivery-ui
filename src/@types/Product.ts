import { Store } from "./Store";

export interface Product {
    id: number,
    product_name: string,
    price: number,
    quantity: string,
    product_image: string,
    category: "E" | "C" | "HB" | "HG",
    description: string
    store: Store
    createdAt: Date
    updatedAt: Date
}