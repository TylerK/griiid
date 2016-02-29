import styles from './rulers.styles.css';

@cssModules(styles)
export default class RulersHorizontal extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  renderMarkers() {
    const windowWidth = window.innerWidth;
    const markerBlockWidth = 100;
    const markerBlocks = windowWidth / markerBlockWidth;
    const Markers = [];

    for (let i = 0; i <= markerBlocks; i++) {
      const width = Math.floor(i * markerBlockWidth);

      Markers.push(
        <div key={i} styleName="markers-block--horizontal" style={{ width: markerBlockWidth, left: width }}>
          <div styleName="title">{width}</div>
          <div>
            <div styleName="marker" style={{ left: '0px' }} />
            <div styleName="marker" style={{ left: '10px' }} />
            <div styleName="marker" style={{ left: '20px' }} />
            <div styleName="marker" style={{ left: '30px' }} />
            <div styleName="marker" style={{ left: '40px' }} />
            <div styleName="marker" style={{ left: '50px' }} />
            <div styleName="marker" style={{ left: '60px' }} />
            <div styleName="marker" style={{ left: '70px' }} />
            <div styleName="marker" style={{ left: '80px' }} />
            <div styleName="marker" style={{ left: '90px' }} />
            <div styleName="marker" style={{ left: '100px' }} />
          </div>
        </div>
      );
    }

    return Markers;
  }

  render() {
    return (
      <div styleName="ruler--horizontal">
        { this.renderMarkers() }
      </div>
    );
  }
}
