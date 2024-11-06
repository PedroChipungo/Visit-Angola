import { useEffect, useState } from 'react'
import { WondersImages } from './SevenWondersimages/SevenWondersImages'
import './SevenWondersCss/SevenWonders.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

const SevenWonders = () => {
    const [sevenWonders] = useState(WondersImages)
    useEffect(() => {
        AOS.init({
          duration: 2000, // duração da animação em milissegundos
          easing: 'ease-in-out',
          offset: 100,
          delay: 100,
          // once: true,     // se a animação deve acontecer apenas uma vez
        });
      }, []);
  return (
    <div className='sevenContainer' >

        <h1 className="sevenTitle">The Seven Wonders Of Angola
        </h1>

        <ul  className='sevenCss sevenList  gap-8 mb-12'>
            {
              sevenWonders.map(({image,name,/*description*/}, index) =>(
                <li  className='sevenItems' key={index}>
                    <img src={image} alt={`image of ${name}`} className='sevenImg'/>
                    <div className='absolute text-white bg-black opacity-70 rounded-lg  
                    px-4 top-3/4'> 
                      <p className='p-2 text-center font-bold text-xl'>{name}</p>
                      {/* <p className='text-start text-xl lg:pr-38'>{description}</p> */}
                    </div>
                </li>
              ))
            }
        </ul>

    </div>
  )
}

export default SevenWonders
