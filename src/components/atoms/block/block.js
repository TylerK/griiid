/**
 * Simple sizing wrapper
 * @usage: <Block width="1rem" height="1rem">[...]</Block>
 * @param  {object} props
 * @returns {element}
 */
const Block = props => (
  <div
    className={`block`}
    style={{
      display: 'flex',
      width: props.width || 'auto',
      height: props.height || 'auto'
    }}
  >
    { props.children }
  </div>
);

Block.propTypes = {
  children: React.PropTypes.node.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
};

export default Block;
