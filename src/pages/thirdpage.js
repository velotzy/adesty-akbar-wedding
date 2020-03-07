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
            width={'100%'}
            height={'100%'}
            src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDEVtDo5e0Oxo_RVI7qflfYrRPNPLhv4XU&&center=-7.190360,111.392390&zoom=17" >
          </iframe>
        </div>
      </div>
    )
  }
}

export default ThirdPage
