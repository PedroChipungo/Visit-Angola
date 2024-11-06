import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import ShowGallery from './components/Gallery/ShowGallery.jsx'
import Layout from '../src/pages/LayOut/Layout.jsx'
import SevenWonders from './components/SevenWonders/SevenWonders.jsx'
import PageNotFound from './pages/PgNotFound/PageNotFound.jsx'
import SearchSection from './components/SearchSection/SearchSection.jsx'
import Weather from './components/Weather/Weather.jsx'
const App = () => {
  return (
    <>
       <BrowserRouter>
       <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/showGallery' element={<ShowGallery/>}/>
            <Route path='/sevenWonders' element={<SevenWonders/>}/> 
            <Route path='/search' element={<SearchSection/>}/> 
            <Route path='/weather' element={<Weather/>}/> 
          </Route>
            <Route path="*" element={<PageNotFound/>}/> 
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
