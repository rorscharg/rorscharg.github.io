import React from 'react'
import Header from '../../../../components/Header'
import PhotographyProject from '../../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2018_fall_montreal/lady2.jpg',
      '2018_fall_montreal/lady.jpg',
      '2018_fall_montreal/bus2.jpg',
      '2018_fall_montreal/sunny.jpg',
      '2018_fall_montreal/bus.jpg',
      '2018_fall_montreal/cooltrains.jpg',
      '2018_fall_montreal/cooltrains2.jpg',
      '2018_fall_montreal/street.jpg',
      '2018_fall_montreal/hurry.jpg',
      '2018_fall_montreal/funfunfun.jpg',
      '2018_fall_montreal/left.jpg',
      '2018_fall_montreal/middle.jpg',
      '2018_fall_montreal/right.jpg',
      '2018_fall_montreal/saturated.jpg',
      '2018_fall_montreal/memyselfandi.jpg',
      '2018_fall_montreal/lorde.jpg',
      '2018_fall_montreal/try.jpg',
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
