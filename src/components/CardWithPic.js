import React from "react";

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import useStyles from './CardWithPic_style';
import './CardWithPic.css';

export default function CardWithPic (props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={props.imageURL} title={props.title}/>

            <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">{props.title}</Typography>
                <Typography>
                    {props.text}
                </Typography>
            </CardContent>

            <CardActions>            
                <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer" class="button-stitch">
                    詳細
                </a>
            </CardActions>
    </Card>
    );
}
