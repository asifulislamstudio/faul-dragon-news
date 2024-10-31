

const LeftNewsCard = ({news}) => {
    const {title, thumbnail_url, author} = news
    return (
        <div>
            <div className="max-w-fit m-2 space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px]">
          <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" src={thumbnail_url} alt="card navigate ui" />
          <div className="grid gap-2">
            <h1 className="text-med font-semibold ">{title.slice(0,50)}</h1>
          </div>
          <div className="flex gap-4">
            <h4>{author.published_date}</h4>
          </div>
      </div>
        </div>
    );
};

export default LeftNewsCard;