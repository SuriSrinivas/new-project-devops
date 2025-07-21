import React from 'react';
import { Box, Typography, Link, Grid, IconButton, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'grey.100', pt: 6, pb: 2, px: 2, mt: 8 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
        {/* Brand, Social, Address */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          {/* Brand name instead of logo */}
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h4"
              fontWeight={900}
              sx={{
                background: 'linear-gradient(90deg, #00bcd4, #1976d2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                letterSpacing: 2,
                mb: 1,
              }}
            >
              SkillChain
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <IconButton color="inherit" size="small"><GoogleIcon /></IconButton>
            <IconButton color="inherit" size="small"><TwitterIcon /></IconButton>
            <IconButton color="inherit" size="small"><InstagramIcon /></IconButton>
            <IconButton color="inherit" size="small"><LinkedInIcon /></IconButton>
          </Box>
          <Typography variant="body2" color="grey.400">
            37, Ayur Vigyan Nagar, New Delhi, India.
          </Typography>
        </Grid>
        {/* Contact Us */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <EmailIcon sx={{ mr: 1 }} fontSize="small" />
            <Typography variant="body2" color="grey.300">vf@gmail.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} fontSize="small" />
            <Typography variant="body2" color="grey.300">1234566789</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonIcon sx={{ mr: 1 }} fontSize="small" />
            <Typography variant="body2" color="grey.300">Rahul</Typography>
          </Box>
        </Grid>
        {/* Help Links */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
            Let Us Help You
          </Typography>
          <Box>
            <Link href="#" color="grey.300" underline="hover" display="block" sx={{ mb: 0.5 }}>
              100% Purchase Protection
            </Link>
            <Link href="#" color="grey.300" underline="hover" display="block" sx={{ mb: 0.5 }}>
              Your Account
            </Link>
            <Link href="#" color="grey.300" underline="hover" display="block" sx={{ mb: 0.5 }}>
              Return Centre
            </Link>
            <Link href="#" color="grey.300" underline="hover" display="block">
              Help
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: 'grey.800', my: 3 }} />
      <Typography variant="body2" color="grey.500" align="center">
        © {new Date().getFullYear()} by Rahul. Created with Material-UI.
      </Typography>
    </Box>
  );
}

export default Footer;