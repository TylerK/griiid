import config from 'app/config';
import { dragGuideLine } from './actions';
import { GuideLine } from 'components/guidelines';
import styles from './styles.css';

@cssModules(styles)
export default class GuideLines extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    guideLines: React.PropTypes.array
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
    const offset = config.guideLines.size;

    this.props.dispatch(dragGuideLine(id, orientation, location - offset));
  }

  _dragEnd = () => {
    this.setState({
      dragging: null
    });
  }

  renderRulers() {
    const { dispatch, guideLines } = this.props;

    if (guideLines) {
      return guideLines.map(ruler => {
        return (
          <GuideLine
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
    let iconStyle = {};

    if (this.state.dragging) {
      const dragDirection = this.state.dragging.orientation === 'horizontal';
      iconStyle = {
        cursor: dragDirection ? 'row-resize' : 'col-resize'
      };
    }

    return (
      <div styleName="guide-lines--stage" style={iconStyle} onMouseMove={this._dragLine}>
        { this.renderRulers() }
      </div>
    );
  }
}
