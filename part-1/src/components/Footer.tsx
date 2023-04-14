import { Link } from "react-router-dom"
import Logo from "./Logo"

const Footer = () => {
    return (
        <footer className="mt-[84px] pt-[100px] pb-28 flex gap-44">
            <div className="flex flex-col">
                <Logo />
                <p className="max-w-[280px] w-full mt-10 mb-16 text-base leading-7 text-gray">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                <p className=" text-base leading-7 text-gray">All rights reserved.</p>
            </div>

            <div className="flex gap-40">
                <div className="flex flex-col gap-8">
                    <h5 className="text-xl leading-8 font-bold text-black">Landings</h5>
                    <ul className="flex flex-col gap-8">
                        <li className="flex gap-2 items-center"><Link to="/">Home</Link></li>
                        <li className="flex gap-2 items-center"><Link to="/products">Product</Link></li>
                        <li className="flex gap-2 items-center"><Link to="/services">Services</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-8">
                    <h5 className="text-xl leading-8 font-bold text-black">Company</h5>
                    <ul className="flex flex-col gap-8">
                        <li className="flex gap-2 items-center"><Link to="/">Home</Link></li>
                        <li className="flex gap-2 items-center">
                            <Link to="/careers">Careers</Link>
                            <span className="px-[14px] font-bold text-[13px] leading-7 text-dark-blue rounded-[120px] bg-green">Hiring!</span>
                        </li>
                        <li className="flex gap-2 items-center"><Link to="/services">Services</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-8">
                    <h5 className="text-xl leading-8 font-bold text-black">Resources</h5>
                    <ul className="flex flex-col gap-8">
                        <li className="flex gap-2 items-center"><Link to="/blog">Blog</Link></li>
                        <li className="flex gap-2 items-center"><Link to="/products">Products</Link></li>
                        <li className="flex gap-2 items-center"><Link to="/services">Services</Link></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer