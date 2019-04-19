import React from 'react'
import Link from 'gatsby-link'
import './404.scss';

const NotFoundPage = () => (
  <div className="not-found-container">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist!</p>
    <Link to="/">Back to rorscharg.com</Link>
  </div>
)

export default NotFoundPage
