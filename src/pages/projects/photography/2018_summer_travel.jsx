import React from 'react'
import PhotographyProject from '../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2018_summer_travel/mapleleaf.jpg',
      '2018_summer_travel/crossingatdawn.jpg',
      '2018_summer_travel/sunriseloup.jpg',
      '2018_summer_travel/sunsetloup.jpg',
      '2018_summer_travel/lostfind.jpg',
      '2018_summer_travel/growing.jpg',
      '2018_summer_travel/puntacanasunrise.jpg',
      '2018_summer_travel/pinacollada.jpg',
      '2018_summer_travel/prayineverrunoutofjetfuel.jpg',
      '2018_summer_travel/hotelcalifornia.jpg',
      '2018_summer_travel/cantsleep.jpg',
      '2018_summer_travel/sleep.jpg',
      '2018_summer_travel/tomcollins.jpg',
      '2018_summer_travel/vodkalime.jpg',
      '2018_summer_travel/whiterussian.jpg',
      '2018_summer_travel/ofjet.jpg',
      '2018_summer_travel/neverrunout.jpg',
      '2018_summer_travel/jetfuel.jpg',
      '2018_summer_travel/andthenIstartslipping.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
