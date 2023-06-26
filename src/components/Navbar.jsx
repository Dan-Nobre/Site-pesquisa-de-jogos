import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2><Link to={`/`}>Projeto Estágio Front</Link></h2>
        <ul>
            <li to={`/`}><Link>Página Inicial</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar