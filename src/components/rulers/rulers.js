import {
  RulersHorizontal,
  RulersVertical,
  RulersDualAxis
} from 'components/rulers';

import styles from './rulers.styles.css';

@cssModules(styles)
export default class Rulers extends React.Component {
  render() {
    return (
      <div styleName="rulers">
        rulers
      </div>
    );
  }
}
