import { Link } from "react-router-dom"
import { NavigationItem } from "../navigation"
import logo from '../../assets/logo.png';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiBell } from "react-icons/fi";

export const Header = ()=>{
    return (
        <>
            <header className="w-full h-[4.5rem] bg-white shadow fixed px-4 flex items-center gap-20">
                <Link 
                    to="#"
                    className="text-xl font-medium text-slate-600 flex gap-3 items-center"    
                >
                    <img 
                        src={logo} 
                        alt="logotipo do deliverynow" 
                        className="w-11 h-11"    
                    />
                    DeliveryNow
                </Link>

                <nav className="flex flex-1 justify-between items-center">
                    <ul className="flex gap-4">
                        <NavigationItem href="/delivery" value="Home" />
                        <NavigationItem href="/delivery/products" value="Products" />
                        <NavigationItem href="/delivery/order" value="Track Order" />
                    </ul>

                    <div className="flex space-x-2">
                        <button className="px-4 py-2 rounded-md bg-violet-500 text-white">
                            Order now
                        </button>

                        <button className="px-3 py-2 border rounded-md text-xl">
                            <IoIosSearch />
                        </button>

                        <button className="px-3 py-2 border rounded-md text-xl">
                            <MdOutlineShoppingCart />
                        </button>

                        <button className="px-3 py-2 border rounded-md text-xl">
                            <FiBell />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}