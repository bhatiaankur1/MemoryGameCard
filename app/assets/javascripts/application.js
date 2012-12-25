// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  $(".restartAdmin").live("click", function(){
  $.ajax({
             type: "GET",
                url: "/updateadmin",
                data: {id: $(this).attr("id")}
              }).done();
        });
  $(".deleteadmin").live("click", function(){
  $.ajax({
             type: "GET",
                url: "/deluser",
                data: {id: $(this).attr("id")}
              }).done();
        });
    $(function() {
    	  $("#attemp").html("Your Attempts ---> "+attempts.toString());
        });
        $(".tagL").on('click', function(showimgL){
        id = $(this).attr("id").slice(3)
    if ($("#"+id).attr("alt") == "Img32")
    {
    if (flag)
    {
    flag = false
    src = "/assets/Img"+$.trim(map[id])+".gif"
      attempts = attempts + 1;
      $("#"+id).attr("alt","imgopen");
      $("#"+id).attr("src",src);
      $("#attemp").html("Your Attempts ---> "+attempts.toString());
      if (clicked)
      {
        clicked = false
        clickarray[1] = id
        check()
      }
      else
      {
        clicked = true
        clickarray[0] = id
        flag = true
      }

      }
  }});
    $(".tag").on('click', function(showimg){
    	id = $(this).attr("id").slice(3)
		if ($("#"+id).attr("alt") == "Imgblank")
		{
		if (flag)
		{
		flag = false
		src = "/assets/Img"+$.trim(map[id])+".jpg"
    	attempts = attempts + 1;
    	$("#"+id).attr("alt","imgopen");
    	$("#"+id).attr("src",src);
    	$("#attemp").html("Your Attempts ---> "+attempts.toString());
    	if (clicked)
    	{
    		clicked = false
    		clickarray[1] = id
    		check()
    	}
    	else
    	{
    		clicked = true
    		clickarray[0] = id
    		flag = true
    	}

      }
	}});    
    });
function check() 
{
    if ($.trim(map[clickarray[1]]) != $.trim(map[clickarray[0]]))
    {
      	setTimeout('resetarr()',1200)
   	}
    else
    {
    	totval = totval + 1
    	if ((totval == 8 && level == "1") || (totval == 18 && level == "2") || (totval == 32 && level == "3"))
    	{
    		if (parseInt(lowscore) > attempts || lowscore == "")
    		{
    			$.ajax({
 						 type: "GET",
  							url: "/gameend",
                data: {attempts: attempts.toString(), gamelevel: level.toString()}
							}).done(function() {$('#LC').html("Lowest Clicks " + attempts.toString());lowscore = attempts.toString();alert("Congratulations. This is your lowest number of clicks");restartgame();});
    		}
			else
			{
				alert("Game finished. You completed the game in " + attempts.toString() + " clicks.")
			restartgame()
			}
  		
    	}
    	flag = true
    }
}
function restartgame()
{
	randomizearray()
	totval = 0;
	clicked = false;
	clickarray = [0, 0];
	attempts = 0;
	flag = true;
  if (level == "1")
  {
	var src = "/assets/Imgblank.jpg";
  p = 16;
  var imgblank = "Imgblank"
  }
  else if (level == "2")
  {
    var src = "/assets/Img32.gif";
    p = 36;
    var imgblank = "Img32"
  }
  else
  {
    var src = "/assets/Img32.gif";
    p = 64;
    var imgblank = "Img32"
  }
	for(var i = 0; i < p; i++)
	{
		var j = i.toString();    	
    	reset(j,src,imgblank)
	}
	$("#attemp").html("Your Attempts ---> "+attempts.toString());
}

function randomizearray()
{
  var i = map.length;
   while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = map[i];
     var tempj = map[j];
     map[i] = tempj;
     map[j] = tempi;
   }
}
function resetarr()
{
	if (level == "1")
  {
    src = "/assets/Imgblank.jpg";
    var Imgblank = "Imgblank"
  }
  else
    {
      src = "/assets/Img32.gif";
      var Imgblank = "Img32"
    }
    reset(clickarray[0],src,Imgblank)
    reset(clickarray[1],src,Imgblank)
    flag = true
}
function reset(j,src,imgsrc)
{
$("#"+j).attr("alt",imgsrc);
$("#"+j).attr("src",src);
}
function adminchange()
{
  alert(($(this).attr("id")).toString());
}