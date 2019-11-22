export default function(source) {
	const password = process.env.HTML_PASSWORD || "testing"
	if (!password) {
		throw new Error("Make sure you sent HTML_PASSWORD environment variable!")
	}

	// https://github.com/brix/crypto-js
	const { AES } = require("crypto-js")
	var ciphertext = AES.encrypt(source, password).toString()
	return ciphertext
}
