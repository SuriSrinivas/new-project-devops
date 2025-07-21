import React from 'react';
// import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';

const topics = [
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 64, color: 'primary.main' }} />,
    heading: 'No more fake resumes or unverifiable certificates',
    description:
      'SkillChain eliminates the risk of fake resumes and unverifiable certificates by using blockchain-backed, tamper-proof credentials. Every achievement is validated and trusted.'
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 64, color: 'secondary.main' }} />,
    heading: 'Verified GitHub repos, NFT certificates, resume scores',
    description:
      'Connect your GitHub, earn NFT certificates, and get resume scores that matter. SkillChain brings all your verifiable skills and projects together in one place.'
  },
  {
    icon: <LinkIcon sx={{ fontSize: 64, color: 'success.main' }} />,
    heading: 'Direct connection between students, professionals, and recruiters',
    description:
      'SkillChain creates a transparent network where students, professionals, and recruiters can connect directly, removing barriers and middlemen.'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 64, color: 'info.main' }} />,
    heading: 'Secure live interviews built-in',
    description:
      'Conduct and attend secure, live interviews right on the platform. All sessions are encrypted and privacy-focused, ensuring a safe experience for everyone.'
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 64, color: 'warning.main' }} />,
    heading: 'Professionals can offer courses with 80% practical learning and 20% theory',
    description:
      'Professionals on SkillChain can create and offer hands-on courses focused on real-world skills. After course completion, they can schedule live interviews to help learners showcase their abilities and land opportunities.'
  }
];

function WhySkillChain() {
  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h3" fontWeight={700} align="center" gutterBottom>
          🌟 Why SkillChain?
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Discover what makes SkillChain unique and valuable for your career journey.
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {topics.map((topic, idx) => (
            <Paper key={topic.heading} elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3, display: 'flex', alignItems: 'center', gap: 3, flexDirection: { xs: 'column', sm: idx % 2 === 0 ? 'row' : 'row-reverse' } }}>
              <Box sx={{ flex: '0 0 120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 120, minHeight: 120 }}>
                {topic.icon}
              </Box>
              <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {topic.heading}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {topic.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default WhySkillChain;
