import checkSession from '../lib/guard'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    checkSession()

    const navigate = useNavigate();

    const handleAddUser = () => {
        navigate('/addUser');
    };

    const handleDashboard = () => {
        navigate('/dashboard');
    };

    const signOut = () => {
        localStorage.clear();
        navigate('/');
    };

  return (
    <nav className='w-[15%] fixed top-0 left-0 h-screen bg-customColor flex justify-between items-start flex-col p-4 text-white'>
        <div className='flex justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
            <h1 className='text-4xl font-semibold'>AMB</h1>
        </div>
        <ul className='flex justify-start items-start flex-col w-full h-3/4 gap-2'>
            <li onClick={handleDashboard} className='text-2xl font-semibold cursor-pointer hover:text-black duration-300'>Inicio</li>
            <li onClick={handleAddUser} className='text-2xl font-semibold cursor-pointer hover:text-black duration-300'>Crear usuario</li>
        </ul>
        <ul>
            <li onClick={signOut} className='text-2xl font-semibold cursor-pointer hover:text-black duration-300'>Salir</li>
        </ul>
    </nav>
  )
}

export default NavBar
