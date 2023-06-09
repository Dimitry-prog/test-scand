type AuthorProps = {
    authorImg: string,
    authorName: string,
}

const Author = ({ authorImg, authorName }: AuthorProps) => {
    return (
        <div className="flex gap-3">
            <img src={authorImg} alt={authorName} className="w-8 h-8 object-cover" />
            <p className="text-base leading-7">{authorName}</p>
        </div>
    )
}

export default Author