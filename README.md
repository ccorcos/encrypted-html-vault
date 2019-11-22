# Encrypted HTML

I want to save encrypted information on a thumb drive that I can access easily from anywhere on any operating system.

- unencrypted
	- crypto-js
	- ui for getting a password
- encrypted
	- ui with all my information in it
	- base64 inlined images and files

## To Do

- run dev for rendering secret page
- run dev for rendering password page
- build script for putting it all together


```
// Do not import anything into this file, Webpack is not configured to handle that.

function Secret() {
	return (
		<div>
			<h1>This is secret!</h1>
		</div>
	)
}

ReactDOM.render(<Secret />, document.getElementById("root"))
```