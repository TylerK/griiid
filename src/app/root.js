import { Wrapper as RulersWrapper } from 'components/rulers';
import { container as GuideLinesContainer } from 'components/guidelines';

export default class Root extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnMount() {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize = () => {
    this.forceUpdate();
  }

  render() {
    const height = document.body.scrollHeight;

    return (
      <div style={{ height: `${height}px` }} className="griiid__layout">
        <GuideLinesContainer height={height} />
        <RulersWrapper height={height} />
      </div>
    );
  }
}
