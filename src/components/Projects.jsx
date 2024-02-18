import React from 'react';
import { Typography, Link, Card, CardHeader, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/system';

const ProjectsContainer = styled('div')({
  marginTop: '900px', 
});

function Projects() {
  return (
    <ProjectsContainer>
    <div>
      <Typography variant="h4">
        Nuestros proyectos
      </Typography>
      <Typography variant="body1">
        Aquí están algunos de nuestros proyectos más destacados:
      </Typography>
      <Card>
        <CardHeader title="Uso de Librerias"/>
        <CardContent>
          <Typography variant="body2">
          Comenzando con la aplicación Create React
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://github.com/saoviedo3/UsoLibrerias_Jacome_Carol_Oviedo_Steven" target="_blank">
              Más detalles
            </Link>
          </Button>
        </CardActions>

        <CardHeader title="React + Vite"/>
        <CardContent>
          <Typography variant="body2">
          Esta plantilla proporciona una configuración mínima 
          para que React funcione en Vite con HMR y algunas reglas de ESLint.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://github.com/saoviedo3/Tema3_JacomeCarol_OviedoSteven" target="_blank">
              Más detalles
            </Link>
          </Button>
        </CardActions>

        <CardHeader title="Evaluación Intermedia"/>
        <CardContent>
          <Typography variant="body2">
          Aplicación de asignación de evaluaciones
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://github.com/saoviedo3/EvaluacionIntermedia_JacomeCarol_OviedoSteven"target="_blank">
              Más detalles
            </Link>
          </Button>
        </CardActions>

        <CardHeader title="Agendamiento Citas"/>
        <CardContent>
          <Typography variant="body2">
          Sistema de Agendamiento de Citas
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://github.com/saoviedo3/agendamiento_citas" target="_blank">
              Más detalles
            </Link>
          </Button>
        </CardActions>

        <CardHeader title="Tarea Dos"/>
        <CardContent>
          <Typography variant="body2">
          Administrador de tareas - Firabase
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://github.com/saoviedo3/task2Firebase" target="_blank">
              Más detalles
            </Link>
          </Button>
        </CardActions>

        <CardHeader title="Task Mejoras"/>
        <CardContent>
          <Typography variant="body2">
          Administrador de tareas - Supabase
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://github.com/saoviedo3/task_implementacionmejoras" target="_blank">
              Más detalles
            </Link>
          </Button>
        </CardActions>

        <CardHeader title="Proyecto"/>
        <CardContent>
          <Typography variant="body2">
          JOVSA Firmas
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://github.com/saoviedo3/Proyecto2pPrograIntegra-Jacome-Oviedo" target="_blank">
              Más detalles
            </Link>
          </Button>
        </CardActions>

        <CardHeader title="Examen"/>
        <CardContent>
          <Typography variant="body2">
          Examen usando React y Supabase
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href="https://github.com/saoviedo3/Examen2pPrograIntegra-Jacome-Oviedo" target="_blank">
              Más detalles
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
    </ProjectsContainer>
  );
}

export default Projects;



