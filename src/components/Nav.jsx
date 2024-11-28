import React from 'react'

import { headerLogo } from '../assets/images/index'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <>
      <header className='absolute w-full padding-x py-8 z-10 '>
        <nav className='max-container flex justify-between items-center'>
          <a href='/'>
            <img src={headerLogo} alt='nike logo' width={130} height={29} />
          </a>
          {/* max-lg 小于1024的时候隐藏 */}
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => {
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className='hidden max-lg:block'>
            <img src={hamburger} alt='hamburger' width={25} height={25} />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav
