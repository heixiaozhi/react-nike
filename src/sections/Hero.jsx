import React, { forwardRef, useState } from 'react'
import Buttton from '../components/Buttton'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'

import ShowCard from '../components/ShowCard'

const Hero = forwardRef((props, ref) => {
  const [bigShowImg, setBigShowImg] = useState(shoes[0])

  return (
    <>
      {/* min-h-screen m-height:100vh */}
      <section
        ref={ref}
        id='home'
        className='max-container min-h-screen w-full flex flex-col xl:flex-row justify-center gap-10'
      >
        {/* w-2/5 宽度的40% 
          xl: min-width:1280
          max-xx not all min-width
        */}
        <div className='relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28'>
          <p className='font-montserrat text-xl text-coral-red'>
            Our Summer collections
          </p>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            {/* white-space 
                在这种情况下，文本不会换行，
                所有的空格会被合并成一个空格，直到文本超出容器宽度
            */}
            <span className='relative pr-10 xl:bg-white xl:whitespace-nowrap z-8'>
              The New Arrival
            </span>
            <br />
            <span className='inline-block mt-3 text-coral-red'>Nike</span> Shoes
          </h1>
          {/* max-w max-width */}
          <p className='mt-6 mb-14 font-montserrat text-slate-gray text-lg leading-8 sm:max-w-sm'>
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Buttton label='Shop now' iconURL={arrowRight} />
          <div className='w-full flex justify-start items-start flex-wrap gap-16 mt-20'>
            {statistics.map((stat) => {
              return (
                <div key={stat.label}>
                  <p className='font-palanquin font-bold text-4xl'>
                    {stat.value}
                  </p>
                  <p className='font-montserrat leading-7 text-slate-gray'>
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className='relative xl:min-h-screen flex-1 flex justify-center items-center max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
          <img
            src={bigShowImg.bigShoe}
            alt='show collection'
            width={610}
            height={502}
            className='relative z-10 object-contain'
          />
          <div className='absolute -bottom-[5%] sm:left-[10%] flex sm:gap-6 gap-4 max-sm:px-6'>
            {shoes.map((shoe) => {
              return (
                <div key={shoe.bigShoe}>
                  <ShowCard
                    imgURL={shoe}
                    onClick={(show) => setBigShowImg(show)}
                    bigShowImg={bigShowImg}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
})

export default Hero
