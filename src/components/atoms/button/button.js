import './styles.css';

/**
 * Basic button
 * @usage <Button type="dark">[...]</Button>
 * @param  {object} props
 * @returns {element}
 */
const Button = props => {
  const isSelected = props.id === props.button ? 'is-selected' : '';

  return (
    <div className={`button ${props.type} ${isSelected}`}>
      <a href="#" onClick={props.onClick}>
        { props.children }
      </a>
    </div>
  );
};

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  id: React.PropTypes.string,
  button: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf([ 'dark', 'light' ]).isRequired,
};

export default Button;
