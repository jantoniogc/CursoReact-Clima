import React from 'react';
import PropTypes from 'prop-types';

const Herader = ({ titulo }) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href='#!' className="brand-logo">{titulo}</a>
      </div>
    </nav>
  );
}

Herader.prototype = {
  titulo: PropTypes.string.isRequired
}
export default Herader;