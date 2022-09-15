import { Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useNavigate} from "react-router-dom";

function ProductCard({id,imageUrl,title,desc}) {

    const nav = useNavigate();

    return ( 
        <Box>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => nav(`/products/${id}`)}>
                    <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt={title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {desc}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => nav(`/products/${id}`)}>
                        See Product
                    </Button>
                </CardActions>
            </Card>
        </Box>
     );
}

export default ProductCard;