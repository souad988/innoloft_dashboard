import React from 'react';
import { useSelector } from 'react-redux';
import UserInfo from '../../components/user/UserInfo';
import style from './product.module.css';
import ProductInfo from '../../components/product/ProductInfo';

function Product() {
  const product = useSelector(state=> state)
  console.log('from product',product)
  return (
    <div className={style.productContainer}>
       <section className={style.productSection}>
         <img src={product.picture} alt='product img' />
         <div><span> {product.name} </span><span>{product.type.name}</span></div>
         <ProductInfo description={product.description} />
       </section>
       <section >
         <div className={style.userContainer}>
        <UserInfo name = {[product.user.firstName,product.user.lastName].join(' ')}
                  imgUrl = {product.user.profilePicture}
                  companyName = {product.company.name}
         />
         </div>
        </section>
    </div>
  );
}

export default Product;
