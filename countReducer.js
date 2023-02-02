// import ACTIONTYPES from "./ACTIONTYPES"
export const initialCount = {
	count: 0,
}

export const countReducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return {
				count: state.count + 1
			}
		case "reset":
			return {
				count: 0
			}
		case "decrement":
			return {
				count: state.count - 1
			}
		case "plusten":
			return {
				count: state.count + 10
			}
		case "acyncIncrement":
			return foo(state)
		default: throw new Error("Is not Defind")
	}
}

function foo(state) {
	console.log("ok");
	return { count: state.count + 1 }

}