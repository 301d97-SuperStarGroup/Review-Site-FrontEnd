
// import axios from 'axios';
import React from 'react';

class GamePage extends React.Component {
  render() {
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     error: false,
    //     errorMessage: '',
    //     games: []
    //   }
    // }

    // handleGameLoad = async (event) => {
    //   try {
    //     let url = `${process.env.REACT_APP_SERVER}/games`;
    //     let gameDataFromAxios = await axios.get(url);

    //     this.setState({
    //       games: gameDataFromAxios.data,
    //       error: false
    //     });
    //   } catch (error) {
    //     this.setState({
    //       error: true,
    //       errorMessage: error.message
    //     });
    //   }
    // }

    // componentDidMount(){
    //   this.handleGameLoad();
    // }

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
