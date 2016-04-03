import { toggleButton } from './actions';
import { clearPalettes, togglePalette } from '../palettes/actions';
import * as PALETTES from '../palettes/constants';
import { Button, Block, Icon } from 'components/atoms';

import './styles.css';

import ToggleBaseline from 'assets/icons/toggle_baseline.svg';
import ToggleConfig from 'assets/icons/toggle_config.svg';
import ToggleElementSelect from 'assets/icons/toggle_element_select.svg';
import ToggleGrid from 'assets/icons/toggle_grid.svg';
import ToggleZoom from 'assets/icons/toggle_zoom.svg';

export default class ToolBarWrapper extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func
  }

  handleClick = (button, palette, event) => {
    event.preventDefault();
    const { dispatch } = this.props;

    if (!palette) {
      dispatch(clearPalettes());
      dispatch(toggleButton(button));
    } else {
      dispatch(toggleButton(button));
      dispatch(togglePalette(palette));
    }
  }

  render() {
    const iconSize = '34px';

    return (
      <div className="tool-bar">
        <div className="logo">
          griiid
        </div>
        <div className="icons">
          <Block height={iconSize} width={iconSize}>
            <Button
              type="dark"
              id="elementSelectButton"
              onClick={this.handleClick.bind(this, 'elementSelectButton', null)}
              {...this.props}
            >
              <Icon>
                <img src={ToggleElementSelect} />
              </Icon>
            </Button>
          </Block>
          <Block height={iconSize} width={iconSize}>
            <Button
              type="dark"
              id="gridButton"
              onClick={this.handleClick.bind(this, 'gridButton', PALETTES.LAYOUT_GRID_PALETTE)}
              {...this.props}
            >
              <Icon>
                <img src={ToggleGrid} />
              </Icon>
            </Button>
          </Block>
          <Block height={iconSize} width={iconSize}>
            <Button
              type="dark"
              id="baselineButton"
              onClick={this.handleClick.bind(this, 'baselineButton', PALETTES.BASELINE_GRID_PALETTE)}
              {...this.props}
            >
              <Icon>
                <img src={ToggleBaseline} />
              </Icon>
            </Button>
          </Block>
          <Block height={iconSize} width={iconSize}>
            <Button
              type="dark"
              id="zoomButton"
              onClick={this.handleClick.bind(this, 'zoomButton', null)}
              {...this.props}
            >
              <Icon>
                <img src={ToggleZoom} />
              </Icon>
            </Button>
          </Block>
          <Block height={iconSize} width={iconSize}>
            <Button
              type="dark"
              id="configButton"
              onClick={this.handleClick.bind(this, 'configButton', PALETTES.CONFIG_PALETTE)}
              {...this.props}
            >
              <Icon>
                <img src={ToggleConfig} />
              </Icon>
            </Button>
          </Block>
        </div>
      </div>
    );
  }
}
