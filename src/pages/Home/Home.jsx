import Video from '../../components/Arguments/Arguments'
import ShowGallery from '../../components/Gallery/ShowGallery'
import SevenWonders from '../../components/SevenWonders/SevenWonders'
import Footer from '../../components/Footer/Footer'
import SeasonResume from '../../components/Weather/SeasonResume/SeasonResume'
const Home = () => {
  return (
    <div>
      <Video/>
      <ShowGallery/>
      <SeasonResume/>
      <SevenWonders/>
      <Footer/>
    </div>
  )
}

export default Home
