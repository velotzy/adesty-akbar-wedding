/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

'use strict'

import React from 'react'

class FormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      words: 'words',
      uid: '',
      attendance: false,
      sentData: false
    }
  }

  componentDidMount () {
    this.props.getData()
  }

  render() {
    const { sentData, name, attendance, words } = this.state
    return (
      <div >
        <h1 style={{ color: '#000', fontSize: 15, marginBottom: 20, textAlign: 'center' }}>&#10070; UCAPAN & DOA &#10070;</h1>
        {!sentData
          ? <form onSubmit={this.handleSubmit}>
          <div className="form">
            <span className={'form-label'}>
              Nama
            </span>
            <input type="text" ref='name' className="form-field" placeholder="Nama" />
            <span className={'form-label'}>
              Ucapan & Doa
                </span>
            <input type="text" ref='words' className="form-field text-area " placeholder="Ucapan & Doa" />
            <span className={'form-label'}>
              Konfirmasi kehadiran
            </span>
            <select className={'select'} ref="attendance">
              <option value={'Hadir'}>Ya</option>
              <option value={'Tidak Hadir'}>Tidak</option>
              <option value={'Belum Tahu'}>Belum tahu</option>
            </select>
          </div>
          <button type="submit" className="send-button">Kirim Ucapan & Doa</button>
        </form>
        : <div className={'ucapan-doa'}>
          Terima Kasih {name} <br />
          Anda telah memberikan Ucapan & Doa <br />
          <br />
          "{words}" <br />
          <br />
          kepada kedua Mempelai <br />
          Suatu kehormatan & Kebahagiaan bagi kami,<br />
          apabila Anda berkenan hadir <br />untuk memberikan do'a restu.
          </div>}
      </div>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.refs.name.value;
    let words = this.refs.words.value;
    let attendance = this.refs.attendance.value

    const data = {
      name: name,
      words: words,
      attendance: attendance
    }
    this.setState({
      name: name,
      words: words,
      attendance: attendance,
      sentData: true
    })
    this.props.writeData(data)
  }
}

export default FormPage
