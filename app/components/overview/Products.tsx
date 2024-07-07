"use client"
import { useState } from "react"
import Container from "@/app/atomic/atoms/container/Container"
import { buttonVariants, containerVariants } from "@/app/variant/variants"
import Icon from "@/app/atomic/atoms/icon/Icon"
import { iconVariants } from "@/app/variant/variants"
import HomeLayout from "@/app/atomic/layout/HomeLayout"
import SalesCard from "@/app/atomic/templates/SalesCard"
import Link from "next/link"
import { products } from "../../helper/data"
import { BSProdData } from "../../helper/data"
import Button from "@/app/atomic/atoms/button/Button"

interface Product {
    // id: number;
    image: string;
    name: string;
    slashPrice: string;
    prevPrice: string;
    rating: string;
    badgeValue: string;
    category: string;
}



const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleFilterChange = (category: string | null) => {
        setSelectedCategory(category);
    };

    const filteredProducts = products.filter((product) =>
        !selectedCategory || product.category === selectedCategory
    );


    return (
        <HomeLayout >
            <Container variant={containerVariants.DEFAULT} className=" md:mb-[50px] mb-[20px]">
                <div className='border-l-[15px] h-[100px] flex items-center border-l-orange px-[20px] mt-[30px]'>
                    <p className='text-orange font-semibold'>
                        Our Products
                    </p>
                </div>
                <h2 className="md:text-[30px] text-[20px] font-bold text-black90 mt-[10px]">
                    Explore Our Products
                </h2>
            </Container>
            <div>
                <button onClick={() => handleFilterChange(null)}>All</button>
                <button onClick={() => handleFilterChange('chair')}>Chairs</button>
                <button onClick={() => handleFilterChange('table')}>Tables</button>
            </div>
            <div className={`product-list ${filteredProducts.length ? 'show' : ''} grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[20px] gap-[10px]`} >
                {filteredProducts.map((slug, i) => (
                    <div className="product-item show" key={i}>
                        <SalesCard
                            isBlock={true}
                            isFilled={true}
                            imgSrc={slug.image}
                            prodName={slug.name}
                            prevPrice={slug.prevPrice}
                            currentPrice={slug.slashPrice}
                        />
                    </div>
                ))}
            </div>  
            <Button variant={buttonVariants.DEFAULT} className="mt-[25px] text-white">
                Load More
            </Button>
        </HomeLayout>

    )
}

export default Products
