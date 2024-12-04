const FooterLink = ({ title, links }) => {
  return (
    <>
      <div>
        <h4 className='mb-6 font-palanquin font-medium leading-normal text-2xl text-white'>
          {title}
        </h4>
        <ul>
          {links.map((item) => {
            return (
              <li
                key={item.name}
                className='mb-3 font-montserrat text-white-400 hover:text-slate-gray'
              >
                <a href={item.link}>{item.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default FooterLink
