import Icon from "../atoms/icon/Icon"
import Image from "next/image"
import Container from "../atoms/container/Container"
import { containerVariants, iconVariants } from "@/app/variant/variants"

interface cardProps {
    imgSrc: string,
    prodName: string,
    isFilled: boolean,
    prevPrice: number | string,
    badgeValue?: string | number,
    currentPrice: number | string,
    isBlock?:boolean
}

const SalesCard = ({ imgSrc, prodName, prevPrice, isBlock, currentPrice, badgeValue, isFilled }: cardProps) => {
    return (
        <main className={`${isBlock? "w-full " : "w-[200px]"} m:w-[300px] border-2 rounded-md box-border transition-all duration-75`}>
            <section className="h-fit p-[20px] ">
                <div className="flex items-center justify-between">
                    {badgeValue && <p className="bg-red text-white text-[10px] py-[4px] px-[9px] rounded-md">{badgeValue}</p>}
                    <div className={!badgeValue ? "flex w-full justify-end" : ""}>
                        <Icon src="like" alt="" variant={iconVariants.TRANSPARENT} />
                    </div>
                </div>
                <div className="h-[200px] w-full flex items-center justify-center">
                    <Image src={imgSrc} alt={prodName} width={200} height={200} />
                </div>
            </section>

            <section className={isFilled ? "bg-grey10 p-[20px] " : "bg-transparent p-[20px] "}>
                <div className="mb-[9px] flex items-center justify-between">
                    <p>{prodName}</p>
                    <Icon src="shopping-bag" alt="" variant={iconVariants.TRANSPARENT} />
                </div>
                <Container variant={containerVariants.FLEXED} className="gap-[6px] mb-[9px]">
                    <p className="text-red font-medium">${currentPrice}</p>
                    <p className=" line-through text-grey font-medium">${prevPrice}</p>
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
