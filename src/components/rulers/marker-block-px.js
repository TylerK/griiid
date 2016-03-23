export default class MarkerBlockPX extends React.Component {
  static propTypes = {
    offset: React.PropTypes.number,
    orientation: React.PropTypes.string,
  }

  shouldComponentupdate() {
    return false;
  }

  render() {
    const { offset, orientation } = this.props;
    const markers = [];

    for (let i = 0; i < 10; i++) {
      const markerStyles = orientation === 'horizontal'
      ? { left: `${i * 10}px` }
      : { top: `${i * 10}px` };

      markers.push(<div key={i} className="marker" style={markerStyles} />);
    }

    const wrapperStyles = orientation === 'horizontal'
    ? { width: '100px', left: offset }
    : { height: '100px', top: offset };

    return (
      <div className={`markers-block--${orientation}`} style={wrapperStyles}>
        <div className="title">{offset}</div>
        <div>
          { markers }
        </div>
      </div>
    );
  }
}
