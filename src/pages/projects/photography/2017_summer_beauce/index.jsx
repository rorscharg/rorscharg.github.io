import React from 'react'
import Header from '../../../../components/Header'
import PhotographyProject from '../../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2017_summer_beauce/again.jpg',
      '2017_summer_beauce/fly.jpg',
      '2017_summer_beauce/andagain.jpg',
      '2017_summer_beauce/pink.jpg',
      '2017_summer_beauce/wakeup.jpg',
      '2017_summer_beauce/welcome.jpg',
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
