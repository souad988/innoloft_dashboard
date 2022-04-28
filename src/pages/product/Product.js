import React from 'react';
import { useSelector } from 'react-redux';
import UserInfo from '../../components/user/UserInfo';
import style from './product.module.css';
import ProductInfo from '../../components/product/ProductInfo';
import SimpleMap from '../../components/adress/Map';

function Product() {
  const product = useSelector((state) => state);
  return (
    <div>
      {product
        ? (
          <div className={style.productContainer}>
            <section className={style.productSection}>
              <img src={product.picture} alt="product img" />
              <div>
                <span>
                  {' '}
                  {product.name}
                  {' '}
                </span>
                <span>{product.type.name}</span>
              </div>
              <ProductInfo />
            </section>
            <section className={style.userAdressSection}>
              <div className={style.userContainer}>
                <UserInfo
                  name={[product.user.firstName, product.user.lastName].join(' ')}
                  imgUrl={product.user.profilePicture}
                  companyName={product.company.name}
                />
              </div>
              <div className={style.adressContainer}>
                <SimpleMap />
              </div>
            </section>
          </div>
        )
        : ''}
    </div>
  );
}

export default Product;
