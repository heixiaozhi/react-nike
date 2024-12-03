import { star } from '../assets/icons'

const Customers = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <img
          src={imgURL}
          alt='customer'
          width={120}
          height={120}
          className='object-cover rounded-full'
        />
      </div>
      <p className='mt-6 max-w-[24rem] info-text text-center'>{feedback}</p>
      <div className='mt-4 flex gap-2.5'>
        <img src={star} alt='rating' width={24} height={24} />
        <span className='font-montserrat text-xl leading-normal text-slate-gray'>
          ({rating})
        </span>
      </div>
      <p className='mt-4 font-montserrat font-bold text-2xl'>{customerName}</p>
    </div>
  )
}

export default Customers
