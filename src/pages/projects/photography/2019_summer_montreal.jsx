import React from 'react'
import PhotographyProject from '../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2019_summer_montreal/grad.jpg',
      '2019_summer_montreal/miss.jpg',
      '2019_summer_montreal/fucktop.jpg',
      '2019_summer_montreal/temptation.jpg',
      '2019_summer_montreal/favoritelight.jpg',
      '2019_summer_montreal/beigendeath.jpg',
      '2019_summer_montreal/johnwick.jpg',
      '2019_summer_montreal/reptilian.jpg',
      '2019_summer_montreal/red.jpg',
      '2019_summer_montreal/somethingyoulike.jpg',
      '2019_summer_montreal/downdowndown.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex