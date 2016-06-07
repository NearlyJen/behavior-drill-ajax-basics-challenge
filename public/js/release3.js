// MUPPETS

$(document).ready(function(){

  //***** RELEASE 3 A ************************************************
  // - Bind a click event to the link with id="displayMuppets"
  // - invoke an ajax get to the url: "/muppets"
  // - on success, render the partial returned
  //   into the div with id="muppetResults"
  //***************************************************************

 $("#displayMuppets").on("click", function(event){
    event.preventDefault();
    var url = "/muppets";
    var method = 'GET';

    var request = $.ajax({
      url: url,
      method: method
    });
    request.done(function(response){
      $("#muppetResults").html(response);
    })
 });

  //***** END RELEASE 3 A ********************************************

  //***** RELEASE 3 B ************************************************
  // - Bind a delegated click event to the div with id="muppetResults"
  //   for the link with class="showMuppet"
  // - invoke an ajax get to the href on the anchor tag that was clicked
  // - on success, render the partial returned
  //   into the div with id="muppetResults"
  //***************************************************************

 // FIND the thing that DOES exist, and work from there
 $(".container").on("click", "#muppetResults .showMuppet", function(event){
    event.preventDefault();
    var $link = $(this);
    var url = $link.attr("href");
    var method = 'GET';

    var request = $.ajax({
      url: url,
      method: method
    });
    request.done(function(response){
      $("#muppetResults").append(response);
    })
 });

  //***** END RELEASE 3 B ********************************************

  //***** RELEASE 3 C ************************************************
  // - Bind a click event to the link with id="newMuppet"
  // - invoke an ajax get to the url: "/muppets/new"
  // - on success, render the partial returned
  //   into the div with id="muppetResults"
  //***************************************************************

 $("#newMuppet").on("click", function(event){
    event.preventDefault();
    var url = "/muppets/new";
    var method = 'GET';

    var request = $.ajax({
      url: url,
      method: method
    });
    request.done(function(response){
      $("#muppetResults").html(response);
    })
 });
  //***** END RELEASE 3 C ********************************************

  //***** RELEASE 3 D ************************************************
  // - Bind a delegated submit event to the div with id="muppetResults"
  //   for form with id="createMuppet"
  // - prepare the data to send on the ajax post
  // - invoke an ajax post to the url: "/muppets"
  // - on success, render the partial returned
  //   into the div with id="muppetResults"
  //***************************************************************

 $(".container").on("submit", "#muppetResults #createMuppet", function(event){
    event.preventDefault();

    var method = 'POST';
    var url = "/muppets";
    var name = $("#muppet_name").val();
    var description = $("#muppet_description").val();
    var request = $.ajax({
      url: url,
      method: method,
      data: {muppet: {name: name, description: description}}
    });
    request.done(function(response){
      $("#muppetResults").append(response);
    })
 });

  //***** END RELEASE 3 D ********************************************

  //***** RELEASE 3 E ************************************************
  // - Bind a delegated click event to the div with id="muppetResults"
  //   for the link with class="editMuppet"
  // - invoke an ajax get to the href on the anchor tag that was clicked
  // - on success, render the partial returned
  //   into the div with id="muppetResults"
  //***************************************************************

   $(".container").on("click", "#muppetResults .editMuppet", function(event){
    event.preventDefault();

    var $link = $(this);
    var url = $link.attr("href");
    var method = 'GET';

    var request = $.ajax({
      url: url,
      method: method
    });
    request.done(function(response){
      $("#muppetResults").append(response);
    })
 });

  //***** END RELEASE 3 E ********************************************

  //***** RELEASE 3 F ************************************************
  // - Bind a delegated submit event to the div with id="muppetResults"
  //   for form with id="updateMuppet"
  // - invoke an ajax post for a put to the form action
  // - on success, render the partial returned
  //   into the div with id="muppetResults"
  //***************************************************************

 $(".container").on("submit", "#muppetResults #updateMuppet", function(event){
    event.preventDefault();

    var $form = $(this);
    var method = $form.attr("method");
    var url = $form.attr("action");
    var data = $form.serialize();

    var request = $.ajax({
      url: url,
      method: method,
      data: data
    });
    request.done(function(response){
      $("#muppetResults").html(response);
    })
 });

  //***** END RELEASE 3 F ********************************************

  //***** RELEASE 3 G ************************************************
  // - Bind a delegated submit event to the div with id="muppetResults"
  //   for a form with class="deleteMuppet"
  // - invoke an ajax post for a delete to the form action
  // - on success, render the partial returned
  //   into the div with id="muppetResults"
  //***************************************************************

 $(".container").on("submit", "#muppetResults #deleteMuppet", function(event){
    event.preventDefault();

    var $form = $(this);
    var method = $form.attr("method");
    var url = $form.attr("action");
    var data = $form.serialize();

    var request = $.ajax({
      url: url,
      method: method,
      data: data
    });
    // request.done(function(response){
    //   $("#muppetResults").html(response);
    // })
 });

  //***** END RELEASE 3 G ********************************************
});
