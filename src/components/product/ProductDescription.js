import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setDescription } from '../../store/reducer';

function ProductDescription({ ...props }) {
  const dispatch = useDispatch();
  const { description } = props;
  const [value, setValue] = useState(description);
  // useEffect(() => {

  //   return () => {
  //     dispatch(setDescription(value))
  //   }
  // }, [])

  const handelChange = () => {
    dispatch(setDescription(value));
  };

  return (
    <div onBlur={handelChange}>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}

export default ProductDescription;
ProductDescription.propTypes = {
  description: PropTypes.string,
};

ProductDescription.defaultProps = {
  description: 'description not provided !',
};
