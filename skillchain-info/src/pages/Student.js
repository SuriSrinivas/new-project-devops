import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Student() {
  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Student Page
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Here you can manage your profile, credentials, and connect with professionals and recruiters.
        </Typography>
      </Container>
    </Box>
  );
}

export default Student; 