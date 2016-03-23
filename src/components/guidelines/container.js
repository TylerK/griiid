import { connect } from 'react-redux';
import { Wrapper } from 'components/guidelines';
import { GuideLinesSelector } from 'app/selectors';

class GuideLinesContainer extends React.Component {
  render() {
    return (
      <Wrapper {...this.props} />
    );
  }
}

export default connect(GuideLinesSelector)(GuideLinesContainer);
