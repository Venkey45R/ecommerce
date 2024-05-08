import React, { useEffect, useRef, useState } from 'react';
import sale from '../summer.avif';
import bg from '../offerbg.jpeg';
import { isVisible } from '@testing-library/user-event/dist/utils';
function Offers() {
  const [timer, setTimer] = useState('00:00:00');
  const timerRef = useRef();
  function getDeadTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 172800);
    return deadline;
  }

  function getTimeRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date());
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { total, hours, minutes, seconds };
  }

  function startTimer(e) {
    const intervalId = setInterval(() => {
      let { total, hours, minutes, seconds } = getTimeRemaining(e);
      if (total >= 0) {
        setTimer(
          (hours > 9 ? hours : '0' + hours) + '\t : '+
          (minutes > 9 ? minutes : '0' + minutes) +'\t : ' +
          (seconds > 9 ? seconds : '0' + seconds)
        );
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    timerRef.current = intervalId;
  }

  useEffect(() => {
    const deadline = getDeadTime();
    startTimer(deadline);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className='block overflow-auto bg-black md:overflow-hidden'>
    <div className='h-screen pt-16 bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url(${bg})`}}>
      <div className='flex justify-center rounded-xl max-w-6xl mx-14 h-auto relative left-0 md:-left-20'>
        <div className='block ml-14 md:ml-10 mt-60 md:mt-0 relative left-44 md:left-10'>
          <h1 className='text-3xl md:text-5xl font-bold font-serif text-white pb-6'>Black Friday Sale</h1>
          <h1 className='text-xl md:text-3xl font-bold text-red-500 pb-6'>UPTO</h1>
          <h1 className='text-3xl md:text-5xl font-bold text-red-500 pb-6'>20% OFF</h1>
          <div className='mt-3 md:mt-7 block md:flex'>
            <button className='bg-red-900 text-white rounded-xl font-bold text-lg mb-4 mr-8 px-6 py-2'>Get Started</button>
            <div className='block'>
              <h3 className='text-4xl text-white'>{timer}</h3>
              <h2 className='text-base text-white'>Hours : Minutes : Seconds</h2>
            </div>
          </div>
          <div className=' mx-0'>
          <div className='flex flex-col justify-center mt-8 md:mt-10 py-6 -ml-20 md:-ml-0 '>
            <div className='group h-96 w-96 bg-black [perspective:1000px] mx-10 md:mx-0'>
              <div className='h-2/3 w-11/12 border ml-2 md:ml-0 border-white bg-gray-900 relative rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <div className='top-0 inset-0 flex justify-center items-center'>
                  <div className='block text-white'>
                    <div className='bg-red-900 px-12 border-4 border-red-900 rounded-t-xl py-3'>
                      <h1 className=' text-xl md:text-2xl font-bold text-white'>Prime Members Offers:</h1>
                    </div>
                    <div className='flex justify-center'>
                      <div className='block'>
                        <h2 className='text-lg font-semibold py-2'>20% + 5% offer on all products</h2>
                        <h2 className='text-lg font-semibold py-1'>Free one day Delivery</h2>
                        <h2 className='text-lg font-semibold py-2'>Early Access to deals</h2>
                        <button className='px-8 py-3 rounded-xl bg-red-900 text-white'>prime membership sale starts now!!!</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative -top-60 inset-0 h-full w-full border border-white text-center text-white flex justify-center items-center rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <div className='block'>
                    <h1 className='text-2xl font-bold py-2'>Join Prime Today</h1>
                    <button className='px-4 py-2 text-white border border-white rounded-xl mt-6'>Join Prime Membership now</button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' relative -left-60 md:left-60 top-0 md:top-10'>
          <img src={sale} alt='summer sale' className=' min-w-80'/>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Offers;
