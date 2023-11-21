import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Response Engineer</title>
        <meta property="og:title" content="Senior Response Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
