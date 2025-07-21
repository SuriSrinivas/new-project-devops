import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Recruiter() {
  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Recruiter Page
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Here you can search for talent, conduct interviews, and hire with confidence in verified credentials.
        </Typography>
      </Container>
    </Box>
  );
}

export default Recruiter; 