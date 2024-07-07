import clsx from "clsx"
import { buttonVariants } from "@/app/variant/variants"

interface bProps {
    className?: string,
    variant: buttonVariants,
    children: string | React.ReactNode,
}

const Button = ({ children, className, variant }: bProps) => {
    let style;
    switch (variant) {
        case buttonVariants.DEFAULT:
            style = clsx(className,
                "bg-orange  whitespace-nowrap w-fit",
                "rounded-[4px] text-[14px]  py-[9px] px-[1.9rem]"
            )
            break;
        default:
            break;
    }
    return (
        <button className={clsx(className, style)} >
            {children}
        </button>
    )
}

export default Button
