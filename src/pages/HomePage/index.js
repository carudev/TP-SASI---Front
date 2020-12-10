import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.png';

const HomePage = () => {
    return (
       <div id="HomePage">
           <div className="content">
                { <header>
                    <img src= {logo} alt="Oliveira" />
                </header> }

                <main>
                    <h1>Comece agora mesmo a investir!</h1>
                    <p>Ajudamos pessoas a investirem de forma eficiente.</p>
                    
                    <Link to="/Login">
                        <span>
                        <FiLogIn />
                        </span>
                        <strong>Entre na sua conta.</strong>
                    </Link>

                    <Link to="/Register">
                        <span>
                        <FiLogIn />
                        </span>
                        <strong>Não tem conta? Cadastre-se aqui.</strong>
                    </Link>

                </main>
           </div>
       </div>
    )
}
export default HomePage;