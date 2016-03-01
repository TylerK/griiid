import { connect } from 'react-redux';
import { Wrapper } from 'components/rulers';
import { RulersSelector } from 'app/selectors';
import { createRuler } from './actions';

class RulersContainer extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func
  }

  componentDidMount() {
    this.props.dispatch(createRuler('vertical', 30));
    this.props.dispatch(createRuler('vertical', 60));
    this.props.dispatch(createRuler('vertical', 90));
    this.props.dispatch(createRuler('vertical', 120));
    this.props.dispatch(createRuler('vertical', 150));

    this.props.dispatch(createRuler('horizontal', 30));
    this.props.dispatch(createRuler('horizontal', 60));
    this.props.dispatch(createRuler('horizontal', 90));
    this.props.dispatch(createRuler('horizontal', 120));
    this.props.dispatch(createRuler('horizontal', 150));
  }

  render() {
    return (
      <Wrapper {...this.props} />
    );
  }
}

export default connect(RulersSelector)(RulersContainer);
