import * as _React from "react"
import * as _ReactDOM from "react-dom"
import { AES, enc } from "crypto-js"

declare global {
	const React: typeof _React
	const ReactDOM: typeof _ReactDOM
}

// Expose these on the window so we don't have to re-bundle for the secret code.
window["React"] = _React
window["ReactDOM"] = _ReactDOM

const ciphertext = require("raw-loader!./encrypt.js!./secret.tsx").default

function decrypt(password: string) {
	const bytes = AES.decrypt(ciphertext, "testing")
	const javascript = bytes.toString(enc.Utf8)
	eval(javascript)
}

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
			<button
				onClick={() => {
					decrypt("testing")
				}}
			>
				click
			</button>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
