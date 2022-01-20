import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }


    renderDish(dish) {
        if (dish != null) {
            return (<div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle style={{fontWeight: 600}}>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>)
        } else return (<div></div>);
    }

    renderComments(comments) {
        if (comments != null) {
            const tmp = comments.map((comment) => {
                return (
                    <div key={comment.id} className="col-12 col-md-5 m-1">
                        <div className="row">
                            <p style={{fontWeight: 600}}>{comment.comment}</p>
                        </div>
                        <div className="row">
                            <p style={{fontWeight: 600}}>-- {comment.author}, {comment.date}</p>
                        </div>
                    </div>
                );
            });
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h1> Comments </h1>
                    <ul className='list-unstyled'>
                        {tmp}
                    </ul>

                </div>
            )
        } else return (<div></div>);
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            )
        } else return (<div></div>)
    }

}

export default DishDetails;