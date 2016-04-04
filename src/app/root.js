import { Wrapper as RulersWrapper } from 'components/rulers';
import { container as GuideLinesContainer } from 'components/guidelines';
import { container as ToolBarContainer } from 'components/toolbar';
import { container as PalettesContainer } from 'components/palettes';

export default class Root extends React.Component {
  state = {
    width: document.body.scrollWidth,
    height: document.body.scrollHeight,
    scrollY: 0,
    scrollX: 0,
  }

  componentDidMount() {
    window.addEventListener('resize', this._handleUpdate);
    window.addEventListener('scroll', this._handleUpdate);
  }

  componentWillUnMount() {
    window.removeEventListener('resize', this._handleUpdate);
    window.removeEventListener('scroll', this._handleUpdate);
  }

  _handleUpdate = () => {
    this.setState({
      width: document.body.scrollWidth,
      height: document.body.scrollHeight,
      scrollY: window.scrollY,
      scrollX: window.scrollX,
    });
  }

  render() {
    const { width, height } = this.state;

    const styles = {
      height: `${height}px`,
      width: `${width}px`,
    };

    return (
      <div style={styles} className="griiid__layout">
        <GuideLinesContainer {...this.state} />
        <RulersWrapper {...this.state} />
        <ToolBarContainer />
        <PalettesContainer />
      </div>
    );
  }
}
