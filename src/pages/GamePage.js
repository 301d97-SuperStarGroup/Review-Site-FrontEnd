
import axios from 'axios';
import React from 'react';
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

  handleGameLoad = async (event) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/games`;
      let gameDataFromAxios = await axios.get(url);
      console.log(gameDataFromAxios.data);
      this.setState({
        games: gameDataFromAxios.data,
        error: false
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }

  async componentDidMount(){
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

      this.setState ({
        games: gameData.data
      });
    }

  }
  // this.handleGameLoad();

  render() {

    //TODO: RETURN GAMES AS CARDS WITH BUTTONS TO ALLOW USERS TO SAVE TO THEIR PROFILE AND MAKE A REVIEW.
    // TODO: ALLOW A WAY FOR USER TO FILTER RESULTS BY PLATFORM OR CATEGORIES.
    return (
      <>
        <h1>Game Page test</h1>
      </>
    );
  }
}

export default withAuth0(GamePage);
