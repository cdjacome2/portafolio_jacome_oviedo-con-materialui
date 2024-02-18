import React from 'react';
import { Typography, List, ListItem, ListItemText, TextField, Button, Grid } from '@mui/material';

function Contact() {
  return (
    <div>
      <Typography variant="h4">
        Contáctanos
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <List>
            <ListItem>
              <ListItemText primary="Correo electrónico de Carol Jácome" secondary="cdjacome2@espe.edu.ec" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <List>
            <ListItem>
              <ListItemText primary="Correo electrónico de Steven Oviedo" secondary="saoviedo3@espe.edu.ec" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <form noValidate autoComplete="off">
        <TextField id="contact-name" label="Nombre" variant="outlined" />
        <TextField id="contact-email" label="Correo electrónico" variant="outlined" />
        <TextField id="contact-message" label="Mensaje" multiline rows={4} variant="outlined" />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}

export default Contact;





