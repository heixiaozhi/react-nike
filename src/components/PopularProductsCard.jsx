import { star } from '../assets/icons'

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <>
      <div className='flex flex-col'>
        <img src={imgURL} alt='img' className='w-[282px] h-[282px]' />
        <div className='mt-8 flex gap-2'>
          <img src={star} alt='star' width={24} height={24} />
          <p className='font-montserrat text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='mt-2 font-montserrat font-medium text-xl'>{name}</h3>
        <p className='mt-2 font-montserrat font-medium text-xl text-coral-red'>
          {price}
        </p>
      </div>
    </>
  )
}

export default PopularProductsCard
