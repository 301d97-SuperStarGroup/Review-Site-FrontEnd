import React from "react";
// import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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
      {/* MAP OVER GAME OBJECT SAVED DATA TO GENERATE CARDS OF GAME INFORMATION */}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Game Title from mapped data</Card.Title>
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

      </>
    )
  }
}

export default UserHome;