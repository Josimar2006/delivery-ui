import { IconType } from "react-icons"

export interface IconProps {
    icon: IconType
}

export const Icon = ({ icon: Icon}: IconProps) => {
    return (
        <Icon className="text-2xl mx-2 text-slate-700" />
    )
}