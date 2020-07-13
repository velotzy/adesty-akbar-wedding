import React, { Component } from 'react';
import ReactSnapScroll from 'react-snap-scroll';
import Firebase from 'firebase';
import config from './config';

import './App.css';
import Cover from './pages/cover';
import FirstPage from './pages/firspage';
import SecondPage from './pages/secondpage';
import ThirdPage from './pages/thirdpage'
import FourthPage from './pages/fourthpage'
import PhotoPage from './pages/photopage'
import Frame from './components/frame'
import FormPage from './pages/form';
function Sound(source, volume, loop)
{
    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function()
    {
        document.body.removeChild(this.son);
    }
    this.start = function()
    {
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    }
    this.remove = function()
    {
        document.body.removeChild(this.son);
        this.finish = true;
    }
    this.init = function(volume, loop)
    {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}
class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            transition: 'move-top-bottom',
            index: 0,
        }
      }

    componentDidMount() {
        var sound = new Sound('https://voca.ro/8WM8feNWwbT', 100, true);
        sound.start();
        Firebase.initializeApp(config);
      }
      writeData = (data) => {
        Firebase.database().ref('/wedding-attendance').push(data);
        console.log('DATA SAVED');
      }
    
    //   getData = () => {
    //     let ref = Firebase.database().ref('/wedding-attendance');
    //     ref.on('value', snapshot => {
    //       const state = snapshot.val();
    //       console.log('DATA RETRIEVED', state);
    //     });
    
    //   }

    transitionChanged = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    indexChanged = index => {
        this.setState({ index });
    }

    render() {

        const { transition } = this.state;

        const children = [
            <div className="page cover">
                <Cover />
                <img alt={''} src={require('./img/swipeup.gif')} style={{height: 30, width: 35, position: 'absolute', bottom: 10}} />
            </div>,
            <div className="page">
                <Frame >
                    <FirstPage />
                </Frame>
            </div>,
            <div className="page">
                <Frame >
                    <SecondPage />
                </Frame>
            </div>,
            <div className="page">
                <Frame>
                    <ThirdPage />
                </Frame>
            </div>,
            <div className="page">
                <Frame photo>
                    <PhotoPage />
                </Frame>
            </div>,
            <div className="page">
            <Frame>
                <FormPage 
                    getData={this.getData}
                    writeData={this.writeData}
                />
            </Frame>
        </div>,
            <div className="page">
                <Frame>
                    <FourthPage />
                </Frame>
            </div>
        ];
        return (
            <div className="App">
                <ReactSnapScroll
                    transition={transition}
                    indexChanged={this.indexChanged}
                >
                    {children.map(child => child)}
                </ReactSnapScroll>
                {/* <audio autoPlay loop hidden>
                    <source src={'https://drive.google.com/uc?export=download&id=1h-mMUflc4DHTxM_9loCYgs6sxd-Sfg5h'} type="audio/mp3" />
                </audio> */}
            </div>
        );

    }

}

export default App;
