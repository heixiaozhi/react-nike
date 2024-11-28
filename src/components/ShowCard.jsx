import React from 'react'

const ShowCard = ({ imgURL, onClick, bigShowImg }) => {
  function handleClickShoe(e) {
    onClick(imgURL)
  }

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer ${
        bigShowImg.thumbnail === imgURL.thumbnail ? 'border-coral-red' : ''
      }`}
      onClick={handleClickShoe}
    >
      <div
        className='sm:w-40 sm:h-40 flex justify-center 
          items-center max-sm:p-4 bg-card bg-center bg-cover rounded-xl'
      >
        <img
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShowCard
