import React from 'react'
import Layout from '../../components/Layout'
import Header from '../../../../components/Header'
import PhotographyProject from '../../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2018_summer_montreal/trapped.jpg',
      '2018_summer_montreal/wedding.jpeg',
      '2018_summer_montreal/birdattack.jpg',
      '2018_summer_montreal/happy.jpg',
      '2018_summer_montreal/calm.jpeg',
      '2018_summer_montreal/funeral.jpeg',
      '2018_summer_montreal/violonsonthefloor.jpg',
      '2018_summer_montreal/devileye.jpg',
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
