/**
 * Implements a topic box. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * title (string): Title of the topic
 * children: The content of the topic
 */

'use strict'

import React from 'react'

class Frame extends React.Component {
  render () {
    return (
      <div className='topic-wrapper'>
        <img src={require('../img/top-left.png')} className={'top-left'} />
        <img src={require('../img/bottom-right.png')} className={'bottom-right'} />
        <section>
          {/* <h1>{this.props.title}</h1> */}
          <div >{this.props.children}</div>
        </section>
      </div>
    )
  }
}

export default Frame
