"use client"
import Link from "next/link"
import Button from "../atoms/button/Button"
import Container from "../atoms/container/Container"
import CartCoupon from "@/app/components/cart/CartCoupon"
import { buttonVariants, containerVariants } from "@/app/variant/variants"
import useCartStore from "@/app/helper/zustand/cartStore"


const Cart = () => {
  const { cartItems,  removeItemFromCart, clearCart } = useCartStore()

  return (
    <Container variant={containerVariants.WRAPPER}>
      <main>
        <div className="mt-[30px]">
          <p>Home / Cart</p>
        </div>
        <section className="md:mt-[5rem] sm:mt-[3rem] mt-[2rem]">
          <div className="w-full flex items-center justify-end mb-[40px]">
            <Button variant={buttonVariants.DEFAULT} className="text-white" onClick={clearCart}>clear Cart</Button>
          </div>
          <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full border border-collapse border-spacing-2 gap-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs w-full uppercase ">
                <tr>
                  <th scope="col" className="px-6 py-3 sm:text-base text-[14px]">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 sm:text-base text-[14px]">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 sm:text-base text-[14px]">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 sm:text-base text-[14px]">
                    SubTotal
                  </th>
                  <th scope="col" className="px-6 py-3 sm:text-base text-[14px]">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((slug, i) => {
                  return (
                    <tr key={i} className="bg-white border-b border-gray-200 shadow-sm mb-[40px]">
                      <td scope="row" className="px-6 flex items-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="sm:w-[40px] w-[30px] h-[30px] sm:h-[40px]">
                          <img src={`https://api.timbu.cloud/images/${slug.photos[2].url}`} alt={slug.name} />
                        </div>
                        <p>{slug.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="sm:text-[15px] text-[11px]">{slug.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="md:text-base sm:text-[15px] text-[11px]">{slug.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        $<p className="md:text-base sm:text-[15px] text-[11px]">Quantity</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="md:text-base sm:text-[15px] text-[11px]">{slug.prevPrice}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button onClick={() => removeItemFromCart(slug.id)} className="font-medium text-orange">Remove</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>

            </table>

          </section>
        </section>
        <div className="mt-[20px] flex items-center justify-between">
          <Link href="/">
            <Button variant={buttonVariants.OUTLINED} className="sm:text-base text-[9px]">Return to Shop</Button>
          </Link>
          <Button className="text-white font-medium sm:text-base text-[9px]" variant={buttonVariants.DEFAULT}>Update Cart</Button>
        </div>
      </main>
      <CartCoupon />
    </Container>
  )
}

export default Cart
