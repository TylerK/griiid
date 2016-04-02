import './styles.css';

/**
 * Basic icon
 * @usage <Icon><img src="path/to/icon.xyz" /></Icon>
 * @param {object} props
 * @returns {element}
 */
const Icon = props => (
  <div className="icon">
    { props.children }
  </div>
);

Icon.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Icon;
