// var xhrObject = new XMLHttpRequest()

// xhrObject.open('GET', 'https://desolate-basin-20667.herokuapp.com/user_comments.json', true)
// xhrObject.send()

// xhrObject.onreadystatechange = function(){
// 	if(this.readyState !== 4) return

// 	if (this.status !== 200) {
// 		console.log('Error: ' + this.status)
// 	} else {
// 		console.log('Ответ: ' + xhrObject.responseText)
// 	}
// }

var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

var xhr = new XHR();

// (2) запрос на другой домен :)
xhr.open('GET', 'http://desolate-basin-20667.herokuapp.com/user_comments.json', true);
// xhr.open('GET', '/user_comments.json', true);


xhr.onload = function() {
  alert( this.responseText );
}

xhr.onerror = function() {
  alert( 'Ошибка ' + this.status );
}

xhr.send();