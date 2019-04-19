import React from 'react'
import PhotographyProject from '../../../components/PhotographyProject'

class BlogIndex extends React.Component {
  render() {
    const images = [
      '2019_winter_montreal/inception.jpg',
      '2019_winter_montreal/always_higher.jpg',
      '2019_winter_montreal/myqueen.jpg',
      '2019_winter_montreal/forward.jpg',
      '2019_winter_montreal/building_9000.jpg',
      '2019_winter_montreal/my_dad_used_to_carry_a_flask.jpg',
      '2019_winter_montreal/pigeons_tell_the_truth.jpg',
      '2019_winter_montreal/happy_buddy.jpg',
      '2019_winter_montreal/heyo.jpg',
      '2019_winter_montreal/into_the_shadow.jpg',
      '2019_winter_montreal/a_lil_smoke.jpg',
      '2019_winter_montreal/lose_it.jpg',
      '2019_winter_montreal/regular.jpg',
      '2019_winter_montreal/somesitting.jpg',
      '2019_winter_montreal/somewalking.jpg',
      '2019_winter_montreal/sunlife_highlight.jpg',
      '2019_winter_montreal/texting_you.jpg',
      '2019_winter_montreal/worlds_apart.jpg',
      '2019_winter_montreal/larry_fisherman.jpg',
      '2019_winter_montreal/yolo.jpg',
      '2019_winter_montreal/mindfuck.jpg',
      '2019_winter_montreal/mindfuck2.jpg',
      '2019_winter_montreal/lonely.jpg',
      '2019_winter_montreal/gotham.jpg',
      '2019_winter_montreal/buy_a_ticket_bro.jpg',
      '2019_winter_montreal/highlights_1000.jpg',
    ]

    return (
      <div>
        <PhotographyProject images={images} />
      </div>
    )
  }
}

export default BlogIndex