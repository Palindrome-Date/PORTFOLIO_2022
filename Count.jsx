import React, { useReducer } from 'react'
import ACTIONTYPES from './ACTIONTYPES'
import { countReducer, initialCount } from './countReducer'

import "./Count.scss"

export default function Count() {
	const [state, dispatch] = useReducer(countReducer, initialCount)
	return (
		<div key={Date.now()} className="Container">
			<h1 className="Container__Title">{state.count}</h1>
			<div className="Container__ChangeButtonsValues">
				<button 
					className="Container__Btn" 
					onClick={() => dispatch({ type: ACTIONTYPES.INCREMENT })}
					>
						PlusOne
				</button>
				<button 
					className="Container__Btn" 
					onClick={() => dispatch({ type: "reset" })}
					>
						Reset
				</button>
				<button 
					className="Container__Btn" 
					onClick={() => dispatch({ type: "decrement" })}
					>
						MinusOne
				</button>
				<button
					className="Container__Btn"
					onClick={() => setTimeout(() => { 
						dispatch({ type: "acyncIncrement" })
					 }, 2000)}
				>
					Add acync
				</button>
				<button className="Container__Btn" onClick={() => dispatch({ type: "plusten" })}>PlusTen</button>
			</div>
		</div>
	)
}
