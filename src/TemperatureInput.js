import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};


class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onTempChange(event.target.value);
    }

    render(){
        const temp = this.props.temp;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>
                    Enter temperature in {scaleNames[scale]}
                </legend>
                <input value={temp} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

export default TemperatureInput