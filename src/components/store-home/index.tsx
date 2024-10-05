import { Form } from "../form"
import { IoIosSearch } from "react-icons/io";
import { FaDropbox } from "react-icons/fa";
import { CardStore } from "../card-store";
import { useEffect, useState } from "react";
import { Store } from "../../@types/Store";
import axios from "axios";

export const StoreHome = () => {

    const [stores, setStore] = useState<Store[]>([]);

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await axios.get<Store[]>("http://localhost:8080/api/v1/store/");
                setStore(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData()
    }, []);

    return (
        <>
            <h1 className="text-2xl font-medium text-slate-700">
                Select a Store
            </h1>

            <form className="flex space-x-2 my-4">
                <Form.Root width="md">
                    <Form.Icon icon={IoIosSearch} />
                    <Form.Input type="text" placeholder="Search a store" />
                </Form.Root>

                <Form.Root width="sm">
                    <Form.Icon icon={FaDropbox} />
                    <Form.Select items={["F", "M", "S"]} />
                </Form.Root>
            </form>

            <section className="flex gap-6 mb-7">
                {stores.map(store => <CardStore store={store} key={store.id} />)}
            </section>
        </>
    )
}