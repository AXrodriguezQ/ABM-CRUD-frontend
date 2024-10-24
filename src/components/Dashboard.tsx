import React, { useState, useEffect } from 'react';
import { userRequest, deleteUserRequest } from '../api/auth'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'

const DashboardComponent = () => {

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await userRequest();
                setData(res.data); 
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const handleEditUser = (id) => {
        navigate(`/updateUser/${id}`);
    };

    const deleteUser = async (id) => {
        try {
            const res = confirm('¿Estas seguro de eliminar este usuario?');
            if (res) {
                await deleteUserRequest(id);
                setData(data.filter(user => user.id !== id));
                console.log(`Usuario con ID ${id} eliminado.`);
            } else {
                return
            }
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <section className='flex justify-center items-center'>
        <NavBar />
        <article className='w-[85%] ml-[15%] p-6 space-y-4'>
            <h4 className='text-8xl font-extrabold text-customColor'>Hola de nuevo!</h4>
            <p className='text-4xl font-semibold'>Desde aqui puedes gestionar todos los usuarios.</p>
            <div className='flex justify-center items-start flex-col '>
                {
                    data.length === 0 ? (
                            <div className="w-full flex justify-center items-center mt-52">
                                <div className="w-28 h-28 border-4 border-dashed border-blue-500 rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            data.map(element => (
                                <div key={element.id} className='flex justify-center items-center p-2 rounded-2xl gap-4 mt-6 bg-slate-50'>
                                    <p className='text-2xl font-semibold w-8'>{element.id}</p>
                                    <p className='text-2xl font-semibold w-40'>{element.name}</p>
                                    <p className='text-2xl font-semibold w-40'>{element.lastname}</p>
                                    <p className='text-2xl font-semibold w-80'>{element.email}</p>
                                    <p className='text-2xl font-semibold w-36'>{element.phone}</p>
                                    <p className='text-2xl font-semibold w-36'>{element.is_restricted}</p>
                                    <div className='text-2xl font-semibold w-40 flex justify-center items-center gap-4'>
                                        <button onClick={() => handleEditUser(element.id)} className='p-3 bg-yellow-300 hover:bg-yellow-400 duration-300 rounded-xl'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                            </svg>
                                        </button>
                                        <button onClick={() => deleteUser(element.id)} className='p-3 bg-red-300 hover:bg-red-400 duration-300 rounded-xl'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    }
            </div>
        </article>
    </section>
  )
}

export default DashboardComponent
