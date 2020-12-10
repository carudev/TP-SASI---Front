import  React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
//import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import axios from 'axios';

import logo from '../../assets/logo.png';

import './styles.css';
//import { data } from 'jquery';


const  CoinDetails = () =>   {

    let currentLocation = window.location.href;
    let currentCoin = currentLocation.slice(currentLocation.lastIndexOf("/")+1);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
      axios.get('https://poloniex.com/public?command=returnTicker').then(response => {
        setCoins(response.data);
      })
    }, []);

    let moedas = [];
    var keys = Object.keys(coins);
    //Coins ---> Json completo  e Keys ---> nome da moed
    //pega o nome de todas as moedas separadamente p poder comparar dps
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
    });

//existe alguma moeda que seja igual a moeda atual? se sim, pegar os dados dela e exibir na tela
const getData = () => {
    var teste = [];
    teste.push(moedas.find(moeda => moeda.dados.nome === currentCoin));
        if(teste && teste.length > 0 && teste[0] && teste[0].dados){
            return (
                <div className="dadosDetail">
                    <p><b>Nome da moeda:</b> {teste[0].dados.nome}</p>
                    <p><b>Preço:</b> {teste[0].dados.last}</p>
                    <p><b> Maior Preço:</b>{teste[0].dados.highestBid}</p>
                    <p><b> Menor Preço:</b>{teste[0].dados.lowestAsk}</p>
                    <p><b>Volume:</b> {teste[0].dados.baseVolume}</p>
                    <p><b>Variação de Preço:</b> {teste[0].dados.percentChange} </p>
                    <p><b>Máxima 24Hr:</b> {teste[0].dados.high24hr}</p>

                </div>
        );
    }
}


let dataCharts = [];
//ar getVolume;


fetch(`https://poloniex.com/public?command=returnChartData&currencyPair=${currentCoin}&start=1546300800&end=1546646400&period=14400`)
  .then(res => res.json())
  .then(teste => dataCharts = teste)
  .then(() => console.log(dataCharts));

  //Aqui jogar os dados no gráfico.

//   const renderData = () => {
//       return  dataCharts && dataCharts.map(({volume}) => {
//           return (
//             grafico = dataCharts.volume
//           )
//       })

//   }
    
//getVolume = dataCharts && dataCharts.map(volume),
//console.log(getVolume)
     
  //se a moeda tiver esses dados vazio, então exibir msg de erro ao carregar o gráfico dessa moeda
    return (
        <div id="page-details">
        <div className="content">

             <header>
                <img src={logo} alt="SmartBotter" />
                    <button >
                        <Link to="/">
                            <FiArrowLeft />
                            Voltar para Home
                        </Link>
                    </button>
             </header>
            <main>
                <h1 >Detalhes da moeda:  </h1>
                <p>{getData()} </p>


            </main>



        </div>
         </div>
    )
}



export default CoinDetails;
