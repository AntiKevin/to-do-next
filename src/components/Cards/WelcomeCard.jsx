'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export default function WelcomeCard() {

    const router = useRouter();

    const buttonLink = () => {
        router.push("/tasks")
    }

    return (
        <Box sx={{ minWidth: 500, mt: "2rem" }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Bem vindo ao Tasks
                        </Typography>
                        <Typography variant="h5" component="div">
                            TO-DO
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            aplicação para tarefas salvo no browser
                        </Typography>
                        <Typography variant="body2">
                            Um app de tarefas a fazer 100% salvo no browser
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={buttonLink} size="small">Ir para tarefas</Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}
