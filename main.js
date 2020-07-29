$(document).ready(function(){
  $(".my-overlay-blue").hover(function(){
  $(this).css("background-color", "hsla(0, 0%, 100%, 0.3)");
  $(this).find("a").css("display","inline").find("h5").css("display","none");
  $(this).find("h5").css("display","none");
  }, function(){
  $(this).css("background-color", "hsla(210, 100%, 80%, 0.9)").find("a").css("display","none").find("h5").css("display","inline");
  $(this).find("a").css("display","none");
  $(this).find("h5").css("display","inline");
});
});

$(document).ready(function(){
  $(".my-overlay-purple").hover(function(){
  $(this).css("background-color", "hsla(0, 0%, 100%, 0.3)");
  $(this).find("a").css("display","inline").find("h5").css("display","none");
  $(this).find("h5").css("display","none");
  }, function(){
  $(this).css("background-color", "hsla(270, 100%, 80%, 0.9)").find("a").css("display","none").find("h5").css("display","inline");
  $(this).find("a").css("display","none");
  $(this).find("h5").css("display","inline");
});
});

$(document).ready(function(){
  $(".my-overlay-mint").hover(function(){
  $(this).css("background-color", "hsla(0, 0%, 100%, 0.3)");
  $(this).find("a").css("display","inline").find("h5").css("display","none");
  $(this).find("h5").css("display","none");
  }, function(){
  $(this).css("background-color", "hsla(150, 100%, 80%, 0.9)").find("a").css("display","none").find("h5").css("display","inline");
  $(this).find("a").css("display","none");
  $(this).find("h5").css("display","inline");
});
});
