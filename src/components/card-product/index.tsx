import { useEffect, useState } from "react"
import axios from "axios";
import { Product } from "../../@types/Product";

export interface cardProductProps {
    product: Product
}

export const CardProduct = ({ product }: cardProductProps ) => {

    const [src, setSrc] = useState<string>();

    useEffect(()=>{
        const fetchImage = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/file/donwload/${product.product_image}`, {
                responseType: 'blob'
            })
            const imageObject = URL.createObjectURL(response.data);

            setSrc(imageObject);
        }

        fetchImage()
    }, [])

    
    return (
        <>
            <div className="w-80 h-[32rem] bg-white border rounded-md p-4">
                <img 
                    src={src}
                    alt="logotipo"
                    className="w-full h-[19rem] border rounded-md"
                />

                <div className="pt-4">
                    <h1 className="text-xl font-semibold text-slate-600">
                        {product.product_name}
                    </h1>
                    <p className="text-sm text-slate-600">
                        Description: <small className="text-slate-500 text-sm">{product.description}</small>
                    </p>
                    <p className="text-sm text-slate-600">
                        Price: <small className="text-slate-500 text-sm">{product.price} AOA</small>
                    </p>

                    <div className="flex justify-between">
                        <p className="text-sm text-slate-600">
                            Store: <small className="text-slate-500 text-sm">{product.store.store_name}</small>
                        </p>

                        <button className="px-4 py-1.5 bg-violet-500 text-white rounded-md"> Add Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}