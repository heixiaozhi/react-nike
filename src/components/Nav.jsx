import { headerLogo } from '../assets/images/index'
import { navLinks } from '../constants'
import { deleteIcon, hamburger } from '../assets/icons'
import { forwardRef, useState } from 'react'

const Nav = ({ isScroll }) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenMenu() {
    setIsOpen((current) => !current)
  }

  return (
    <>
      <header
        className={`${
          isScroll ? 'fixed top-0 left-0 bg-white shadow-sm' : 'absolute'
        } w-full padding-x py-8 z-10`}
      >
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
          {/* 移动端菜单，只有点击按钮的时候显示，用个状态控制 */}
          <ul
            className={`lg:hidden absolute top-0 left-0 w-full h-[50vh] flex flex-col gap-6 items-center justify-center 
          bg-white shadow-md z-10 transition-all duration-500 ${
            isOpen
              ? 'translate-y-[0%] opacity-100'
              : 'translate-y-[-100%] opacity-0'
          }`}
          >
            {navLinks.map((item) => {
              return (
                <li key={item.label} onClick={handleOpenMenu}>
                  <a
                    href={item.href}
                    className='font-montserrat font-bold leading-normal text-xl text-red-500 hover:text-red-300'
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className='flex gap-2 max-lg:hidden font-montserrat font-medium text-lg leading-normal wide:mr-24'>
            <a href='/'>Sign in</a>
            <span>/</span>
            <a href='/'>Explore now</a>
          </div>
          <div className='hidden max-lg:block z-[100]' onClick={handleOpenMenu}>
            {isOpen ? (
              <img src={deleteIcon} alt='delete' width={25} height={25} />
            ) : (
              <img src={hamburger} alt='hamburger' width={25} height={25} />
            )}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav
