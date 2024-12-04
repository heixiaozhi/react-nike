import React from 'react'
import Buttton from '../components/Buttton'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <>
      <section id='about-us' className='max-container flex justify-between items-center gap-10 max-lg:flex-col'>
        <div className='flex-1 flex flex-col'>
          <h2 className='font-palanquin capitalize font-bold text-4xl lg:max-w-lg'>
            we provide you
            <span className='text-coral-red'> super quality </span>
            shoes
          </h2>
          <p className='mt-4 info-text'>
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className='mt-6 info-text'>
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className='mt-11'>
            <Buttton label='View details' />
          </div>
        </div>
        {/* 图片大于容器宽度时，最大宽度为容器宽度，否则就是设置的大小 */}
        <div className='flex-1 flex items-center justify-center'>
          <img
            src={shoe8}
            alt='shoe8'
            width={570}
            height={522}
            className='object-contain'
          />
        </div>
      </section>
    </>
  )
}

export default SuperQuality
