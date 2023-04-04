import React from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap'

class UpdateGameForm extends React.Component {

  handleGameSubmit = (event) => {
    event.preventDefault();

    let gameToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked,
      _id: this.props.book._id,
      _v: this.props.book._v
    }
    console.log(gameToUpdate);
    // Handler from GamePage.js to update database
    this.props.updateGame(gameToUpdate);
  }

  render() {
    return {
      <>
      { this.props.game ?
      <Modal show={this.props.show} onHide={this.props.onHide}>
        
        <Modal.Header closeButton><Modal.Title>game title</Modal.Title></Modal.Header>

      <Container className="mt-5">
        <Form onSubmit={this.handleGameSubmit}>
          <Form.Group controlID="title">
            <Form.Label>Game Title</Form.Label>
            <Form.Control type="text" defaultValue={this.props.book.title}/>
            </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type"text" defaultValue={}
    }
  }
}