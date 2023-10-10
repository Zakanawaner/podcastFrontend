//React
import React from 'react';
//Material
import { Box, Link, Card, CardContent, CardMedia, 
    Typography, Button, CardActionArea, CardActions } from '@mui/material';
//Hooks
import { useGetApiTalePDF } from '../Hooks';

const StyleLink = {
    marginBottom: '2%',
    width: '30%',
    '@media screen and (max-width: 1000px)': {
        width: '40%',
    },
    '@media screen and (max-width: 750px)': {
        width: '70%',
        marginBottom: '15%',
    },
}
const StyleCard = {
    margin: '0 auto',
    backgroundColor: 'secondary.highlight'
}
const StyleCardTitle = {
    fontWeight: 200,
    fontSize: '1rem',
    lineHeight: 2,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: 'text.highlight',
}
const StyleCardContent = {
    '@media screen and (max-width: 1300px)': {
        padding: '0px',
    },
    '@media screen and (max-width: 750px)': {
        padding: '16px',
    },
} 
const StyleCardMedia = {
    filter: 'brightness(70%)',
}
const StyleCardButtons = {
    justifyContent: 'space-between',
    '@media screen and (max-width: 1300px)': {
        padding: '0px',
    },
    '@media screen and (max-width: 750px)': {
        padding: '8px',
    },
}
const StyleButton = {
    fontWeight: 200,
    fontSize: '1rem',
    lineHeight: 2,
    letterSpacing: '0.08333em',
    textTransform: 'none',
    color: 'text.highlight',
    minWidth: '0px',
}


function Tale({tale}) {
    const { data, loading, error } = useGetApiTalePDF(tale.title);
    const popUpNewWindow = () => {
        const url = URL.createObjectURL(data);
        window.open(url);
    };
    const goToIvoox = () => {
        window.open(tale.uri)
    };
    return (
        <Box id={tale.title} sx={StyleLink}>
                {loading ? (
                    <Link variant='overline'>Cargando...</Link>  
                ) : error ? (
                    <Link variant='overline'>{error.message}</Link>
                ) : data ? (
                    <Card sx={StyleCard}>
                        <CardActionArea onClick={popUpNewWindow}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`data:image/jpeg;base64,${tale.image}`}
                                alt={tale.title}
                                sx={StyleCardMedia}
                            />
                            <CardContent sx={StyleCardContent}>
                                <Typography sx={StyleCardTitle} gutterBottom component="div">
                                    {tale.title.split(' - ')[1].replace('.pdf', '')}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={StyleCardButtons}>
                            <Button sx={StyleButton} size="small" onClick={popUpNewWindow}>Leer</Button>
                            <Button sx={StyleButton} size="small" onClick={goToIvoox}>Escuchar</Button>
                        </CardActions>
                    </Card>
                ) : (
                    <Link variant='overline'>Error</Link> 
                )}
        </Box>
    );
  }
  
  export default Tale; 