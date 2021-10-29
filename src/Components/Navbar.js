import React from 'react'
import './CSS/Navbar.css'

const Navbar = () => {
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#a">Start Bootstrap
</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#anavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#a">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#a">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#a">    All Products</a>
          <a class="dropdown-item" href="#a">Popular Items</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#a">New Arrivals</a>
        </div>
      </li>
  


    </ul>
   
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Cart</button>
  
  </div>
</nav>
       
        </div>
    )
}

export default Navbar
