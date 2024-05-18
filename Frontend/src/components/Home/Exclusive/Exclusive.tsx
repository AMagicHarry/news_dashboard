import Card from '../../../assets/images/card/card11.png';
import FlipCard from "../../common/FlipCard/FlipCard";
import Frame from "../../../assets/images/frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HotelCard = () => {
    return (
        <>
            <div className='flex relative justify-center'>
                <div className='px-2 text-center'>
                    <FlipCard title="ZAYA NURAI ISLAND RESORT" description="Celebrate the spirit of Ramadan with our mouthwatering lftar set menu at Hooked!" imageUrl={Card} />
                    {/* <button className='mt-6 bg-red-700 rounded-[5px] text-white w-40 p-2'>CLAIM</button> */}
                </div>
                <div className='px-2 text-center'>
                    <FlipCard title="IKOS RESORTS" description="When booking directly with Ikos Resorts, you will find even greater value with benefits such as your first child staying for free." imageUrl={Card} />
                    {/* <button className='mt-6 bg-red-700 rounded-[5px] text-white w-40 p-2'>CLAIM</button> */}
                </div>
                <div className='px-2 text-center'>
                    <FlipCard title="RAFFLES UDAIPUR" description="When you stay in one of our exquisite suites or villas, you will receive a free breakfast for two to start your day beautifully." imageUrl={Card} />
                    {/* <button className='mt-6 bg-red-700 rounded-[5px] text-white w-40 p-2'>CLAIM</button> */}
                </div>
                <div className='px-2 text-center'>
                    <FlipCard title="GRECIAN BAY HOTEL" description="Book 7 nights and more and save!" imageUrl={Card} />
                    {/* <button className='mt-6 bg-red-700 rounded-[5px] text-white w-40 p-2'>CLAIM</button> */}
                </div>
                <button className='absolute top-1/2 right-[80px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowRight} /></button>
                <button className='absolute top-1/2 left-[80px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowLeft} /></button>
            </div>
            <div>
                <img src={Frame} className='mx-auto mt-[50px]'></img>
            </div>
        </>
    )
}

export default HotelCard;