import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductDescription from './ProductDescription';
import ProductAttributes from './ProductAttributes';
import style from './productInfo.module.css'

function ProductInfo() {
  const [visible,setVisible] = useState(true)
  const product = useSelector(state=>state)
  const description = product.description
  const categories = product.categories
  return (
    <div>
      <div className={style.tabBtn}>
        <button type="button"  onClick={()=>setVisible(true)}>Description</button>
        <button type="button"  onClick={()=>setVisible(false)}>Attributes</button>
      </div>
      {visible?
       <ProductDescription description={description} />
       :
       <ProductAttributes categories={categories}
                          businessModels={product.businessModels}
                          rtl={product.rtl}
       />
       }
    </div>
  );
}

export default ProductInfo;

