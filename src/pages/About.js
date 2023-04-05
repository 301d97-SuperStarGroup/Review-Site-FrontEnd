import React from 'react';
import Card from 'react-bootstrap/Card';
import dajon from '../img/dajon.jpg'
import laurence from '../img/Laurence-picture.jpg'
import reece from '../img/Reece-Alpaca.jpg'
import sarah from '../img/Sarah-headshot.jpg'
import githubLogo from '../img/github-mark.png'
import linkedLogo from '../img/linkedin.png'

class About extends React.Component {
  render() {
    return (
      <section id='aboutUsCards'>
        {/* NEED TO GET IMAGES TO LOAD */}
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={dajon} alt='DaJons Profile pic'/>
          <Card.Body>
            <Card.Title>DaJon Ewing</Card.Title>
            <Card.Text>
            I am a student software developer and US Navy veteran residing in Port Orchard, Wa with a background in Logistical Operations and Inventory Management. I am dedicated to making a difference in the constantly evolving tech industry through software development.
            </Card.Text>
            <Card.Link  href="https://github.com/nojadzworld"><img id='githublogo' src={githubLogo} alt='Github'/></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/dajon-e/"><img id='linkedlogo' src={linkedLogo} alt='linkedIn'/></Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={laurence} alt='Laurence Profile Pic' />
          <Card.Body>
            <Card.Title>Laurence Vinzen</Card.Title>
            <Card.Text>
              test
            </Card.Text>

            <Card.Link href="https://github.com/teamidol">GitHub</Card.Link>
            <Card.Link href="https://www.linkedin.com/in/teamidol/">LinkedIn</Card.Link>

          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={reece} alt='reece profile pic'/>
          <Card.Body>
            <Card.Title>Reece Renninger</Card.Title>
            <Card.Text>
              Reece is going to be probably become a backend dev because he has no styling capabilities and the front end hates him.
            </Card.Text>
            <Card.Link href="https://github.com/ReeceRenninger"><img id='githublogo' src={githubLogo} alt='Github'/></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/reecerenninger/"><img id='linkedlogo' src={linkedLogo} alt='linkedIn'/></Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={sarah} alt='sarah profile pic'/>
          <Card.Body>
            <Card.Title>Sarah Glass</Card.Title>
            <Card.Text>
              test
            </Card.Text>
            <Card.Link href="https://github.com/s-glass"><img id='githublogo' src={githubLogo} alt='Github'/></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/sarah-codes/"><img id='linkedlogo' src={linkedLogo} alt='linkedIn'/></Card.Link>
          </Card.Body>
        </Card>

      </section>
    );
  }
}

export default About;
