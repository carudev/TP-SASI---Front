// <%@Language="VBSCRIPT"%>
// <!--#include virtual="/ForceSSL.inc"-->
import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

import { Link } from 'react-router-dom';
import Home from '../Home';
import logo from '../../assets/logo.png';

import {ErrorMessage, Form, Formik, Field} from 'formik';
import * as Yup from 'yup';


 export default function Login  ({ history }) {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    async function handleSubmit(event) {

        event.preventDefault();

        const response = await api.post('/sessions', {
            email,
            password,
            passwordConfirm
        });

        const { _id } = response.data;

        localStorage.setItem('user', _id);
        history.push('/Home');
    }

    const validations = Yup.object().shape({
        email: Yup.string().email(),
        password: Yup.number().min(8),
        passwordConfirm: Yup.number().min(8)
            .oneOf([Yup.ref('password'), null],'Senhas não são iguais!')
    })


    return (
        <div id="LoginPage">
            <div className="content">
                <header> 

                <h1 id="title">   ⠀⠀⠀⠀⠀Oliveira Investimentos</h1>


                    <Link to="/Home">
                        <button>
                            Voltar
                        </button>       
                    </Link>
     
                </header> 
            </div>


        <div id="login-container">
            <img src= {logo} alt="logo" />
            {<h1 className= "login-tittle">Acesse aqui sua conta</h1>}

                        
            <Formik 
                initialValues={{            
                    email: '',
                    password: '',
                    passwordConfirm: ''}} 
                validationSchema={validations} 
            >

                <Form name="f1" className="Login" onSubmit={handleSubmit}>
                    <div className="Login-Group">

                        <Field 
                            name="email" 
                            type= "input"
                            className="Login-Field"
                            placeholder="Aqui vai o seu melhor e-mail"
                            autoComplete = "off"
                            required
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            //value={formik.values.userEmail}
                        />    
                            <ErrorMessage
                                component="span" 
                                name="email" 
                                className="Login-Error"
                            />
    
                        <Field  
                            id = "password1"
                            type = "password"
                            name="password" 
                            className="Login-Field"
                            placeholder="Digite sua senha, apenas números!"
                            required
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />              
                            <ErrorMessage
                                component="span" 
                                name="password" 
                                className="Login-Error"
                            />

                        <Field 
                            id = "password2"
                            type = "password"
                            name="passwordConfirm" 
                            className="Login-Field"
                            placeholder="Confirme sua senha"
                            required
                            value={passwordConfirm}
                            onChange={event => setPasswordConfirm(event.target.value)}

                        />   
                            <ErrorMessage
                                component="span" 
                                name="passwordConfirm" 
                                className="Login-Error"
                            />
                    </div>

                    <button className="btn" type="submit">Entrar</button>
                </Form>
            </Formik>
        
        </div>
        </div>
    )

    
}
