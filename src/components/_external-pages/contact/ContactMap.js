import { Map, Marker } from '@commodityvectors/react-mapbox-gl';
import { useState } from 'react';
import { Button } from '@mui/material';
import { varFadeInUp, MotionInView } from '../../animate';

export default function ContactMap() {
  return (
    <MotionInView sx={{ height: '100%', minHeight: '600px' }} variants={varFadeInUp}>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.3962596683505!2d9.319641715821932!3d45.562469434901566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b74e0d934e83%3A0x3127b736ede782d3!2sGf%20Strade%20Srl!5e0!3m2!1sit!2sit!4v1634305044067!5m2!1sit!2sit"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      />
    </MotionInView>
  );
}
