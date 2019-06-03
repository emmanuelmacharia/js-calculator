 import React from 'react'

export default function Buttons(props) {
    return (
        <div className = "button-layout">
            <div className ="btn-group-vertical main " role="group" aria-label="Basic example">
                <div className ="btn-group first-level" role="group" aria-label="Basic example">
                    <button type="button" className ="btn btn-secondary" id="clear" value = "CE" onClick = {props.initialize}>CE</button>
                    <button type="button" className ="btn btn-secondary" id="opening-bracket" value="(" onClick={props.initialize}>(</button>
                    <button type="button" className ="btn btn-secondary" id="closing-bracket" value=")" onClick={props.initialize}>)</button>
                    <button type="button" className ="btn btn-secondary" id="divide" value = "/" onClick = {props.operators}>/</button>
                </div>
                <div className ="btn-group second-level" role="group" aria-label="Basic example">
                    <button type="button" className ="btn btn-secondary" id="seven" value = "7" onClick = {props.numbers}>7</button>
                    <button type="button" className ="btn btn-secondary" id="eight" value = "8" onClick = {props.numbers}>8</button>
                    <button type="button" className ="btn btn-secondary" id="nine" value = "9" onClick = {props.numbers}>9</button>
                    <button type="button" className ="btn btn-secondary" id="multiply" value = "*" onClick = {props.operators}>*</button>    
                </div>
                <div className ="btn-group third-level" role="group" aria-label="Basic example">
                    <button type="button" className ="btn btn-secondary" id="four" value = "4" onClick = {props.numbers}>4</button>
                    <button type="button" className ="btn btn-secondary" id="five" value = "5" onClick = {props.numbers}>5</button>    
                    <button type="button" className ="btn btn-secondary" id="six" value = "6" onClick = {props.numbers}>6</button>     
                    <button type="button" className ="btn btn-secondary" id="subtract" value = "-" onClick = {props.operators}>-</button>
                </div>
                <div className ="btn-group fourth-level" role="group" aria-label="Basic example">
                    <button type="button" className ="btn btn-secondary" id="one" value = "1" onClick = {props.numbers}>1</button>  
                    <button type="button" className ="btn btn-secondary" id="two" value = "2" onClick = {props.numbers}>2</button>  
                    <button type="button" className ="btn btn-secondary" id="three" value = "3" onClick = {props.numbers}>3</button>
                    <button type="button" className ="btn btn-secondary" id="add" value = "+" onClick = {props.operators}>+</button>  
                </div>
                <div className ="btn-group fifth-level" role="group" aria-label="Basic example">
                    <button type="button" className ="btn btn-secondary" id="decimal" value = "." onClick = {props.decimal}>.</button>
                    <button type="button" className ="btn btn-secondary" id="zero" value = "0" onClick = {props.numbers}>0</button>   
                    <button type="button" className ="btn btn-secondary" id="equals" value="=" onClick={props.evaluate}>=</button> 
                </div>
            </div>
        </div>
    )
}
