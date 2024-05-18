interface Props {
  description: string;
  name: string;
  imageUrl: string;
  date: string;
  title: string;
}

const FlipCard: React.FC<Props> = ({ description, name, imageUrl, date, title }) => {
  return (
    <>
      <div className="relative p-2">
        <img className="h-[350px] w-[300px] rounded-md" src={imageUrl}></img>
        <div className="absolute -bottom-[80px] w-[300px] text-start">
          <div className="bg-black w-5/6 backdrop-filter backdrop-blur-lg bg-opacity-20 px-[15px] py-[20px] text-white mx-auto rounded-md shadow-md">
            <p className="">{description}</p>

            <p className="mt-2 bg-white text-[#846316] py-[4px] rounded-md text-center">{title}</p>
            <p className="mt-2 bg-[#846316] py-[4px] rounded-md text-center">{name}</p>
            <p className="mt-1 ">{date}</p>
            <a className="cursor-pointer text-[#846316]" href="/selected-news">READ MORE</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default FlipCard