// Do not import anything into this file, Webpack is not configured to handle that.

function Secret() {
	return (
		<div>
			<h1>This is secret!</h1>
		</div>
	)
}

ReactDOM.render(<Secret />, document.getElementById("root"))
