import React from "react"
import './season.css'
const SeasonResume = () => {
  return (
    <div className="seasonContainer">
      <h1 className="seasonTitle ">Angola in every Seasons</h1>
      <p className="seasonTitle2">Discover the best things to do throw the year</p>
      <div className="seasonImgContainer">
        <img src="/src/components/Weather/imgs/DiffSeasons/rainSeason.jpg" className="seasonImg" alt="" />
        <img src="/src/components/Weather/imgs/DiffSeasons/dryedSeason.jpg" className="seasonImg" alt="" />
      <p className="seasonTxt">Angola month by month</p>
      </div>
    </div>
  )
}

export default SeasonResume
