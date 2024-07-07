import Button from "@/app/atomic/atoms/button/Button"
import Container from "@/app/atomic/atoms/container/Container"
import { buttonVariants, containerVariants } from "@/app/variant/variants"


const CardSection = () => {
    return (
        <>
            <div className="m:w-[40%] w-[100%] md:mt-0 mt-[5rem]">
                <section className="flex items-center justify-between">
                    <Container variant={containerVariants.FLEXED} className="md:gap-[20px] gap-[8px]">
                        <div className="sm:w-[90px] w-[50px] h-[50px] sm:h-[90px]">
                            <img src="/assets/imgs/CheckoutImg/image1.png" alt="sofa chair" />
                        </div>
                        <p>Sofa Chair</p>
                    </Container>
                    <div>
                        <p>$1240</p>
                    </div>
                </section>
                <section  className="mt-[30px] flex items-center justify-between">
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
            {/* <div className="w-[100%]">
                <input/>
                <Button variant={buttonVariants.DEFAULT}>
                        hjdk
                </Button>
            </div> */}
        </>
    )
}

export default CardSection
