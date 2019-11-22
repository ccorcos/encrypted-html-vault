// This is a webpack loader for encrypting your secret source code.
export default function(source) {
	const password = process.env.HTML_PASSWORD
	if (!password) {
		throw new Error("Make sure you sent HTML_PASSWORD environment variable!")
	}

	// My own hacked up version of the url-loader
	const re = /INJECT:([^"]+)/g
	let match
	while ((match = re.exec(source))) {
		const [str, path] = match
		const base64 = require("fs").readFileSync(
			__dirname + "/secret/" + path,
			"base64"
		)
		source = source.replace(
			str,
			"data:" + require("mime").getType(path) + ";base64, " + base64
		)
	}

	// Encrypt with AES: https://github.com/brix/crypto-js
	const { AES } = require("crypto-js")
	var ciphertext = AES.encrypt(source, password).toString()
	return ciphertext
}
