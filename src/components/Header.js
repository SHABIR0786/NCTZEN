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
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to="/update" className="nav-item nav-link" href="#">Update</Link>
      <Link to="/delete" className="nav-item nav-link" href="#">Delete</Link>
      <Link to="/faq" className="nav-item nav-link" href="#">FAQ</Link>
      <Link to="/contact" className="nav-item nav-link" href="#">Contact</Link>
    </div>
  </div>
</nav>);
}
}