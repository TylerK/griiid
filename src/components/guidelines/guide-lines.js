import uuid from 'node-uuid';
import config from 'app/config';
import { GuideLine } from 'components/guidelines';

import {
  createGuideLine,
  deleteGuideLine,
  dragGuideLine,
} from './actions';

export default class GuideLines extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    guidelines: React.PropTypes.array,
    dragging: React.PropTypes.object,
    draggingDirection: React.PropTypes.string
  }

  componentDidMount () {
    document.addEventListener('mousedown', this._newGuideDragStart);
    document.addEventListener('mousemove', this._guideDrag);
    document.addEventListener('mouseup', this._newGuideDragEnd);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.dragging === nextProps.dragging;
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
  offset = config.rulers.size

  /**
   * Resets the above statics
   */
  _clearLocalDragData = () => {
    this.isDragging = false;
    this.dragDirection = '';
    this.dragId = '';
    this.forceUpdate();
  }

  /**
   * Event handler for creating a new draggable guideline
   */
  _newGuideDragStart = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { clientX, clientY } = event;

    this.dragId = uuid.v4();

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
    if (!this.isDragging) return;
    event.preventDefault();
    const { dispatch } = this.props;
    const { clientX, clientY } = event;

    const isInRulerBounds = (
      (clientY <= this.offset && clientX >= this.offset) ||
      (clientY >= this.offset && clientX <= this.offset)
    );

    // Nuke the guideline if they didn't drag it out of the rulers
    if (isInRulerBounds) {
      dispatch(deleteGuideLine(this.dragId));
    }

    this._clearLocalDragData();
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
    const { dispatch, guidelines } = this.props;

    if (guidelines) {
      return guidelines.map(ruler => {
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
    let styles = {
      height: `${this.props.height}px`
    };

    // Setting cursor styles on the stage ensures the cursor is
    // always correct while the user is dragging.
    if (this.isDragging) {
      styles = Object.assign({}, styles, {
        cursor: this.dragDirection === 'y'
        ? 'row-resize'
        : 'col-resize',
        pointerEvents: 'all'
      });
    }

    return (
      <div className="guide-lines--stage" style={styles}>
        { this.renderRulers() }
      </div>
    );
  }
}
