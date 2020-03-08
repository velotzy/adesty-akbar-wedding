/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

'use strict'

import React from 'react'
import GoogleMapReact from 'google-map-react'

class ThirdPage extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render() {
    return (
      <div>
        <h1 style={{ color: '#000', fontSize: 15, margin: 'auto', textAlign: 'center' }}>&#10070; LOKASI ACARA &#10070;</h1>
        <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.221006278232!2d111.39153963474858!3d-7.1902999992401275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTEnMjUuMSJTIDExMcKwMjMnMzIuNiJF!5e0!3m2!1sen!2sid!4v1583665603450!5m2!1sen!2sid"
          width="400"
          height="400"
          frameborder={0}
          style={{border: 0}}></iframe>
        </div>
      </div>
    )
  }
}

export default ThirdPage
