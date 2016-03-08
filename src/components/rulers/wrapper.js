import {
  HorizontalRuler,
  VerticalRuler,
  DualAxisRuler
} from 'components/rulers';

import './styles.css';

export default class RulersWrapper extends React.Component {
  render() {
    return (
      <div style={{ height: `${this.props.height}px` }} className="rulers-layout">
        <DualAxisRuler {...this.props} />
        <HorizontalRuler {...this.props} />
        <VerticalRuler {...this.props} />
      </div>
    );
  }
}
