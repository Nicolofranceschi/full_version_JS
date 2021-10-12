import { capitalCase } from 'change-case';
import { motion } from 'framer-motion';
// material
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Radio,
  Tooltip,
  Container,
  Typography,
  RadioGroup,
  CardActionArea,
  FormControlLabel
} from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
//
import { MotionInView, varFadeInUp, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${theme.palette.grey[300]} 0%, ${alpha(theme.palette.grey[300], 0)} 100%)`
      : 'none'
}));

// ----------------------------------------------------------------------

export default function LandingThemeColor() {
  const { themeColor, onChangeColor, colorOption } = useSettings();

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionInView variants={varFadeInUp}>
          <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
            AMBIENTE
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Ci teniamo
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography
            sx={{
              color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'text.primary')
            }}
          >
            Siamo parte della rivoluzione per rendere più verde il nostro pianeta.
          </Typography>
        </MotionInView>

        <Box sx={{ position: 'relative' }}>
          <Box component="img" src="/static/home/theme-color/grid.png" />

          <Box sx={{ position: 'absolute', top: 0 }}>
            <MotionInView variants={varFadeInUp}>
              <img alt="screen" src={`/static/home/theme-color/foresta-${themeColor}.png`} />
            </MotionInView>
          </Box>
        </Box>
      </Container>
    </RootStyle>
  );
}
