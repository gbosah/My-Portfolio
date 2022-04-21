import React, { useState } from 'react';

export default function Contact() {
    const [contact, setContact] = useState({
        fullName: '',
        email:'',
        message:'' 
    });

    function handleChange(event) {
        const {name, value} = event.target
        setContact(prevContact => {
            return {
                ...prevContact,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }


    return(

    <div className='flex-shrink-0 bg-slate-800 py-20'>
    <div className='mt-24 flex flex-col items-center'>
        <form onSubmit={handleSubmit}>
            <div className='my-3 mb-5 text-center font-mono font-bold'>
                <h1 className='text-4xl text-slate-300'>Contact Me</h1>
            </div>
    
                <input type="fullName"
                placeholder='name' 
                name='fullName'
                onChange={handleChange}
                value={contact.fullName}
                className='mb-4 border-2 block px-3 py-2 border-slate-200 rounded-md text-lg shadow-lg placeholder-slate-500
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                />   


            <input type="email"
                placeholder='Enter your email' 
                name='email'
                onChange={handleChange}
                value={contact.email}
                className='mb-10 border-2 block px-3 py-2 border-slate-200 rounded-md text-lg shadow-lg placeholder-slate-500
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                />   


            <textarea
                placeholder='Type a message here...' 
                name='message'
                onChange={handleChange}
                value={contact.message}
                className='mb-4 border-2 block px-3 py-2 border-slate-200 rounded-md text-lg shadow-lg placeholder-slate-500
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                rows='4'
                cols='25'
                /> 
                <div className='border p-3 text-center rounded-full bg-pink-300 hover:bg-blue-200 active:bg-blue-700'>
                <button className='font-bold text-2xl'>Submit</button>
                </div>
        </form>
        <footer>
            
        </footer>
    </div>
</div>
    )
}