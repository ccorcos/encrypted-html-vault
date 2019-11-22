import * as React from "react"
import * as ReactDOM from "react-dom"

const root = document.createElement("div")
document.body.appendChild(root)

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
		</div>
	)
}

ReactDOM.render(<App />, root)
