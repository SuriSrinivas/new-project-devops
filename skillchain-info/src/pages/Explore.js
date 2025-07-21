import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Explore() {
  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Explore SkillChain
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Welcome to the SkillChain exploration page! Here you can learn more about our platform, its features, and how it can help you grow your career with verified skills and connections.
        </Typography>
      </Container>
    </Box>
  );
}

export default Explore; 