import React from 'react';

export default class MujForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {jmeno: '', popis: '', seznam: 'coconut'};

        this.jmenoHandleChange = this.jmenoHandleChange.bind(this);
        this.popisHandleChange = this.popisHandleChange.bind(this);
        this.seznamHandleChange = this.seznamHandleChange.bind(this);
        
        this.handleInputChanges = this.handleInputChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    jmenoHandleChange(event) {
        this.setState({jmeno: event.target.value.toUpperCase()});
    }
    popisHandleChange(event) {
        this.setState({popis: event.target.value});
    }
    seznamHandleChange(event) {
        this.setState({seznam: event.target.value});
        console.log('chut: ',event.target.value);
    }
    
    handleInputChanges(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log("change of '"+name+"' to: ",value);
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log('A name was submitted: ', this.state.jmeno);
        console.log('decsription was submitted: ', this.state.popis);
        event.preventDefault();
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="jmeno" value={this.state.jmeno} onChange={this.handleInputChanges} />
                    </label>
                    <div>
                        Napsal: {this.state.jmeno}
                    </div>
                    <label>
                        Popis:
                
                        <textarea value={this.state.popis} name="popis" onChange={this.handleInputChanges} placeholder="popište..."/>
                
                    </label><br/>
                    <label>
                        Oblíbená chuť:
                        <select value={this.state.seznam} name="seznam" onChange={this.handleInputChanges}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                );
    }
}