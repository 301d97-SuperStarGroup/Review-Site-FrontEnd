
import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class GamePage extends React.Component {
  constructor(props) {
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
      if (this.props.auth0.isAuthenticated) {
        const response = await this.props.auth0.getIdTokenClaims();

        const jwt = response.__raw;


        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/games'
        }
        let gameData = await axios(config);

        console.log(gameData.data);

        this.setState({
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

  componentDidMount() {
    this.handleGameLoad();

  }

  render() {

    //TODO: RETURN GAMES AS CARDS WITH BUTTONS TO ALLOW USERS TO SAVE TO THEIR PROFILE AND MAKE A REVIEW.
    // TODO: ALLOW A WAY FOR USER TO FILTER RESULTS BY PLATFORM OR CATEGORIES.
    return (

      <Container className='gameCards'>

        {this.state.games.map((game) =>
          <Card key={game.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={game.thumbnail} />
            <Card.Body>
              <Card.Title>{game.title}</Card.Title>
              <Card.Text>
                {game.short_description}

              </Card.Text>
              <Card.Link href={game.freetogame_profile_url}>Game Link</Card.Link>
              <ListGroup variant="flush">
                <ListGroup.Item>Genre: {game.genre}</ListGroup.Item>
              </ListGroup>
              <Button variant="primary">SAVE</Button>
            </Card.Body>
          </Card>
        )}

      </Container>


    );
  }
}

export default withAuth0(GamePage);




// id: { type: Number, required: true },
// title: { type: String, required: true },
// thumbnail: { type: String, required: true }, //"thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
// short_description: {type: String, required: true },
// genre: { type: String, required: true },
// platform: { type: String, required: true },
// freetogame_profile_url: {type: String, required: true},
// playStatus: { type: Boolean, required: true },
// reviewNotes: {type: String, required: true },
// email: {type: String, required: true},