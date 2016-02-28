import styles from './rulers.styles.css';

@cssModules(styles)
export default class Rulers extends React.Component {
  static propTypes = {
    rulers: React.PropTypes.array
  }

  renderRulers() {
    const { rulers } = this.props;

    return rulers.map(ruler => {
      if (ruler.type === 'vertical') {
        return <div styleName="ruler--vertical" />;
      }
      return <div styleName="ruler--horizontal" />;
    });
  }

  render() {
    return (
      <div styleName="rulers--stage">
        { this.renderRulers() }
      </div>
    );
  }
}
