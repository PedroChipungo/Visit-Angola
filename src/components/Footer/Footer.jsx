import ItemsContainer from './ItemsContainer/ItemsContainer'
import SocialIcons from './SocialIcons/SocialIcons'
import { Icons } from './Items/ItemsInfo/ItemsInfo'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footerContainer'>
      {/* <div className='md:flex md:justify-between md:item sm:px-2 px-4 bg-[#ffffff19] py-7'>
        <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
        <span className='text-teal-400'>Feel</span> the nature in your hart
        </h1>
      </div> */}
      <ItemsContainer/>
      <div className='footerSection'>
        <span>2024 App, All rights reserved.</span>
        <span>Terms . Privacy Policy</span>
        <SocialIcons icons ={Icons} />
      </div>
    </footer>
  )
}

export default Footer
