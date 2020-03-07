/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

'use strict'

import React from 'react'

class SecondPage extends React.Component {
  render () {
    return (
      <div >
        <h1 style={{ color: '#000', fontSize: 15, margin: 'auto', textAlign: 'center' }}>&#10070; RANGKAIAN ACARA &#10070;</h1>
        <div style={{ fontSize: 14, color: '#000' }}>
          <div style={{ color: '#c79931', padding: 5, fontSize: 18, textAlign: 'center' }}>Resepsi</div>
          <table style={{ width: '100%' }}>
            <tr>
              <td />
              <td style={{ textAlign: 'right', fontSize: 15, paddingTop: 0, paddingBottom: 0, paddingRight: 5, paddingLeft: 5, width: 100 }}>
                <b>
                  Sabtu
                </b>
              </td>
              <td style={{ width: 50, textAlign: 'center' }}>
                <div style={{ fontSize: 35, paddingTop: 0, paddingBottom: 0, paddingRight: 5, paddingLeft: 5, marginTop: -10, color: '#c79931' }}>
                  <b>
                    08
                  </b>
                </div>
                <div style={{ marginTop: -7, marginBottom: -10 }}>
                  2020
                </div>
              </td>
              <td style={{ textAlign: 'left', fontSize: 15, paddingRight: 5, paddingLeft: 5, width: 100 }}>
                <b>
                  Februari
                </b>
              </td>
              <td />
            </tr>
          </table>
          <div style={{ marginTop: 13, fontSize: 12, textAlign: 'center' }}>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
              10:00 - 12:00 WIB</div>
            Hotel Grand Aston<br />Yogyakarta
          </div>
        </div>
      </div>
    )
  }
}

export default SecondPage
