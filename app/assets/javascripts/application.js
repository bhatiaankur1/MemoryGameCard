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


function showimage(but) {
if (oktoclick) {
oktoclick = false; 
document.f[('img'+but)].src = 'image'+map[but]+'.gif';
if (ctr == 0) {
ctr++;
clickarray[0] = but;
oktoclick = true;
} else {
clickarray[1] = but;
ctr = 0;
setTimeout('returntoold()', 600);
      }
   }
}
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
    		setTimeout('check()',600)
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
    	src = "/assets/Imgblank.jpg"
    	$("#"+clickarray[0]).attr("alt","Imgblank");
    	$("#"+clickarray[0]).attr("src",src);
		$("#"+clickarray[1]).attr("alt","Imgblank");
    	$("#"+clickarray[1]).attr("src",src);
    	flag = true
    }
    else
    {
    	totval = totval + 1
    	if (totval == 8)
    	{
    		alert("Game finished. You completed the game in " + attempts.toString() + " clicks.")
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
    	$("#"+j).attr("alt","Imgblank");
    	$("#"+j).attr("src",src);
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