import React from 'react';
import {AreaHeader} from './style';
import Header from './../Header';
import Footer from './../Footer';
import {Link} from 'react-router-dom';



export default function Home(props){
  return(
    <AreaHeader>
   <div className="container">
    <img src='./../../../public/icon_files/prato-de-churrasco-png-Transparente-Download.png.crdownload'></img>
   
    <nav>
  <ul class="menu">

		<li className="Churrascometro">
      <Link to="/churrascometro">Churrascômetro</Link>
    </li>
	  		<li className="reserve"><a href="#">Reservas</a>
	         	<ul>
	                  <li><a href="/myreserves">Minhas Reservas</a></li>
	                  <li>  <Link to="/reserve">Faça a sua Reserva</Link></li>
	                
	       		</ul>
			</li>
		<li className="contato">  <Link to="/contact">Contate-nos</Link></li>
		
</ul>
</nav>
    <section>
      </section>
      

   </div>
   </AreaHeader>

  )
}