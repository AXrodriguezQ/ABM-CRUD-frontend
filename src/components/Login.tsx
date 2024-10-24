import React, { useState } from 'react';
import miImagen from '../assets/logo_google.webp';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías agregar la lógica para manejar el inicio de sesión
        console.log('Email:', email);
        console.log('Password:', password);
    }

  return (
    <section className='w-full h-screen flex justify-center items-center bg-slate-50'>
        <article className='h-[75vh] border-r border-r-slate-300 flex justify-between bg-white items-start flex-col gap-16 pr-24 rounded-l-2xl'>
            <div className='p-6'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                </svg>
            </div>
            <div className='p-4'>
                <h5 className='text-8xl font-extrabold text-customColor'>Tus usuarios</h5>
                <p className='text-[5rem] font-semibold'>sistema ABM</p>
            </div>
            <div className='p-4'>
                <p className='text-4xl'>El lugar <b className='font-normal text-customColor'>ideal</b> para manejar tus <b className='font-normal text-customColor'>usuarios</b></p>
            </div>
        </article>
        <article className='h-[75vh] flex justify-evenly items-start flex-col w-[30rem] bg-white p-8 rounded-r-2xl'>
            <div className=''>
                <h5 className='text-[5rem] font-bold mb-6 text-customColor'>Hola!</h5>
            </div>
            <form className='w-full space-y-6' onSubmit={handleSubmit}>
                <div className='flex justify-center items-start flex-col gap-1'>
                    <label className='text-xl font-semibold text-slate-400'>Correo:</label>
                    <input 
                        type='email' 
                        name='email' 
                        className='w-full py-1 pt-2 px-2 border-b-2 text-xl shadow-none outline-none border-b-slate-400 focus:border-b-slate-600 duration-300' 
                        placeholder='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex justify-center items-start flex-col gap-1'>
                    <label className='text-xl font-semibold text-slate-400'>Contraseña:</label>
                    <input 
                        type='password' 
                        name='password' 
                        className='w-full py-1 pt-2 px-2 border-b-2 text-xl shadow-none outline-none border-b-slate-400 focus:border-b-slate-600 duration-300' 
                        placeholder='password'
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex justify-center items-center w-full flex-col gap-4'>
                    <button className='py-2 px-40 text-xl font-semibold text-white rounded-3xl bg-customColor hover:bg-customColorHover duration-300'>Ingresar</button>
                    <button className='py-2 px-[5.5rem] text-xl font-normal text-slate-800 rounded-3xl border-2 border-slate-400 hover:border-slate-600 hover:text-slate-950 duration-300 flex justify-center items-center gap-4'>
                        <img className='w-5 h-5' src={miImagen} alt="Descripción de la imagen" />
                        Ingresar con Google
                    </button>
                </div>
            </form>
        </article>
    </section>
  )
}

export default Login
