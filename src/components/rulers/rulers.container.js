import { connect } from 'react-redux';
import { RulersWrapper } from 'components/rulers';
import { RulersSelector } from 'app/selectors';
import { createRuler } from './rulers.actions';

class RulersContainer extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func
  }

  componentDidMount() {
    this.props.dispatch(createRuler('vertical', 133));
    this.props.dispatch(createRuler('horizontal', 76));
  }

  render() {
    return (
      <RulersWrapper {...this.props} />
    );
  }
}

export default connect(RulersSelector)(RulersContainer);
