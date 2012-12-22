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
    $(function() {
    	  $("#attemp").html("Your Attempts ---> "+attempts.toString());
        });
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
      	setTimeout('resetarr()',800)
   	}
    else
    {
    	totval = totval + 1
    	if (totval == 8)
    	{
    		if (parseInt(lowscore) > attempts)
    		{
    			$.ajax({
 						 type: "GET",
  							url: "/gameend",
  							data: { iduser: userid, attempts: attempts.toString()}
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
	var src = "/assets/Imgblank.jpg";
	for(var i = 0; i < 16; i++)
	{
		var j = i.toString();    	
    	reset(j,src,"Imgblank")
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
	src = "/assets/Imgblank.jpg"
    var Imgblank = "Imgblank"
    reset(clickarray[0],src,Imgblank)
    reset(clickarray[1],src,Imgblank)
    flag = true
}
function reset(j,src,imgsrc)
{
$("#"+j).attr("alt",imgsrc);
$("#"+j).attr("src",src);
}