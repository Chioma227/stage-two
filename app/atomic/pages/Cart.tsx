import Link from "next/link"
import Button from "../atoms/button/Button"
import Container from "../atoms/container/Container"
import CartCoupon from "@/app/components/cart/CartCoupon"
import { buttonVariants, containerVariants } from "@/app/variant/variants"

const Cart = () => {
  return (
    <Container variant={containerVariants.WRAPPER}>
      <main>
        <div>
          <p>Home / Cart</p>
        </div>
        <section className="mt-[5rem]">
          <header className="flex items-center  justify-between rounded-[8px] px-[30px] py-[10px] shadow-shadow">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </header>
          <div className="flex items-center justify-between rounded-[8px] px-[30px] py-[10px] shadow-shadow mt-[30px]">
            <div className="flex items-center gap-[10px]">
              <div className="sm:w-[40px] w-[50px] h-[50px] sm:h-[40px]">
                <img src="/assets/imgs/CheckoutImg/image1.png" alt="" />
              </div>
              <p>Sofa Chair</p>
            </div>
            <p>$1200</p>
            <p>Quantity</p>
            <p>$1240</p>
          </div>
          <div className="flex items-center justify-between rounded-[8px] px-[30px] py-[10px] shadow-shadow mt-[30px]">
            <div className="flex items-center gap-[10px]">
              <div className="sm:w-[40px] w-[50px] h-[50px] sm:h-[40px]">
                <img src="/assets/imgs/CheckoutImg/image1.png" alt="" />
              </div>
              <p>Sofa Chair</p>
            </div>
            <p>$1200</p>
            <p>Quantity</p>
            <p>$1240</p>
          </div>
        </section>
        <div className="mt-[20px] flex items-center justify-between">
          <Link href="/">
            <Button variant={buttonVariants.OUTLINED} className="sm:text-base text-[11px]">Return to Shop</Button>
          </Link>
          <Button className="text-white font-medium sm:text-base text-[11px]" variant={buttonVariants.DEFAULT}>Update Cart</Button>
        </div>
      </main>
      <CartCoupon />
    </Container>
  )
}

export default Cart
