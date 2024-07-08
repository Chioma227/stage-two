import Button from "@/app/atomic/atoms/button/Button"
import Container from "@/app/atomic/atoms/container/Container"
import { buttonVariants, containerVariants } from "@/app/variant/variants"


const CardSection = () => {
    return (
        <main className="w-[100%]">
            <div className="lg:w-[70%] w-[100%] lg:mt-0 mt-[5rem]">
                <section className="flex items-center justify-between">
                    <Container variant={containerVariants.FLEXED} className="md:gap-[20px] gap-[8px] ">
                        <div className="sm:w-[90px] w-[50px] h-[50px] sm:h-[90px]">
                            <img src="/assets/imgs/CheckoutImg/image1.png" alt="sofa chair" />
                        </div>
                        <p>Sofa Chair</p>
                    </Container>
                    <div>
                        <p>$1240</p>
                    </div>
                </section>
                <section className="mt-[30px] flex items-center justify-between">
                    <Container variant={containerVariants.FLEXED} className="md:gap-[20px] gap-[8px]">
                        <div className="sm:w-[90px] w-[50px] h-[50px] sm:h-[90px]">
                            <img src="/assets/imgs/CheckoutImg/image2.png" alt="sofa chair" />
                        </div>
                        <p>Sansa Chair</p>
                    </Container>
                    <p>$1000</p>
                </section>
                <section className="border-b-2 flex items-center justify-between py-[15px] border-[#82828267]">
                    <p>Subtotal:</p>
                    <p>$2240</p>
                </section>
                <section className="border-b-2 py-[15px] border-[#82828267] flex items-center justify-between">
                    <p>Shipping:</p>
                    <p>Free</p>
                </section>
                <section className="py-[15px] flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                        <input type="radio" name="color" className="radio accent-orange" />
                        <p>Bank</p>
                    </div>
                    <div className="w-[80px] ">
                        <img src="/assets/imgs/visaImg.png" alt="" />
                    </div>
                </section>
                <section className="py-[15px] flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                        <input type="radio" name="color" className="radio accent-orange" />
                        <p>Cash on Delivery</p>
                    </div>
                </section>
            </div>
            <div className="w-[100%]">
                <section>
                    <div className="sm:flex block items-center gap-[10px]">
                        <input type="text" placeholder="Coupon Code" className="indent-3 outline-none border-2 border-[#383838] sm:w-[300px] w-[100%] rounded-[5px] py-[7px]" />
                        <Button variant={buttonVariants.DEFAULT} className="text-white sm:mt-0 mt-[25px] sm:block hidden">
                            Apply Coupon
                        </Button>

                        <Button variant={buttonVariants.DEFAULT_FULL} className="text-white sm:mt-0 mt-[20px] sm:hidden block">
                            Apply Coupon
                        </Button>
                        <Button variant={buttonVariants.DEFAULT_FULL} className="text-white mt-[15px] mb-[30px] sm:hidden block">
                            Place Order
                        </Button>
                    </div>
                    <Button variant={buttonVariants.DEFAULT} className="text-white mt-[20px] mb-[30px] sm:block hidden">
                        Place Order
                    </Button>
                </section>
            </div>
        </main>
    )
}

export default CardSection
