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
      <div className='firstpageBody' style={{ width: 'device-width', margin: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <img src={require('../img/pembuka1.png')} style={{ width: 140 }} /><br />
        </div>
        <div>
          <p style={{ fontSize: 11, color: '#000', margin: 'auto', textAlign: 'center' }}>
            <i>Assalamu'alaikum warahmatullahi wabarakatuh</i><br />
            Dengan memohon rahmat dan ridho Allah SWT, <br />Kami akan menyelenggarakan resepsi pernikahan Putra-Putri kami </p>
        </div>
        <div >
          <table style={{ width: '100%' }}>
            <tr>
              <td style={{ textAlign: 'left', width: 105, paddingTop: 5, textAlign: 'center' }}>
                <img src={require('../img/bride.jpg')} style={{ borderRadius: 5, width: 100, height: 100, objectFit: 'cover' }} />
              </td>
              <td style={{ textAlign: 'center', verticalAlign: 'top', fontFamily: 'EB Garamond' }}>
                <span style={{ color: '#000', fontSize: 20, marginBottom: 0, color: '#c79931' }}>Adesty Nanda F. S.Fis. Ftr</span>
                <div style={{ marginBottom: -5, marginTop: -5 }}>
                  <img src={require('../img/line.png')} style={{ width: '50%' }} />
                </div>
                <p style={{ color: '#000', fontSize: 14, marginTop: 5 }}>Putri<br />Bpk. Anton Joko Priyono <br />&<br /> Ibu Umi Sutarti</p>
              </td>
            </tr>
          </table>
          <div className='and' style={{ color: '#888', fontSize: 30, textAlign: 'center' }}>Dengan</div>
          <table style={{ width: '100%' }}>
            <tr>
              <td style={{ textAlign: 'center', verticalAlign: 'top', fontFamily: 'EB Garamond' }}>
                <span style={{ color: '#000', fontSize: 20, marginBottom: 0, color: '#c79931', fontFamily: 'EB Garamond' }}>Annovika W. Akbar S.Ikom</span>
                <div style={{ marginBottom: -5, marginTop: -5 }}>
                  <img src={require('../img/line.png')} style={{ width: '50%' }} />
                </div>
                <p style={{ color: '#000', fontSize: 14, marginTop: 5 }}>Putra<br />Bpk. Sukatno <br />&<br /> Ibu Anik Yuniati</p>
              </td>
              <td style={{ textAlign: 'left', width: 105, paddingTop: 5, textAlign: 'center' }}>
                <img src={require('../img/groom.jpg')} style={{ borderRadius: 5, width: 100, height: 100, objectFit: 'cover' }} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default FirstPage
