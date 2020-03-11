/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

class Cover extends React.Component {
  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <LazyLoadImage
          effect={'blur'}
          height={'95%'}
          src={require('../img/cover.png')}
          width={'95%'} />
      </div>
    )
  }
}

export default Cover
