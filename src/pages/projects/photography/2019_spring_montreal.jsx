import React from 'react'
import PhotographyProject from '../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2019_spring_montreal/night5.jpg',
      '2019_spring_montreal/night1.jpg',
      '2019_spring_montreal/night2.jpg',
      '2019_spring_montreal/night3.jpg',
      '2019_spring_montreal/night4.jpg',
      '2019_spring_montreal/mist.jpg',
      '2019_spring_montreal/pink.jpg',
      '2019_spring_montreal/pink2.jpg',
      '2019_spring_montreal/bnw3.jpg',
      '2019_spring_montreal/punch.jpg',
      '2019_spring_montreal/bnw4.jpg',
      '2019_spring_montreal/bnw5.jpg',
      '2019_spring_montreal/rene.jpg',
      '2019_spring_montreal/blackonblack.jpg',
      '2019_spring_montreal/bullshit.jpg',
      '2019_spring_montreal/blue.jpg',
      '2019_spring_montreal/life.jpg',
      '2019_spring_montreal/hood.jpg',
      '2019_spring_montreal/cats.jpg',
      '2019_spring_montreal/go.jpg',
      '2019_spring_montreal/mean.jpg',
      '2019_spring_montreal/polondeath.jpg',
      '2019_spring_montreal/suitndeath.jpg',
      '2019_spring_montreal/orange.jpg',
      '2019_spring_montreal/orangetruck.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex