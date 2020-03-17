import React from 'react';
import PropTypes from 'prop-types';
export default function Image(props) {
  return (
    <img className="Image" src={props.source} alt={props.alternativeText} />
  );
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alternativeText: PropTypes.string.isRequired,
}
