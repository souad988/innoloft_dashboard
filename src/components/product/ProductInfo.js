import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductDescription from './ProductDescription';
import ProductAttributes from './ProductAttributes';
import style from './productInfo.module.css';

function ProductInfo() {
  const [visible, setVisible] = useState(true);
  const product = useSelector((state) => state);
  return (
    <div>
      <div className={style.tabBtn}>
        <button type="button" onClick={() => setVisible(true)}>Description</button>
        <button type="button" onClick={() => setVisible(false)}>Attributes</button>
      </div>
      {visible
        ? <ProductDescription description={product.description} />
        : (
          <ProductAttributes
            categories={product.categories}
            businessModels={product.businessModels}
            trl={product.trl}
          />
        )}
    </div>
  );
}

export default ProductInfo;
