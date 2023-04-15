import { Outlet } from "react-router-dom"
import { news } from "../data/news"
import NewsItem from "../components/NewsItem"


const News = () => {
    return (
        <section>
            <h2 className="my-12 font-bold text-3xl">Some latest news</h2>
            <ul className="flex justify-center sm:justify-normal flex-wrap gap-x-[50px] gap-y-10 md:gap-y-20">
                {news.map(news => (
                    <NewsItem key={news.id} {...news} />
                ))}
            </ul>
            <Outlet />
        </section>
    )
}

export default News