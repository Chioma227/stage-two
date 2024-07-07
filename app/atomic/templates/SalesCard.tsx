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
        <main className={`h-fit border-2 rounded-md box-border transition-all duration-75`}>
            <section className="md:h-[200px] h-[150px] p-[20px]  overflow-hidden">
                <div className="flex items-center justify-between">
                    {badgeValue && <p className="bg-red text-white text-[10px] py-[4px] px-[9px] rounded-md">{badgeValue}</p>}
                    <div className={!badgeValue ? "flex w-full justify-end" : ""}>
                        <Icon src="like" alt="" variant={iconVariants.TRANSPARENT} />
                    </div>
                </div>
                <div className="md:h-[200px] h-[100px] w-[100%] md:w-[200px] flex items-center justify-center">
                    <img src={imgSrc} alt={prodName} className="h-auto max-w-[100%] object-cover"  />
                </div>
            </section>

            <section className={isFilled ? "bg-grey10 md:p-[20px] p-[10px] " : "bg-transparent md:p-[20px] p-[10px] "}>
                <div className="md:mb-[9px] mb-[5px] flex items-center justify-between">
                    <p className="md:text-base text-[12px]">{prodName}</p>
                    <Icon src="shopping-bag" alt="" variant={iconVariants.TRANSPARENT} />
                </div>
                <Container variant={containerVariants.FLEXED} className="gap-[6px] md:mb-[9px] mb-[5px]">
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
