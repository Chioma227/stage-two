"use client"
import Container from "@/app/atomic/atoms/container/Container"
import { containerVariants } from "@/app/variant/variants"
import SalesCard from "@/app/atomic/templates/SalesCard"
import HomeLayout from "@/app/atomic/layout/HomeLayout"
import Icon from "@/app/atomic/atoms/icon/Icon"
import { iconVariants } from "@/app/variant/variants"
import { BSProdData } from "../../helper/data"


import Link from "next/link"

const BSProducts = () => {

    const slideLeft = () => {
        const slider = document.getElementById("slider2") ?? document.createElement('div');
        slider.scrollLeft = slider.scrollLeft - 300;
    };

    const slideRight = () => {
        var slider = document.getElementById("slider2") ?? document.createElement('div');
        slider.scrollLeft = slider.scrollLeft + 300;
    };
    return (
        <>
            <HomeLayout >
                <Container variant={containerVariants.DEFAULT} className="border-t-2 border-t-[#b0b0b027] mb-[50px]">
                    <div className='border-l-[15px] h-[100px] flex items-center border-l-orange px-[20px] mt-[30px] mb-[10px]'>
                        <p className='text-orange font-semibold'>
                            This Month
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="m:text-[30px] md:text-[25px] text-[18px] font-bold text-black90 ">
                            Best Selling Products
                        </h2>
                        <Container variant={containerVariants.FLEXED} className="gap-[7px]">
                            <Icon src='arrow-left' alt="left" variant={iconVariants.FILLED} onClick={slideLeft} />
                            <Icon src='arrow-right' alt="right" variant={iconVariants.FILLED} onClick={slideRight} />
                        </Container>
                    </div>
                </Container>

            </HomeLayout>
            <div id='slider2' className="md:ml-[7rem] sm:ml-[4rem] ml-[1rem] flex gap-[20px] overflow-x-hidden overflow-y-hidden scroll scroll-smooth scrollbar-hide"  >
                {BSProdData.map((slug, i) => (
                    <Link href="">
                        <SalesCard
                            key={i}
                            isFilled={true}
                            imgSrc={slug.image}
                            prodName={slug.name}
                            prevPrice={slug.prevPrice}
                            currentPrice={slug.slashPrice}
                        />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default BSProducts
