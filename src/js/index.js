/**
 * Created by Administrator on 2017/5/21.
 */
import '../css/index.css';
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: 'hello！'
        };
    }

    render() {
        return (
            <h2>{this.state.text}</h2>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));
