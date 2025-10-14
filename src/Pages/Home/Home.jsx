import React from 'react'

import { Link } from 'react-router-dom';
import logo from '../../assets/logo_simpson.webp'
import fondo from '../../assets/fondo_simpson.jpg'

import './Home.css'

function Home() {

    
    return (
        
   /* Contenedor */
             <div
      className="home-container"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
                
                <img src={logo} alt="Logo de los Simpsons" className="home-logo" />

                <h1>Bienvenido a la API de Simpsons</h1>

                <p>
                    Explora información sobre los <b>personajes</b>, <b>lugares</b> y{" "}
                    <b>episodios</b> de la famosa serie animada.
                </p>


                <div className="home-buttons">
                    <Link to="/personajes" className="home-btn">Ver Personajes</Link>
                    <Link to="/lugares" className="home-btn">Ver Lugares</Link>
                    <Link to="/episodios" className="home-btn">Ver Episodios</Link>


                </div>

                <footer className="home-footer">
                <p>Elaborado por Joan Sebastian Muñoz Bedoya Futuro Ingeniero de Sistemas</p>
            </footer>
            </div>

            
    
    );
}

export default Home;
