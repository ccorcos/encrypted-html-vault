# Encrypted HTML

I keep a USB drive on my keychain with my a picture of my passport and a credit card just in case I find my self in a tight spot on the other side of world. However, if I lose my keys, I don't want anyone to have access to that data. So, I need to encrypt it. But how? What program? How do I decrypt it?

Well, just about every computer in the world these days can open up an HTML file. So what if I base64 inline any images and decrypt everything right in the browser?! That's exactly what I've done.

TODO: example

## Getting Started

- Rename `src/example` to `src/secret` which will gitignore any files you put in here.
- Start up the development server with `npm start` and the testing password is "chet123".
- When you're done developing and want a final html file, run `npm run build`. You will be prompted for a password -- make sure your password is long so it cannot be brute-forced easily.# encrypted-html-vault
