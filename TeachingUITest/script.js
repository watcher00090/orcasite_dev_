// CSE 154 Autumn 2016, HW 6, James Pedersen
// 
// bestreads.js. 
//
// Upon user input, fetches and displays the appropriate data from the bestreads.php webservice.
// 
// Implementation-idea: the page has two and only two modes: single-book-mode and all-books-mode.
// The page starts in all-books-mode. Pressing a book while in all-books-mode reverse the mode. 
// Pressing the home button while in single-book-mode reverses the mode once again. 
//
(function() {
	"use strict";
	
    // Initializes the all-books-page. Initializes the home-click listener, 
    // fetches the books from the server to populate the page.
	window.onload = function() {
		/*		
		document.getElementById("goUpArrowButton").onclick = function() {
			console.log("this worked!");

			// move the position of all thumbnails up
			 var x = document.getElementsByClassName("thumbnail");
			 for (var i = 0; i < x.length; i++) {
			 	var thumbnailEl = x[i];
			 	var yPos;

			 	if (thumbnailEl.style.top == "") {
			 		yPos = 0;
			 	} else {
			 		yPos = parseInt(thumbnailEl.style.top, 10);
			 	}

			 	yPos -= 5;
			 	var yPosStr = yPos.toString();
			 	var resStr = yPosStr.concat("px"); 
  				thumbnailEl.style.top = resStr;
			 }

		};
		*/

		makeButtonIncrement(document.getElementById('btnUP'), "add", 500, 0.7);
		
	};
	
	// Called after a user clicks on a thumbnail
	function thumbNailClick() {

	}


	// This function creates a closure and puts a mousedown handler on the element specified in the "button" parameter.
	function makeButtonIncrement(button, action, initialDelay, multiplier){
	    var holdTimer, changeValue, timerIsRunning = false, delay = initialDelay;
	    changeValue = function(){

	        if(action == "upArrowPress") {

		        	
				// move the position of all the thumbnails up
				 var x = document.getElementsByClassName("thumbnail");
				 for (var i = 0; i < x.length; i++) {
				 	var thumbnailEl = x[i];
				 	var yPos;

				 	if (thumbnailEl.style.top == "") {
				 		yPos = 0;
				 	} else {
				 		yPos = parseInt(thumbnailEl.style.top, 10);
				 	}

				 	yPos -= 5;
				 	var yPosStr = yPos.toString();
				 	var resStr = yPosStr.concat("px"); 
	  				thumbnailEl.style.top = resStr;
				 }




	        } else if(action == "downArrowPress" && target.value > 0) {
	            

	        }

	        holdTimer = setTimeout(changeValue, delay);
	        if(delay > 20) delay = delay * multiplier;
	        if(!timerIsRunning){
	            // When the function is first called, it puts an onmouseup handler on the whole document 
	            // that stops the process when the mouse is released. This is important if the user moves
	            // the cursor off of the button.
	            document.onmouseup = function(){
	                clearTimeout(holdTimer);
	                document.onmouseup = null;
	                timerIsRunning = false;
	                delay = initialDelay;
	            }
	            timerIsRunning = true;
	        }
	    }
	    button.onmousedown = changeValue;
	}

	//should only be called after the window/DOM has been loaded
	window.onload = function() {
	    makeButtonIncrement(document.getElementById('goUpArrowButton'), "upArrowPress", 500, 0.7);
	    //makeButtonIncrement(document.getElementById('btnDOWN'), "downArrowPress", document.getElementById('amount'), 500, 0.7);
	}


})();
