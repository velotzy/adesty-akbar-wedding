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

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            transition: 'move-top-bottom',
            index: 0,
        }
      }

    componentDidMount() {
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
                <Frame>
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
                {/* <div className="controls">
                    <form>
                        <h3>Transition</h3>
                        <select onChange={ this.transitionChanged } name="transition">
                            <option value="move-top-bottom">Move To Top / From Bottom</option>
                            <option value="move-top-bottom-stagger">Move To Top Stagger / From Bottom</option>
                            <option value="scale-down-top-bottom">Scale Down / From Bottom</option>
                            <option value="scale-down-up">Scale Down / Scale Up</option>
                            <option value="fold-top-bottom">Fold Top / From Bottom</option>
                            <option value="cube-top-bottom">Cube Top / From Bottom</option>
                        </select>
                    </form>
                </div> */}
                {/* <div className="pagination">
                    { index + 1 } / { children.length }
                </div> */}
            </div>
        );

    }

}

export default App;
