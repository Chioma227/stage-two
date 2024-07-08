import Icon from "../atoms/icon/Icon"
import Image from "next/image"
import Container from "../atoms/container/Container"
import { containerVariants, iconVariants } from "@/app/variant/variants"
import Link from "next/link"

interface cardProps {
    href: string,
    imgSrc: string,
    prodName: string,
    isFilled: boolean,
    prevPrice: number | string,
    badgeValue?: string | number,
    currentPrice: number | string,
}

const SalesCard = ({ imgSrc, href, prodName, prevPrice, currentPrice, badgeValue, isFilled }: cardProps) => {
    return (
        <main className={`h-fit sm:shadow-shadow shadow-shadow_md rounded-md box-border transition-all duration-75`}>
            <Link href={href} className="md:h-[200px] relative flex items-center flex-col justify-center h-[100px] md:p-[20px] p-[10px]  overflow-hidden">
                <div className="flex absolute top-1 left-1 items-center justify-between">
                    {badgeValue && <p className="bg-red text-white text-[10px] py-[3px] px-[7px] rounded-md">{badgeValue}</p>}
                </div>
                <div className=" object-contain w-[100%] md:w-[200px] flex items-center justify-center">
                    <img src={imgSrc} alt={prodName} className="md:h-[200px] h-[100px] max-w-[100%] object-fit " />
                </div>
            </Link>

            <section className={isFilled ? "bg-grey10 md:p-[20px] p-[10px] " : "bg-transparent md:p-[20px] p-[10px] "}>
                <div className="md:mb-[9px] mb-[5px] flex items-center justify-between">
                    <p className="md:text-base text-[13px]">{prodName}</p>
                    <div className="bg-orange cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center text-white">
                        <Icon src="shop-bag" alt="" variant={iconVariants.TRANSPARENT} className="text-white" />
                    </div>
                </div>
                <Container variant={containerVariants.FLEXED} className="gap-[6px] md:mb-[9px] mb-[5px]">
                    <p className="text-red font-medium md:text-base text-[13px]">${currentPrice}</p>
                    <p className=" line-through text-grey font-medium md:text-base text-[13px]">${prevPrice}</p>
                </Container>
                <Container variant={containerVariants.FLEXED}>
                    <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                    <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                    <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                    <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                    <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                </Container>
            </section>

        </main>
    )
}

export default SalesCard
