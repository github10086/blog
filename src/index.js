/**
 * Created by Administrator on 2017/5/21.
 */
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: 'hello！2111'
        };
    }

    render() {
        return (
            <h2>{this.state.text}</h2>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));
