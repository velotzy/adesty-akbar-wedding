/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

'use strict'

import React from 'react'

class FourthPage extends React.Component {
  render() {
    return (
      <div >
        <div style={{ textAlign: 'center' }}>
          <img src={require('../img/penutup1.png')} style={{ width: 140 }} /><br />
        </div>
        <div>
          <p className={'intro-text'}>
            Semoga Allah SWT memberi barokah dan menjadikan mempelai berdua dalam kebaikan keluarga sakinah, mawaddah dan warahmah.<br />
            <i>Wasalammu'alaikum Warahmatulahi Wabarakatuh</i>
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: '20%', textAlign: 'center', borderWidth: 'solid' }}>
          <p className={'intro-text'}>
            support by @singolawu.id
          </p>
        </div>
      </div>
    )
  }
}

export default FourthPage
