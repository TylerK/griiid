import uuid from 'uuid-lib';
import config from 'app/config';
import { GuideLine } from 'components/guidelines';
import styles from './styles.css';

import {
  createGuideLine,
  deleteGuideLine,
  dragGuideLine,
  dropGuideLine
} from './actions';

@cssModules(styles)
export default class GuideLines extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    guideLines: React.PropTypes.array,
    dragging: React.PropTypes.object,
    draggingDirection: React.PropTypes.string
  }

  componentDidMount () {
    document.addEventListener('mousedown', this._newGuideDragStart);
    document.addEventListener('mousemove', this._guideDrag);
    document.addEventListener('mouseup', this._newGuideDragEnd);
  }

  componentWillUnMount () {
    document.removeEventListener('mousedown', this._newGuideDragStart);
    document.removeEventListener('mousemove', this._guideDrag);
    document.removeEventListener('mouseup', this._newGuideDragEnd);
  }

  /**
   * All the statics
   */
  dragDirection = ''
  id = ''
  isDragging = false
  offset = config.guideLines.size

  /**
   * Resets the above statics
   */
  _clearLocalDragData = (id) => {
    this.isDragging = false;
    this.dragDirection = '';
    this.dragId = '';
    this.props.dispatch(dropGuideLine(id));
  }

  /**
   * Event handler for creating a new draggable guideline
   */
  _newGuideDragStart = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { clientX, clientY } = event;
    const UUID = uuid.create();

    this.dragId = UUID.value;

    if (clientY <= this.offset) {
      this.dragDirection = 'y';
      this.isDragging = true;
      dispatch(createGuideLine('horizontal', 0, this.dragId));
    } else if (clientX <= this.offset) {
      this.dragDirection = 'x';
      this.isDragging = true;
      dispatch(createGuideLine('vertical', 0, this.dragId));
    }
  }

  /**
   * Event handler for dragging any guideline.
   */
  _guideDrag = (event) => {
    if (!this.isDragging) return;

    event.preventDefault();
    const { clientX, clientY } = event;
    const { dispatch } = this.props;

    if (this.dragDirection === 'y') {
      dispatch(dragGuideLine(this.dragId, clientY));
    } else {
      dispatch(dragGuideLine(this.dragId, clientX));
    }
  }

  /**
   * Event handler for ending dragging on a new guideline
   */
  _newGuideDragEnd = (event) => {
    event.preventDefault();
    const { dispatch, guideLines } = this.props;
    const { clientX, clientY } = event;

    // Nuke the guideline if they didn't drag it out of the rulers
    if (clientY <= this.offset || clientX <= this.offset) {
      dispatch(deleteGuideLine(this.dragId));
    } else if (this.isDragging) {
      this._clearLocalDragData(this.dragId);
    }
  }

  /**
   * Event handler for
   */
  _existingGuideDragStart = (ruler) => {
    this.isDragging = true;
    this.dragId = ruler.id;
    this.dragDirection = ruler.orientation === 'horizontal' ? 'y' : 'x';
  }

  /**
   * Event handler for creating a new draggable guideline
   */
  _existingGuideDragEnd = (ruler) => {
    this._clearLocalDragData(ruler.id);
  }

  /**
   * Sub render
   */
  renderRulers() {
    const { dispatch, guideLines } = this.props;

    if (guideLines) {
      return guideLines.map(ruler => {
        return (
          <GuideLine
            key={ruler.id}
            dispatch={dispatch}
            ruler={ruler}
            onMouseDown={this._existingGuideDragStart}
            onMouseUp={this._existingGuideDragEnd}
          />
        );
      });
    }
  }

  render() {
    const { guideLines } = this.props;
    let iconStyle = {};

    // Setting cursor styles on the stage ensures the cursor is
    // always correct while the user is dragging.
    if (this.dragDirection) {
      iconStyle = {
        cursor: this.dragDirection === 'y'
        ? 'row-resize'
        : 'col-resize'
      };
    }

    return (
      <div styleName="guide-lines--stage" style={iconStyle}>
        { this.renderRulers() }
      </div>
    );
  }
}
