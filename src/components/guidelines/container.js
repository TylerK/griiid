import { connect } from 'react-redux';
import { Wrapper } from 'components/guidelines';
import { createGuideLine } from './actions';
import { GuideLinesSelector } from 'app/selectors';

class GuideLinesContainer extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func
  }

  componentDidMount() {
    this.props.dispatch(createGuideLine('vertical', 30));
    this.props.dispatch(createGuideLine('vertical', 60));
    this.props.dispatch(createGuideLine('vertical', 90));
    this.props.dispatch(createGuideLine('vertical', 120));
    this.props.dispatch(createGuideLine('vertical', 150));
    this.props.dispatch(createGuideLine('horizontal', 30));
    this.props.dispatch(createGuideLine('horizontal', 60));
    this.props.dispatch(createGuideLine('horizontal', 90));
    this.props.dispatch(createGuideLine('horizontal', 120));
    this.props.dispatch(createGuideLine('horizontal', 150));
  }

  render() {
    return (
      <Wrapper {...this.props} />
    );
  }
}

export default connect(GuideLinesSelector)(GuideLinesContainer);
