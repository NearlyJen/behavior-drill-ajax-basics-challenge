// Getting to know ajax

$(document).ready(function(){

  //***** RELEASE 0 A *********************************************
  // - Bind a click event to the link with id="getRequest"
  // - invoke an ajax get to the url: "/basic_request"
  // - on success, take the response and place it in the
  //   paragraph with id="getResponse"
  //************************************************************

  $("#getRequest").on("click", function(event){
    event.preventDefault();
    var request = $.ajax({
      url: "/basic_request"
    });
    request.done(function(response){
      $("#getResponse").html(response);
    })
  });

  //***** END RELEASE 0 A *****************************************




  //***** RELEASE 0 B *********************************************
  // - Bind a click event to the link with id="postRequest"
  // - invoke an ajax post to the url: "/basic_request"
  // - send this data on the post:
  //   name: "Mike Busch", age: 30, description: "Likes Bikes"
  // - on success, take the response and place it in the
  //   paragraph with id="postResponse"
  //************************************************************

  $("#postRequest").on("click", function(event){
    event.preventDefault();
    var data = {name: "Mike Busch", age: 30, description: "Likes Bikes"};
    var method = 'POST';
    var url = "/basic_request";

    var request = $.ajax({
      url: url,
      method: method,
      data: data
    });
    request.done(function(response){
      $("#postResponse").html(response);
    })
  });

  //***** END RELEASE 0 B *****************************************


});
