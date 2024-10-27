import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { changePasswordRequest } from "../api/auth";

const decodeToken = (token: string) => {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
};

const ChangePasswordComponent = () => {

    const { id } = useParams();
    
    const navigate = useNavigate();
    
    
    const token = localStorage.getItem('auth');
    let payload;
    
    if (token) {
        try {
            payload = decodeToken(token);
        } catch (err) {
            console.error('Error al decodificar el token:', err);
        }
    }

    const [alertShow, setAlertShow] = useState(false);
    const [passwords, setPasswords] = useState({
        current_password: "",
        new_password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPasswords((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const resAddUser = await changePasswordRequest(id || 0, passwords);
            if (resAddUser) navigate('/dashboard');
        } catch (error) {
            setAlertShow(true);
            console.log('Error al agregar usuario:', error);
        }
    };

  return (
    <article className='xl:w-[85%] w-full xl:ml-[15%] ml-0 md:p-6 space-y-6'>
        <NavBar />
        {
            alertShow && ( 
                <section onClick={() => setAlertShow(false)} className='w-[80%] h-screen absolute flex justify-center items-center z-10 bg-indigo-600 bg-opacity-25'>
                    <div className='h-1/2 w-3/4 bg-white shadow-2xl rounded-2xl flex flex-col space-y-6 justify-center items-center'>
                        <p className='text-4xl font-semibold'>Ups... Ha ocurrido un error al cambiar la contraseña</p>
                        <p className='text-4xl font-semibold'>Intentalo mas tarde</p>
                        <button onClick={() => {setAlertShow(false); navigate('/dashboard')}} className='px-6 py-3 rounded-full text-2xl font-semibold text-white bg-customColor hover:bg-customColorHover'>Aceptar</button>
                    </div>
                </section>
             )
        }
        <h4 className='text-4xl md:text-8xl font-extrabold text-customColor p-6'>Cambia tu contraseña</h4>
        <div className='flex justify-center items-center flex-col'>
            <form onSubmit={handleSubmit} className='bg-slate-50 p-6 md:w-auto rounded-2xl shadow-2xl hover:shadow-indigo-300 duration-500 space-y-6'>
                <div className='flex justify-center items-start flex-col gap-1'>
                    <label className='text-xl font-semibold text-slate-400'>Contraseña actual:</label>
                    <input 
                        type='password'
                        name='current_password' 
                        className='w-full py-1 pt-2 px-2 border-b-2 text-xl shadow-none outline-none bg-slate-50 border-b-slate-400 focus:border-b-slate-600 duration-300' 
                        placeholder='password' 
                        required
                        minLength={6}
                        value={passwords.current_password}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex justify-center items-start flex-col gap-1'>
                    <label className='text-xl font-semibold text-slate-400'>Nueva contraseña:</label>
                    <input 
                        type='password'
                        name='new_password' 
                        className='w-full py-1 pt-2 px-2 border-b-2 text-xl shadow-none outline-none bg-slate-50 border-b-slate-400 focus:border-b-slate-600 duration-300' 
                        placeholder='nueva contraseña' 
                        required
                        minLength={6}
                        value={passwords.new_password}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex justify-center items-start flex-col gap-1'>
                    <button className='text-2xl py-2 px-16 rounded-2xl font-semibold w-full text-white bg-customColor hover:bg-customColorHover duration-300'>Cambiar contraseña</button>
                </div>
            </form>
        </div><br /><br /><br />
    </article>
  )
}

export default ChangePasswordComponent
