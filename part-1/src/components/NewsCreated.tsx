type NewsCreatedProps = {
    category: string,
    date: string,
}

const NewsCreated = ({ category, date }: NewsCreatedProps) => {
    return (
        <div className="flex gap-3">
            <p className="text-base leading-7 font-bold">{category}</p>
            <p className="text-base leading-7 text-gray">{date}</p>
        </div>
    )
}

export default NewsCreated