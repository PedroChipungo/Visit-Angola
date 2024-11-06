// import './ArgumentsCss/Arguments.css'
// import maravilhasDeAngola from '../../assets/videos/SevenWonders/maravilhas-de-angola.mp4';
// import { useState } from 'react';

// const Table = [
//   {
//     name: "Places to go",
//     content: ["places to go", "Kedas de Kalandula", "Namibe Desert", "Baia Azul", "Catumbela Beach"," Tundava Fissure", "places to go", "Kedas de Kalandula", "Namibe Desert", "Baia Azul", "Catumbela Beach"," Tundava Fissure","places to go", "Kedas de Kalandula", "Namibe Desert", "Baia Azul", "Catumbela Beach"," Tundava Fissure", "places to go", "Kedas de Kalandula", "Namibe Desert", "Baia Azul", "Catumbela Beach"," Tundava Fissure",]
//   },
//   {
//     name: "Things to do",
//     content: ["Things to do","Explore the Angolan Beaches","Experience Angolan Cuisine", "Discover the Angola's Wildlife", "Hike and Trek", "Attend Local Festivals", "Explore Traditional Markets","Explore the Angolan Beaches","Experience Angolan Cuisine", "Discover the Angola's Wildlife", "Hike and Trek", "Attend Local Festivals", "Explore Traditional Markets",]
//   },
//   {
//     name: "Plan before you come",
//     content: ["plan your trip", "Book your holiday trip", "Seasons and Climates", "Getting around", "Getting here", "Getting here", "plan your trip", "Book your holiday trip", "Seasons and Climates", "Getting around", "Getting here", "Getting here",]
//   }
// ];


// const Video = () => {
//    // Initial visible items count
//    const initialVisibleItems = 6;
  
//    // State to control visibility of items in each column
//    const [visibleItems, setVisibleItems] = useState({
//      "Places to go": initialVisibleItems,
//      "Things to do": initialVisibleItems,
//      "Plan before you come": initialVisibleItems,
//    });
   
//    // State to control the button visibility for each column
//    const [showMore, setShowMore] = useState({
//      "Places to go": true,
//      "Things to do": true,
//      "Plan before you come": true,
//    });
 
//    const handleShowMore = (name) => {
//      setVisibleItems(prev => ({
//        ...prev,
//        [name]: prev[name] + name.length - prev[name] //adjust the number of items to be show here
//      }));

//      setShowMore(prev => ({
//        ...prev,
//        [name]: false
//      }));
//    };
 
//    const handleShowLess = (name) => {
//      setVisibleItems(prev => ({
//        ...prev,
//        [name]: initialVisibleItems
//      }));
//      setShowMore(prev => ({
//        ...prev,
//        [name]: true
//      }));
//    };


//   return (
//     <div className="video-container relative">
//       <video className="w-screen" muted autoPlay loop>
//         <source src={maravilhasDeAngola} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
      
//       <div className="element absolute rounded-md text-4xl p-8 font-bold top-96 left-1/2 transform -translate-x-1/2 -translate-y-60
//        bg-white bg-opacity-85 w-2.1 h-52 flex flex-col justify-center items-center">
//         <p>COME TO VISIT</p>
//         <p className='m-4'>BE AMAZED</p>
//         <p className='text-xl'>WELCOME TO ANGOLA</p>
//       </div>

//         <div >
//           <ul className='tableContent grid grid-cols-3'>
//               {
//                 Table.map(({ name, content }) => (
//                   <li key={name}>
//                     <h2 className='text-2xl font-bold'>{name}</h2>
//                     <div className='textSize'> 
//                           {content.slice(0, visibleItems[name]).map((element, index) => (
//                             <p key={index} className='hover:text-blue-700 py-3 cursor-pointer'>{element}</p>
//                           ))}
//                           {content.length > 0 && (
//                             <div className=''>
//                               {showMore[name] ? (
//                                 <button onClick={() => handleShowMore(name)} className='hover:text-blue-700 border-none flex'>
//                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                                     <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
//                                   </svg>
//                                 <span>See more</span> 
//                                 </button>
//                               ) : (
//                                 <button onClick={() => handleShowLess(name)} className='hover:text-blue-700 border-none flex'>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                                   <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
//                                 </svg>
//                                 <span>See less</span> 
//                                 </button>
//                               )}
//                             </div>
//                           )}
//                     </div>
//                   </li>
//                 ))
//               }
//           </ul>

//         </div>
//      </div>
//   );
// }

// export default Video;
