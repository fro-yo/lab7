'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('#rootBtn').click(rootClicked);

    $('#minBtn').click(minClicked);
	// your code here
}


function rootClicked () {
    ga("send", "event", "rootClicked", "success");
}

function minClicked() {
    ga("send", "event", "minClicked", "success");
}
