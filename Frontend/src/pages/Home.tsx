import MiniBar from "../components/MiniBar/MiniBar";
import NavBar from "../components/NavBar/NavBar";
import Land from "../components/Home/Land/Land"
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer/Footer";

import News1 from "../assets/images/news/news1.png"
import News2 from "../assets/images/news/news2.png"
import News3 from "../assets/images/news/news3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
    return (
        <>
            <NavBar />
            <Land />
            <div className="flex bg-[#F7F7F7] pt-[50px] justify-center">
                <input className="bg-[#FFFFFF] shadow-lg rounded-md p-4 mr-10 text-black text-[18px]" type="text" placeholder="News Name"></input>
                <button className="bg-[#D80F0F] px-[40px] rounded-md text-white text-[20px]">Search</button>
            </div>

            <MiniBar text="NEWLY LISTED NEWS" />
            <div className="flex justify-center relative mt-[30px]">
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News1} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News2} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News3} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News1} date="15 May 2020 9:00 am" />
                <button className='absolute top-1/2 right-[80px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowRight} /></button>
                <button className='absolute top-1/2 left-[80px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowLeft} /></button>
            </div>
            <div className="mt-[80px]"></div>

            <MiniBar text="BEST NEWS" />
            <div className="flex justify-center relative mt-[30px]">
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News1} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News2} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News3} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News1} date="15 May 2020 9:00 am" />
                <button className='absolute top-1/2 right-[80px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowRight} /></button>
                <button className='absolute top-1/2 left-[80px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowLeft} /></button>
            </div>

            <div className="flex px-[100px] mt-[130px] mb-[30px] text-[20px] justify-between">
                <p className=" text-[#846316]">HOTEL LATEST NEWS</p>
            </div>
            <div className="flex justify-center relative">
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News1} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News2} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News3} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News1} date="15 May 2020 9:00 am" />
                <button className='absolute top-1/2 right-[80px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowRight} /></button>
                <button className='absolute top-1/2 left-[80px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowLeft} /></button>
            </div>

            <div className="flex px-[100px] mt-[130px] mb-[30px] text-[20px] justify-between">
                <p className=" text-[#846316]">GENERAL NEWS</p>
            </div>
            <div className="flex justify-center relative mt-[30px]">
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News1} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News2} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News3} date="15 May 2020 9:00 am" />
                <NewsCard title="What is this?" description="We think this is your favorite ..." name="Thomas" imageUrl={News1} date="15 May 2020 9:00 am" />
                <button className='absolute top-1/2 right-[80px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowRight} /></button>
                <button className='absolute top-1/2 left-[80px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowLeft} /></button>
            </div>
            <div className="mt-[130px]"></div>

            <Footer />
        </>
    )
}

export default Home;