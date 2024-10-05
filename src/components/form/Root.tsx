type FormWidth = "sm" | "md" | "full"

export type RootProps = { 
    children: React.ReactNode,
    width: FormWidth
}
export const Root = ({ width, children }: RootProps)=>{
 
    const w = getWidth(width)

    return (
        <>
            <div className={`${w} h-10 border flex items-center px-1 rounded-md`}>
                {children}
            </div>
        </>
    )
}

const getWidth = (width: FormWidth) => {
    switch(width) {
        case "sm":
            return "w-72"
        case "md":
            return "w-96"
        case "full":
            return "w-full"
    }
} 