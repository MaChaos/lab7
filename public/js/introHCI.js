'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click(sendData)
	// your code here
}

function sendData(e) {
	e.preventDefault();
	//ga('create', 'UA-92560460-1', 'auto');
	ga("send","event",'like','click');
}
