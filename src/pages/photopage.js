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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class PhotoPage extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* <h1 style={{ color: '#000', fontSize: 15, margin: 'auto', textAlign: 'center', }}>&#10070; FOTO SESSION &#10070;</h1> */}
        {isMobile
          ? <div >
            <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
              <img src={require('../img/listPhoto/thumbnails/photo_1.jpg')} className={'first-photo'} />
              <img src={require('../img/listPhoto/thumbnails/photo_2.jpg')} className={'second-photo'} />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
              <div className={'photo-text'}>
                Adesty & Annovika
              </div>
              <img src={require('../img/listPhoto/thumbnails/photo_3.jpg')} className={'third-photo'} />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
              <img src={require('../img/listPhoto/thumbnails/photo_4.jpg')} className={'fourth-photo'} />
              <img src={require('../img/listPhoto/thumbnails/photo_6.jpg')} className={'fifth-photo'} />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
              <img src={require('../img/listPhoto/thumbnails/photo_5.jpg')} className={'sixth-photo'} />
            </div>
          </div>
          : <div>
            <img src={require('../img/listPhoto/thumbnails/photo_1.jpg')} className={'first-photo'} />
            <img src={require('../img/listPhoto/thumbnails/photo_2.jpg')} className={'second-photo'} />
            <img src={require('../img/listPhoto/thumbnails/photo_3.jpg')} className={'third-photo'} />
            <img src={require('../img/listPhoto/thumbnails/photo_4.jpg')} className={'fourth-photo'} />
            <img src={require('../img/listPhoto/thumbnails/photo_6.jpg')} className={'fifth-photo'} />
            <img src={require('../img/listPhoto/thumbnails/photo_5.jpg')} className={'sixth-photo'} />
          </div>}
      </div >
    )
  }
}

export default PhotoPage
