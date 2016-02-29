import styles from './rulers.styles.css';

@cssModules(styles)
export default class RulersHorizontal extends React.Component {
  state = {
    width: 0
  }

  componentWillMount() {
    this._handleResize();
  }

  componentDidMount() {
    document.addEventListener('resize', this._handleResize);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width;
  }

  componentWillUnmount() {
    document.removeEventListener('resize', this._handleResize);
  }

  _handleResize = () => {
    this.setState({
      width: window.innerWidth
    });
  }

  renderMarkers() {
    const width = this.state.width;
    const markerBlockWidth = 100;
    const markerBlocks = width / markerBlockWidth;
    const markers = [];

    for (let i = 0; i <= markerBlocks; i++) {
      const width = Math.floor(i * markerBlockWidth);

      markers.push(
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

    return markers;
  }

  render() {
    return (
      <div styleName="ruler--horizontal">
        { this.renderMarkers() }
      </div>
    );
  }
}
