import config from 'app/config';

export default class RulersDualAxis extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const styles = {
      width: `${config.rulers.size}px`,
      height: `${config.rulers.size}px`,
    };

    return <div className="ruler--dual-axis" style={styles}></div>;
  }
}
