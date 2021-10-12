import MapGL from 'react-map-gl';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import phoneFill from '@iconify/icons-eva/phone-fill';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
//
import { MapControlPopup, MapControlMarker, MapControlScale, MapControlNavigation } from '../../map';
import { mapConfig } from '../../../config';
import { varFadeIn, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

export const MOCK_ADDRESS = [
  {
    latlng: [45.465454, 9.186516],
    address: 'Via Talete, 31, 20861 Zona Industriale MB',
    phoneNumber: '039 690 8263'
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none'
  }
}));

// ----------------------------------------------------------------------

export default function ContactMap() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 45.465454,
    longitude: 9.186516,
    zoom: 15
  });

  return (
    <MotionInView variants={varFadeIn}>
      <RootStyle>
        <MapGL
          {...viewport}
          onViewportChange={setViewport}
          mapStyle={`mapbox://styles/mapbox/${isLight ? 'light' : 'dark'}-v10`}
          mapboxApiAccessToken="pk.eyJ1Ijoibmljb2xvZnJhbmNlc2NoaSIsImEiOiJja3VtcWRsejEwMWViMnZxcnZzZ3Y5anN2In0.aHYcz6LHC6dIonzxmrFpew"
          width="100%"
          height="100%"
        >
          <MapControlScale />
          <MapControlNavigation />

          {MOCK_ADDRESS.map((country) => (
            <MapControlMarker
              key={country.latlng}
              latitude={country.latlng[0]}
              longitude={country.latlng[1]}
              onClick={() => setTooltip(country)}
            />
          ))}

          {tooltip && (
            <MapControlPopup
              longitude={tooltip.latlng[1]}
              latitude={tooltip.latlng[0]}
              onClose={() => setTooltip(null)}
              sx={{
                '& .mapboxgl-popup-content': { bgcolor: 'common.white' },
                '&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip': { borderTopColor: '#FFF' },
                '&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip': { borderBottomColor: '#FFF' }
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                GF Strade
              </Typography>
              <Typography component="p" variant="caption">
                {tooltip.address}
              </Typography>

              <Typography component="p" variant="caption" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                <Box component={Icon} icon={phoneFill} sx={{ mr: 0.5, width: 14, height: 14 }} />
                {tooltip.phoneNumber}
              </Typography>
            </MapControlPopup>
          )}
        </MapGL>
      </RootStyle>
    </MotionInView>
  );
}
