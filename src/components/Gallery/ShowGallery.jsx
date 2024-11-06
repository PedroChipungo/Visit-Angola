import { useEffect, useState } from 'react';
import './GalleryCss/Gallery.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// const ShowGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [seeLess, setSeeLess] = useState(false);
//   const [seeMore, setSeeMore] = useState(true);
 
//   const showMoreImages = () => {
//     if (currentIndex + 3 < GalleryImages.length) {
//       setCurrentIndex(currentIndex + 3);
//       setSeeLess(true);
//       // if (currentIndex + 2 > GalleryImages.length) {
//       //   setSeeMore(false);
//       // }
//     }else{
//       setSeeMore(false);
//     }
//   };

//   const showLessImages = () => {
//     setCurrentIndex(currentIndex - 3);
//     setSeeMore(true);
    
//     if (currentIndex - 3 === 0 ) {
//       setSeeLess(false);
//     }
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//       easing: 'ease-in-out',
//       offset: 100,
//       delay: 50,
//     });
//   }, []);

//   return (
//     <div className="galleryContainer">
//       <h1 data-aos="fade-up" className="galleryTittle">
//         Before traveling
//       </h1>
//       <p data-aos="fade-up" className="">
//         Check out these amazing places
//       </p>
//       <div className="gallerySlideContainer">
//         <ul className="largeGallerySlide">
//           {GalleryImages.slice(currentIndex, currentIndex + 3).map(({ image, name }, index) => (
//             <li key={index} className={`bigGallerySlideItems`}>
//               <img
//                 src={image}
//                 alt={`image of ${name}`}
//                 className="galleryImgs"
//               />
//               <p className="">{name}</p>

//               {/* BTN  */}
//               <div className="btnContainer">
//                   <p
//                     onClick={showLessImages}
//                     className={`changeBtn ${seeLess ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
//                     >
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                       <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
//                     </svg>
//                   </p>
//                   <p
//                     onClick={showMoreImages}
//                     className={`changeBtn ${seeMore ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
//                     >
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                       <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
//                     </svg>
//                   </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//           <SmallGallery />
//           {/* SMALL SCREEN  */}
//       </div>
     
//     </div>
//   );
// };
import Slider from './Slider';
const ShowGallery = () => {

    useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      offset: 100,
      delay: 50,
    });
  }, []);

  return (
    <div className='gobalSlider'>
       <h1 data-aos="fade-up" className="gobalSliderTitle">
           Before traveling <span> Check out these amazing places</span>
       </h1>

        <Slider/>
    </div>
  )
}
export default ShowGallery;
