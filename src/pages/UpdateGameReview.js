import React from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap'

class UpdateGameReview extends React.Component {


  render() {
    console.log(this.props.userGames.title);
    return (
          <Modal show={this.props.show}>

            <Modal.Header closeButton><Modal.Title>Game Notes</Modal.Title></Modal.Header>

            <Container className="mt-5">

              <Form onSubmit={this.props.handleGameSubmit}>
                {/* <Form.Group controlId="title" className="mb-3" disabled>
                  <Form.Label>Game Title</Form.Label>
                  <Form.Control id="disabledTextInput" placeholder="Disabled input" type="text" defaultValue={this.props.userGames.title} />
                </Form.Group> */}

                <Form.Group controlId="play_status">
                  <Form.Label>Play Status</Form.Label>
                  <Form.Control type="checkbox" defaultValue={this.props.userGames.playStatus} />
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