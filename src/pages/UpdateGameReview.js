import React from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap'

class UpdateGameReview extends React.Component {


  render() {
    console.log(this.props.userGames);
    return (
          <Modal show={this.props.show}>

            <Modal.Header closeButton><Modal.Title>Game Notes</Modal.Title></Modal.Header>

            <Container className="mt-5">

              <Form onSubmit={(e) => {this.props.handleGameSubmit(e, this.props.userGames)}}>

                <h1>{this.props.userGames.title}</h1>

                <Form.Group controlId="play_status">
                  <Form.Label>Has Been Played</Form.Label>
                  <Form.Check type="checkbox" defaultChecked={this.props.userGames.playStatus} />
                </Form.Group>

                <Form.Group controlId="reviewNotes">
                  <Form.Label>Game Review/Notes</Form.Label>
                  <Form.Control type="text" defaultValue={this.props.userGames.reviewNotes} />
                </Form.Group>

                <Button type="submit">Update Game Notes</Button>
              </Form>
            </Container>
          </Modal>
      );
}
}
      

export default UpdateGameReview;