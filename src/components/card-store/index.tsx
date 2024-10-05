import { useEffect, useState } from "react"
import { Store } from "../../@types/Store"
import axios from "axios";

export interface cardStore {
    store: Store
}

export const CardStore = ({ store }: cardStore ) => {

    const [src, setSrc] = useState<string>();

    useEffect(()=>{
        const fetchImage = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/file/donwload/${store.store_image}`, {
                responseType: 'blob'
            })
            const imageObject = URL.createObjectURL(response.data);

            setSrc(imageObject);
        }

        fetchImage()
    }, [])
    return (
        <>
            <div className="size-80 shadow bg-white border rounded-md p-4">
                <img 
                    src={src}
                    alt="logotipo"
                    className="w-full h-40 border rounded-md"
                />

                <div className="pt-4">
                    <h1 className="text-xl font-semibold text-slate-600">
                        {store.store_name}
                    </h1>
                    <p className="text-sm text-slate-600">
                        Rating: <small className="text-slate-500 text-sm"> {store.rating}/5</small>
                    </p>
                    <p className="text-sm text-slate-600">
                        Category: <small className="text-slate-500 text-sm">{store.category}</small>
                    </p>
                </div>
            </div>
        </>
    )
}