import { news } from "../data/news"
import NewsItem from "./NewsItem"

const NewsList = () => {
    return (
        <section className="mt-6 md:mt-12 lg:mt-28 px-[10px] grid md:px-[50px] xl:px-[100px]">
            <h2 className="mb-5 lg:mb-12 font-manrope text-3xl md:text-5xl leading-[72px] text-black">Latest news</h2>

            <ul className="flex justify-center sm:justify-normal flex-wrap gap-x-[50px] gap-y-10 md:gap-y-20">
                {news.map(news => (
                    <NewsItem key={news.id} {...news} />
                ))}
            </ul>

            <button className="w-fit mx-auto mt-16 lg:mt-24 py-4 px-14 font-bold text-xl border-2 border-dark-blue rounded-[56px] hover:bg-black hover:text-white transition-all duration-500" type="button">Load more</button>
        </section>
    )
}

export default NewsList