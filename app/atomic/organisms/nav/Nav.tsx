import Link from "next/link"
import { LuUser } from "react-icons/lu";
import Icon from "../../atoms/icon/Icon";
import { FaBars } from "react-icons/fa6";
import { iconVariants } from "@/app/variant/variants"
import Container from "../../atoms/container/Container"
import { containerVariants } from "@/app/variant/variants"

interface nav {
    href: string,
    text: string,
    isActive: boolean
}

const Nav = () => {
    const navLinks: nav[] = [
        {
            href: "",
            text: "Shop",
            isActive: true
        },
        {
            href: "",
            text: "New In",
            isActive: false
        },
        {
            href: "",
            text: "Best Sellers",
            isActive: false
        },
        {
            href: "",
            text: "About Us",
            isActive: false
        },
        {
            href: "",
            text: "Sales",
            isActive: false
        },
    ]
    return (
        <Container variant={containerVariants.WRAPPER} className="sm:border-b-2 border-b-0 border-b-[#b0b0b027] py-[20px]">
            <section className="flex items-center justify-between">
                <div className="m:hidden flex items-center gap-[10px]">
                    <FaBars />
                    <Icon src="search" alt="search" variant={iconVariants.TRANSPARENT} />
                </div>
                <h1 className="font-bold text-[23px] m:block hidden">Duexe</h1>
                <Container variant={containerVariants.FLEXED} className="lg:gap-[55px] md:gap-[30px] m:flex hidden">
                    {navLinks.map((slug, i) => {
                        return (
                            <Link key={i} href={slug.href} className={slug.isActive ? "border-b border-b-1 border-orange" : "border-b-0"}>
                                {slug.text}
                            </Link>
                        )
                    })}
                </Container>
                <div className="m:hidden block">
                    <h1 className="font-bold text-[23px]">Duexe</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Icon src="search" alt="search" variant={iconVariants.TRANSPARENT} className="m:block hidden" />
                    <Link href="/checkout" className="m:block hidden">
                        <Icon src="like" alt="like" variant={iconVariants.TRANSPARENT} />
                    </Link>
                    <Link href="/cart">
                        <Icon src="shopping-cart" alt="shopping-cart" variant={iconVariants.TRANSPARENT} />
                    </Link>
                    <Link href="">
                        <LuUser className="text-[20px]" />
                    </Link>
                </div>
            </section>
        </Container>
    )
}

export default Nav
