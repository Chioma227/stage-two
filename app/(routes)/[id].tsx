// import Container from "../atomic/atoms/container/Container"
// import { containerVariants } from "../variant/variants"
// import Button from "../atomic/atoms/button/Button"
// import { buttonVariants } from "../variant/variants"
// import Icon from "../atomic/atoms/icon/Icon"
"use client"
import Header from "@/app/atomic/organisms/header/Header";
import Footer from "@/app/atomic/organisms/footer/Footer";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { products } from "@/app/helper/data";
// import { useRouter } from 'next/router';
// import { useEffect, useState } from "react"



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

interface ProductDetailProps {
    product: Product;
}

const ProductDetail = ({ params }: {params: {productId:string}}) => {
    // const router = useRouter()

    // if (router.isFallback) {
    //     return <div>Loading...</div>;
    // }

    return (
        <main>
            <Header />
            <h1>{params.productId}</h1>
            {/* <img src={product.image} alt={product.name} />
            <p>Previous Price: ${product.prevPrice}</p>
            <p>Current Price: ${product.slashPrice}</p> */}
            <Footer />
        </main>
    )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const productsData = products

//     const paths = productsData.map((product) => ({
//         params: { id: product.id.toString() },
//     }));

//     return { paths, fallback: true };
// };


// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const productId = params?.id;
  
//     const productsData = products;
  
//     const product = productsData.find((p) => p.id.toString() === productId);
  
//     if (!product) {
//       return { notFound: true };
//     }
  
//     return { props: { product } };
//   };



export default ProductDetail
