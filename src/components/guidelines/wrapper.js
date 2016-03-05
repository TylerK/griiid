import {
  GuideLines
} from 'components/guidelines';

import styles from './styles.css';

@cssModules(styles)
export default class RulersWrapper extends React.Component {
  render() {
    return (
      <div styleName="guide-lines--layout">
        <GuideLines {...this.props} />
      </div>
    );
  }
}
