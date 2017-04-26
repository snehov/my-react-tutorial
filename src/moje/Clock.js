import React from 'react';

export default class Clock extends React.Component {
	constructor(props) {
		super(props);
		if(props.setTime == null){
			this.state = {date: new Date()};
		}else{
			this.state = {date: props.setTime};
		}
		//
		
		if(props.shiftedTime != null){
			var tt = new Date();
			tt.setSeconds(tt.getSeconds() + parseInt(props.shiftedTime));
			this.state = {date: tt};
		}
	}

	componentDidMount() {
		this.timerID = setInterval(
				() => this.tick(),
				1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	tick(){
		var newTime = this.state.date;
		newTime.setSeconds(newTime.getSeconds() + 1);
		this.setState({
			date: newTime //new Date()
		});
	}

	render() {
		if(this.props.message == null){
			var msg = "je práve: ";
		}else{
			var msg = this.props.message;
		}
	
		return (
				<div>
				{msg} 		<span>{this.state.date.getHours()}</span>:
							<span>{("0" + this.state.date.getMinutes()).substr(-2)}</span>:
							<span>{("0" + this.state.date.getSeconds()).substr(-2)}</span>
							
				</div>
		);
	}
}