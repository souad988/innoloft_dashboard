import React from 'react';
import PropTypes from 'prop-types';

function ProductInfo({ ...props }) {
  const { description } = props;
  return (
    <div>
      <button type="button">Description</button>
      <button type="button">Attributes</button>
      <div>
        {description}
      </div>
    </div>
  );
}

export default ProductInfo;

ProductInfo.propTypes = {
  description: PropTypes.string,
};

ProductInfo.defaultProps = {
  description: 'description not provided !',
};
