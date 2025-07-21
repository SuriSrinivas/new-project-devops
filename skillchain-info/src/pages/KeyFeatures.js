import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import StorageIcon from '@mui/icons-material/Storage';
import PeopleIcon from '@mui/icons-material/People';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PublicIcon from '@mui/icons-material/Public';

const features = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 48, color: 'primary.main', mb: 0.5 }} />,
    title: 'NFT-based Certifications',
    description: 'All achievements and training are verifiable and tamper-proof.'
  },
  {
    icon: <StorageIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 0.5 }} />,
    title: 'Secure Document Storage',
    description: 'Students can upload and manage all their credentials and documents in one place.'
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 48, color: 'success.main', mb: 0.5 }} />,
    title: 'Professional-Student Connections',
    description: 'Direct mentorship and networking opportunities.'
  },
  {
    icon: <LiveTvIcon sx={{ fontSize: 48, color: 'info.main', mb: 0.5 }} />,
    title: 'Live Interview Platform',
    description: 'Recruiters can conduct coding, HR, and managerial interviews securely.'
  },
  {
    icon: <AssignmentIcon sx={{ fontSize: 48, color: 'warning.main', mb: 0.5 }} />,
    title: 'Assignment & Project Management',
    description: 'Hands-on learning with real-world projects and feedback.'
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 48, color: 'error.main', mb: 0.5 }} />,
    title: 'Transparent Hiring Process',
    description: 'Recruiters can trust the authenticity of every candidate’s profile.'
  },
  {
    icon: <PublicIcon sx={{ fontSize: 48, color: 'primary.dark', mb: 0.5 }} />,
    title: 'Decentralized Vision',
    description: 'Built for a future where users own and control their data.'
  }
];

function KeyFeatures() {
  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h3" fontWeight={700} align="center" gutterBottom>
          Key Features
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Discover the unique features that make SkillChain the future of professional growth.
        </Typography>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 3, textAlign: 'center', minHeight: 140, maxWidth: 320, width: '100%', mx: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {feature.icon}
                <Typography variant="h6" fontWeight={700} sx={{ m: 0, p: 0, color: 'primary.dark', pb: 0 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ m: 0, p: 0, fontWeight: 400, pb: 0 }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default KeyFeatures;