import React from 'react'
import Link from 'gatsby-link'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Aladin'],
  },
})

const Header = ({ siteTitle }) => {
  const style = {
    margin: '0 auto',
    maxWidth: 960,
    padding: '1.45rem 1.0875rem',
    marginBottom: '1.45rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
  return (
    <div style={style}>
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#468189',
            textDecoration: 'none',
            fontSize: '35px',
            fontFamily: 'Aladin',
          }}
        >
          {siteTitle}
        </Link>
      </div>
      <div>Adventures</div>
    </div>
  )
}

export default Header
