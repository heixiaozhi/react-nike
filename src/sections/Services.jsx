import ServicesCard from '../components/ServicesCard'
import { services } from '../constants/index.js'

const Services = () => {
  return (
    <>
      <section className='max-container flex justify-between gap-9 flex-wrap'>
        {services.map((item) => {
          return <ServicesCard key={item.label} {...item} />
        })}
      </section>
    </>
  )
}

export default Services
