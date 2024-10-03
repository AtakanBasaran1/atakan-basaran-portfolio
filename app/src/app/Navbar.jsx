'use client';
import React from 'react';

const Navbar = () => {

    const instagramLink = 'https://www.instagram.com/atakanzl/';

    const ınsta = () => {
        window.open(instagramLink, '_blank');
    };

    return (
        <div id='navbar' className='mt-2 flex flex-row justify-end items-center'>
            <div className='flex justify-end flex-row'>
                <h1 onClick={ınsta} className='text-[10px] sm:text-[15px] cursor-pointer mr-5 sm:mr-8'>INSTAGRAM</h1>
                <h1 onClick={() => alert('COMING SOON!')} className='text-[10px] sm:text-[15px] cursor-pointer mr-5 sm:mr-8'>ABOUT</h1>
                <h1 onClick={() => alert('COMING SOON!')} className='text-[10px] sm:text-[15px] cursor-pointer mr-5 sm:mr-8'>CONTACT</h1>
            </div>
        </div>
    );
}

export default Navbar;
