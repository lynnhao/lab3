'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('.jumbotron button').text("Good job!");
		$('.jumbotron p').toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

		$('a.thumbnail').click(projectClick);
		$('#submitBtn').click(editProject);


	}



/*function projectClick(e) {
	//print string
	console.log("Project clicked");
	
	//prevent the page from reloading
	e.preventDefault();

	//In an event handler, $(this) refers to 
	//the object that triggered the event
	$(this).css("background-color","#7fff00");
}*/


function projectClick(e) {
  	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    console.log("Debugging" + jumbotronHeader.length);
    jumbotronHeader.text(projectTitle);

    //append to project
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       $(description).fadeToggle();
    }

}

//form submit finds project and replaces width & description
function editProject(e) {
	var projectID = $('#project').val();
	$(projectID).animate({
		width: $('#width').val()
	});
	var updateText = $('#description').val();
	$(projectID + " .project-description p").text(updateText);
}