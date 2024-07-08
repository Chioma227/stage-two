import Header from "../organisms/header/Header"
import Footer from "../organisms/footer/Footer"
import Container from "../atoms/container/Container"
import { buttonVariants, containerVariants } from "@/app/variant/variants"
import CardSection from "@/app/components/checkout/CardSection"
import CheckoutForm from "@/app/components/checkout/CheckoutForm"
import Button from "../atoms/button/Button"

const Checkout = () => {
  return (
    <>
      <Header />
      <Container variant={containerVariants.WRAPPER}>
        <div>
          <p className='text-[#adadad] sm:text-[14px] text-[12px] sm:mt-[40px] mt-[25px] sm:mb-[40px] mb-[25px]'>Home / Category / Product / View Cart / <span className='text-black'>Checkout</span></p>
        </div>
        <h2 className='sm:text-[30px] text-[20px] mb-[30px] font-medium'>
          Billing Details
        </h2>
        <div className="lg:flex block m:gap-[7rem] md:gap-[5rem] mb-[40px]">
          <CheckoutForm />
          <CardSection />
        </div>
       
      </Container>
      <Footer />
    </>
  )
}

export default Checkout
