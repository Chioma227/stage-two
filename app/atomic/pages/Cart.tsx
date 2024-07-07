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
        <section className="md:mt-[5rem] sm:mt-[3rem] mt-[2rem]">
          <header className="flex items-center  justify-between rounded-[8px] sm:px-[30px] px-[15px] py-[10px] shadow-shadow">
            <p className="sm:text-base text-[14px]">Product</p>
            <p className="sm:text-base text-[14px]">Price</p>
            <p className="sm:text-base text-[14px]">Quantity</p>
            <p className="sm:text-base text-[14px]">Subtotal</p>
          </header>
          <div className="flex items-center justify-between rounded-[8px] sm:px-[30px] px-[15px] py-[10px] shadow-shadow sm:mt-[30px] mt-[15px]">
            <div className="flex sm:flex-row flex-col items-center sm:gap-[10px] gap-0">
              <div className="sm:w-[40px] w-[30px] h-[30px] sm:h-[40px]">
                <img src="/assets/imgs/CheckoutImg/image1.png" alt="" />
              </div>
              <p className="sm:text-base text-[11px]">Sofa Chair</p>
            </div>
            <p className="md:text-base sm:text-[15px] text-[11px]">$1200</p>
            <p className="md:text-base sm:text-[15px] text-[11px]">Quantity</p>
            <p className="md:text-base sm:text-[15px] text-[11px]">$1240</p>
          </div>
          <div className="flex items-center justify-between rounded-[8px] sm:px-[30px] px-[15px] py-[10px] shadow-shadow sm:mt-[30px] mt-[15px]">
            <div className="flex sm:flex-row flex-col items-center sm:gap-[10px] gap-0">
              <div className="sm:w-[40px]  w-[30px] h-[30px] sm:h-[40px]">
                <img src="/assets/imgs/CheckoutImg/image1.png" alt="" />
              </div>
              <p className="sm:text-base text-[11px]">Sofa Chair</p>
            </div>
            <p className="md:text-base sm:text-[15px] text-[11px]">$1200</p>
            <p className="md:text-base sm:text-[15px] text-[11px]">Quantity</p>
            <p className="md:text-base sm:text-[15px] text-[11px]">$1240</p>
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
