import './styles.css';

/**
 * Panel wrapper
 * @usage <Panel>[...]</Panel>
 * @param {object} props
 * @returns {element}
 */
const Panel = props => {
  const styles = {
    width: props.width,
    height: props.height,
    left: props.left,
    top: props.top
  };

  return (
    <div className="panel" style={styles}>
      { props.children }
    </div>
  );
};

Panel.propTypes = {
  width: React.PropTypes.string.isRequired,
  height: React.PropTypes.string.isRequired,
  left: React.PropTypes.string.isRequired,
  top: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

export default Panel;
