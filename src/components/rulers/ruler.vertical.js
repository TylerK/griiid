import styles from './rulers.styles.css';

@cssModules(styles)
export default class RulersVertical extends React.Component {
  state = {
    height: 0
  }

  componentWillMount() {
    this._handleResize();
  }

  componentDidMount() {
    document.addEventListener('resize', this._handleResize);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.height !== nextState.height;
  }

  componentWillUnmount() {
    document.removeEventListener('resize', this._handleResize);
  }

  _handleResize = () => {
    this.setState({
      height: window.innerWidth
    });
  }

  renderMarkers() {
    const height = this.state.height;
    const markerBlockHeight = 100;
    const markerBlocks = height / markerBlockHeight;
    const markers = [];

    for (let i = 0; i <= markerBlocks; i++) {
      const height = Math.floor(i * markerBlockHeight);

      markers.push(
        <div key={i} styleName="markers-block--vertical" style={{ height: markerBlockHeight, top: height }}>
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

    return markers;
  }
  render() {
    console.log(this.state.height);
    return (
      <div styleName="ruler--vertical">
        { this.renderMarkers() }
      </div>
    );
  }
}
