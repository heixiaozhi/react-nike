import Customers from '../components/Customers'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <>
      {/* max-w-xx 设置最大宽度，使用max-auto让这个div 居中 */}
      <section className='max-container flex flex-col gap-10'>
        <div>
          <h2 className='font-palanquin capitalize font-bold text-center text-4xl'>
            what our <span className='text-coral-red'>customers</span> say?
          </h2>
          <p className='mt-6 mx-auto info-text max-w-[32rem] text-center'>
            Hear genuine stories from our satisfied customers about their
            exceptional experiences with us.
          </p>
        </div>
        <div className='mt-24 flex justify-evenly max-lg:flex-col gap-14'>
          {reviews.map((item) => {
            return <Customers key={item.imgURL} {...item} />
          })}
        </div>
      </section>
    </>
  )
}

export default CustomerReviews
