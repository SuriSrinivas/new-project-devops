import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <Box>
      {/* Hero Section with Gradient Background, Heading, and Button */}
      <Box
        sx={{
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #e0f7fa 0%, #f5f7fa 100%)',
          py: 8,
          px: 2,
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" fontWeight={700} color="primary.main" gutterBottom>
            Welcome to SkillChain
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4 }}>
            SkillChain is your gateway to a secure, transparent, and future-ready platform for skills and credentials. Join us to experience the next generation of professional growth.
          </Typography>
          <Button variant="contained" size="large" color="primary" sx={{ px: 5, py: 1.5, fontSize: '1.2rem', borderRadius: 3 }} onClick={() => navigate('/explore')}>
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
