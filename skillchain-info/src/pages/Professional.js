import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Professional() {
  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Professional Page
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Here you can offer courses, mentor students, and schedule interviews for completed training.
        </Typography>
      </Container>
    </Box>
  );
}

export default Professional; 