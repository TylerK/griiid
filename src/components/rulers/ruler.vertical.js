import styles from './rulers.styles.css';

@cssModules(styles)
export default class RulersVertical extends React.Component {
  renderMarkers() {
    const windowHeight = window.innerWidth;
    const markerBlockHeight = 100;
    const markerBlocks = windowHeight / markerBlockHeight;
    const Markers = [];

    for (let i = 0; i <= markerBlocks; i++) {
      let height = Math.floor(i * markerBlockHeight);

      Markers.push(
        <div styleName="markers-block--vertical" style={{ height: markerBlockHeight, top: height }}>
          <div styleName="title">{height}</div>
          <div>
            <div styleName="marker" style={{ top: '0px' }} />
            <div styleName="marker" style={{ top: '10px' }} />
            <div styleName="marker" style={{ top: '20px' }} />
            <div styleName="marker" style={{ top: '30px' }} />
            <div styleName="marker" style={{ top: '40px' }} />
            <div styleName="marker" style={{ top: '50px' }} />
            <div styleName="marker" style={{ top: '60px' }} />
            <div styleName="marker" style={{ top: '70px' }} />
            <div styleName="marker" style={{ top: '80px' }} />
            <div styleName="marker" style={{ top: '90px' }} />
            <div styleName="marker" style={{ top: '100px' }} />
          </div>
        </div>
      );
    }

    return Markers;
  }
  render() {
    return (
      <div styleName="ruler--vertical">
        { this.renderMarkers() }
      </div>
    );
  }
}
