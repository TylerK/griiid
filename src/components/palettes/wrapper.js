import * as PALETTES from './constants';
import BaselineGrid from './palettes/baseline-grid';
import LayoutGrid from './palettes/layout-grid';
import Config from './palettes/config';

export default class PaletteWrapper extends React.Component {
  static propTypes = {
    palette: React.PropTypes.string
  }

  render() {
    const { palette } = this.props;

    switch (palette) {
      case PALETTES.BASELINE_GRID_PALETTE: return <BaselineGrid {...this.props} />;
      case PALETTES.CONFIG_PALETTE: return <Config {...this.props} />;
      case PALETTES.LAYOUT_GRID_PALETTE: return <LayoutGrid {...this.props} />;
      default: return <div />;
    }
  }
}
