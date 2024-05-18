import Magazine from '../../../assets/images/magazine/magazine1.png';
import Adver from '../../../assets/images/advertisement/Adver1.png'

const Magazines = () => {
    return (
        <div className="w-full bg-red-700 border-t-2 h-full flex flex-wrap justify-center items-start text-center">


            <div className='flex mt-[80px] justify-center items-center px-[100px]'>
                <div className='p-2 mr-10 w-[400px] '>

                    <p className='text-white text-start'>Luxury Hotels, a renowned global brand founded in England 17 years ago, is currently present in 89 countries. We provide Luxury Hotels for affluent travellers through our online platform and in print and digital formats. Each Edition is accessible for free download on 5 different platforms and attracts 4-5 million online readers annually.<br></br><br></br>Through our Printed Edition Rotation Program, your hotel will be featured as one of the top Luxury Hotels and will ensure a continuous influx of bookings and a consistent occupancy rate of 800,000 to 1 million tourists throughout the year, all without any commission fees.</p>
                    <button className='text-white bg-[#8B0000] border-white border-[1px] px-4 py-2 rounded-md mt-6'>EXPLORE MAGAZINES</button>
                </div>
                <div className='h-[500px] w-[350px] z-0'>
                    <img src={Adver} className='h-full'></img>
                </div>
                <div className='h-full w-[400px] z-100 -ml-10'>
                    <img src={Magazine} className='h-full'></img>
                </div>
            </div>

        </div>
    )
}
export default Magazines;