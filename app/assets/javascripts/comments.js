var xhrObject = new XMLHttpRequest()

xhrObject.open('GET', '/user_comments.json', true)
xhrObject.send()

xhrObject.onreadystatechange = function(){
	if(this.readyState !== 4) return

	if (this.status !== 200) {
		console.log('Error: ' + this.status)
	} else {
		console.log('Ответ: ' + xhrObject.responseText)
	}
}