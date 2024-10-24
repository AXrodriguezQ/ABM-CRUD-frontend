import React, { useState, useEffect } from 'react';
import { userByIdRequest } from '../api/auth'
import { updateUserRequest } from '../api/auth'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar'


const UpdateUserComponent = () => {

    const { id } = useParams();

    console.log(id)

    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        created_by: '',
        is_restricted: 'Valido',
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await userByIdRequest(id);
                setData(res.data); 
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    },[id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(data)

        try {
            const resAddUser = await updateUserRequest(id,data);
            alert('User updated successfully!')
        } catch (error) {
            alert('Error al editar el usuario, intentalo nuevamente')
            console.log('Error al agregar usuario:', error);
        }
    };

    return (
    <section className='flex justify-center items-center'>
        <NavBar />
        <article className='w-[85%] ml-[15%] p-6 space-y-12'>
            <h4 className='text-8xl font-extrabold text-customColor'>Actualiza un usuario!</h4>
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
                        <label className='text-xl font-semibold text-slate-400'>Contraseña:</label>
                        <input 
                            type='text' 
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
                    <div className='flex justify-center items-start flex-col gap-1'>
                        <button className='text-2xl py-2 rounded-2xl font-semibold w-full text-white bg-customColor hover:bg-customColorHover duration-300'>Editar usuario</button>
                    </div>
               </form>
            </div>
        </article>
    </section>
  )
}

export default UpdateUserComponent
