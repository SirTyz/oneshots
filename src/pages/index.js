import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/hero'
import Button from '../components/button'

const IndexPage = props => {
  const buttonWrapper = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  }
  return (
    <div>
      <Hero />
      <h1>About</h1>
      <p>
        <i>Oneshots</i> is a host to custom made adventures for tabletop RPGs.
        We intend to supply adventures to GMs by giving them the ability to
        search through a catalogue created by other GMs. Adventures will follow
        3 basic rules <i>Game Type</i>, <i>Reccommended Party Level</i>, and{' '}
        <i>Session Length</i>.
      </p>
      <div style={buttonWrapper}>
        <Link to="/adventures">
          <Button>Explore Adventures</Button>
        </Link>
      </div>

      <h1>Quality Made Adventures</h1>
      <p>
        One of the most important aspects of adventues to the <i>Oneshots</i>{' '}
        team is the quality of our adventures. Each adventure has been hand made
        from start to finish. With each adventure you will typically get a map,
        roll tables, NPCs, and special notes from the adventure creator with
        special instructions to the GM.
      </p>
      <h1>Our Selection</h1>
      <p>
        Our adventures are designed for all types of games from D&D to Stars
        Without Number. Make sure to peruse through each one carefully so that
        you don't miss out on an adventure that you may want to try.
      </p>
      <p>
        <i>Oneshots</i> doesn't only offer one shot adventures. Adventures
        ranging from 1/2 a session to 10 session-long campaign can be found here
        on <i>Oneshots</i>. Our hopes are that you are able to find the perfect
        adventure for your group's favorite games and play styles.
      </p>
      <h1>Contribute</h1>
      <p>
        If you think you have what it takes to make high quality adventures and
        enjoy our adventure-making format, please feel free to contribute to our
        mission to build a huge library full of high quality adventures free to
        everyone.
      </p>
      <div style={buttonWrapper}>
        <Link to="#">
          <Button>Submit Your Adventure</Button>
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
