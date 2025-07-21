import React from 'react';
import { Box, Container, Typography, Paper, Button, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from 'react-router-dom';

const userTypes = [
  {
    key: 'student',
    icon: <SchoolIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    heading: 'For Students',
    route: '/student',
  },
  {
    key: 'professional',
    icon: <WorkIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
    heading: 'For Professionals',
    route: '/professional',
  },
  {
    key: 'recruiter',
    icon: <BusinessCenterIcon sx={{ fontSize: 48, color: 'success.main' }} />,
    heading: 'For Recruiters',
    route: '/recruiter',
  }
];

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h3" fontWeight={700} align="center" gutterBottom>
          How It Works
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4 }}>
          See how SkillChain empowers students, professionals, and recruiters.
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          {userTypes.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.key}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 240 }}>
                {user.icon}
                <Typography variant="h6" fontWeight={700} sx={{ mt: 2, mb: 2 }}>
                  {user.heading}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate(user.route)}>
                  Get Started
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HowItWorks;