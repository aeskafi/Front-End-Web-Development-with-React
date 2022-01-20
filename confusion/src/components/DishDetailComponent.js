import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const props = this.props;
        const comments = props.dish.comments.map((comment) => {
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
            <>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle style={{fontWeight: 600}}>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4 m-1">
                    <h1>Comments</h1>
                    <div>
                        {comments}
                    </div>
                </div>
            </>
        );
    }

}

export default DishDetails;