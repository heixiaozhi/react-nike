import Buttton from '../components/Buttton'

const Subscribe = () => {
  return (
    <>
      <section className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
        <h3 className='lg:max-w-md leading-[68px] font-palanquin font-bold capitalize text-4xl'>
          sign up for <span className='text-coral-red'>updates</span> &
          newsletter
        </h3>
        {/* w-full => wdith:100% 覆盖了basic:auto max-w-40% 限制内容只有40 
          sm:640px 下要变成两行所以给button一个div
          input是一个flex:1
        */}
        <div className='lg:max-w-[40%] w-full flex items-center justify-center gap-5 max-sm:flex-col  px-2 py-2 sm:border sm:border-gray-400 rounded-full'>
          <input
            type='text'
            placeholder='subscribe@nike.com'
            className='input'
          />
          <div className='max-sm:w-full flex max-sm:justify-end items-center'>
            <Buttton label='Sign up' fullWidth='w-full' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe
