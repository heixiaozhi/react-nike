import React from 'react'

const Buttton = ({ label, iconURL, color }) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-2 
      px-7 py-4 font-montserrat text-lg leading-none ${
        color != undefined
          ? 'text-gray-400 bg-white border-gray-600'
          : 'text-white bg-coral-red  border-coral-red'
      }  border rounded-full`}
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
