import React, { Component } from 'react';
import ReactSnapScroll from 'react-snap-scroll';
import './App.css';
import Cover from './pages/cover';
import FirstPage from './pages/firspage';
import SecondPage from './pages/secondpage';

const children = [
    <div className="page">
        <Cover />
    </div>,
    <div className="page">
        <FirstPage />
    </div>,
    <div className="page">
        <SecondPage />
    </div>,
    <div className="page">
        <h2><span>Snap</span><span>Scroll</span></h2>
    </div>
];

class App extends Component {

    state = {
        transition: 'move-top-bottom',
        index: 0,
    }

    transitionChanged = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    indexChanged = index => {
        this.setState({ index });
    }

    render() {

        const { transition, index } = this.state;

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
