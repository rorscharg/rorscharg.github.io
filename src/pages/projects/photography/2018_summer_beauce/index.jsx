import React from 'react'
import Header from '../../../../components/Header'
import Layout from '../../components/Layout'
import PhotographyProject from '../../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2018_summer_beauce/actuallypretty.jpeg',
      '2018_summer_beauce/rock.jpeg',
      '2018_summer_beauce/far.jpeg',
    ]

    return (
      <Layout>
        <div>
          <Header />
          <PhotographyProject images={images} />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex
