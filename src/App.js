import React, { Component } from 'react';
import Clock from './moje/Clock.js' ;
import LoginControl, { Greeting } from './moje/LoginControl.js';
import Moje, {MojeSet} from './moje/komponenty.js';
import logo from './logo.svg';
import './App.css';
 
function neco(){
	return 'pokus NB';
}
const pozdrav = (
		<div>
			<h1>Nazdar světe!</h1>
			<p>aneb česká verze hello worldu</p>
		</div>
);
const mojeK = <Moje name="Sněh" content="Sněh rocks!"/>;
const myDate = new Date(2017, 4, 26 ,17,32,21);



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Snehův React {neco()}</h2>
          <div className="cornerLogin">
            <LoginControl >ds</LoginControl>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and zmáčkni ctrl+s to reload.
        </p>
          <div > {pozdrav} </div>  
          <div id="time">
          	<Clock/>
          	<Clock setTime={myDate} message="čas který jsem si vymyslel je: "/>
          	<Clock shiftedTime="-3600" message="v Brightonu je právě: "/> 
            <Clock shiftedTime={(6 * 3600)} message="a v Šanghaji: "/> 	
          </div>  
          <Greeting isLoggedIn={false} />	
          
          {mojeK}
          <h3>Set mých komponnet</h3>
          {MojeSet()}
      </div>
     
    );
  }
};

export default App;

