import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userGames: [],
      error: false,
      errorMessage: ''
    }
  }

  //** Retrieves User's saved game from MongoDB */
  getUserGames = async () => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const response = await this.props.auth0.getIdTokenClaims();

        const jwt = response.__raw;


        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'get', 
          baseURL: process.env.REACT_APP_SERVER,
          url: '/myGames'
        }
        let gameData = await axios(config);



        this.setState({
          userGames: gameData.data,
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

  //!! LAURENCE WORK ON DELETE FUNCTIONALITY FOR SAVED GAMES
  deleteGame = async (id) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const response = await this.props.auth0.getIdTokenClaims();

        const jwt = response.__raw;


        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'delete',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/games${id}`

        }
        let gameData = await axios(config);

        console.log('Is the delete firing?')

        this.setState({
          userGames: gameData.data,
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
    this.getUserGames();

  }

  render() {
    return (
      <>
        {/* MAP OVER GAME OBJECT SAVED DATA TO GENERATE CARDS OF GAME INFORMATION */}
        <Container className='gameCards'>

          {this.state.userGames.map((game) =>
            <Card key={game._id} style={{ width: '18rem' }}>
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
                <Button variant="danger" onClick = {() => { this.deleteGame(game._id) }}>Delete Game</Button>
              </Card.Body>
            </Card>
          )}

        </Container>
      </>
    )
  }
}

export default withAuth0(UserHome);