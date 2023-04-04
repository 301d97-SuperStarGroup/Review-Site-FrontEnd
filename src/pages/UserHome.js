import React from "react";
// import axios from 'axios';
// import { Button } from "react-bootstrap";

class UserHome extends React.Component{
//!! LAURENCE WORK ON DELETE FUNCTIONALITY FOR SAVED GAMES
// deleteGame = async (id) => {
//     try{

//         let url = `${process.env.REACT_APP_SERVER}/games/${id}`

//         await axios.delete(url);

//         let updatedGames = this.state.games.filter(book => game._id !== id);

//         this.setState({
//             books: updatedBooks
//         })
//     } catch (error) {
//         console.log(error.response)
//     }
// }


  render(){
    return(
      <>
      <h1>USER SAVED GAMES GET DISPLAYED HERE</h1>
{/* <Button onClick = {() => { this.deleteGame(game._id) }}>Delete Game</Button> */}
      </>
    )
  }
}

export default UserHome;