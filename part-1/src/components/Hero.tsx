import heroImg from "../assets/hero.png";
import Author from "./Author";
import heroAuthorImg from '../assets/author_1.png';
import NewsCreated from "./NewsCreated";

const Hero = () => {
    return (
        <section className="flex flex-col border-b border-dark-blue">
            <div className="mt-14 mb-10 lg:mt-20 lg:mb-16 ">
                <p className="mb-3 text-center text-sm sm:text-base md:text-lg">Blog</p>
                <h1 className="text-3xl md:text-5xl lg:text-[64px] lg:leading-[84px] text-center font-manrope">Thoughts and words</h1>
            </div>
            <div className="mb-12 lg:mb-[72px] sm:flex gap-14 xl:gap-[100px] items-center relative before:absolute before:left-0 before:right-0 before:w-full before:h-full before:bg-sky-200/70 before:rounded-3xl sm:before:w-0">

                <img src={heroImg} alt="Hero img" className="sm:max-w-[300px] xl:max-w-[550px] max-h-[385px] w-full object-cover rounded-3xl" />

                <div className="flex flex-col flex-grow absolute top-[10%] left-[10%] sx:top-[35%] sm:static">
                    <NewsCreated category="category" date="November 22, 2021" />
                    <h2 className="mt-3 mb-5 text-black md:text-3xl xl:text-5xl xl:leading-[72px]">Pitch termsheet backing validation focus release.</h2>
                    <Author authorImg={heroAuthorImg} authorName="Chandler Bing" />
                </div>
            </div>
        </section>
    )
}

export default Hero