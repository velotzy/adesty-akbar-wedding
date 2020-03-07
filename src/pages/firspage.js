/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

'use strict'

import React from 'react'

class FirstPage extends React.Component {
  render() {
    return (
      <div >
        <div style={{ textAlign: 'center' }}>
          <img src={require('../img/pembuka1.png')} style={{ width: 140 }} /><br />
        </div>
        <div>
          <p className={'intro-text'}>
            <i>Assalamu'alaikum warahmatullahi wabarakatuh</i><br />
            Dengan memohon rahmat dan ridho Allah SWT, <br />Kami akan menyelenggarakan resepsi pernikahan Putra-Putri kami </p>
        </div>
        <div >
          <div>
            <div className={'brides-name'} style={{ textAlign: 'center' }}>
              Adesty Nanda F. S.Fis. Ftr <br />
              <img src={require('../img/line.png')} style={{ width: '70%' }} />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <img src={require('../img/bride.jpg')} style={{ borderRadius: 50, width: 100, height: 100, objectFit: 'cover' }} />
              <p style={{ marginLeft: 20 }} className={'parent-name'} >Putri<br />Bpk. Anton Joko Priyono <br />&<br /> Ibu Umi Sutarti</p>
            </div>
          </div>
          <div className='and'>Dengan</div>

          <div>
            <div className={'brides-name'} style={{ textAlign: 'center' }}>
              Annovika W. Akbar S.Ikom <br />
              <img src={require('../img/line.png')} style={{ width: '70%' }} />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', textAlign: 'right', justifyContent: 'flex-end' }}>
              <p style={{ marginRight: 20 }} className={'parent-name'}>Putra<br />Bpk. Sukatno <br />&<br /> Ibu Anik Yuniati</p>
              <img src={require('../img/groom.jpg')} style={{ borderRadius: 50, width: 100, height: 100, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FirstPage
