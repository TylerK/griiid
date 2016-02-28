import { connect } from 'react-redux';
import { RulersWrapper } from 'components/rulers';
import { RulersSelector } from 'app/selectors';


class RulersContainer extends React.Component {
  render() {
    return <RulersWrapper {...this.props} />;
  }
}

export default connect(RulersSelector)(RulersContainer);
