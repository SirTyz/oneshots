import React from 'react'
import Link from 'gatsby-link'

const Button = props => {
  const styles = {
    backgroundColor: '#C9ADA7',
    padding: '10px',
    color: '#22223B',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  }
  return <input type="button" value={props.children} style={styles} />
}

export default Button
