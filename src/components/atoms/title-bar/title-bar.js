import './styles.css';

/**
 * Title Bar
 * @usage <TitleBar>Some Text</TitleBar>
 * @param {object} props
 * @returns {element}
 */
const TitleBar = props => (
  <div className="title-bar">
    { props.children }
  </div>
);

TitleBar.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default TitleBar;
