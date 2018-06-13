import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => {
  const styles = {
    bottom: '0',
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={styles}>
      <Link to="#">[#]</Link>
      <Link to="#">[#]</Link>
      <Link to="#">[#]</Link>
    </div>
  )
}

export default Footer
