import React, { Component } from 'react';
import { render } from 'react-dom';
import cssModules from 'react-css-modules';
import styles from './styles/index.css';

@cssModules(styles)
export default class App extends Component {
  render() {
    return (
      <div>Hello, World.</div>
    );
  }
}

render(<App />, document.getElementById('griiid'));
