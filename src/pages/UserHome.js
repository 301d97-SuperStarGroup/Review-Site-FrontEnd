import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class UserHome extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userGames: [],
      error: false,
      errorMessage: ''
    }
  }

  getUserGames = async () => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const response = await this.props.auth0.getIdTokenClaims();

        const jwt = response.__raw;


        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'get', //post when saving
          baseURL: process.env.REACT_APP_SERVER,
          url: '/myGames'
          //data property that will be our game object to save
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
  // deleteGame = async (id) => {
  //     try{

  //         let url = `${process.env.REACT_APP_SERVER}/games/${id}`

  //         await axios.delete(url);

  //         let updatedGames = this.state.games.filter(game => game._id !== id);

  //         this.setState({
  //             games: updatedGames
  //         })
  //     } catch (error) {
  //         console.log(error.response)
  //     }
  // }
  componentDidMount() {
    this.getUserGames();

  }

  render() {
    return (
      <>
        <h1>USER SAVED GAMES GET DISPLAYED HERE</h1>
        {/* MAP OVER GAME OBJECT SAVED DATA TO GENERATE CARDS OF GAME INFORMATION */}
        {this.state.userGames.map((game) =>

          <Card key={game._id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{game.title}</Card.Title>
              <Card.Text>
                Game description from mapped data
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <ListGroup variant="flush">
                <ListGroup.Item>Genre: </ListGroup.Item>
              </ListGroup>
              {/* <Button variant="danger" onClick = {() => { this.deleteGame(game._id) }}>Delete Game</Button> */}
            </Card.Body>
          </Card>
         )}
      </>
    )
  }
}

export default withAuth0(UserHome);