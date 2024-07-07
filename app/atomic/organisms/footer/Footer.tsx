import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark-brown">
            <div className="mx-auto w-full max-w-screen-xl md:px-[7rem] sm:px-[4rem] px-[1rem] py-6 lg:py-8">
                <div className="m:flex block items-baseline gap-10 justify-center">
                    <div className=" text-white m:mb-0 mb-[35px]">
                        <p className="mb-4 text-[20px] font-semibold">
                            Duexe
                        </p>
                        <p className="mb-4">Subscribe</p>
                        <p className="mb-4">Get 10% off your first order</p>
                        <div>
                            <input type="email" placeholder='Enter your email' className='bg-transparent w-full placeholder:text-[#ad9b8e5b] border-2 border-white rounded-md indent-2 outline-none py-[5px] px-[7px]' />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
                            <ul className="text-[#ffffffc9] ">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">414 Summit lane, Wuse 2, Abuja</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">hello@duexe.com</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">+234-708-000-3444</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Account</h2>
                            <ul className="text-[#ffffffc9]  ">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">My Accouny</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Login / Register</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Wishlist</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Shop</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Link</h2>
                            <ul className="text-[#ffffffc9]  ">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Terms of Use</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">FAQ</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download App</h2>
                            <ul className="text-[#ffffffc9]  ">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-[#ff88338b] sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center">
                    <span className="text-sm text-[#ad9b8e5b] sm:text-center">© Duexe 2024. All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer
