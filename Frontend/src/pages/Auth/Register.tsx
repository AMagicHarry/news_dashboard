import { Link } from 'react-router-dom';
import auth_img from '../../assets/images/enter.jpg';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/NavBar/NavBar";

const Register = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-around">
                <div className="flex flex-col items-center md:w-1/2">
                    <div className="mt-20 text-center items-center md:p-10 flex-col justify-center w-2/3 p-3 leading-8">
                        <p className="mb-2"> WELCOME TO </p>
                        <p className="text-red-700 text-2xl"> NEWS </p>
                        <div className='text-center flex-col w-full'>
                            <div className='flex-col w-80 text-center m-auto'>
                                <input
                                    className="w-full border-b border-gray-400 focus:border-blue-500 hover:border-blue-500 outline-none mt-5 p-2 rounded-md shadow-lg"
                                    placeholder="Email" />
                                <input type="password"
                                    className="w-full border-b border-gray-400 focus:border-blue-500 hover:border-blue-500 outline-none mt-5 p-2 rounded-md shadow-lg"
                                    placeholder="......" />
                                <input type="password"
                                    className="w-full border-b border-gray-400 focus:border-blue-500 hover:border-blue-500 outline-none mt-5 p-2 rounded-md shadow-lg"
                                    placeholder="......" />
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <Link to="/" className="bg-red-700 text-white w-80 mt-5 rounded-md py-1">Register</Link>
                                <p className='mt-5 text-black'>By signing up, I have read an agree to
                                    Terms and Privacy Policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={auth_img} alt="picture" className='w-full h-[80vh]'></img>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register;