import { GuideLines } from 'components/guidelines';
import './styles.css';

export default class GuideLinesWrapper extends React.Component {
  render() {
    return (
      <GuideLines {...this.props} />
    );
  }
}
