import React from 'react'
import DropDownList from './DropDownList'

class FruitSelector extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:'mango'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert("Your fav fruit is: " + this.state.value);
        event.preventDefault();
    }

    fruits = ["mango", "apple", "grape", "pappaya"]

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick you favourite fruit:
                    <select value={this.state.value} onChange = {this.handleChange}>
                        <DropDownList fruits = {this.fruits}/>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default FruitSelector