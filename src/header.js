
import React from 'react';
import {Provider,Consumer} from './contex.js'


function Header (props){
	console.log(props)
	const {aaa=()=>{}} = props
	console.log(aaa)
  return (
		// context.data.background === 'red'
    <Consumer>
      {
				context => (
					<div>
						{console.log(context)}
						<h1  style={{background: context.data.background, color: context.data.color}}>Hello, {props.name}</h1>
						<button onClick ={()=>context.changeColor('red')}>Say Hi</button>
					</div>
				)
			}
    </Consumer>
  )
}
 
export default Header
