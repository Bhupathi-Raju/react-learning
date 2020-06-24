import React from 'react'
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';


function toCelsius(fahrenheit){
    return (fahrenheit-32)* 5/9;
}

function toFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

function tryConvert(temp, convertFunction){
    const input = parseFloat(temp);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convertFunction(input);
    const rounded = Math.round(output * 1000)/1000;
    return rounded.toString();
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temp:'',
            scale:'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature){
        this.setState({scale:'c', temp:temperature});
    }

    handleFahrenheitChange(temperature){
        this.setState({scale:'f', temp:temperature});
    }

    render(){
        const temp = this.state.temp;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp;
        const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp;
        return(
            <div>
                <TemperatureInput temp = {celsius} scale = 'c' onTempChange = {this.handleCelsiusChange}/>
                <TemperatureInput temp = {fahrenheit} scale = 'f' onTempChange = {this.handleFahrenheitChange}/>
                <BoilingVerdict temp={parseFloat(celsius)}/>
            </div>
            
        );
    }
}

export default Calculator