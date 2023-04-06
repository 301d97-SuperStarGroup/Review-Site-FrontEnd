import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import UpdateGameReview from "../UpdateGameReview";

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userGames: [],
      selectedGame: {},
      error: false,
      errorMessage: '',
      showForm: false,
      showModal: false,
      gameToUpdate: null
    }
  }

  //** Modal Handlers for show/hide */
  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,

    })
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


        console.log('games coming from DB ', gameData.data);
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


  //** Delete a user saved game via button */

  deleteGame = async (id) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const response = await this.props.auth0.getIdTokenClaims();

        const jwt = response.__raw;


        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'delete',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/games/${id}`

        }
        await axios(config);

        let updatedGames = this.state.userGames.filter(game => game._id !== id);
        console.log('Game id that was deleted ' + id);
        this.setState({
          userGames: updatedGames,
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
  //  ** Triggered from form submission on UpdateGameReviews and invokes updateGame"
  handleGameSubmit = (event, game) => {
    event.preventDefault();

    let gameToUpdate = {
      id: game.id,
      title: game.title,
      thumbnail: game.thumbnail,
      short_description: game.short_description,
      genre: game.genre,
      freetogame_profile_url: game.freetogame_profile_url,
      playStatus: event.target.play_status.checked,
      reviewNotes: event.target.reviewNotes.value,
      email: game.email,
      _id: game._id,
      __v: game.__v
    }
    console.log(gameToUpdate);
    this.createReview(gameToUpdate);
    this.handleCloseModal();
  }
  
  //** Create a review for game selected on user games */
  createReview = async (gameToUpdate) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const response = await this.props.auth0.getIdTokenClaims();

        const jwt = response.__raw;

        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'put',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/games/${gameToUpdate._id}`,
          data: gameToUpdate
        }
        let updatedGame = await axios(config)

        let updatedGameArray = this.state.games.map(existingGame => {
          return existingGame._id === gameToUpdate._id
            ? updatedGame.data
            : existingGame
        })
        console.log(updatedGameArray);
        this.setState({
          userGames: updatedGameArray,
          showModal: true
        })
        
      }

    } catch (error) {
      console.log(error.message)
    }
  }
  //!! ASK AUDREY IF THIS IS SET UP CORRECTLY */
  // postGame = async (gameToUpdate) => {
  //   try {
  //     if (this.props.auth0.isAuthenticated) {
  //       const response = await this.props.auth0.getIdTokenClaims();

  //       const jwt = response.__raw;

  //       const config = {
  //         headers: { "Authorization": `Bearer ${jwt}` },
  //         method: 'post',
  //         baseURL: process.env.REACT_APP_SERVER,
  //         url: `/games`,
  //         data: gameToUpdate
  //       }

  //       await axios(config)

  //       this.setState({
  //         games: [...this.state.userGames, gameToUpdate]
  //       })
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }

  //   // try {
  //   //   let url = `${process.env.REACT_APP_SERVER}/games`
  //   //   let createdReview = await axios.post(url, gameToUpdate)
  //   //   this.setState({
  //   //     games: [...this.state.games, createdReview.data],
  //   //   })
  //   // } catch (error) {
  //   //   console.log(error.message)
  //   // }
  // }



  //** React lifecycle to pull user game to home page on load */
  componentDidMount() {
    this.getUserGames();

  }

  render() {
    return (
      <>
        <Container className='gameCards'>

          {this.state.userGames.map((game) =>
            <Card key={game._id} style={{ width: '20rem' }}>
              <Card.Img variant="top" src={game.thumbnail} alt={game.short_description} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>
                  {game.short_description}
                </Card.Text>
                <Card.Link style={{ display: 'flex', justifyContent: 'center' }} href={game.freetogame_profile_url} target="_blank" >Game Link</Card.Link>
                <ListGroup variant="flush">
                  <ListGroup.Item>Genre: {game.genre}</ListGroup.Item>
                </ListGroup>



              <button style={{ display: "inline-block" }} className="nes-btn is-primary" onClick={() => { this.setState({ showModal: true, selectedGame: game }) }}>Write a Review</button>
                <button className="nes-btn is-error" style={{ display: "inline-block" }} onClick={() => { this.deleteGame(game._id) }}>Delete Game</button>
                <Card.Text className="reviewNotes">
                  {/* User Play Status: {game.playStatus} */}
                  User Review: {game.reviewNotes}
                </Card.Text>

              </Card.Body>
            </Card>

          )}
          {this.state.showModal &&
            
            <UpdateGameReview userGames={this.state.selectedGame} show={this.state.showModal} handleGameSubmit={this.handleGameSubmit} handleCloseModal={this.handleCloseModal} />
            
            }

        </Container>

      </>
    )
  }
}

export default withAuth0(UserHome);




