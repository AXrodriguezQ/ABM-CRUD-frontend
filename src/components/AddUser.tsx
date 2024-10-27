import { useState } from 'react';
import { addUserRequest } from '../api/auth';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const decodeToken = (token: string) => {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
};

const AddUserComponent = () => {

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
    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        is_restricted: 'Valid',
        created_by: payload ? parseInt(payload.sub) : null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const resAddUser = await addUserRequest(data);
            if (resAddUser) navigate('/dashboard');
        } catch (error) {
            setAlertShow(true);
            console.log('Error al agregar usuario:', error);
        }
    };

    return (
        <section className='flex justify-center items-center'>
            <NavBar />
            {
                alertShow && ( 
                    <section onClick={() => setAlertShow(false)} className='xl:w-[85%] w-full xl:ml-[15%] h-screen absolute flex justify-center items-center z-10 bg-indigo-600 bg-opacity-25'>
                        <div className='h-1/2 w-3/4 bg-white shadow-2xl rounded-2xl flex flex-col space-y-6 justify-center items-center'>
                            <p className='text-4xl font-semibold'>Ups... Ha ocurrido un error al crear el usuario</p>
                            <p className='text-4xl font-semibold'>Intentalo mas tarde</p>
                            <button onClick={() => {setAlertShow(false); navigate('/dashboard')}} className='px-6 py-3 rounded-full text-2xl font-semibold text-white bg-customColor hover:bg-customColorHover'>Aceptar</button>
                        </div>
                    </section>
                 )
            }
            <article className='xl:w-[85%] w-full xl:ml-[15%] ml-0 md:p-6 space-y-6'>
                <h4 className='text-4xl md:text-8xl font-extrabold text-customColor p-6'>¡Agrega un usuario!</h4>
                <div className='flex justify-center items-center flex-col'>
                    <form onSubmit={handleSubmit} className='bg-slate-50 p-6 w-full md:w-auto rounded-2xl shadow-2xl hover:shadow-indigo-300 duration-500 space-y-6'>
                        <div className='md:flex-row flex-col space-y-2 justify-center items-center gap-4'>
                            <div className='flex justify-center items-start flex-col gap-1'>
                                <label className='text-xl font-semibold text-slate-400'>Nombre:</label>
                                <input 
                                    type='text' 
                                    name='name' 
                                    className='w-full py-1 pt-2 px-2 border-b-2 text-xl shadow-none outline-none bg-slate-50 border-b-slate-400 focus:border-b-slate-600 duration-300' 
                                    placeholder='name'
                                    required
                                    minLength={3}
                                    value={data.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex justify-center items-start flex-col gap-1'>
                                <label className='text-xl font-semibold text-slate-400'>Apellido:</label>
                                <input 
                                    type='text' 
                                    name='lastname' 
                                    className='w-full py-1 pt-2 px-2 border-b-2 text-xl shadow-none outline-none bg-slate-50 border-b-slate-400 focus:border-b-slate-600 duration-300' 
                                    placeholder='lastname' 
                                    required
                                    minLength={4}
                                    value={data.lastname}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='flex justify-center items-start flex-col gap-1'>
                                <label className='text-xl font-semibold text-slate-400'>Correo:</label>
                                <input 
                                    type='email' 
                                    name='email' 
                                    className='w-full py-1 pt-2 px-2 border-b-2 text-xl shadow-none outline-none bg-slate-50 border-b-slate-400 focus:border-b-slate-600 duration-300' 
                                    placeholder='email'
                                    required
                                    value={data.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex justify-center items-start flex-col gap-1'>
                                <label className='text-xl font-semibold text-slate-400'>Teléfono:</label>
                                <input 
                                    type='text' 
                                    name='phone' 
                                    className='w-full py-1 pt-2 px-2 border-b-2 text-xl shadow-none outline-none bg-slate-50 border-b-slate-400 focus:border-b-slate-600 duration-300' 
                                    placeholder='phone' 
                                    required
                                    minLength={10}
                                    value={data.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='flex justify-center items-start flex-col gap-1'>
                            <label className='text-xl font-semibold text-slate-400'>Contraseña:</label>
                            <input 
                                type='password'
                                name='password' 
                                className='w-full py-1 pt-2 px-2 border-b-2 text-xl shadow-none outline-none bg-slate-50 border-b-slate-400 focus:border-b-slate-600 duration-300' 
                                placeholder='password' 
                                required
                                minLength={6}
                                value={data.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex justify-center items-start flex-col gap-1'>
                            <button className='text-2xl py-2 rounded-2xl font-semibold w-full text-white bg-customColor hover:bg-customColorHover duration-300'>Agregar usuario</button>
                        </div>
                    </form>
                </div><br /><br /><br />
            </article>
        </section>
    );
};

export default AddUserComponent;
