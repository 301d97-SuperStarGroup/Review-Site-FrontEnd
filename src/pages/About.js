import React from 'react';
import Card from 'react-bootstrap/Card';
import dajon from '../img/dajon.jpg'
import laurence from '../img/Laurence-picture.jpg'
import reece from '../img/Reece-Alpaca.jpg'
import sarah from '../img/Sarah-headshot.jpg'

class About extends React.Component {
  render() {
    return (
      <section id='aboutUsCards'>
        {/* NEED TO GET IMAGES TO LOAD */}
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={dajon} alt='DaJons Profile pic'/>
          <Card.Body>
            <Card.Title>Dajon Ewing</Card.Title>
            <Card.Text>
              test
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={laurence} />
          <Card.Body>
            <Card.Title>Laurence </Card.Title>
            <Card.Text>
              test
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={reece} />
          <Card.Body>
            <Card.Title>Reece Renninger</Card.Title>
            <Card.Text>
              Reece is going to be probably become a backend dev because he has no styling capabilities and the front end hates him.
            </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={sarah} />
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
