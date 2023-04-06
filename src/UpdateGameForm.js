import React from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap'

class UpdateGameForm extends React.Component {

  handleGameSubmit = (event) => {
    event.preventDefault();

    let gameToUpdate = {
      title: event.target.title.value,
      play_status: event.target.play_status.value,
      reviewNotes: event.target.reviewNotes.value,
      email: this.props.game.email, // added to test if email comes through 
      _id: this.props.game._id,
      _v: this.props.game._v
    }
    console.log(gameToUpdate);
    // Handler from GamePage.js to update database
    this.props.updateGame(gameToUpdate);
  }

  render() {
    return {
    // { this.props.game ?
    //     <Modal show={this.props.show} onHide={this.props.onHide}>

    //       <Modal.Header closeButton><Modal.Title>game title</Modal.Title></Modal.Header>

    //       <Container className="mt-5">

    //         <Form onSubmit={this.handleGameSubmit}>
    //           <Form.Group controlID="title">
    //             <Form.Label>Game Title</Form.Label>
    //             <Form.Control type="text" defaultValue={this.props.game.title} />
    //           </Form.Group>

    //           <Form.Group controlId="playStatus">
    //             <Form.Label>Play Status</Form.Label>
    //             <Form.Control type="checkbox" defaultValue={this.props.game.playStatus} />
    //           </Form.Group>

    //           <Form.Group controlId="reviewNotes">
    //             <Form.Label>Game Review/Notes</Form.Label>
    //             <Form.Control type="text" defaultValue={this.props.reviewNotes} />
    //           </Form.Group>

    //           <Button type="submit">Update Game Notes</Button>
    //         </Form>
    //       </Container>
    //     </Modal>
    //     : null
    }
  };
}

export default UpdateGameForm;
