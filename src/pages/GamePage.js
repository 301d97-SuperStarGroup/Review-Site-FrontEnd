
import axios from 'axios';
import React from 'react';

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
      let url = `https://www.freetogame.com/api/games/games`;
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
  
  componentDidMount(){
    this.handleGameLoad();
  }

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

export default GamePage;
