//NAVBAR
$(function () {
    $('.navbar-toggler').on('click', function(event) {
    	event.preventDefault();
		$(this).closest('.navbar-minimal').toggleClass('open');
	});
});
function htmlbodyHeightUpdate(){
    	var height3 = $( window ).height();
		var height1 = $('.nav').height()+50;
		height2 = $('.main').height();
		if(height2 > height3){
			$('html').height(Math.max(height1,height3,height2)+10);
			$('body').height(Math.max(height1,height3,height2)+10);
		}
		else
		{
			$('html').height(Math.max(height1,height3,height2));
			$('body').height(Math.max(height1,height3,height2));
		}
		
	}
	$(document).ready(function () {
		htmlbodyHeightUpdate();
		$( window ).resize(function() {
			htmlbodyHeightUpdate();
		});
		$( window ).scroll(function() {
			height2 = $('.main').height();
  			htmlbodyHeightUpdate();
		});
	});



//First screen on click
$("#go").on("click", function(){
	//Save the name feild to firebase
	var name = $("#name").val();  //////////////Save Variable in firebase!
	
	$(".screen1").addClass("rotateOutUpRight");
	$(".screen1").removeClass("fadeIn");
	$(".name").hide(2000);
	$(".screen1").hide(2000);
	$(".screen2").show();
	$("#screen2").show();
	$("#camera").show();
	$("#camera").addClass("bounceIn");
	$("#screen2text").css("display", "inline-block");
	$("#screen2text").addClass("bounceIn");
	$("#hi").text("Hello, " + name);
});

//When user uploads a photo
$('input[name=userImage]').change(function(ev) {

    alert("image received");
    $(".screen2").hide(2000);
    $(".screen3").show(2000);
});

//Image Results-Show image
document.getElementById('file-input').addEventListener('change', readURL, true);
function readURL(){
    var file = document.getElementById("file-input").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('image').style.backgroundImage = "url(" + reader.result + ")";        
    };
    if(file){
        reader.readAsDataURL(file);
    }else{
    }
}

//If you click a word to learn the rest disappear
var currentWord="";

$("#word1").on("click", function(){
	$("#word2,#word3,#word4").addClass("slideOutLeft");
	$("#word2,#word3,#word4").hide(2000);
	$("#spanishWord").show();
	currentWord=$("#w1selected").html();
});
$("#word2").on("click", function(){
	$("#word1,#word3,#word4").addClass("slideOutLeft");
	$("#word1,#word3,#word4").hide(2000);
	$("#spanishWord").show();
	currentWord=$("#w2selected").html();
});
$("#word3").on("click", function(){
	$("#word2,#word1,#word4").addClass("slideOutLeft");
	$("#word2,#word1,#word4").hide(2000);
	$("#spanishWord").show();
	currentWord=$("#w3selected").html();
});
$("#word4").on("click", function(){
	$("#word2,#word3,#word1").addClass("slideOutLeft");
	$("#word2,#word3,#word1").hide(2000);
	$("#spanishWord").show();
	currentWord=$("#w4selected").html();
});

//Text to Speech -VOICERRS
//Speak translated spanish word after you have clicked on the english word


function runTranslator(){
$.speech({
            key: '<Ae7981639b98844409e5bde6150d7643c>',
            src: 'Hello, world!',
            hl: 'en-us',
            r: 0, 
            c: 'mp3',
            f: '44khz_16bit_stereo',
            ssml: false
        });

}
