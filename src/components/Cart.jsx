import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  return (
    <Card sx={{
      maxWidth: '100%', 
      margin: 2, 
      boxShadow: 3, 
      borderRadius: 3,
      backgroundColor: 'background.paper'
    }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Корзина
        </Typography>
        <List>
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ListItem sx={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '8px 16px',
                borderBottom: '1px solid #eee'
              }}>
                <ListItemText
                  primary={item.title}
                  secondary={`${item.quantity} x ${item.price}$`}
                  sx={{ flexGrow: 1 }}
                />
                <Button
                  onClick={() => dispatch(removeFromCart(item))}
                  variant="outlined"
                  color="error"
                  sx={{ borderRadius: 2 }}
                >
                  Удалить
                </Button>
              </ListItem>
            </motion.div>
          ))}
        </List>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Общая стоимость: {total}$
          </Typography>
          <Button
            onClick={() => dispatch(clearCart())}
            variant="contained"
            color="error"
            sx={{ borderRadius: 2 }}
          >
            Очистить корзину
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cart;
