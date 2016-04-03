import { connect } from 'react-redux';
import { PaletteSelector } from 'app/selectors';

import Wrapper from './wrapper';

class PaletteContainer extends React.Component {
  render() {
    return <Wrapper {...this.props} />;
  }
}

export default connect(PaletteSelector)(PaletteContainer);
