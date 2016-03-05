import { Wrapper as RulersWrapper } from 'components/rulers';
import { container as GuideLinesContainer } from 'components/guidelines';

export default class Root extends React.Component {
  render() {
    return (
      <div className="root">
        <GuideLinesContainer />
        <RulersWrapper />
      </div>
    );
  }
}
