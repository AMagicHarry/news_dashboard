import Magazine from '../../../assets/images/magazine/magazine1.png';
import Adver from '../../../assets/images/advertisement/Adver1.png'
import Frame from '../../../assets/images/frame.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ForthComing = () => {
    return (
        <div className='flex flex-wrap justify-center items-center px-[100px]'>

            <div className='p-[20px] border-[#D5D5D5] rounded-md border-[1px] mr-[30px] relative mb-[50px]'>
                <img src={Adver} className='xl:h-[400px] lg:h-[300px] md:h-[200px]'></img>
                <img src={Frame} className='my-[15px]'></img>
                <button className='absolute top-1/2 right-[20px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowRight} /></button>
                <button className='absolute top-1/2 left-[20px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowLeft} /></button>
            </div>
            <div className='p-[25px] border-[#D5D5D5] rounded-md border-[1px] relative mb-[50px]'>
                <img src={Magazine} className='xl:h-[400px] lg:h-[300px] md:h-[200px]'></img>
                <img src={Frame} className='px-[25px] mt-[15px]'></img>
                <button className='absolute top-1/2 right-[30px] bg-white text-[#B6191F] p-1 shadow-lg rounded-full w-[40px] h-[40px]'><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>

    )
}
export default ForthComing;