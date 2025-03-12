import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{
        maxWidth: 345, 
        height: '100%', 
        margin: 2, 
        boxShadow: 3, 
        borderRadius: 3, 
        display: 'flex', 
        flexDirection: 'column', 
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)', 
        }
      }}>
        <CardMedia
          component="img"
          height="180"
          image={product.image}
          alt={product.title}
          sx={{ borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product.description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
              {product.price}$
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(addToCart(product))}
              sx={{
                borderRadius: 2, 
                padding: '4px 12px',  // Уменьшаем отступы кнопки
                fontSize: '0.875rem',  // Уменьшаем размер шрифта
              }}
            >
              Добавить в корзину
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
