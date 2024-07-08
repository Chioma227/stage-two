"use client"
import {  useState } from "react"
import Container from "@/app/atomic/atoms/container/Container"
import { buttonVariants, containerVariants } from "@/app/variant/variants"
import HomeLayout from "@/app/atomic/layout/HomeLayout"
import SalesCard from "@/app/atomic/templates/SalesCard"
import Link from "next/link"
import { products } from "../../helper/data"
import Button from "@/app/atomic/atoms/button/Button"


interface Product {
    id: number;
    image: string;
    name: string;
    slashPrice: string;
    prevPrice: string;
    rating: string;
    badgeValue: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
}



const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const handleFilterChange = (category: string | null) => {
        setSelectedCategory(category);
        setActiveFilter(category);
    };

    const filteredProducts = products.filter((product) =>
        !selectedCategory || product.category === selectedCategory
    );

    return (
        <HomeLayout >
            <Container variant={containerVariants.DEFAULT} className=" md:mb-[10px] mb-[20px]">
                <div className='border-l-[15px] h-[100px] flex items-center border-l-orange px-[20px] mt-[30px]'>
                    <p className='text-orange font-semibold'>
                        Our Products
                    </p>
                </div>
                <h2 className="md:text-[30px] text-[20px] font-bold text-black90 mt-[10px]">
                    Explore Our Products
                </h2>
            </Container>
            <div className="flex flex-wrap  items-center sm:gap-4 gap-2 md:mb-[50px] mb-[20px]">
                <button onClick={() => handleFilterChange(null)} className={activeFilter === null ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent w-fit whitespace-nowrap sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>All</button>
                <button onClick={() => handleFilterChange('chair')} className={activeFilter === "chair" ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent whitespace-nowrap w-fit sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>Chairs</button>
                <button onClick={() => handleFilterChange('table')} className={activeFilter === "table" ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent whitespace-nowrap w-fit sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>Dining Set</button>
                <button onClick={() => handleFilterChange('table')} className={activeFilter === "sofa" ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent whitespace-nowrap w-fit sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>Sofa Set</button>
                <button onClick={() => handleFilterChange('table')} className={activeFilter === "side-table" ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent whitespace-nowrap w-fit sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>Side Table</button>
                <button onClick={() => handleFilterChange('table')} className={activeFilter === "accessories" ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent whitespace-nowrap w-fit sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>Accessories</button>
            </div>
            <div className={`product-list ${filteredProducts.length ? 'show' : ''} grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[20px] gap-[10px]`} >
                {filteredProducts.slice(0,8).map((slug, i) => (
                    <Link href={`/product/${slug.id}`} className="product-item show" key={i}>
                        <SalesCard
                            isFilled={true}
                            imgSrc={slug.image}
                            prodName={slug.name}
                            prevPrice={slug.prevPrice}
                            currentPrice={slug.slashPrice}
                        />
                    </Link>
                ))}
            </div>
            <Button variant={buttonVariants.DEFAULT} className="mt-[25px] text-white">
                Load More
            </Button>
        </HomeLayout>

    )
}

export default Products
