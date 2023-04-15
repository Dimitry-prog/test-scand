import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

const Logo = () => {
    return (
        <Link to="/" className="flex gap-2.5 font-manrope font-bold text-2xl md:text-[43px] md:leading-[34px]">
            <img src={logo} alt="Logo" />
            Boldo
        </Link>
    );
};

export default Logo;