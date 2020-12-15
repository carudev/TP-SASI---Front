import React from 'react';

import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
//import logo from '../../assets/logo.png';

import {ErrorMessage, Form, Formik, Field} from 'formik';
import * as Yup from 'yup';

import './styles.css';


const Register = () => {

    // const [nome, setNome] = useState('');
    // const [sobrenome, setSobrenome] = useState('');
    // const [email, setEmail] = useState('');
    // const [cardPassword, setCardPassword] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordConfirm, setPasswordConfirm] = useState('');

    
    // function handleSubmit(event) {
    //     event.preventDefault();

    //     api.post('/sessions',{
    //         email,
    //         password,
    //         passwordConfirm
    //     });
    // }


    const validations = Yup.object().shape({

        nome: Yup.string().min(20).required("Por favor, digite um nome válido!"),
        sobrenome: Yup.string().required("Por favor, digite um sobrenome."),
        email: Yup.string().email().required("Por favor, digite um email válido!"),
        card: Yup.number().min(16).required("Número do cartão deve conter 16 números!"),
        cardPassword: Yup.number().min(3).required("Código inválido!"),
        password: Yup.number().min(8).required("Digite uma senha válida."),
        password_confirm: Yup.number().min(8).required("Senha e confirme senha, devem ser iguais!")
            .oneOf([Yup.ref('password'), null],'Senhas não são iguais!')
    })


        return (
            <div id="RegisterPage">
            <div className="content">
                <header>             

                    <h1 id="title">   ⠀⠀⠀⠀⠀Oliveira Investimentos</h1>    
                    <div>
                        <Link to="/">
                            <span className="btn-back">
                                <FiLogIn className="icon"/>
                                <strong className="button-txt-back">Voltar</strong>
                            </span>
                        </Link>
                    </div>           
                </header> 
            </div>

        <div id="Register-container">
            {<h1 className= "Register-tittle">Crie aqui sua conta</h1>}
                      
            <Formik 
                initialValues={{  
                    nome:'',
                    sobrenome: '',          
                    email: '',
                    card: '',
                    cardPassword: '',
                    password: '',
                    password_confirm: ''}} 
               // onSubmit={handleSubmit} 
                validationSchema={validations} 
            >

                <Form name="f1" className="Register">
                    <div className="Register-Group">

                        <Field 
                                name="nome" 
                                type= "input"
                                className="Register-Field"
                                placeholder="Qual o seu nome?"
                                autoComplete = "off"
                                required
                                //onChange={formik.handleChange}
                                //value={formik.values.userEmail}
                            />    
                                <ErrorMessage
                                    component="span" 
                                    name="nome" 
                                    className="Register-Error"
                                />

                        <Field 
                            name="sobrenome" 
                            type= "input"
                            className="Register-Field"
                            placeholder="Qual o seu sobrenome?"
                            autoComplete = "off"
                            required
                            //onChange={formik.handleChange}
                            //value={formik.values.userEmail}
                        />    
                            <ErrorMessage
                                component="span" 
                                name="sobrenome" 
                                className="Register-Error"
                            />

                        <Field 
                            name="email" 
                            type= "input"
                            className="Register-Field"
                            placeholder="Aqui vai o seu melhor e-mail"
                            autoComplete = "off"
                            required
                            //onChange={formik.handleChange}
                            //value={formik.values.userEmail}
                        />    
                            <ErrorMessage
                                component="span" 
                                name="email" 
                                className="Register-Error"
                            />


                        <Field 
                            name="card" 
                            type= "input"
                            className="Register-Field"
                            placeholder="Por favor, digite os números do seu cartão de crédito"
                            autoComplete = "off"
                            required
                            //onChange={formik.handleChange}
                            //value={formik.values.userEmail}
                        />    
                            <ErrorMessage
                                component="span" 
                                name="card" 
                                className="Register-Error"
                            />

                        <Field 
                            name="cardPassword" 
                            type= "password"
                            className="Register-Field"
                            placeholder="Código de segurança do seu cartão?"
                            autoComplete = "off"
                            required
                            //onChange={formik.handleChange}
                            //value={formik.values.userEmail}
                        />    
                            <ErrorMessage
                                component="span" 
                                name="cardPassword" 
                                className="Register-Error"
                            />



                        <Field  
                            id = "password1"
                            type = "password"
                            name="password" 
                            className="Register-Field"
                            placeholder="Digite sua senha"
                            //onChange={formik.handleChange}
                            //value={formik.values.userPassword}
                        />              
                            <ErrorMessage
                                component="span" 
                                name="password" 
                                className="Register-Error"
                            />
                            
                        <Field 
                            id = "password2"
                            type = "password"
                            name="password_confirm" 
                            className="Register-Field"
                            placeholder="Confirme sua senha"

                        />   
                            <ErrorMessage
                                component="span" 
                                name="password_confirm" 
                                className="Register-Error"
                            />
                    </div>
                    
                    <Link to="/Home">
                        <span className="button">
                            <FiLogIn className="icon"/>
                            <strong className="button-txt">Registrar</strong>
                        </span>
                    </Link>
                </Form>
            </Formik>

        </div>
        </div>

        )
                }

        export default Register;