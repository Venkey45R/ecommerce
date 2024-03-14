import React from 'react';
import plan from '..//plan.webp';
import jewels from '../jewels.jpg';
import women from '../weoman.jpeg';
import ele from '../electroniccs.jpg';
import { Link } from 'react-router-dom';
function Category() {
  return (
    <div className='mx-0 md:mx-1'>
      <div className='bg-cover bg-center flex flex-col text-white justify-center items-center h-screen' style={{backgroundImage: `url(${plan})`}}>
        <h1 className='text-3xl md:text-7xl font-bold md:font-semibold -mt-20 md:-mt-40'>PLAN YOUR ADVENTURE</h1>
        <p className='text-2xl md:text-4xl font-semibold md:font-normal mt-5 md:mt-10'>MEN'S CLOTHING</p>
        <Link to={`/Filter/${encodeURIComponent("men's clothing")}`}>
          <button className='text-xl md:text-3xl font-normal border-2 md:border border-white hover:bg-white hover:text-black px-4 py-2 mt-6 md:mt-10'>SHOP NOW</button>
        </Link>
      </div>
      <div className='block md:flex bg-black h-5/6'>
        <div className='flex flex-col justify-center items-center w-full md:w-1/2'>
          <h1 className='text-5xl font-semibold text-white mt-8 md:mt-0'>NEW ARRIVALS</h1>
          <p className=' text-3xl text-white py-4'>Jewellery Collections</p>
          <Link to={`/Filter/${encodeURIComponent('jewelery')}`}>
            <button className='text-3xl font-normal border border-white text-white hover:bg-white hover:text-black px-4 py-2 mt-4 mb-8 md:mb-0'>SHOP NOW</button>
          </Link>
        </div>
        <div className='w-full md:w-1/2'>
          <img src={jewels} alt='jewellery' className='w-full h-full object-cover' />
        </div>
      </div>
        <div className='bg-cover bg-bottom md:bg-center flex flex-col text-white justify-center items-center h-screen' style={{backgroundImage: `url(${women})`}}>
          <h1 className='text-3xl md:text-7xl font-semibold relative -top-40 md:-top-20'>Discover Your Style Journey</h1>
          <p className='text-3xl md:text-4xl relative -top-24 md:-top-8'>WOMEN'S CLOTHING</p>
          <Link to={`/Filter/${encodeURIComponent("women's clothing")}`}>
            <button className='text-2xl md:text-3xl font-normal border border-white hover:bg-white hover:text-black px-4 py-2 relative -top-12 md:top-6'>SHOP NOW</button>
          </Link>
        </div>
      <div className='block md:flex bg-black h-5/6'>
      <div className='w-full md:w-1/2'>
          <img src={ele} alt='electronics' className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col justify-center items-center w-full md:w-1/2'>
          <h1 className='text-5xl font-semibold text-white mt-8 md:mt-0'>NEW ARRIVALS</h1>
          <p className=' text-3xl text-white py-4'>ELECTRONICS</p>
          <Link to={`/Filter/${encodeURIComponent('electronics')}`}>
            <button className='text-3xl font-normal border border-white text-white hover:bg-white hover:text-black px-4 py-2 mt-4 mb-8 md:mb-0'>SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
