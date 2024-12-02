const ServicesCard = ({ imgURL, label, subtext }) => {
  return (
    <>
      {/* 
        这个效果就是大家基于宽度再去平分内容
        如果不够分了，父元素flex-warp会换行，然后第二行因为flex-1增长会占据一行的宽度
        flex-1 => 1 1 0%
        sm: w-[350px] width:350px 表示宽度350px 开始增长
        sm: min-w-[350px] min-width:350px 表示最小宽度是350px 该flex-item 缩小的时候不小于350px
      */}
      <div className='px-4 py-8 sm:w-[350px] sm:min-w-[350px] flex-1 rounded-[20px] shadow-3xl'>
        {/* 这个是给空白图居中和背景 */}
        <div className='w-11 h-11 flex items-center justify-center bg-coral-red rounded-full'>
          <img src={imgURL} alt='img' width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin font-bold text-3xl leading-normal'>
          {label}
        </h3>
        <p className='mt-3 font-montserrat text-xl leading-normal text-slate-gray'>
          {subtext}
        </p>
      </div>
    </>
  )
}

export default ServicesCard
