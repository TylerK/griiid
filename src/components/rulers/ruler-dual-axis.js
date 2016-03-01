import styles from './styles.css';

@cssModules(styles)
export default class RulersDualAxis extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div styleName="ruler--dual-axis"></div>;
  }
}
