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
    	attempts = attempts + 1;
    	id = $(this).attr("id").slice(3)
		src = "/assets/Img"+$.trim(map[id])+".jpg"
    	$("#"+id).attr("src",src);
    	$("#attemp").html("Your Attempts ---> "+attempts.toString());
        });
    });