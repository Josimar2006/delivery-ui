import { NavLink } from "react-router-dom"

export interface NavigationItemProps {
    href: string,
    value: string
}
export const NavigationItem = ({ href, value }: NavigationItemProps) => {
    return (
        <>
            <li>
                <NavLink
                    to={href}
                    className={({isActive}) => 
                        `${isActive ? "text-violet-500 border-b-4 border-violet-500" : ""} px-5 pb-2 hover:text-violet-400`
                    }
                >
                    {value}
                </NavLink>
            </li>
        </>
    )
}