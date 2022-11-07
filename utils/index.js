export function toPercentEncoding(text){
	text = text
	.replace(/ /g, "%20")
	.replace(/\:/g, "%3A")
	.replace(/\s/g, "%0A")
	.replace('\n', "%0A")
	.replace(/\&/g, "%26")
	.replace(/\[/g, "%5B")
	.replace(/\]/g, "%5D")
	.replace(/\./g, "%2E")
	.replace(/\@/g, "%40")
	.replace(/\,/g, "%2C")

	return "%60%60%60" + text + "%60%60%60"
}

export function createMenssage({user, email, message}){

let msg = `
===========
Usuario: ${user}
Email: ${email}
Mensaje: ${message}
===========
`
msg = toPercentEncoding(msg)
	return msg
}

