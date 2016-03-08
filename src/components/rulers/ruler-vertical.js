import config from 'app/config';
import { MarkerBlockPX } from 'components/rulers';

export default class RulersVertical extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.height !== nextProps.height ||
      this.props.scrollY !== nextProps.scrollY
    );
  }

  renderMarkers() {
    const { height } = this.props;
    const markerBlockHeight = 100;
    const markerBlocks = height / markerBlockHeight;
    const markers = [];

    for (let i = 0; i <= markerBlocks + 1; i++) {
      const offset = i * 100;
      markers.push(<MarkerBlockPX key={i} offset={offset} orientation="vertical" />);
    }

    return markers;
  }

  render() {
    const { scrollY, height } = this.props;
    const size = config.rulers.size;

    const style = {
      width: `${size}px`,
      height: `${height}px`,
      top: `${(scrollY * -1) + size}px`
    };

    return (
      <div className="ruler--vertical" style={style}>
        { this.renderMarkers() }
      </div>
    );
  }
}
