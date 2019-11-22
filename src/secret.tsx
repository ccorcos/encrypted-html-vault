function Secret() {
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
			<h1>Injected!</h1>
		</div>
	)
}

ReactDOM.render(<Secret />, document.getElementById("root"))
