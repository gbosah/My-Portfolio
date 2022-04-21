import React from 'react';

export default function Footer() {
    return (
            <footer className='flex-grow bg-gray-600'>
                <div className='flex justify-between mx-2 space-x-2'>
                <h2 className='items-start text-white'> <i className="fa-solid fa-copyright text-slate-200 p-1"></i>{new Date().getFullYear()}, Bosah Chinedu</h2>
                <div className='px-3 text-3xl space-x-5'>
                <i className="fa-brands fa-facebook bg-white-700 text-blue-500"></i>
            <i className="fa-brands fa-linkedin bg-white-700 text-blue-500"></i>
            <i className="fa-brands fa-twitter bg-white-700 text-blue-400"></i>
                </div>
                </div>
            </footer>
    )
}