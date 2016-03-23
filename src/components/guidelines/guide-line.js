export default class GuideLine extends React.Component {
  static propTypes = {
    onMouseDown: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    ruler: React.PropTypes.object,
  }

  shouldComponentUpdate(nextProps) {
    return this.props.ruler.location !== nextProps.ruler.location;
  }

  _handleMouseDown = (event) => {
    event.preventDefault();
    this.props.onMouseDown(this.props.ruler);
  }

  _handleMouseUp = (event) => {
    event.preventDefault();
    this.props.onMouseUp(this.props.ruler);
  }

  render() {
    const { ruler } = this.props;
    const isHorizontal = ruler.orientation === 'horizontal';

    return (
      <div
        ref="draggable"
        onMouseDown={this._handleMouseDown}
        onMouseUp={this._handleMouseUp}
        className={isHorizontal ? 'guide-line--horizontal' : 'guide-line--vertical'}
        style={isHorizontal ? { top: ruler.location } : { left: ruler.location }}
      />
    );
  }
}
