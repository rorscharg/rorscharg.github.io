import React from 'react';
import Footer from '../../components/Footer';
import './about.scss';

class BlogIndex extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-content">
          <h1>Warning:</h1>
          <p>
            {' '}
            If you fumble on this about 'section', the only thing you really
            need to know is that I fall under the 'raised by the internet'
            archetype. If some stereotype comes up in your head right now,
            they probably apply to me. Currently living that <i>spent too much time on
            the internet, now want to see the world</i> life.
            </p>
          <h2>Current Interests:</h2>
          Dogs
            <br />
          Programming
            <br />
          Photography
            <br />
          Computer Graphics
            <br />
          Jogging
            <br />
          Being a Pathfinder and Mirage main
            <br />
          Writing to clear my mind
            <br />
          Happiness/Philosophy
            <br />
          <br />
          <p>
            If you want to contact me, feel free to send me an email at <a href="mailto:rorscharg@gmail.com">rorscharg@gmail.com</a> and I'll be super happy to answer or have a conversation with you!
            </p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default BlogIndex
