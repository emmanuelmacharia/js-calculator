import React, { Component } from 'react'
import Buttons from './Buttons'


const operators = /[+-/*]/,
    endsWithOperator = /[*+‑/]$/

export default class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentVal: '0',
            previewValue: '0',
            formula:'',
            lastClicked: '', 
            evaluated: false
        }
    }

    maxDigitWarning = () => {
        this.setState({
            currentVal: 'Digit Limit Met',
            previewValue: this.state.currentVal
        });
        setTimeout(() => this.setState({ currentVal: this.state.previewValue }), 1000);
    }

    handleEvaluate = () => {
        if (!this.state.currentVal.includes('Limit')) {
            let expression = this.state.formula;
            if (endsWithOperator.test(expression)) expression = expression.slice(0, -1);
            expression = expression.replace(/x/g, "*").replace(/‑/g, "-");
            let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
            this.setState({
                currentVal: answer.toString(),
                formula: expression.replace(/\*/g, '⋅').replace(/-/g, '‑') + '=' + answer,
                previewValue: answer,
                evaluated: true
            });
        }
    }

    handleOperators = event => {
        const{value} = event.currentTarget
        if (!this.state.currentVal.includes('Limit')) {
            this.setState({ currentVal: value, evaluated: false });
            if (this.state.formula.includes('=')) {
                this.setState({ formula: this.state.previewValue + value }); // comment 1
            } else {
                this.setState({ // comment 2
                    previewVal: !operators.test(this.state.currentVal) ?
                        this.state.formula :
                        this.state.previewValue,
                    formula: !operators.test(this.state.currentVal) ?
                        this.state.formula += value :
                        this.state.previewValue += value
                });
            }
        }
    }

    handleNumbers = event => {
        const { value } = event.currentTarget
        if (!this.state.currentVal.includes('Limit')) {
            this.setState({ evaluated: false })
            if (this.state.currentVal.length > 21) {
                this.maxDigitWarning();
            } else if (this.state.evaluated === true) {
                this.setState({
                    currentVal: value,
                    formula: value != '0' ? value : '',
                });
            } else {
                this.setState({
                    currentVal:
                        this.state.currentVal == '0' ||
                            operators.test(this.state.currentVal) ?
                            value : this.state.currentVal + value,
                    formula:
                        this.state.currentVal == '0' && value == '0' ?
                            this.state.formula :
                            /([^.0-9]0)$/.test(this.state.formula) ?
                                this.state.formula.slice(0, -1) + value :
                                this.state.formula + value,
                });
            }
        }
    }

    handleDecimal = () => {
        if (this.state.evaluated === true) {
            this.setState({
                currentVal: '0.',
                formula: '0.',
                evaluated: false
            });
        } else if (!this.state.currentVal.includes('.') &&
            !this.state.currentVal.includes('Limit')) {
            this.setState({ evaluated: false })
            if (this.state.currentVal.length > 21) {
                this.maxDigitWarning();
            } else if (endsWithOperator.test(this.state.formula) ||
                this.state.currentVal == '0' && this.state.formula === '') {
                this.setState({
                    currentVal: '0.',
                    formula: this.state.formula + '0.'
                });
            } else {
                this.setState({
                    currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
                    formula: this.state.formula + '.',
                });
            }
        }
    }

    initialize = () => {
        this.setState({
            currentVal: '0',
            previewValue: '0',
            formula: '',
            currentSign: 'pos',
            lastClicked: ''
        });

    }

    render() {
        return (
            <div>
                <div className ="calculator">
                    <div className = "display">
                        <div className="previewValue">{this.state.formula}</div>
                        <div className="currentValue">{this.state.currentVal}</div>
                    </div>
                    <Buttons 
                        evaluate = {this.handleEvaluate}
                        operators = {this.handleOperators}
                        initialize = {this.initialize}
                        decimal = {this.handleDecimal}
                        numbers = {this.handleNumbers}
                    />
                </div>
            </div>
        )
    }
}
