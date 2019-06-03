import React from 'react'

export default function Buttons(props) {
    return (
        <div className = "button-layout">
            <div class="btn-group-vertical main " role="group" aria-label="Basic example">
                <div class="btn-group first-level" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" id="clear">CE</button>
                    <button type="button" class="btn btn-secondary"id="opening-bracket">(</button>
                    <button type="button" class="btn btn-secondary" id="closing-bracket">)</button>
                    <button type="button" class="btn btn-secondary" id="divide">/</button>
                </div>
                <div class="btn-group second-level" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" id="seven">7</button>
                    <button type="button" class="btn btn-secondary" id="eight">8</button>
                    <button type="button" class="btn btn-secondary" id="nine">9</button>
                    <button type="button" class="btn btn-secondary" id="multiply">*</button>    
                </div>
                <div class="btn-group third-level" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" id="four">4</button>
                    <button type="button" class="btn btn-secondary" id="five">5</button>    
                    <button type="button" class="btn btn-secondary" id="six">6</button>     
                    <button type="button" class="btn btn-secondary" id="subtract">-</button>
                </div>
                <div class="btn-group fourth-level" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" id="one">1</button>  
                    <button type="button" class="btn btn-secondary" id="two">2</button>  
                    <button type="button" class="btn btn-secondary" id="three">3</button>
                    <button type="button" class="btn btn-secondary" id="add">+</button>  
                </div>
                <div class="btn-group fifth-level" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" id="decimal">.</button>
                    <button type="button" class="btn btn-secondary" id="zero">0</button>   
                    <button type="button" class="btn btn-secondary" id="equals">=</button> 
                </div>
            </div>
        </div>
    )
}
