import { connect } from 'react-redux';
import { Rulers } from 'components/rulers';
import { RulersSelector } from 'app/selectors';


class RulersContainer extends React.Component {
  componentDidMount() {

  }

  render() {
    return <Rulers {...this.props} />;
  }
}

export default connect(RulersSelector)(RulersContainer);
