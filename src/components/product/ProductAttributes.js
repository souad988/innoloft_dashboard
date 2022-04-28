import React from 'react';
import PropTypes from 'prop-types';
import AttributeList from './AttributeList';

function ProductAttributes({ ...props }) {
  const { categories, businessModels, trl } = props;
  return (
    <div>
      <AttributeList categories={categories} />

      <AttributeList businessModels={businessModels} />

      <AttributeList trl={trl} />
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
  trl: PropTypes.arrayOf(PropTypes.shape({
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
  trl: [{
    id: '',
    name: '',
  }],
};
