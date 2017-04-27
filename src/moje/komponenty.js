import React from 'react';
import MujForm from './MujForm';
import Calculator from './Calculator';
import SignUpDialog, {WelcomeDialog, Dialog} from './Dialog';

export default class Moje extends React.Component {
    constructor(props) {
        super(props);
        this.pokus = "obsah pokusu";
        this.name = this.props.name;
        this.generate = this.props.generate;
    }

    

    clickFunction = () => {
        console.log('no, this ukazuju ', this);

    }

    handleClick(par) {
        console.log('parametr: ' + par + ', a this: ', this);
        console.log('a klidne si muzu zavolat hodnotu definovanou z konstruktoru: ', this.name);
    }
    generujCisla() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) => <li key={number.toString()}>{number * 2 }</li> 
        );
        return listItems;
    }
    napisCisla(){
        
    }
    render() {
        var additionalContent = '';
        if(this.generate == 'cisla'){
            additionalContent = <ul>{this.generujCisla()}</ul>;
        }
        if(this.generate == 'formular'){
            additionalContent = <div className="m2"><MujForm /></div>;
        }
        if(this.generate == 'teplokalkulacka'){
            additionalContent = <div className="m2"><Calculator /></div>;
        }
        if(this.generate == 'dialog'){
            additionalContent = <div className="m2"><SignUpDialog/></div>;
        }
        return <fieldset>
            <legend>Moje komponenta {this.props.name}</legend>
            tady je její obsah:<br/>
            {this.props.content}<br/>
            <button onClick={this.clickFunction} >Udělej něco bez param</button>
            <button onClick={(e) => this.handleClick("da")} >Udělej jinak</button>
            {additionalContent}
        </fieldset>;
    }
}

export function MojeSet() {
    return(
            <div>
                <Moje name="Sněh" content="Sněh rocks!" generate="formular"/>
                <Moje name="Snehuálk" content="Sněhulák je master" generate="cisla"/>
                <Moje name="Snowman" content="Snowman is the best man!" generate="teplokalkulacka"/>
                <Moje name="Snowman" content="Snowman is the best man!" generate="dialog"/>
            </div>
            );
}



