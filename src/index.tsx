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

// Encrypted webpack bundle.
const ciphertext = require("raw-loader!./encrypt.js!./secret.tsx").default

function decrypt(password: string) {
	const bytes = AES.decrypt(ciphertext, password)
	const javascript = bytes.toString(enc.Utf8)
	eval(javascript)
}

export function App() {
	const [password, setPassword] = React.useState("")
	const [error, setError] = React.useState("")
	const input = React.useRef<any>()

	const submit = () => {
		try {
			decrypt(password)
		} catch (error) {
			setError("Nice try ;)")
			if (input.current) {
				input.current.select()
			}
		}
	}

	return (
		<div>
			<h1>Hello, welcome to my vault. Please type a password to unlock.</h1>
			<img src={require("url-loader!./face.jpeg")} />
			<input
				ref={input}
				placeholder="unlock"
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				onKeyDown={e => e.key === "Enter" && submit()}
			/>
			<button onClick={() => submit()}>decrypt</button>
			<div style={{ color: "red" }}>{error}</div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
