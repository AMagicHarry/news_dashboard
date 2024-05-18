import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center px-[4rem] py-4 shadow-sm h-[10vh]'>
            <Link to="/" className='px-[1.5rem] duration-300 hover:text-red-700 text-[30px] font-bold text-red-600' >
                NEWS
            </Link>
            <div className=' hidden  sm:flex gap-[.4rem] items-center'>
                <Link to="/news" className='px-[1.5rem] duration-300 hover:text-red-700 text-lg '>
                    News
                </Link>
                <Link to="/register" className='py-2 duration-300 hover:text-red-700 px-8 rounded-md text-lg '>
                    SignUp
                </Link>
                <Link to="/login" className='py-2 duration-300 hover:text-red-700 px-8 rounded-md text-lg '>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default NavBar