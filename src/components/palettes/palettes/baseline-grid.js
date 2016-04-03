import { Panel, TitleBar } from 'components/atoms';

export default class BaselineGridPaletteWrapper extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func
  }

  render() {
    return (
      <Panel
        width="300"
        height="200"
        left="110"
        top="40"
      >
        <TitleBar>Baseline Grid</TitleBar>
      </Panel>
    );
  }
}
