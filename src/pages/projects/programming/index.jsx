import React from 'react'
import HackathonCard from '../../../components/HackathonCard'
import NonHackathonCard from '../../../components/NonHackathonCard'
import Layout from '../../../components/layout'
import './index.scss'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div className="programming-projects-index-container">
          <NonHackathonCard
            name="Is it 4PM Yet"
            description={
              'No description could do it justice, has to be experienced personally'
            }
            date="2020-03-26"
            link="http://isit4pmyet.com"
            image="isit4pmyet.jpg"
            alt="brainydump.jpg"
            stack="HTML, JS, CSS"
          >
          </NonHackathonCard>
          <NonHackathonCard
            name="Brainy Dump"
            description={
              'Brainy Dump was a note taking app that allows the user to easily keep a journal on different topics'
            }
            date="2019-02-19"
            link="http://brainydump.com"
            image="brainydump.jpg"
            alt="brainydump.jpg"
            stack="Elixir, VueJS, Phoenix, Postgres, Auth0, DO"
          >
            {' '}
          </NonHackathonCard>
          <NonHackathonCard
            name="Desert Toy Train ThreeJS"
            description={
              'An animation of a train rolling on tracks made using ThreeJS'
            }
            date="2019-02-19"
            link="https://jeanarjean.com/desert-train-threejs"
            image="desert_train.jpg"
            alt="deserttrain.jpg"
            stack="ThreeJS"
          >
            {' '}
          </NonHackathonCard>
          <NonHackathonCard
            name="Simple Scoreboard"
            description={
              'A simple two teams scoreboard made in pure javascript'
            }
            date="2018-04-20"
            link="https://jeanarjean.com/simplescoreboard"
            image="simplescoreboard.jpg"
            alt="simplescoreboard.jpg"
            stack="Pure Javascript"
          >
            {' '}
          </NonHackathonCard>
          <HackathonCard
            name="The Salad Bowl"
            description={
              'Made during ConuHack III, The Salad Bowl is a news aggregator that shows to the user the most relevant news on a specific subject'
            }
            date="2018-01-28"
            link="https://devpost.com/software/the-salad-bowl"
            image="the-salad-bowl.png"
            alt="the-salad-bowl.png"
            stack="JS, React, Node"
          >
            {' '}
          </HackathonCard>
          <HackathonCard
            name="Troc"
            description="Made during Hackatown 2018, Troc connects people by allowing them to lend, borrow or trade items from each other."
            date="2018-01-20"
            link="https://devpost.com/software/troc-3jdi1m"
            image="troc.png"
            alt="troc.png"
            stack="JS, Node"
          >
            {' '}
          </HackathonCard>
          <div className="footerafter">
            Project section inspired by{' '}
            <a href="https://huangxuan.me/">Hux's</a> website portfolio section
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex
