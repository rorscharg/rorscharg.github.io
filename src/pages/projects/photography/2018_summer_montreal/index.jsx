import React from 'react'
import Header from '../../../../components/Header'
import PhotographyProject from '../../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2018_summer_montreal/trapped.jpg',
      '2018_summer_montreal/wedding.jpeg',
      '2018_summer_montreal/waiting.jpg',
      '2018_summer_montreal/calm.jpeg',
      '2018_summer_montreal/funeral.jpeg',
      '2018_summer_montreal/violonsonthefloor.jpg',
      '2018_summer_montreal/bye.jpg',
      '2018_summer_montreal/shoes.jpg',
      '2018_summer_montreal/thinking.jpg',
      '2018_summer_montreal/improve.jpg',
      '2018_summer_montreal/trains.jpg',
    ]

    return (
      <div>
        <Header />
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
