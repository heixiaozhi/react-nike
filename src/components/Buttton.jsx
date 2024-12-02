import React from 'react'

const Buttton = ({ label, iconURL }) => {
  return (
    <>
      <button
        className='flex justify-center items-center gap-2 
      px-7 py-4 border border-coral-red font-montserrat text-lg leading-none text-white bg-coral-red rounded-full'
      >
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='w-5 h-5 ml-2 rounded-full'
          />
        )}
      </button>
    </>
  )
}

export default Buttton
