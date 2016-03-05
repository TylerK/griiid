import {
  HorizontalRuler,
  VerticalRuler,
  DualAxisRuler
} from 'components/rulers';

import styles from './styles.css';

@cssModules(styles)
export default class RulersWrapper extends React.Component {
  render() {
    return (
      <div styleName="rulers-layout">
        <DualAxisRuler {...this.props} />
        <HorizontalRuler {...this.props} />
        <VerticalRuler {...this.props} />
      </div>
    );
  }
}
