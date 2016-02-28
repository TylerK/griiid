import React, { Component } from 'react';
import { render } from 'react-dom';
import cssModules from 'react-css-modules';
import styles from './styles/index.css';
import { Provider } from 'react-redux';
import Root from 'app/root';
import Store from 'app/store';

@cssModules(styles)
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Root />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('griiid'));
