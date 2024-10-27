import { useState, useEffect } from 'react';
import { userByIdRequest, updateUserRequest } from '../api/auth';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from './NavBar';

const UpdateUserComponent = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [alertShow, setAlertShow] = useState(false);
    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        created_by: '',
        is_restricted: '',
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await userByIdRequest(id || '');
                setData(res.data); 
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(data)

        try {
            const resAddUser = await updateUserRequest(id || '', data);
            if (resAddUser) navigate('/dashboard');
        } catch (error) {
            alert('Error al editar el usuario, intentalo nuevamente');
            console.log('Error al agregar usuario:', error);
        }
    };

    const handlePasswordUser = (id: number | string | undefined) => {
        navigate(`/changePassword/${id}`);
    };

    return (
        <section className='flex justify-center items-center'>
            <NavBar />
            {
                alertShow && ( 
                    <section onClick={() => setAlertShow(false)} className='xl:w-[85%] w-full xl:ml-[15%] ml-0 h-screen absolute flex justify-center items-center z-10 bg-indigo-600 bg-opacity-25'>
                        <div className='h-1/2 w-3/4 bg-white shadow-2xl rounded-2xl flex flex-col space-y-6 justify-center items-center'>
                            <p className='text-4xl font-semibold'>Ups... Ha ocurrido un error inseperado</p>
                            <p className='text-4xl font-semibold'>Intentalo mas tarde</p>
                            <button onClick={() => {setAlertShow(false); navigate('/dashboard')}} className='px-6 py-3 rounded-full text-2xl font-semibold text-white bg-customColor hover:bg-customColorHover'>Aceptar</button>
                        </div>
                    </section>
                 )
            }
            <article className='xl:w-[85%] w-full xl:ml-[15%] ml-0 md:p-6 space-y-6'>
                <h4 className='text-4xl md:text-8xl font-extrabold text-customColor p-6'>Actualizar usuario!</h4>
                <div className='flex justify-center items-center flex-col'>
                    <form onSubmit={handleSubmit} className='bg-slate-50 p-6 rounded-2xl shadow-2xl hover:shadow-indigo-300 duration-500 space-y-6'>
                        <div className='flex justify-center items-center gap-4'>
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
                                <label className='text-xl font-semibold text-slate-400'>Telefono:</label>
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
                            <label className='text-xl font-semibold text-slate-400'>Estado del usuario:</label>
                            <select 
                                name='is_restricted' 
                                className='w-full py-1 pt-2 px-2 border-b-2 text-xl shadow-none outline-none bg-slate-50 border-b-slate-400 focus:border-b-slate-600 duration-300' 
                                required
                                value={data.is_restricted}
                                onChange={handleChange}
                            >
                                <option value='Valido'>Valido</option>
                                <option value='Restringido'>Restringido</option>
                            </select>
                        </div>
                        <div className='flex justify-center items-start flex-col gap-4'>
                            <button onClick={() => handlePasswordUser(id)} className='text-2xl py-2 rounded-2xl font-semibold w-full text-white bg-orange-400 hover:bg-orange-600 duration-300'>Cambiar contraseña</button>
                            <button className='text-2xl py-2 rounded-2xl font-semibold w-full text-white bg-customColor hover:bg-customColorHover duration-300'>Editar usuario</button>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    );
};

export default UpdateUserComponent;
