"use client"
import Header from "../organisms/header/Header"
import Hero from "@/app/components/overview/Hero"
import Products from "@/app/components/overview/Products"
import BSProducts from "@/app/components/overview/BSProducts"
import FlashSales from "@/app/components/overview/flashSales/FlashSales"
import Footer from "../organisms/footer/Footer"
import ProdShowcase from "@/app/components/overview/ProdShowcase"


const Overview = () => {
    return (
        <div>
            <Header />
            <Hero />
            <FlashSales />
            <BSProducts />
            <Products />
            <ProdShowcase />
            <Footer />
        </div>
    )
}

export default Overview
