import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../features/productsSlice';
import ProductCard from './ProductCard';
import { Grid, CircularProgress, Box } from '@mui/material';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (status === 'loading') return <CircularProgress />;
  if (status === 'failed') return <div>Error loading products.</div>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}> {/* Открытие Grid контейнера */}
        {items.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}> {/* Каждая карточка */}
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid> {/* Закрытие Grid контейнера */}
    </Box>
  );
};

export default ProductList;
