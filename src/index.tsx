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
const ciphertext = require("raw-loader!./encrypt.js!./secret/secret.tsx")
	.default

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
		<div
			style={{
				maxWidth: "50em",
				margin: "5em auto",
				fontSize: "1.2em",
			}}
		>
			<img
				style={{ maxWidth: "5em" }}
				src={require("url-loader!./face.jpeg")}
			/>
			<p>This vault belongs to Chester Corcos (a.k.a Chet).</p>
			<p>
				If you find this and wish to return it, here are various means of
				contacting him:
			</p>
			<ul>
				<li>
					Phone: <a href="tel:19165489415">+1-916-548-9415</a>
				</li>
				<li>
					Email: <a href="email:ccorcos@gmail.com">ccorcos@gmail.com</a>
				</li>
			</ul>
			<p>To unlock the vault, enter your password:</p>
			<div>
				<input
					ref={input}
					placeholder="password"
					type="password"
					value={password}
					style={{ fontSize: "0.9em" }}
					onChange={e => setPassword(e.target.value)}
					onKeyDown={e => e.key === "Enter" && submit()}
				/>
				<button
					style={{ fontSize: "0.9em", marginLeft: "0.5em" }}
					onClick={submit}
				>
					decrypt
				</button>
			</div>
			<p style={{ color: "red" }}>{error}</p>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
