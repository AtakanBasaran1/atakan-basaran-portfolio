"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import foto from './images/foto.png'

const Page = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div id='navbar' className='flex justify-center z-10 mt-[150px]'>
        <img className='flex w-[150px] sm:w-[250px] z-10 rounded-xl' src={foto.src} alt="" />
        <img className='flex w-[150px] sm:w-[250px] absolute ml-[50px] mt-[-10px] rounded-xl  ' src={foto.src} alt="" />
        <img className='flex w-[150px] sm:w-[250px] absolute ml-[-50px] mt-[10px] rounded-xl  ' src={foto.src} alt="" />
      </div>

      <div className=' z-[1000] relative flex justify-center items-center flex-col mt-[-70px] sm:mt-[-150px] '>
        <h1 id='hr1' className='text-[30px] sm:text-[100px] ml-[-100px] sm:ml-[-125px] mb-[-25px] sm:mb-[-40px]'>HELLO<span className='text-[20px] sm:text-[50px]'>,</span> I'M</h1>
        <h1 id='hr2' className=' text-[30px] sm:text-[100px] ml-[93px] sm:ml-[150px] mb-[-25px] sm:mb-[-40px]'>ATAKAN</h1>
        <h1 id='hr3' className='text-[30px] sm:text-[100px] ml-[70px]'>BASARAN</h1>
      </div>


    </div>
  )
}

export default Page;
