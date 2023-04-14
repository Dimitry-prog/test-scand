import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

const Logo = () => {
    return (
        <Link to="/" className="flex gap-2.5 font-manrope font-bold text-[43px] leading-[34px]">
            <img src={logo} alt="Logo"/>
            Boldo
        </Link>
    );
};

export default Logo;