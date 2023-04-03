'use strict';
import React from 'react';
import Card from 'react-bootstrap/Card';

class About extends React.Component {
  render() {
    return (
      <section id='aboutUsCards'>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Dajon Ewing</Card.Title>
            <Card.Text>
              test
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Laurence </Card.Title>
            <Card.Text>
              test
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Reece Renninger</Card.Title>
            <Card.Text>
              Reece is going to be probably become a backend dev because he has no styling capabilities and the front end hates him.
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Sarah Glass</Card.Title>
            <Card.Text>
              test
            </Card.Text>

          </Card.Body>
        </Card>

      </section>
    );
  }
}

export default About;
