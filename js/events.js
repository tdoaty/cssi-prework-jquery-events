//define functions here

function getIt(){
  $('p').click(function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').addClass('tasty')
}

function pressIt(){
  $("input").keydown(function(event){
    $("input").html("Key: g" + event.which);
    alert("You pressed the g key!")
  });
}

function sumbitIt(){
  $(this).click(function(){
    alert("Your form is going to be submitted now")
  });
  return;
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
sumbitIt();
});
