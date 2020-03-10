/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

'use strict'

import React from 'react'

import Viewer from 'react-viewer'
import {
  isBrowser,
  isMobile
} from 'react-device-detect'

class PhotoPage extends React.Component {
  state = {
    visible: false,
    index: 0
  }
  onPressImage=(index)=> {
    this.setState({
      visible: true,
      index: index
    })
  }
  render () {
    const { visible, index } = this.state
    const images = [
      {
        src: require('../img/listPhoto/pict_1.png')
      },
      {
        src: require('../img/listPhoto/pict_2.png')
      },
      {
        src: require('../img/listPhoto/pict_3.png')
      },
      {
        src: require('../img/listPhoto/pict_4.png')
      },
      {
        src: require('../img/listPhoto/pict_5.png')
      },
      {
        src: require('../img/listPhoto/pict_6.png')
      },
    ]
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* <h1 style={{ color: '#000', fontSize: 15, margin: 'auto', textAlign: 'center', }}>&#10070; FOTO SESSION &#10070;</h1> */}
        {isMobile
          ? <div >
            <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
              <img onClick={() => this.onPressImage(0)} src={require('../img/listPhoto/thumbnails/photo_1.jpg')} className={'first-photo'} />
              <img onClick={() => this.onPressImage(1)} src={require('../img/listPhoto/thumbnails/photo_2.jpg')} className={'second-photo'} />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
              <div className={'photo-text'}>
                Adesty & Annovika
              </div>
              <img onClick={() => this.onPressImage(2)} src={require('../img/listPhoto/thumbnails/photo_3.jpg')} className={'third-photo'} />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
              <img onClick={() => this.onPressImage(3)} src={require('../img/listPhoto/thumbnails/photo_4.jpg')} className={'fourth-photo'} />
              <img onClick={() => this.onPressImage(5)} src={require('../img/listPhoto/thumbnails/photo_6.jpg')} className={'fifth-photo'} />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', marginBottom: '2%' }}>
              <img onClick={() => this.onPressImage(4)} src={require('../img/listPhoto/thumbnails/photo_5.jpg')} className={'sixth-photo'} />
            </div>
          </div>
          : <div>
            <img onClick={() => this.onPressImage(0)} src={require('../img/listPhoto/thumbnails/photo_1.jpg')} className={'first-photo'} />
            <img onClick={() => this.onPressImage(1)} src={require('../img/listPhoto/thumbnails/photo_2.jpg')} className={'second-photo'} />
            <img onClick={() => this.onPressImage(2)} src={require('../img/listPhoto/thumbnails/photo_3.jpg')} className={'third-photo'} />
            <img onClick={() => this.onPressImage(3)} src={require('../img/listPhoto/thumbnails/photo_4.jpg')} className={'fourth-photo'} />
            <img onClick={() => this.onPressImage(5)} src={require('../img/listPhoto/thumbnails/photo_6.jpg')} className={'fifth-photo'} />
            <img onClick={() => this.onPressImage(4)} src={require('../img/listPhoto/thumbnails/photo_5.jpg')} className={'sixth-photo'} />
          </div>}
        <Viewer
          visible={visible}
          activeIndex={index}
          zoomable
          loop
          changeable
          noToolbar
          noImgDetails
          className={'image-viewer'}
          // noFooter
          onMaskClick={() => { this.setState({visible: false}) }}
          onClose={() => { this.setState({visible: false}) }}
          images={images}
        />
      </div >
    )
  }
}

export default PhotoPage
