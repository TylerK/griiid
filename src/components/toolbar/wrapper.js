import { Button, Wrapper } from 'components/atoms';

import './styles.css';

export default class ToolBarWrapper extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="tool-bar">
        <div className="logo">
          griiid
        </div>
        <div className="icons">
          <Wrapper height="2rem" width="2rem">
            <Button type="dark" onClick={this.handleClick}>:D</Button>
          </Wrapper>
          <Wrapper height="2rem" width="2rem">
            <Button type="dark" onClick={this.handleClick}>:]</Button>
          </Wrapper>
          <Wrapper height="2rem" width="2rem">
            <Button type="dark" onClick={this.handleClick}>:)</Button>
          </Wrapper>
        </div>
      </div>
    );
  }
}
