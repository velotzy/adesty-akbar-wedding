/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

'use strict'

import React from 'react'
import Slider from 'react-animated-slider';

class PhotoPage extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {/* <h1 style={{ color: '#000', fontSize: 15, margin: 'auto', textAlign: 'center', }}>&#10070; FOTO SESSION &#10070;</h1> */}
        <div>
          <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
            <img src={require('../img/listPhoto/thumbnails/photo_1.jpg')} style={{ maxWidth: '28%', height: 'auto', marginRight: '2%' }} />
            <img src={require('../img/listPhoto/thumbnails/photo_2.jpg')} style={{ maxWidth: '70%', height: 'auto' }} />
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
            <div style={{ minWidth: '39%', height: 'auto', border: '1% solid', fontSize: '5vw', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              Adesty & Annovika
            </div>
            <img src={require('../img/listPhoto/thumbnails/photo_3.jpg')} style={{ maxWidth: '58%', height: 'auto', marginLeft: '2%' }} />
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
            <img src={require('../img/listPhoto/thumbnails/photo_4.jpg')} style={{ maxWidth: '49%', height: 'auto' }} />
            <img src={require('../img/listPhoto/thumbnails/photo_6.jpg')} style={{ maxWidth: '49%', height: 'auto', marginLeft: '2%' }} />
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
            <img src={require('../img/listPhoto/thumbnails/photo_5.jpg')} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
        {/* <Slider>
          <img src={require('../img/listPhoto/pict_1.png')} />
          <img src={require('../img/listPhoto/pict_5.png')} />
          <img src={require('../img/listPhoto/pict_2.png')} />
          <img src={require('../img/listPhoto/pict_3.png')} />
          <img src={require('../img/listPhoto/pict_4.png')} />
          <img src={require('../img/listPhoto/pict_6.png')} />
        </Slider> */}
      </div >
    )
  }
}

export default PhotoPage
