import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, IconButton, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
//
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const SOCIALS = [];

const LINKS = [
  {
    headline: 'Minimal',
    children: [
      { name: 'Storia', href: PATH_PAGE.about },
      { name: 'Contatti', href: PATH_PAGE.contact }
    ]
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Termini e condizioni', href: '#' },
      { name: 'Poliza sulla privacy', href: '#' }
    ]
  },
  {
    headline: 'Contact',
    children: [
      { name: 'E-mail: gfstrade.amministrazione@hotmail.it', href: 'mailto:gfstrade.amministrazione@hotmail.it' },
      { name: 'PEC: gfstrade@legalmail.it', href: 'mailto:gfstrade@legalmail.it' },
      { name: 'tel  +39 6908263', href: 'tel:+396908263' },
      { name: 'fax +39 2872617', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            </ScrollLink>
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              GF Strade Srl <br /> Sede Legale: Corso Milano, 21 - 20900 Monza (MB)
              <br /> Sede Operativa ed Amministrativa: Via Talete, 31 - 20861 Brugherio (MB)
              <br /> C.F. e Partiva IVA: 05255860966
            </Typography>

            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name} color="primary" sx={{ p: 1 }}>
                  <Icon icon={social.icon} width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography component="p" variant="overline">
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link href={link.href} key={link.name} color="inherit" variant="body2" sx={{ display: 'block' }}>
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          © PineApp Srl
        </Typography>
      </Container>
    </RootStyle>
  );
}
