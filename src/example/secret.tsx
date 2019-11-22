// Do not import anything into this file, Webpack is not configured to handle that.

function Example() {
	return (
		<div>
			<p>This is a secret</p>
			{/* Custom base64 injection syntax. */}
			<img src={"INJECT:./earth.gif"} />
		</div>
	)
}

ReactDOM.render(<Example />, document.getElementById("root"))
