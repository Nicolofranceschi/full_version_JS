// material
import { useState } from 'react';
import { Button, Typography, Checkbox, FormControlLabel, TextField, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import emailjs, { init } from 'emailjs-com';
import { varFadeInUp, MotionInView } from '../../animate';

// ----------------------------------------------------------------------
init('user_pjgADcUj2rzAKfoOllVDo');
export default function ContactForm() {
  const [invio, setInvio] = useState(0);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const onSubmit = async (data) => {
    setInvio(1);
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.messaggio,
      oggetto: data.oggetto,
      privacy: data.privacy
    };
    const response = await emailjs.send('service_939r3j8', 'template_dt1se2v', templateParams);

    if (response.status === 200) setInvio(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h3">
            Non esitare a contattarci. <br />
            Saremo lieti di sentirti.
          </Typography>
        </MotionInView>
        <Stack spacing={3}>
          <MotionInView variants={varFadeInUp}>
            <TextField fullWidth label="Name" {...register('name')} />
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <TextField
              fullWidth
              error
              helperText={errors.email?.message}
              label="Email"
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Indirizzo email non valido'
                }
              })}
            />
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <TextField fullWidth label="Oggetto" {...register('oggetto')} />
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <TextField fullWidth label="Messaggio." multiline rows={4} {...register('messaggio')} />
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <FormControlLabel
              control={<Checkbox defaultChecked {...register('privacy')} />}
              label="Ai sensi e per gli effetti degli art. 6 e 13 del Reg. UE 2016/67, 
            letta e compresa l’informativa privacy, esprimo il consenso al trattamento dei miei dati personali, 
            secondo le modalità e nei limiti dell’informativa stessa(INFORMATIVA PRIVACY)"
            />
          </MotionInView>
        </Stack>

        <MotionInView variants={varFadeInUp}>
          {invio === 0 ? (
            <Button type="submit" size="large" variant="contained">
              INVIA
            </Button>
          ) : (
            <Button size="large" variant="contained">
              INVIATO
            </Button>
          )}
        </MotionInView>
      </Stack>
    </form>
  );
}
