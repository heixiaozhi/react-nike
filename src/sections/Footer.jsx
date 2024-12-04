import React from 'react'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../constants'
import SocialCard from '../components/SocialCard'
import { footerLinks } from '../constants'
import FooterLink from '../components/FooterLink'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <>
      <footer className='max-container'>
        <div className='flex justify-between items-start gap-20 max-lg:flex-col text-white'>
          <div className='flex flex-col'>
            <a href='/'>
              <img
                src={footerLogo}
                alt='footerLogo'
                width={140}
                height={140}
                className='object-contain'
              />
            </a>
            {/* sm:max-w-sm 大于640px 设置width的宽度，相当于p等于容器的宽度 */}
            <p className='mt-6 font-montserrat leading-7 text-white-400 sm:max-w-sm'>
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className='mt-8 flex items-center gap-4'>
              {socialMedia.map((item) => {
                return <SocialCard key={item.src} {...item} />
              })}
            </div>
          </div>
          <div className='flex-1 flex flex-wrap justify-between gap-10 max-lg:gap-20'>
            {footerLinks.map((item) => {
              return <FooterLink key={item.title} {...item} />
            })}
          </div>
        </div>
        <div className='mt-24 flex max-sm:flex-col max-sm:gap-0 justify-between items-center gap-20 text-white-400'>
          <div className='flex-1 flex gap-2 font-montserrat cursor-pointer'>
            <img
              src={copyrightSign}
              alt='copyrightSign'
              width={20}
              height={20}
              className='object-contain'
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className='font-montserrat'>Terms & Conditions</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
