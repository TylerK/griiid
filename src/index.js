import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles/index.scss';

@cssModules(styles)
export default class App extends Component {
  render() {
    return (
      <div>Hello, World.</div>
    );
  }
}
