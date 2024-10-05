import { useEffect, useState } from "react";
import { Product } from "../../@types/Product";
import { CardProduct } from "../card-product"
import axios from "axios";

export const ProductHome = ()=>{
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await axios.get<Product[]>("http://localhost:8080/api/v1/product");
                setProducts(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData()
    }, []);
    return (
        <>
            <h1 className="text-2xl font-medium text-slate-700">
                Product Listing
            </h1>

            <section className="flex gap-6 mb-7 mt-3">
                {products.map(product => <CardProduct product={product} />)}
            </section>
        </>
    )
}