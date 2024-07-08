
"use client"
import Header from "@/app/atomic/organisms/header/Header";
import Footer from "@/app/atomic/organisms/footer/Footer";


const ProductDetail = ({ params }: { params: { productId: number } }) => {

    return (
        <main>
            <Header />
            <h1>product: {params.productId}</h1>

            <Footer />
        </main>
    )
}





export default ProductDetail
