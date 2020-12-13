import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';


const HomePage = () => {
    return (
       <div id="HomePage">
           <div className="content">
                { <header>
                    <h1>Oliveira Investimentos</h1>
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


                    <Link to={{ pathname: "https://docs.google.com/document/d/1DRJ7W4ZgNfWjncHUam7AdHcCnbYkHysYWP2dsiu6ehQ/edit?usp=sharing" }} target="_blank" >
                        <span>
                        <FiLogIn />
                        </span>
                        <strong>Conheça nossa Politica de Segurança</strong>
                    </Link>

                </main>
           </div>
       </div>
    )
}
export default HomePage;