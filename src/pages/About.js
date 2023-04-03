import React from 'react';
import Card from 'react-bootstrap/Card';

class About extends React.Component {
  render() {
    return (
      <section id='aboutUsCards'>
        {/* NEED TO GET IMAGES TO LOAD */}
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="src/imgs/DaJon-myProfile.jpg" />
          <Card.Body>
            <Card.Title>Dajon Ewing</Card.Title>
            <Card.Text>
              test
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="src/imgs/Laurence-picture.jpg" />
          <Card.Body>
            <Card.Title>Laurence </Card.Title>
            <Card.Text>
              test
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="./imgs/Reece-Alpaca.jpg" />
          <Card.Body>
            <Card.Title>Reece Renninger</Card.Title>
            <Card.Text>
              Reece is going to be probably become a backend dev because he has no styling capabilities and the front end hates him.
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="src/imgs/Sarah-headshot.jpg" />
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
