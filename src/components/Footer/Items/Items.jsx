import { NavLink } from "react-router-dom"

const Items = ({Links, title}) => {
  return (
    <ul>
      <h1 className='mb-1 font-semibold'>{title}</h1>
      {
        Links.map(({name, content, link}) => (
          <li key={name}>
            <NavLink to={link} className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>
            {`${name}:  ${content}`}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}

export default Items
