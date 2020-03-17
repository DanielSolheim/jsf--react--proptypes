// Note: React import isn't required as JSX isn't being used here
import PropTypes from 'prop-types';
/**
 * Repeat the child elements for the number of times specified in props.count
 */
export default function Repeater(props) {
  let elements = [];
  for(let i = 0; i < props.count; i++) {
    elements.push(props.children);
  }
  return elements;
}


Repeater.propTypes ={
  count: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}
