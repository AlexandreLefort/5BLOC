import React, { Component } from 'react';
import Identicon from 'identicon.js';
import photo from '../photo.png'

class Navbar extends Component {

  render() {
    return (
      
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="/"
          rel="noopener noreferrer"
        >
          <style>

          </style>
          <div class="topnav">
          <img src= "../assets/images/favicon.png" width="35" height="35" className="d-inline-block align-top" alt="" />
          <a class="page-scroll" href="../Accueil.html">Accueil</a>
                                <a class="page-scroll" href="#services">Contact</a>
                               
          
                               </div>
        </a>
        
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account" style={{color: '#726161'}}>{this.props.account}</small>
            </small>
            { this.props.account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;