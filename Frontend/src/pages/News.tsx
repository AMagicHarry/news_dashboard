import MiniBar from "../components/MiniBar/MiniBar";
import NavBar from "../components/NavBar/NavBar";
import NewsCard from "../components/NewsCard";
import Pagination from "../components/Pagenation/Pagenation";
import Footer from "../components/Footer/Footer";

import Land from "../../src/assets/images/background.jpg"
import news1 from "../../src/assets/images/news/news1.png"
import news2 from "../../src/assets/images/news/news2.png"
import news3 from "../../src/assets/images/news/news3.png"

const News = () => {
    return (
        <>
            <NavBar />
            <div className='relative'>
                <img className='h-[90vh] w-full' src={Land} alt="video" />
            </div>

            <MiniBar text="MATCHED NEWS" />
            <div>
                <div className="justify-center flex relative mb-[130px]">

                    <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={news1} date="15 May 2020 9:00 am" />
                    <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={news1} date="15 May 2020 9:00 am" />
                    <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={news2} date="15 May 2020 9:00 am" />
                    <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={news3} date="15 May 2020 9:00 am" />
                </div>

            </div>
            <div>
                <div className="justify-center flex relative mb-[130px]">

                    <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={news1} date="15 May 2020 9:00 am" />
                    <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={news1} date="15 May 2020 9:00 am" />
                    <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={news2} date="15 May 2020 9:00 am" />
                    <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={news3} date="15 May 2020 9:00 am" />
                </div>
            </div>
            <Pagination />
            <div className="mb-[50px]"></div>
            <Footer />
        </>
    )
}

export default News;