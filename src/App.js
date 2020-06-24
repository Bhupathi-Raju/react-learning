import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle'
import LoginControl from './LoginControl';
import ListItems from './ListItems'
import NameForm from './NameForm'
import FruitSelector from './FruitSelector'
import Calculator from './Calculator'

const user1 = {
  name: "Bhupathi Raju",
  avatarUrl : "https://homepages.cae.wisc.edu/~ece533/images/boat.png"
}

const numbers = [1, 2, 3, 4, 5]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginControl/>
        <NameForm/>
        <FruitSelector/>
        <Calculator/>
        <Toggle/>
        {/* <Comment user = {user1} text = "I commented on this" date = {new Date()}/> */}
        <ListItems numbers={numbers}/>
        <Clock/>
      </header>
    </div>
  );
}

function Welcome(props){
return <h1>Hello, {props.name}</h1>
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.user}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function UserAvatar(props) {
  return (<img src={props.user.avatarUrl} alt={props.user.name}/>);
}

function UserInfo(props){
  return (
  <div>
    <UserAvatar user= {props.user}/>
    <div>{props.user.name}</div>
  </div>  
  );
}

// function Clock(props){
//   return(
//     <div>
//       <h1>Hello, my name is tick..tick..tick!</h1>
//       <h2>My value is {props.date.toLocaleDateString()}</h2>
//     </div>
//   );
// }

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()}
    this.tick = this.tick.bind(this)
  }

  componentDidMount(){
    this.timerID = setInterval(
     this.tick, 100 
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <div>
        <h1>Hello, my name is tick..tick..tick!</h1>
        <h2>My age is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}



export default App;