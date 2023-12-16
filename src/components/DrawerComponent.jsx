import React, { useEffect, useState } from 'react';
import { Drawer, Box, Typography, SwipeableDrawer } from '@mui/material';

const DrawerComponent = ({ visibility }) => {
  const [visible, setVisible] = useState(visibility);

  // useEffect(() => {
  //   // Update the state when the visibility prop changes
  //   setVisible(visibility);
  // }, [visibility]);

  useEffect(() => {
    setVisible(visible)
  }, [visible]);

  const handleClose = () => {
    // Handle closing the drawer
    setVisible(false);
  };

  return (
    <SwipeableDrawer anchor="bottom" open={visible} onClose={handleClose} onOpen={() => {}}>
      <Box p={2} width='250px' textAlign='center' role='presentation'>
        <Typography variant='h6' component='div'>Side Panel</Typography>
      </Box>
    </SwipeableDrawer>
  );
}

export default DrawerComponent;
