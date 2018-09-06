import React from 'react'
import Header from '../../../../components/Header'
import PhotographyProject from '../../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2018_summer_beauce/actuallypretty.jpeg',
      '2018_summer_beauce/rock.jpeg',
      '2018_summer_beauce/far.jpeg',
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
