import React from 'react';
import './../App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export default class Header extends React.Component {
   
  componentDidMount(){    
  }
  componentDidUpdate(){
    console.log("component did update");
  }
  componentWillUnmount(){
    console.log('component will update');
  }
    render(){
return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand">NCTZEN</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link to="/about" class="nav-item nav-link" href="#">About</Link>
    </div>
  </div>
</nav>
  );
}
}