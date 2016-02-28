import {
  Rulers,
  HorizontalRuler,
  VerticalRuler,
  DualAxisRuler
} from 'components/rulers';

import styles from './rulers.styles.css';

@cssModules(styles)
export default class RulersWrapper extends React.Component {
  render() {
    return (
      <div styleName="rulers-wrapper">
        <DualAxisRuler {...this.props} />
        <HorizontalRuler {...this.props} />
        <VerticalRuler {...this.props} />
        <Rulers {...this.props} />
      </div>
    );
  }
}
