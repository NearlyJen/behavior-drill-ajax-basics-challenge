// Let's look a the request and response objects while using partials

$(document).ready(function(){

  //***** RELEASE 1 A ************************************************
  // - Bind a click event to the link with id="getRequest"
  // - invoke an ajax get to the url: "/display_info"
  // - on success, take the partial returned on the response
  //   and place the markup inside the div with id="getResponse"
  //***************************************************************

  $("#getRequest").on("click", function(event){
    event.preventDefault();
    var url = "/display_info";
    var method = 'GET';

    var request = $.ajax({
      url: url,
      method: method
    });
    request.done(function(response){
      $("#getResponse").html(response);
    })
  });

  //***** END RELEASE 1 A ********************************************




  //***** RELEASE 1 B ************************************************
  // - Bind a click event to the link with id="postRequest"
  // - invoke an ajax post to the url: "/display_info"
  // - send this data on the post:
  //   name: "Mike Busch", age: 30, description: "Likes Bikes"
  // - on success, take the partial returned on the response
  //   and place the markup inside the div with id="postResponse"
  //***************************************************************

   $("#postRequest").on("click", function(event){
    event.preventDefault();
    var url = "/display_info";
    var method = 'POST';
    var data = {name: "Mike Busch", age: 30, description: "Likes Bikes"}

    var request = $.ajax({
      url: url,
      method: method,
      data: data
    });
    request.done(function(response){
      $("#postResponse").html(response);
    })
  });

  //***** END RELEASE 1 B ********************************************


});
