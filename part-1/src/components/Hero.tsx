import heroImg from "../assets/hero.png";
import Author from "./Author";
import heroAuthorImg from '../assets/author_1.png';
import NewsCreated from "./NewsCreated";

const Hero = () => {
    return (
        <section className="flex flex-col border-b border-dark-blue">
            <div className="mt-12 mb-10 ">
                <p className="mb-3 text-center">Blog</p>
                <h1 className="text-[64px] leading-[84px] text-center font-manrope">Thoughts and words</h1>
            </div>
            <div className="mb-[72px] flex gap-[100px] items-center">
                <img src={heroImg} alt="Hero img" className="max-w-[550px] w-full object-cover" />
                <div className="flex flex-col">
                    <NewsCreated category="category" date="November 22, 2021" />
                    <h2 className="mt-3 mb-5 text-black text-5xl leading-[72px]">Pitch termsheet backing validation focus release.</h2>
                    <Author authorImg={heroAuthorImg} authorName="Chandler Bing" />
                </div>
            </div>
        </section>
    )
}

export default Hero