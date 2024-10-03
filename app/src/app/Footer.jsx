import React from 'react';

const Footer = () => {
    return (
        <div id='footer' className='flex flex-row justify-between items-center bg-black text-white w-full p-2 fixed bottom-0'>


            <div className='flex justify-start text-start items-start'>
                <h1 className='text-[10px] sm:text-[15px] ml-5 '>FRONT END SOFTWARE DEVELOPER</h1>
            </div>


            <div className='flex justify-end flex-row'>
                <h1 className='text-[10px] sm:text-[15px] cursor-pointer mr-5 sm:mr-8'>©2024 </h1>

            </div>
        </div>
    );
}

export default Footer;
