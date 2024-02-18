import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import image1 from './usu09.jpg'; 
import image2 from './usu13.jpg'; 

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={image1} 
            alt="Foto de perfil de Carol"
            sx={{ width: 128, height: 128 }} 
          />
          <CardContent>
            <Typography variant="h4">
              Carol Jácome
            </Typography>
            <Typography variant="body1">
              Estudiante de sexto semestre de Tecnologías de la Información en la Universidad de las Fuerzas Armadas ESPE.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={image2} // Usa la segunda imagen importada
            alt="Foto de perfil de Steven"
            sx={{ width: 128, height: 128 }} // Establece el ancho y la altura de la imagen
          />
          <CardContent>
            <Typography variant="h4">
              Steven Oviedo
            </Typography>
            <Typography variant="body1">
              Estudiante de sexto semestre de Tecnologías de la Información en la Universidad de las Fuerzas Armadas ESPE.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;





