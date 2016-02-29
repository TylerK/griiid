import { dragRuler } from './rulers.actions';
import { RulerLine } from 'components/rulers';
import styles from './rulers.styles.css';

@cssModules(styles)
export default class Rulers extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    rulers: React.PropTypes.array
  }

  state = {
    dragging: null
  }

  _dragStart = (ruler) => {
    this.setState({
      dragging: ruler
    });
  }

  _dragLine = (event) => {
    if (!this.state.dragging) return;

    const { id, orientation } = this.state.dragging;
    const location = orientation === 'horizontal' ? event.clientY : event.clientX;

    this.props.dispatch(dragRuler(id, orientation, location - 30));
  }

  _dragEnd = () => {
    this.setState({
      dragging: null
    });
  }

  renderRulers() {
    const { dispatch, rulers } = this.props;

    if (rulers) {
      return rulers.map(ruler => {
        return (
          <RulerLine
            key={ruler.id}
            dispatch={dispatch}
            ruler={ruler}
            onMouseDown={this._dragStart}
            onMouseUp={this._dragEnd}
          />
        );
      });
    }
  }

  render() {
    let dragDirection;
    let iconStyle = {};

    if (this.state.dragging) {
      dragDirection = this.state.dragging.orientation === 'horizontal';
      iconStyle = {
        cursor: dragDirection ? 'row-resize' : 'col-resize'
      };
    }

    return (
      <div styleName="rulers--stage" style={iconStyle} onMouseMove={this._dragLine}>
        { this.renderRulers() }
      </div>
    );
  }
}
