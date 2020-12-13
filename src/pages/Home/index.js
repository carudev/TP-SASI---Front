import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import axios from 'axios';


import logo from '../../assets/logo.png';
//import search from '../../assets/search.png';
import './styles.css';

const Home = () => {



  const [coins, setCoins] = useState([]);


  //Getting data from API
  useEffect(() => {
    axios.get('https://poloniex.com/public?command=returnTicker').then(response => {
      setCoins(response.data);
    })
  }, []);

  const moedas = [

  ];

  var keys = Object.keys(coins);

  //Coins ---> Json completo
  //Keys ---> nome da moeda
  //pega o nome de todas as moedas separadamente
  var i = 0;
  for (var key in coins) {
    moedas.push({
      "moeda": keys[i],
      "dados": coins[key]
    });
    i++;
  }

  moedas.forEach(moeda => {
    moeda.dados.nome = moeda.moeda;
  })

  let moedasTratadas = [];

  moedas.forEach(moeda => {
    moedasTratadas.push(
      moeda.dados
    )
  })


  function getSortOrder(chave) {
    return function (a, b) {
      if (a[chave] < b[chave]) {
        return 1;
      } else {
        return -1;
      }
      
    };
  }

  moedasTratadas = moedasTratadas.sort(getSortOrder("last"));

  let ranking = moedasTratadas.splice(moedasTratadas.length - 7 );





const renderHeader = () => {
  let headerElement = ['id', 'nome', 'Preço', 'Variação', 'Volume']

  return headerElement.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
  })
}

const renderBody = () => {
  return ranking && ranking.map(({ id, nome, last, percentChange, baseVolume }) => {
    return (
      <tr id="tr" key={id}>
        <td>{id}</td>
        <td>
          <Link to={`/coin-details/${(nome)}`} key={nome}>
            {nome}
          </Link>
        </td>
        <td>$ {last}</td>
        <td>{percentChange}%</td>
        <td>{baseVolume}</td>
      </tr>
    )
  })

}





  return (

    <div id="page-home">
      <div className="content">

      <header>
          <h1>Oliveira Investimentos</h1>

          <div id="divBusca">
          <Link to="/">
                        <span className="btn-back">
                            <FiLogIn className="icon"/>
                            <strong className="button-txt-back">Voltar</strong>
                        </span>
                    </Link>
          </div>

        </header>

      <main>
        <h1>CriptoMoedas</h1>
        <p>Encontre aqui todas as informações sobre as CriptoMoedas!</p>

        <table id="tabela" className="tabela">
  

          <thead>
            <tr>{renderHeader()}</tr>
          </thead>

          <tbody>
            {renderBody()}
          </tbody>

          

        
        </table>

 
  



      </main>


    </div>
    </div >
  )
}


export default Home;
