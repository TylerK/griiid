import './styles.css';

/**
 * Basic button
 * @usage <Button type="dark">[...]</Button>
 * @param  {object} props
 * @returns {element}
 */
const Button = props => (
  <div className={`button ${props.type}`}>
    <a href="#" onClick={props.onClick}>
      { props.children }
    </a>
  </div>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf([ 'dark', 'light' ]).isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Button;
