// Let's explore using json. You are going to need an additional option passed on your ajax calls.

$(document).ready(function(){

  //***** RELEASE 2 A ************************************************
  // - Bind a click event to the link with id="getRequest"
  // - invoke an ajax get to the url: "/using_json"
  // - on success, take the json returned on the response
  //   and extract the message.
  // - Place it in the paragraph with id="getResponse"
  //***************************************************************

  $("#getRequest").on('click', function(event){
    event.preventDefault();
    var url = "/using_json";
    var method = 'GET';

    var request = $.ajax({
      url: url,
      method: method,
    });
    request.done(function(response){
      $("#getResponse").html(response);
    })
  });

  //***** END RELEASE 2 A ********************************************




  //***** RELEASE 2 B ************************************************
  // - Bind a click event to the link with id="postRequest"
  // - invoke an ajax post to the url: "/using_json"
  // - send this data on the post:
  //   name: "Mike Busch", age: 30, description: "Likes Bikes"
  // - on success, take the json returned on the response
  //   and extract the message.
  // - Place it in the paragraph with id="postResponse"
  //***************************************************************

  $("#postRequest").on('click', function(event){
    event.preventDefault();
    var url = "/using_json";
    var method = 'POST';
    var data = {name: "Mike Busch", age: 30, description: "Likes Bikes"};

    var request = $.ajax({
      url: url,
      method: method,
      data: data
    });
    request.done(function(response){
      $("#postResponse").html(response);
    })
  });

  //***** END RELEASE 2 B ********************************************


});
