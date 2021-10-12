import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
//
import { varFadeIn, varWrapEnter, varFadeInRight, TextAnimate } from '../../animate';

// ----------------------------------------------------------------------

const CONTACTS = [
  {
    country: 'Monza',
    address: 'Via Talete, 31, 20861 Zona Industriale MB',
    phoneNumber: '039 690 8263'
  }
];

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/static/overlay.svg), url(/static/contact/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10)
  }
}));

// ----------------------------------------------------------------------

export default function ContactHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Dove" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="ci" sx={{ mr: 2 }} />
            <TextAnimate text="puoi" sx={{ mr: 2 }} />
            <TextAnimate text="trovare ?" />
          </Box>

          <Grid container sx={{ mt: 10, color: 'common.white' }}>
            {CONTACTS.map((contact) => (
              <Grid key={contact.country}>
                <motion.div variants={varFadeIn}>
                  <Typography variant="h6" paragraph>
                    {contact.country}
                  </Typography>
                </motion.div>
                <motion.div variants={varFadeInRight}>
                  <Typography variant="body2">
                    {contact.address}
                    <br /> {contact.phoneNumber}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
