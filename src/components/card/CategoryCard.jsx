import React from 'react';
import './categoryCard.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import history from '../../__helpers/history';
import CardActionArea from "@material-ui/core/CardActionArea";


function handleClick(e) {
        history.push('/product', {category: e.id});
        localStorage.setItem("id",e.id);
}

const CategoryCard = (props) => {
    return (
        <div className={props.id} onClick={() => handleClick(props)}>
            <Card className="category-card grid-item" raised={true}>
                <CardActionArea>
                    <CardHeader
                        title={props.name}
                    />
                    <CardMedia
                        className="category-image"
                        image={props.image}
                        title={props.name}
                        style={{height: '25rem', paddingTop: '56%', backgroundImage: `url(${props.image})`}}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default CategoryCard;


