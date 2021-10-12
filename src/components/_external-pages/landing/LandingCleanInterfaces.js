// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Container, Button, Typography, useTheme } from '@mui/material';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { varFadeInUp, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const IMG = [...Array(3)].map((_, index) => `/static/home/${index + 1}.png`);

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    zIndex: 11,
    textAlign: 'left',
    position: 'absolute'
  }
}));

// ----------------------------------------------------------------------

export default function LandingCleanInterfaces() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const size = useWindowSize();
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
              CERTIFICAZIONI
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              paragraph
              sx={{
                ...(!isLight && {
                  textShadow: (theme) => `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`
                })
              }}
            >
              Che sottolineano la nostra professionalità
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Button size="large" color="inherit" variant="outlined" href="/components">
              Guarda tutte le certificazioni
            </Button>
          </MotionInView>
        </ContentStyle>

        <Box sx={{ position: 'relative' }}>
          {IMG.map((_, index) => (
            <MotionInView
              key={index}
              threshold={index / 15}
              variants={varFadeInUp}
              sx={{
                top: 0,
                left: 0,
                position: 'absolute',
                ...(index === 0 && { zIndex: 1 }),
                ...(index === 2 && { position: 'relative', zIndex: 2 })
              }}
            >
              {size.width > 800 ? (
                <Box component="img" src={`/static/home/${index + 1}.png`} />
              ) : (
                <Box component="img" src={`/static/home/phone${index + 1}.png`} />
              )}
            </MotionInView>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
