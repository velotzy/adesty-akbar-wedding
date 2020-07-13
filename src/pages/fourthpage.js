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
          <p className={'closing-text'}>
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ<br />
          </p>
          <p className={'closing-text-2'}>
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu merasa tenang dan tentram kepadanya, dan  dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir." <br /> (QS. Ar-Rum: 21)
          </p>
          <i className={'closing'}>Wasalammu'alaikum Warahmatulahi Wabarakatuh</i>
        </div>
        <div style={{ position: 'absolute', bottom: '10%', textAlign: 'center', borderWidth: 'solid' }}>
          <a href='https://www.instagram.com/singolawu.id/'>
            <p className={'intro-text'}>
              support by @singolawu.id
            </p>
          </a>
        </div>
      </div>
    )
  }
}

export default FourthPage
