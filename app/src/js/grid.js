$(document).ready(function() {

<<<<<<< HEAD
   var width = 30;
   var height = 30;
   for(var x = 0; x < width; x++) {
       for(var y = 0; y < height; y++) {
           var unit = $("<div class='unit'></div>");
           unit.appendTo('#container');
       }
   }
=======
  var width = 36;
  var height = 28;
  for(var x = 0; x < width; x++) {
     for(var y = 0; y < height; y++) {
         var unit = $("<div class='unit'></div>");
         unit.appendTo('#container');
     }
  }
>>>>>>> wallOfShame/master


function getData(callback){
  // Assign handlers immediately after making the request,
  // and remember the jqxhr object for this request
  var jqxhr = $.getJSON( "http://nashim.herokuapp.com/getRandomOffensiveUser", function() {
    console.log( "success" );
  })
    .done(function(data) {
      callback(data["user_pic"]);
    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });
}


	setInterval(function(){
		var random = Math.floor((Math.random() * width*height-1) + 1);
		console.log(random);
<<<<<<< HEAD
    	var all = $('#container').children();
    	$(all).get(random)
    	var listItem = $('#container');
		$('#container :nth-child('+ random +')').css("background-image", 'url('+ images[0] +')' ).css("background-size", '20px');
=======
    var all = $('#container').children();
    $(all).get(random)
    var listItem = $('#container');
    getData(function(data){
     $('#container :nth-child('+ random +')').css("background-image", 'url('+ data +')' ).css("background-size", '20px' );
    })

>>>>>>> wallOfShame/master
	}, 3000);

});
