import config from 'app/config';
import { MarkerBlockPX } from 'components/rulers';

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
      const offset = i * 100;
      markers.push(<MarkerBlockPX key={i} offset={offset} orientation="horizontal" />);
    }

    return markers;
  }

  render() {
    return (
      <div className="ruler--horizontal" style={{ height: `${config.rulers.size}px` }}>
        { this.renderMarkers() }
      </div>
    );
  }
}
