if (Meteor.is_client) {
  Template.hello.greeting = function () {
    return "Welcome to PardotMapping.";
  };

  Template.hello.events = {
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
  //Get our visits Meteor.http.post('https://pi.pardot.com/api/visitor/version/3/do/query','data:{}',function(error,result){console.log(result);});

    // code to run on server at startup
  });
}
