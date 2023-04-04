
import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: '',
      selectedGenre: '',
      games: [],
      filteredGames: []
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
          method: 'get', //post when saving
          baseURL: process.env.REACT_APP_SERVER,
          url: '/games'
          //data property that will be our game object to save
        }
        let gameData = await axios(config);

        console.log(gameData.data);

        this.setState({
          games: gameData.data,
          filteredGames: gameData.data,
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

  handleGenreSelected = (event) => {
    let selectedGenre = event.target.value;
    console.log(this.state.games);
      let genreData = this.state.games.filter(g => g.genre.toLowerCase() === selectedGenre.toLowerCase());
      console.log(genreData);

      this.setState({
        filteredGames: genreData
      })
    
  }




  render() {

    //TODO: RETURN GAMES AS CARDS WITH BUTTONS TO ALLOW USERS TO SAVE TO THEIR PROFILE AND MAKE A REVIEW.
    // TODO: ALLOW A WAY FOR USER TO FILTER RESULTS BY PLATFORM OR CATEGORIES.
    return (
      <>
      <Form>
      <Form.Group >
        <Form.Select name='select' onChange={this.handleGenreSelected}>
          <option value="">View Games by Genre</option>
          <option value="2d">2d</option>
          <option value="3d">3d</option>
          <option value="action">action</option>
          <option value="action-rpg">action-rpg</option>
          <option value="anime">anime</option>
          <option value="battle-royale">battle-royale</option>
          <option value="card">card</option>
          <option value="fantasy">fantasy</option>
          <option value="fighting">fighting</option>
          <option value="first-person">first-person</option>
          <option value="flight">flight</option>
          <option value="horror">horror</option>
          <option value="low-spec">low-spec</option>
          <option value="martial-arts">martial-arts</option>
          <option value="military">military</option>
          <option value="mmo">mmo</option>
          <option value="mmofps">mmofps</option>
          <option value="mmorpg">mmorpg</option>
          <option value="mmorts">mmorts</option>
          <option value="mmotps">mmotps</option>
          <option value="moba">moba</option>
          <option value="open-world">open-world</option>
          <option value="permadeath">permadeath</option>
          <option value="pixel">pixel</option>
          <option value="pve">pve</option>
          <option value="pvp">pvp</option>
          <option value="racing">sports</option>
          <option value="sailing">sailing</option>
          <option value="sandbox">sandbox</option>
          <option value="sci-fi">sci-fi</option>
          <option value="shooter">shooter</option>
          <option value="side-scroller">side-scroller</option>
          <option value="social">social</option>
          <option value="space">space</option>
          <option value="strategy">strategy</option>
          <option value="superhero">superhero</option>
          <option value="survival">survival</option>
          <option value="tank">tank</option>
          <option value="third-Person">third-Person</option>
          <option value="top-down">top-down</option>
          <option value="tower-defense">tower-defense</option>
          <option value="turn-based">turn-based</option>
          <option value="voxel">voxel</option>
          <option value="zombies">zombies</option>
        </Form.Select>
      </Form.Group>
    </Form>

      <Container className='gameCards'>

        {this.state.filteredGames.map((game) =>
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

      </>
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