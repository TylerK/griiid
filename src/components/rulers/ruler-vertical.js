import config from 'app/config';
import { MarkerBlockPX } from 'components/rulers';

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
      const offset = i * 100;
      markers.push(<MarkerBlockPX key={i} offset={offset} orientation="vertical" />);
    }

    return markers;
  }
  render() {
    return (
      <div className="ruler--vertical" style={{ width: `${config.rulers.size}px` }}>
        { this.renderMarkers() }
      </div>
    );
  }
}
