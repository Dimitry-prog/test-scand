import { Link } from "react-router-dom"
import Logo from "./Logo"

const Footer = () => {
    return (
        <footer className="mt-[84px] lg:pt-[100px] pb-5 lg:pb-28 flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-48">
            <div className="flex flex-col gap-2">
                <Logo />
                <p className="max-w-[280px] w-full mt-10 lg:mb-16 text-base leading-7 text-gray">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                <p className="hidden text-base leading-7 text-gray lg:block">All rights reserved.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-40">
                <div className="flex flex-col gap-4 lg:gap-10">
                    <h5 className="text-xl leading-8 font-bold text-black">Landings</h5>
                    <ul className="flex flex-col gap-4 lg:gap-10">
                        <li className="flex gap-2 items-center relative"><Link className="hover:opacity-70 transition-all duration-500" to="/">Home</Link></li>
                        <li className="flex gap-2 items-center relative"><Link className="hover:opacity-70 transition-all duration-500" to="/products">Product</Link></li>
                        <li className="flex gap-2 items-center relative"><Link className="hover:opacity-70 transition-all duration-500" to="/services">Services</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 lg:gap-10">
                    <h5 className="text-xl leading-8 font-bold text-black">Company</h5>
                    <ul className="flex flex-col gap-4 lg:gap-10">
                        <li className="flex gap-2 items-center relative"><Link className="hover:opacity-70 transition-all duration-500" to="/">Home</Link></li>
                        <li className="flex gap-2 items-center relative">
                            <Link className="hover:opacity-70 transition-all duration-500" to="/careers">Careers</Link>
                            <span className="absolute top-[10%] left-[35%] sx:left-[15%] lg:left-[90%] px-[14px] font-bold text-[13px] leading-7 text-dark-blue rounded-[120px] bg-green">Hiring!</span>
                        </li>
                        <li className="flex gap-2 items-center relative"><Link className="hover:opacity-70 transition-all duration-500" to="/services">Services</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 lg:gap-10">
                    <h5 className="text-xl leading-8 font-bold text-black">Resources</h5>
                    <ul className="flex flex-col gap-4 lg:gap-10">
                        <li className="flex gap-2 items-center relative"><Link className="hover:opacity-70 transition-all duration-500" to="/blog">Blog</Link></li>
                        <li className="flex gap-2 items-center relative"><Link className="hover:opacity-70 transition-all duration-500" to="/products">Products</Link></li>
                        <li className="flex gap-2 items-center relative"><Link className="hover:opacity-70 transition-all duration-500" to="/services">Services</Link></li>
                    </ul>
                </div>
            </div>

            <p className="block lg:hidden text-base leading-7 text-gray text-center">All rights reserved.</p>
        </footer >
    )
}

export default Footer