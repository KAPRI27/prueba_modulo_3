window.addEventListener("buscador", function(){
  document.getElementById("biography").innerHTML;
});

$(document).ready(function() {
  
//document.getElementById("myBtn").addEventListener("click", displayDate);

$.ajax({
    type:"GET",
    url:"https://superheroapi.com/api.php/4905856019427443/102/biography",
    success: function(data) {
      $('#biography').text(JSON.stringify(data));
    },
    dataType: 'json',
    
    /*
      success: function(data) {
 console.log("La biografia " + data.id.biography);
      $('#biography').text(data.id.biography);
    }
    */
  
  });
  return this;


});


/*
 
$.ajax({
    type:"GET",
    url:"https://superheroapi.com/api.php/4905856019427443/102",
    dataType: 'json',
    success: function(data) {
      console.log("La biografia " + data.id);
      $('#biography').text("= $" + data.id);
    },
  });
  */