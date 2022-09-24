import React from 'react';
import {Link} from 'react-router-dom';
import {AreaHeader} from './style';
import styled from './style'
import {useState} from 'react';
import html from 'react-inner-html';


// Carne - 400grm por pessoa + de 6 horas - 650
// Cerveja - 1200 mlk por pessoa + 6 horas - 2000ml
// Refri/água - 1000ml por pessoa + 6 horas 1500ml

//crianças valem por 0,5


export default function Churrascometro(props){


  //Função que denomina os componentes e faz a regra do cálculo


  function Calcular() {
  const adultos = document.querySelector("#aaa").value;
  const criancas = document.querySelector("#bbb").value;
  const duracao = document.querySelector("#ccc").value;


  const qtdCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
  console.log(qtdCarne);

  const qtdCerveja = cervejaPP(duracao) * adultos;
  console.log(qtdCerveja);

  const qtdRefri = refriPP(duracao) * adultos + (refriPP(duracao) /2 * criancas);
  console.log(qtdRefri);

  const resultado = document.querySelector("#resultado");
  const div = document.querySelector("#resultado");
  const qtdTotalCarne = document.createTextNode(qtdCarne + " g de Carne");
  const qtdTotalCerveja = document.createTextNode(qtdCerveja + " ml de Cerveja");
  const qtdTotalRefri = document.createTextNode(qtdRefri + " ml de Refri");

  div.appendChild(qtdTotalCarne)
  div.appendChild(qtdTotalCerveja)
    div.appendChild(qtdTotalRefri)
  

  return(
  <div>
  <input type="text" name="adultos" placeholder="Número de adultos" id="11"></input> 
  <input type="text" name="criancas" placeholder="Número de Crianças" id="22"></input>
  <input type="text" name="duracao" placeholder="Duração" id="33">qtdRefri</input>
  </div>
 )
  
  }


  //Função do cálculo da carne



  function carnePP(duracao){
    const carne = 400;
    if(duracao >=6){
      return 650;
    }else
    return 400;
  }
   
  //Função do cálculo da Bera

  function cervejaPP(duracao){
    if(duracao >=6){
      return 2000;
    }else
    return 1200;
  }

    //Função do cálculo do Refri

  function refriPP(duracao){
    if(duracao >=6){
      return 650;
    }else
    return 400;
  }

    //divs

  return(
    <AreaHeader>
    <div className="page">
      
      <div className="container">
      
        <h1>Churrascômetro</h1>
      </div>
      <div className="fundo">
      <section>
        <h2>
          Bem-vindo ao maior Churrascômetro já inventado!
        </h2>
        <h3>
          Aqui, você pode calcular a medida <span>perfeita</span> para o seu churrasco!
        </h3>
     
         <input type="number" name="adultos" placeholder="Número de adultos" id="aaa"></input>
        <input type="number" name="criancas" placeholder="Número de Crianças" id="bbb"></input>
        <input type="number" name="duracao" placeholder="Duração" id="ccc"></input>
        <button type='submit' onClick={Calcular}>Calcular</button>
           <p id='carnee'>
                 g de Carne
           </p >

           <p id='bera'>
                 ml de Beras
           </p>

           <p id='refri'>
                  ml de Refri
           </p>
        <div id="resultado">
       

        
        </div>
      </section>
      </div>
    </div>
    </AreaHeader>
  )
}
