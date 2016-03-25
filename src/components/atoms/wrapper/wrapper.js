const Wrapper = props => (
  <div
    className={`wrapper`}
    style={{
      display: 'flex',
      width: props.width || 'auto',
      height: props.height || 'auto'
    }}
  >
    { props.children }
  </div>
);

Wrapper.propTypes = {
  children: React.PropTypes.node.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
};

export default Wrapper;
