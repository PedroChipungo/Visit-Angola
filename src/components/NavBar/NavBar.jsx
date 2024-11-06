import {useState} from "react";
import { NavLink, Link } from "react-router-dom";
// import ResponsiveNavbar from "./ResponsiveNavbar";
import './nav.css'

const navBarLinks = [
  {
    name: "Home",
    link: "/",
    feature: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
    </svg>
  
  },
  {
    name: "Search",
    link: "search",
    feature:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
  </svg>
  
  
  },
  {
    name: "Offers",
    link: "offers",
    feature:  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
  </svg>  
  
  },
  {
    name: "See more",
    link: "#",
    feature: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
  </svg>
  
  },

];

const menuOptions = [
  {
    name: "Thins to do",
    link: "/thinsToDo"
  },
  {
    name: "Places to go",
    link: '/placesToGo'
  },
  {
    name: "The 7 wonders of Angola",
    link: "sevenWonders"
  },
  {
    name: "kuduro",
    link: "kuduro"
  },
  {
    name: "Restaurants",
    link: "restaurants",
  },
  {
    name: "Hotels",
    link: "hotel",
  },
  {
    name: "Foods",
    link: "foods"
  },
  {
    name:"Cultures and Habits",
    link: "culturesAndHabits"
  }
]
// const NavBar = () => {
//   // const [open, setOpen] = useState(false)
//   const [showMenu, setMenu] = useState(false)
//   const [showOptions, setShowOptions] = useState(false)

//   const toggleMenu = () => {
//     setMenu(!showMenu)
// };
// const toggleShowOptions = () => {
//   if(showOptions == false){
//       setShowOptions(true)
//   }else{
//      setShowOptions(false)
//   }
// }
//   return (
//     <nav className="sticky top-0 w-full left-0 z-[99999]">
//       <div className="flex justify-between items-center bg-white px-36">
//             <Link to='/'  onClick={() => window.scrollTo(0, 0)} className="text-3xl mr-1 pt-2">
//             <div className="flex items-center gap-2  text-2xl font-bold"> 
//               <span>Visit</span>
//               <img className='h-6 w-8'
//               src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/640px-Flag_of_Angola.svg.png`} 
//               alt="Angola`s Flag" /> 
//               <span>Angola</span>
//             </div>
//             </Link>
       
//         <div  className="md:hidden text-5xl cursor-pointer right-8 top-6 absolute">
//         <ion-icon onClick={toggleMenu} name='menu'></ion-icon>
//         </div>
//         <ResponsiveNavbar setMenu={setMenu} showMenu={showMenu}/>
//         <ul className={`md:flex items-center pb-0 static left-0 w-auto pl-0 hidden`}>

//           <li className="  ml-8 p-4 transition-all duration-700 hover:text-white hover:bg-black my-0">
//               <NavLink to={"/"} className="flex items-center justify-center flex-col">
//                   Home
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                     <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
//                     <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
//                   </svg>
//               </NavLink>  
//           </li>

//           <li className="ml-8 p-4 transition-all duration-700 hover:text-white hover:bg-black my-0">
//           <NavLink to={"search"} className="flex items-center justify-center flex-col">
//               Search
//              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
//             </svg>
//           </NavLink>
//         </li>
         

//           <li className="ml-8 p-4 transition-all duration-700 hover:text-white hover:bg-black my-0">
//             <NavLink to={"offers"} className="flex items-center justify-center flex-col"><p>Offers</p>
//                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                   <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
//                </svg> 
//             </NavLink>
//           </li>

//           <li onClick={() => toggleShowOptions()} className={`relative ml-8 p-4 transition-all duration-700 hover:text-white hover:bg-black my-0">
//               <NavLink className="flex items-center justify-center flex-col`}>
            
//               <NavLink className="flex items-center justify-center flex-col">
//                     Menu
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
//                     </svg>
//               </NavLink>
//         </li>
//         </ul>
//       </div>

//       <div className={`${showOptions ? "absolute" : "hidden"} bg-slate-100 h-fit w-64 right-20 p-8`}>
//             <ul>
//               {
//                 menuOptions.map(({name, link},idx) => (
//                   <li key={idx} className="p-2 text-xl">
//                     <NavLink to={link} id={idx}>{name}</NavLink>
//                   </li>
//                 ))
//               }
//             </ul>
//       </div>
//     </nav>
//   )
// }

function NavBar () {
  // const [open, setOpen] = useState(false)
  const [showMenu, setMenu] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  const toggleMenu = () => {
    setMenu(!showMenu);
};
const closeMenu = () => {
  setMenu(false);
};

// Função para fechar o menu ao clicar fora
const handleBackdropClick = (e) => {
  if (e.target.className === 'backdrop') {
      closeMenu();
  }
};

const toggleShowOptions = () => {
  if(showOptions == false){
      setShowOptions(true)
  }else{
     setShowOptions(false)
  }
}
  return (
    <nav className="navBar">
        <div className="navContainer">
            <Link to='/'  onClick={() => window.scrollTo(0, 0)} className="">
              <div className="navOptions angContainer"> 
                  <span>Visit</span>
                  <img className='angFlag'
                  src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/640px-Flag_of_Angola.svg.png`} 
                  alt="Angola`s Flag" /> 
                  <span>Angola</span>
             </div>
            </Link>
       
            <div onClick={() => toggleMenu()} className="menuIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
            {/* <ion-icon onClick={toggleMenu} name='menu'></ion-icon> */}
            </div>

              {/* SMSLL SCREEN MENU */}
              {showMenu && (
                <div className="backdrop" onClick={handleBackdropClick}>
                    <ul className="smallNavBarClicked" onClick={(e) => e.stopPropagation()}>
                        {navBarLinks.map(({ name, link, feature }, idx) => (
                            <li key={idx} className="smallList">
                                <NavLink
                                    className="smallItems"
                                    to={link}
                                    id={idx}
                                    onClick={closeMenu} // Fecha o menu ao clicar em um link
                                >
                                    {feature} <p>{name}</p>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <ul className={`navOptionsContainer`}>

              <li className="optionItems">
                  <NavLink to={"/"} className="flex items-center justify-center flex-col">
                      Home
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                      </svg>
                  </NavLink>  
              </li>

              <li className="optionItems">
                  <NavLink to={"search"} className="flex items-center justify-center flex-col">
                  Search
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
                </NavLink>
            </li>

              <li className="optionItems">
                <NavLink to={"offers"} className="flex items-center justify-center flex-col"><p>Offers</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                  </svg> 
                </NavLink>
              </li>

            <li onClick={() => toggleShowOptions()} className="optionItems ">
              
                <NavLink className="moreOptions">
                      See more
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                      </svg>
                </NavLink>
            </li>
        </ul>
      </div>

      <div className={`${showOptions ? "moreOptinsClicked" : "moreOptinsNotClicked"}`}>
            <ul>
              {
                menuOptions.map(({name, link},idx) => (
                  <li key={idx} className="moreOptinsClickedItems">
                    <NavLink to={link} id={idx}>{name}</NavLink>
                  </li>
                ))
              }
            </ul>
       </div>
    </nav>
  )
}

export default NavBar
