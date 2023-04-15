import { Link } from "react-router-dom"
import NewsCreated from "./NewsCreated"
import Author from "./Author"

type NewsItemProps = {
    id: number,
    imgSrc: string,
    category: string,
    createdAt: string,
    title: string,
    authorImg: string,
    authorName: string,
}

const NewsItem = ({ id, imgSrc, category, createdAt, title, authorImg, authorName }: NewsItemProps) => {
    return (
        <li className="max-w-[250px] lg:max-w-[300px] w-full flex hover:scale-105 transition-all duration-500">
            <Link to={`/news/${id}`} className="flex flex-col flex-grow">
                <img src={imgSrc} alt={authorName} className="h-[210px] mb-6 rounded-3xl object-cover" />
                <NewsCreated category={category} date={createdAt} />
                <h3 className="mt-3 mb-5 flex-grow text-xl leading-8 text-black">{title}</h3>
                <Author authorImg={authorImg} authorName={authorName} />
            </Link>
        </li>
    )
}

export default NewsItem