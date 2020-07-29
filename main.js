$(document).ready(function(){
  $(".my-overlay-blue").hover(function(){
  $(this).css("background-color", "hsla(0, 0%, 100%, 0.4)");
  $(this).find("a").css("display","inline").find("h5").css("display","none");
  $(this).find("h5").css("display","none");
  }, function(){
  $(this).css("background-color", "hsla(218, 89%, 57%, 0.8)").find("a").css("display","none").find("h5").css("display","inline");
  $(this).find("a").css("display","none");
  $(this).find("h5").css("display","inline");
});
});

$(document).ready(function(){
  $(".my-overlay-orange").hover(function(){
  $(this).css("background-color", "hsla(0, 0%, 100%, 0.4)");
  $(this).find("a").css("display","inline").find("h5").css("display","none");
  $(this).find("h5").css("display","none");
  }, function(){
  $(this).css("background-color", "hsla(17, 89%, 57%, 0.8)").find("a").css("display","none").find("h5").css("display","inline");
  $(this).find("a").css("display","none");
  $(this).find("h5").css("display","inline");
});
});

$(document).ready(function(){
  $(".my-overlay-yellow").hover(function(){
  $(this).css("background-color", "hsla(0, 0%, 100%, 0.4)");
  $(this).find("a").css("display","inline").find("h5").css("display","none");
  $(this).find("h5").css("display","none");
  }, function(){
  $(this).css("background-color", "hsl(46, 89%, 57%, 0.8)").find("a").css("display","none").find("h5").css("display","inline");
  $(this).find("a").css("display","none");
  $(this).find("h5").css("display","inline");
});
});
