import config from 'app/config';
import { MarkerBlockPX } from 'components/rulers';

export default class RulersHorizontal extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.width !== nextProps.width ||
      this.props.scrollX !== nextProps.scrollX
    );
  }

  renderMarkers() {
    const { width } = this.props;
    const markerBlockWidth = 100;
    const markerBlocks = width / markerBlockWidth;
    const markers = [];

    for (let i = 0; i <= markerBlocks + 1; i++) {
      const offset = i * 100;
      markers.push(<MarkerBlockPX key={i} offset={offset} orientation="horizontal" />);
    }

    return markers;
  }

  render() {
    const { scrollX, width } = this.props;
    const size = config.rulers.size;

    const style = {
      height: `${size}px`,
      width: `${width}px`,
      left: `${(scrollX * -1) + size}px`
    };

    return (
      <div className="ruler--horizontal" style={style}>
        { this.renderMarkers() }
      </div>
    );
  }
}
