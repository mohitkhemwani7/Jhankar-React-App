import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './ProductCard.css'
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            removeValue:true,
            quantity:0,
            addButton:true,
            removeButton:false
        }
    }

    onAddClick = (e) => {
        // this.props.handler(this.props.product_id);

        this.setState({quantity:this.state.quantity+1,removeValue:false, addButton:false, removeButton:true})


    };

    onRemoveClick = (e) => {
        // this.props.removeHandler(this.props.id);
        // if(this.state.quantity===0) {
            this.setState({quantity:this.state.quantity, removeValue: true, addButton:true, removeButton:false})
        // }
        // else{
        //     this.setState({quantity: this.state.quantity - 1 })
        // }
    };

    render() {
        return (
            <div className='grid-items'>
                <Card className='card'>

                    <CardMedia
                        className='media'
                        image={this.props.image}
                        title={this.props.name}
                    />
                    <CardContent>
                        <Typography variant="h4">{this.props.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                    <CardActions>

                            <IconButton aria-label="Add to favorites">
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon/>
                        </IconButton>
                        {this.state.addButton && <IconButton id={this.props.id} className="add-button"
                                    disabled={this.state.value}
                                    onClick={this.onAddClick}>
                            <i className="fa fa-plus-circle"/>
                        </IconButton>}
                        {/*<span>{this.state.quantity}</span>*/}
                        {this.state.removeButton && <IconButton id={this.props.id}
                                    disabled={this.state.removeValue}
                            className="remove-button" onClick={this.onRemoveClick}>
                            <i className="fa fa-minus-circle"/>
                        </IconButton>}

                    </CardActions>

                </Card>
            </div>
        );
    };
}

export default ProductCard;


