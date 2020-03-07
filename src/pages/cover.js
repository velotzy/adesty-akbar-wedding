/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

'use strict'

import React from 'react'

class Cover extends React.Component {
  render() {
    return (
      <div className='imageTitle'>
        <img style={{ width: '100%' }} src={require('../img/anno_ades.png')} />
        <div className='wedding-date'>
          <text style={{ color: '#c3821d' }}>
            11<sup>th</sup> APRIL, 2020
          </text>
        </div>
      </div>
    )
  }
}

export default Cover
