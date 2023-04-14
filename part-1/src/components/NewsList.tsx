import { news } from "../data/news"
import NewsItem from "./NewsItem"

const NewsList = () => {
    return (
        <section className="mt-24 px-[100px] grid">
            <h2 className="mb-10 font-manrope text-5xl leading-[72px] text-black">Latest news</h2>

            <ul className="flex flex-wrap gap-x-[50px] gap-y-20">
                {news.map(news => (
                    <NewsItem key={news.id} {...news} />
                ))}
            </ul>

            <button className="w-fit mx-auto mt-24 py-4 px-14 font-bold text-xl border-2 border-dark-blue rounded-[56px]" type="button">Load more</button>
        </section>
    )
}

export default NewsList