const SocialCard = ({ src, alt }) => {
  return (
    <>
      <div className='flex items-center justify-center w-12 h-12 bg-white rounded-full'>
        <img src={src} alt={alt} className='object-contain' />
      </div>
    </>
  )
}

export default SocialCard
