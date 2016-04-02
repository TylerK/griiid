/**
 * Simple sizing wrapper
 * @usage: <Block width="10px" height="10px">[...]</Block>
 * @param  {object} props
 * @returns {element}
 */
const Block = props => (
  <div
    className={`block`}
    style={{
      display: 'flex',
      width: props.width || 'auto',
      height: props.height || 'auto',
      margin: props.m || 0,
      marginTop: props.mt || 0,
      marginRight: props.mr || 0,
      marginBottom: props.mb || 0,
      marginLeft: props.ml || 0,
      padding: props.p || 0,
      paddingTop: props.pt || 0,
      paddingRight: props.pr || 0,
      paddingBottom: props.pb || 0,
      paddingLeft: props.pl || 0,
    }}
  >
    { props.children }
  </div>
);

Block.propTypes = {
  children: React.PropTypes.node.isRequired,

  // Size
  width: React.PropTypes.string,
  height: React.PropTypes.string,

  // Margins
  m: React.PropTypes.string,
  mt: React.PropTypes.string,
  mr: React.PropTypes.string,
  mb: React.PropTypes.string,
  ml: React.PropTypes.string,

  // Padding
  p: React.PropTypes.string,
  pt: React.PropTypes.string,
  pr: React.PropTypes.string,
  pb: React.PropTypes.string,
  pl: React.PropTypes.string,

};

export default Block;
