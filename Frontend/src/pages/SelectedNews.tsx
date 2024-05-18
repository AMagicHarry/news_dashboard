import NavBar from "../components/NavBar/NavBar";
import MiniBar from "../components/MiniBar/MiniBar";

import Land from "../../src/assets/images/background.jpg"
import Footer from "../components/Footer/Footer";

const News = () => {
    return (
        <>
            <NavBar />
            <div className='relative'>
                <img className='h-[90vh] w-full' src={Land} alt="video" />
            </div>

            <MiniBar text="READ MORE" />
            <div className="px-[100px] py-[50px]">
                <div className="flex">
                    <div className="w-full p-4 border-t-8 border-l-8 border-[#B78628] mr-8">
                        <div className="flex items-center justify-center mb-5">

                            {/* <img src={Person} className="rounded-full w-[100px] h-[100px] mr-[20px]"></img> */}

                            <div className="p-2 text-[25px] text-center">
                                <p>What is this?</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Nec lectus integer nam donec sit. Lectus imperdiet erat arcu sed purus risus et suspendisse. Ut placerat massa sed a. Nunc elementum adipiscing ante et ultrices diam aliquet auctor.
                            Lorem ipsum dolor sit amet consectetur. Nec lectus integer nam donec sit. Lectus imperdiet erat arcu sed purus risus et suspendisse. Ut placerat massa sed a. Nunc elementum adipiscing ante et ultrices diam aliquet auctor.
                            Lorem ipsum dolor sit amet consectetur. Nec lectus integer nam donec sit. Lectus imperdiet erat arcu sed purus risus et suspendisse. Ut placerat massa sed a. Nunc elementum adipiscing ante et ultrices diam aliquet auctor.
                            Lorem ipsum dolor sit amet consectetur. Nec lectus integer nam donec sit. Lectus imperdiet erat arcu sed purus risus et suspendisse. Ut placerat massa sed a. Nunc elementum adipiscing ante et ultrices diam aliquet auctor.
                            Lorem ipsum dolor sit amet consectetur. Nec lectus integer nam donec sit. Lectus imperdiet erat arcu sed purus risus et suspendisse. Ut placerat massa sed a. Nunc elementum adipiscing ante et ultrices diam aliquet auctor.
                            Lorem ipsum dolor sit amet consectetur. Nec lectus integer nam donec sit. Lectus imperdiet erat arcu sed purus risus et suspendisse. Ut placerat massa sed a. Nunc elementum adipiscing ante et ultrices diam aliquet auctor.
                            Lorem ipsum dolor sit amet consectetur. Nec lectus integer nam donec sit. Lectus imperdiet erat arcu sed purus risus et suspendisse. Ut placerat massa sed a. Nunc elementum adipiscing ante et ultrices diam aliquet auctor.
                            Lorem ipsum dolor sit amet consectetur. Nec lectus integer nam donec sit. Lectus imperdiet erat arcu sed purus risus et suspendisse. Ut placerat massa sed a. Nunc elementum adipiscing ante et ultrices diam aliquet auctor.
                        </p>
                        <div className="flex items-center mt-5">
                            <div className="p-2 mr-6 bg-[#846316] rounded-md text-white">7.9</div>
                            <p className="mr-6">Good</p>
                            <p className="mr-6 text-[#737373]">1,100 reviews</p>
                            <a className="text-[#846316]">Read all reviews</a>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default News;