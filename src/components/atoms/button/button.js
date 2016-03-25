import './styles.css';

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
