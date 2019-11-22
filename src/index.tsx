import * as React from "react"
import * as ReactDOM from "react-dom"

// Expose these on the window so we don't have to re-bundle for the secret code.
window.React = React
window.ReactDOM = ReactDOM

const secretCode = `
function App2() {
	return React.createElement("div", {}, "Secret!")
}
ReactDOM.render(React.createElement(App2, {}), document.body)
`.trim()

export function App() {
	// const [{ x, y }, setMouse] = React.useState({ x: 0, y: 0 })
	// React.useEffect(() => {
	// 	const handleMouseMove = event => {
	// 		setMouse({ x: event.clientX, y: event.clientY })
	// 	}
	// 	window.addEventListener("mousemove", handleMouseMove)
	// 	return () => {
	// 		window.removeEventListener("mousemove", handleMouseMove)
	// 	}
	// })

	return (
		<div>
			<h1>Hello World</h1>
			<input placeholder="HERE" />
			<button onClick={() => eval(secretCode)}>click</button>
		</div>
	)
}

ReactDOM.render(<App />, document.body)
