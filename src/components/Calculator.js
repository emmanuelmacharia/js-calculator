import React, { Component } from 'react'
import Buttons from './Buttons'


const expression = /[+-/*]/
export default class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentVal: 123,
            prevValue: '',
            formula:'',
            lastClicked: ''
        }
    }

    maximumDigit = () => {
        this.setState({
            currentVal: this.state.prevValue
        })
    }



    render() {
        return (
            <div>
                <div className ="calculator">
                    <div className = "display">{this.state.currentVal}</div>
                    <Buttons />
                </div>
            </div>
        )
    }
}
