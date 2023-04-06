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
            <Card.Link  href="https://github.com/nojadzworld" target="_blank"><img id='githublogo' src={githubLogo} alt='Github'/></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/dajon-e/" target="_blank"><img id='linkedlogo' src={linkedLogo} alt='linkedIn'/></Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={laurence} alt='Laurence Profile Pic' />
          <Card.Body>
            <Card.Title>Laurence Vinzen</Card.Title>
            <Card.Text>
              US Navy veteran as GSE (gas turbine systems technician). Student at Code Fellows. Looking forward to creating my own apps with all features I like in one app, so I won't have to have 2 calculators, 2 maps, etc.   
            </Card.Text>

            <Card.Link href="https://github.com/teamidol" target="_blank"><img id='githublogo' src={githubLogo} alt='Github'/></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/teamidol/" target="_blank"><img id='linkedlogo' src={linkedLogo} alt='linkedIn'/></Card.Link>

          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={reece} alt='reece profile pic'/>
          <Card.Body>
            <Card.Title>Reece Renninger</Card.Title>
            <Card.Text>
              I am a United States Marine Corps veteran who served as an infantry rifleman. I am currently attending Code Fellows to become a Full-Stack Developer specializing in JavaScript.
              I don't have a favorite video game, I play too many and too much to have a favorite.
            </Card.Text>
            <Card.Link href="https://github.com/ReeceRenninger" target="_blank"><img id='githublogo' src={githubLogo} alt='Github'/></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/reecerenninger/" target="_blank"><img id='linkedlogo' src={linkedLogo} alt='linkedIn'/></Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={sarah} alt='sarah profile pic'/>
          <Card.Body>
            <Card.Title>Sarah Glass</Card.Title>
            <Card.Text>
              Student software developer with a background in social work, teaching, and marketing. I decided to pursue coding after experiencing a layoff in digital marketing. My strongest skill sets are communication, problem solving, critical thinking, and language learning. Up next I'll be spending time learning about Python and data science. My favorite videogame is the original Super Mario Bros for NES.
            </Card.Text>
            <Card.Link href="https://github.com/s-glass" target="_blank"><img id='githublogo' src={githubLogo} alt='Github'/></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/sarah-codes/" target="_blank"><img id='linkedlogo' src={linkedLogo} alt='linkedIn'/></Card.Link>
          </Card.Body>
        </Card>

      </section>
    );
  }
}

export default About;
