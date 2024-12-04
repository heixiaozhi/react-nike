import React from 'react'

/*
  封装Button按钮，支持自定义颜色
*/
const Buttton = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-2 
      px-7 py-4 font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${textColor} ${backgroundColor} ${borderColor}`
          : 'text-white bg-coral-red  border-coral-red'
      }  border rounded-full ${fullWidth}`}
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
