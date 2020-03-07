/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

'use strict'

import React from 'react'

class TitleBar extends React.Component {
  render() {
    return (
      <header id={this.props.id} className='titlebar'>
        <div style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}} >
          <img style={{ width: '70%', maxWidth: 750 }} src={'../../static/img/anno_ades.png'} />
        </div>
        {/* <span className="bride-name">Adesty</span>
                <span className="groom-name">&nbsp;
                    <span>&amp;</span> Annovika
                </span> */}
        <div className='wedding-date'>11<sup>th</sup> APRIL, 2020</div>
      </header>
    )
  }
}

export default TitleBar
