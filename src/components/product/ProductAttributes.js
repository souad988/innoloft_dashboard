import React from 'react';
import PropTypes from 'prop-types';
import AttributeList from './AttributeList';

function ProductAttributes({ ...props }) {
  const { categories, businessModels, rtl } = props;
  return (
    <div>
      <AttributeList categories={categories} />

      <AttributeList businessModels={businessModels} />

      <AttributeList rtl={rtl} />
    </div>
  );
}

export default ProductAttributes;
ProductAttributes.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  businessModels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  rtl: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
};

ProductAttributes.defaultProps = {
  categories: [{
    id: '',
    name: '',
  }],
  businessModels: [{
    id: '',
    name: '',
  }],
  rtl: [{
    id: '',
    name: '',
  }],
};
