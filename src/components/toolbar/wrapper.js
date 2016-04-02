import { Button, Block, Icon } from 'components/atoms';

import './styles.css';
import ToggleBaseline from 'assets/icons/toggle_baseline.svg';
import ToggleConfig from 'assets/icons/toggle_config.svg';
import ToggleElementSelect from 'assets/icons/toggle_element_select.svg';
import ToggleGrid from 'assets/icons/toggle_grid.svg';
import ToggleZoom from 'assets/icons/toggle_zoom.svg';

export default class ToolBarWrapper extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
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
            <Button type="dark" onClick={this.handleClick}>
              <Icon>
                <img src={ToggleElementSelect} />
              </Icon>
            </Button>
          </Block>
          <Block height={iconSize} width={iconSize}>
            <Button type="dark" onClick={this.handleClick}>
              <Icon>
                <img src={ToggleGrid} />
              </Icon>
            </Button>
          </Block>
          <Block height={iconSize} width={iconSize}>
            <Button type="dark" onClick={this.handleClick}>
              <Icon>
                <img src={ToggleBaseline} />
              </Icon>
            </Button>
          </Block>
          <Block height={iconSize} width={iconSize}>
            <Button type="dark" onClick={this.handleClick}>
              <Icon>
                <img src={ToggleZoom} />
              </Icon>
            </Button>
          </Block>
          <Block height={iconSize} width={iconSize}>
            <Button type="dark" onClick={this.handleClick}>
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
