import React from 'react'
import PhotographyProject from '../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2017_summer_montreal/love.jpg',
      '2017_summer_montreal/beaver.jpg',
      '2017_summer_montreal/envy.jpg',
      '2017_summer_montreal/meh.jpg',
      '2017_summer_montreal/monday.jpg',
      '2017_summer_montreal/reading.jpg',
      '2017_summer_montreal/skate.jpg',
      '2017_summer_montreal/smoke.jpg',
      '2017_summer_montreal/gees.jpg',
      '2017_summer_montreal/watchmen.jpg',
      '2017_summer_montreal/whoami.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex
