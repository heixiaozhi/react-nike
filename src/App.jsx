import React, { useEffect, useRef, useState } from 'react'
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  Specialoffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from './sections/index.js'

import Nav from './components/Nav.jsx'

const App = () => {
  const heroRef = useRef()
  const [isScroll, setIsScroll] = useState(false)

  // 使用观察期，观察首页是否快离开视口的时候，添加类覆盖定位
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setIsScroll(false)
        } else {
          setIsScroll(true)
        }
      },
      {
        root: null,
        rootMargin: '-80px',
        threshold: 0.1,
      }
    )
    observer.observe(heroRef.current)
  }, [])

  return (
    <main className='relative'>
      <Nav isScroll={isScroll} />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero ref={heroRef} />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <Specialoffer />
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='padding-x padding-t bg-black pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App
