"use client"
import Header from "../organisms/header/Header"
import Hero from "@/app/components/overview/Hero"
import Products from "@/app/components/overview/Products"
import BSProducts from "@/app/components/overview/BSProducts"
import FlashSales from "@/app/components/overview/flashSales/FlashSales"
import Footer from "../organisms/footer/Footer"
import ProdShowcase from "@/app/components/overview/ProdShowcase"
import NewIn from "@/app/components/overview/NewIn"
import useCartStore from "@/app/helper/zustand/cartStore"
import { useEffect } from "react"

const Overview = () => {
    const { isAdded } = useCartStore()
    useEffect(() => {
        if (isAdded) {
            alert("item added to cart")
        }
    }, [isAdded])
    return (
        <div>
            <Header />
            <Hero />
            <FlashSales />
            <BSProducts />
            <Products />
            {/*  <NewIn/>*/}
            <ProdShowcase />
            <Footer />
        </div>
    )
}

export default Overview
