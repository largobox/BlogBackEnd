var serverAddress = '/'
// var serverAddress = 'https://desolate-basin-20667.herokuapp.com/'

queryGetUserComments()
handleCommentBtn()

function queryGetUserComments(){
	var xhrObject = new XMLHttpRequest()

	xhrObject.open('GET', serverAddress + 'user_comments.json', true)
	xhrObject.send()

	xhrObject.onload = function(){
		displayUserComments(xhrObject.responseText)
	}
	xhrObject.onerror = function(){
		console.log('Error: ' + this.status + 'method queryGetUserComments failed')
	}
}

function handleCommentBtn(){
	btn = document.getElementById('send_comment_btn')	
	btn.onclick = function(e){
		e.preventDefault()
		queryAddComment()
	}
}

function queryAddComment(){
	var xhrObject = new XMLHttpRequest()

	xhrObject.open('POST', serverAddress + 'comments.json', true)
	xhrObject.setRequestHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').getAttribute('content'))

	var formData = new FormData(document.forms.comment_form)
	xhrObject.send(formData)

	xhrObject.onload = function(){
		commentsCnt = document.getElementById('user_comments')

		str = [
			'<li>',
				'<div>' + formData.get('user_id') + '</div>',
				'<div>' + formData.get('comment_body') + '</div>',
			'</li>'
		].join('')

		commentsCnt.innerHTML += str
	}

	xhrObject.onerror = function(){
		console.log('Error: ' + this.status + 'method queryAddComment failed')
	}
}

function displayUserComments(inputCommentsString){
	comments = JSON.parse(inputCommentsString)
	commentsCnt = document.getElementById('user_comments')
	res = []
	for(var i = 0; i < comments.length; i++){
		res += [
			'<li>',
				'<div>' + comments[i].user_id + '</div>',
				'<div>' + comments[i].body + '</div>',
			'</li>'
		].join('')
	}
	commentsCnt.innerHTML = res
}
