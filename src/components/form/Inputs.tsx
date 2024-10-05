import { ComponentProps } from "react"

export type InputProps = ComponentProps<'input'> & {

}

export type SelectProps = ComponentProps<'select'> & {
    items: string[]
}

export const Input = (
    { ...props }: InputProps
) =>{
    return (
        <>
            <input 
                className="size-full bg-transparent focus:outline-none text-slate-700"
                {...props}
            />
        </>
    )
}

export const Select = (
    { items, ...props }: SelectProps
) =>{
    return (
        <>
            <select 
                className="size-full bg-transparent focus:outline-none text-slate-700"
                {...props}
            >
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </>
    )
}
