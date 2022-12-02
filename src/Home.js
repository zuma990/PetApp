import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import petvet from './images/petvet.png';
import petgroo from './images/petgroo.png';
import petwalk from './images/petwalk.webp';
import petshop from './images/petshop.jpg'
import { Link } from "react-router-dom";
const Home = () => {

    return(
        <div className='home'>
            <Card sx={{ maxWidth: 345 }}>
                <Link to="/pet-vet" >
                <CardMedia
                    component="img"
                    height="140"
                    image={petvet}
                    alt="pet vet"
                />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pet Vet
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={petwalk}
                    alt="pet vet"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pet Walk
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={petgroo}
                    alt="pet vet"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pet Grooming
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={petshop}
                    alt="pet vet"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pet Shop
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default Home;
