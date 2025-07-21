import React from 'react';
import { Box, Container, Typography, Avatar, Paper } from '@mui/material';

function About() {
  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Founder"
          sx={{ width: 120, height: 120, mx: 'auto', mb: 3, boxShadow: 2 }}
        />
        <Typography variant="h3" fontWeight={700} gutterBottom>
          About the Founder
        </Typography>
        <Typography variant="h5" fontWeight={600} color="primary.main" gutterBottom>
          Suri Srinivas
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Founder & CEO, SkillChain
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 4, mb: 4, fontSize: '1.1rem' }}>
          Hi! I’m Suri Srinivas, the founder of SkillChain. My vision is to create a platform where students, professionals, and recruiters can connect, learn, and grow with trust and transparency.<br /><br />
          I started SkillChain because I believe in a future where everyone owns their credentials, learning is hands-on, and hiring is based on real skills—not just paper degrees.<br /><br />
          Thank you for being part of this journey!
        </Typography>
        <Paper elevation={2} sx={{ mt: 4, p: { xs: 2, sm: 4 }, borderRadius: 3, bgcolor: 'white', maxWidth: 500, mx: 'auto' }}>
          <Typography variant="h5" fontWeight={700} color="primary.main" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" color="text.secondary">
            To empower learners and professionals with secure, verifiable credentials and to build a transparent, decentralized ecosystem for education and hiring.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;