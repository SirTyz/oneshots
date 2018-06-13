import React from 'react'
import Link from 'gatsby-link'

import './hero.css'

const Hero = ({ siteTitle }) => {
  const style = {
    margin: '0',
    maxWidth: '960px',
    height: '300px',
    backgroundColor: '#C9ADA7',
  }
  return (
    <div className="heroContainer">
      <h1>Welcome to Oneshots</h1>
    </div>
  )
}

export default Hero
