
import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  {Container}  from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class GamePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
      errorMessage: '',
      games: []
    }
  }

  // !! Auth0 way of building out handlers
  handleGameLoad = async (event) => {
    try {
      if(this.props.auth0.isAuthenticated){
        const response = await this.props.auth0.getIdTokenClaims();
        
        const jwt = response.__raw;
        
        
        const config = {
          headers: {"Authorization": `Bearer ${jwt}`},
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/games'
        }
        let gameData = await axios(config);
        console.log('Am I trying to grab ALL games?');
        console.log(gameData.data);
        
        this.setState ({
          games: gameData.data,
          error: false
        });
      }
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }

  componentDidMount(){
    this.handleGameLoad();

  }

  render() {

    //TODO: RETURN GAMES AS CARDS WITH BUTTONS TO ALLOW USERS TO SAVE TO THEIR PROFILE AND MAKE A REVIEW.
    // TODO: ALLOW A WAY FOR USER TO FILTER RESULTS BY PLATFORM OR CATEGORIES.
    return (
      
      <Container  className='gameCards'>

      {this.state.games.map((game, idx)=>
      <Card key={idx}  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>
          {game.genre},{game.platform},{game.releaseDate}
        </Card.Text>
        <Button variant="primary">SAVE</Button>
      </Card.Body>
    </Card>
      )}
      
      </Container>
        
    
    );
  }
}

export default withAuth0(GamePage);
