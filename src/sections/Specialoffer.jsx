import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

import Buttton from '../components/Buttton'

const Specialoffer = () => {
  return (
    <>
      {/* flex-col-reverse 倒过来，也可也用order-x 去改变顺序 */}
      <section className='max-container flex items-center justify-center gap-10 max-xl:flex-col-reverse'>
        <div className='flex-1'>
          <img src={offer} alt='offer' />
        </div>
        <div className='flex-1 flex flex-col'>
          <h3 className='font-palanquin capitalize font-bold text-4xl'>
            <span className='text-coral-red'>Special</span> Offer
          </h3>
          <p className='mt-6 info-text'>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className='mt-8 info-text'>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className='mt-11 flex flex-wrap gap-4'>
            <Buttton label='Shop now' iconURL={arrowRight} />
            <Buttton
              label='Learn more'
              backgroundColor='bg-white'
              textColor='text-gray-400'
              borderColor='border-gray-600'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Specialoffer
