import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../../styles/styles';
import ProductCard from '../ProductCard/ProductCard';
import CircularLoader from '../../Layout/CircularLoader';

const FeaturedProduct = () => {
  const { allProducts, isLoading } = useSelector((state) => state.products);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        {isLoading ? (
          <CircularLoader />
        ) : (
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
            {allProducts && allProducts.length !== 0 && (
              <>
                {allProducts.map((i, index) => (
                  <ProductCard data={i} key={index} />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
