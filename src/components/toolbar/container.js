import { connect } from 'react-redux';
import { Wrapper } from 'components/toolbar';
import { ToolBarSelector } from 'app/selectors';

class ToolBarContainer extends React.Component {
  render() {
    return (
      <Wrapper {...this.props} />
    );
  }
}

export default connect(ToolBarSelector)(ToolBarContainer);
