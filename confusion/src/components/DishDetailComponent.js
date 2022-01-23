import React, {Component} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Label,
    Row,
    Col,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = ( val ) => val && val.length;
const maxLength = ( len ) => ( val ) => !( val ) || ( val.length <= len );
const minLength = ( len ) => ( val ) => val && ( val.length >= len );

class CommentForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isModalOpen: false,
        }
        this.toggleModal = this.toggleModal.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    toggleModal () {
        this.setState( {isModalOpen: !this.state.isModalOpen} );
    }

    handleSubmit ( values ) {
        console.log( "Current State is: " + JSON.stringify( values ) );
        alert( "Current State is: " + JSON.stringify( values ) );
        this.toggleModal();
    }

    render () {
        return (
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-edit fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={( values ) => this.handleSubmit( values )}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Col>
                                    <Control.select
                                        model=".rating"
                                        name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname">Your Name</Label>
                                <Col>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength( 3 ), maxLength: maxLength( 15 )
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required, ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Col>
                                    <Control.textarea
                                        model=".comment"
                                        id="comment"
                                        name="comment"
                                        rows="6"
                                        className="form-control"
                                        validators={{
                                            required
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

function RenderDish ( {dish} ) {
    if ( dish != null ) {
        return ( <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle style={{fontWeight: 600}}>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div> )
    } else return ( <div></div> );
}

function RenderComments ( {comments} ) {
    if ( comments != null ) {
        const tmp = comments.map( ( comment ) => {
            return (
                <div key={comment.id} className="col-12 col-md-5 m-1">
                    <div className="row">
                        <p style={{fontWeight: 600}}>{comment.comment}</p>
                    </div>
                    <div className="row">
                        <p style={{fontWeight: 600}}>-- {comment.author}, {new Intl.DateTimeFormat( 'en-US', {year: 'numeric', month: 'short', day: '2-digit'} ).format( new Date( Date.parse( comment.date ) ) )}</p>
                    </div>
                </div>
            );
        } );
        return (
            <div className='col-12 col-md-5 m-1'>
                <h1> Comments </h1>
                <ul className='list-unstyled'>
                    {tmp}
                </ul>
                <CommentForm />
            </div>
        )
    } else return ( <div></div> );
}

const DishDetail = ( props ) => {
    if ( props.dish != null ) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    } else return ( <div></div> )
}

export default DishDetail;

// const RenderDish = ( {dish} ) => {
//     if ( dish != null ) {
//         return ( <div className="col-12 col-md-5 m-1">
//             <Card>
//                 <CardImg width="100%" src={dish.image} alt={dish.name} />
//                 <CardBody>
//                     <CardTitle style={{fontWeight: 600}}>{dish.name}</CardTitle>
//                     <CardText>{dish.description}</CardText>
//                 </CardBody>
//             </Card>
//         </div> )
//     } else return ( <div></div> );
// }

// const RenderComments = ( {comments} ) => {
//     if ( comments != null ) {
//         const tmp = comments.map( ( comment ) => {
//             return (
//                 <div key={comment.id} className="col-12 col-md-5 m-1">
//                     <div className="row">
//                         <p style={{fontWeight: 600}}>{comment.comment}</p>
//                     </div>
//                     <div className="row">
//                         <p style={{fontWeight: 600}}>-- {comment.author}, {new Intl.DateTimeFormat( 'en-US', {year: 'numeric', month: 'short', day: '2-digit'} ).format( new Date( Date.parse( comment.date ) ) )}</p>
//                     </div>
//                 </div>
//             );
//         } );
//         return (
//             <div className='col-12 col-md-5 m-1'>
//                 <h1> Comments </h1>
//                 <ul className='list-unstyled'>
//                     {tmp}
//                 </ul>

//             </div>
//         )
//     } else return ( <div></div> );
// }
// const DishDetail =  {

//     render () {


//         if ( this.props.dish != null ) {
//             return (
//                 <div className="container">
//                     <div className="row">
//                         <Breadcrumb>
//                             <BreadcrumbItem>Home</BreadcrumbItem>
//                             <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
//                             <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
//                         </Breadcrumb>
//                         <div className="col-12">
//                             <h3>{this.props.dish.name}</h3>
//                             <hr />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <RenderDish dish={this.props.dish} />
//                         <RenderComments comments={this.props.comments} />
//                     </div>
//                     <CommentForm />
//                 </div>
//             )
//         } else return ( <div></div> )
//     }
// }

// export default DishDetail;