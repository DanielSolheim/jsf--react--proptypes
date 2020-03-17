// Note: React import isn't required as JSX isn't being used here
import PropTypes from 'prop-types';
/**
 * Show or hide the child elements, depending on if props.show was set to true
 */
export default function ShowHide(props) {
  if (props.show === true) {
    return props.children;
  }
  else {
    // we must return null to show we don't want to render anything
    return null;
  }
}


ShowHide.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
