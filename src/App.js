import React from 'react';
import logo from './logo.svg';
import './App.css';


const user1 = {
  name: "Bhupathi Raju",
  avatarUrl : "https://homepages.cae.wisc.edu/~ece533/images/boat.png"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name = "Bhupathi"/>
        <Welcome name = "Raju"/>
        <Comment user = {user1} text = "I commented on this" date = {new Date()}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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

export default App;