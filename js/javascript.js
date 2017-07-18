var config = {
    apiKey: "AIzaSyAUhckuI7eonmR3kNmUC3vBOrnoz2NLscY",
    authDomain: "yeah-8ac6b.firebaseapp.com",
    databaseURL: "https://yeah-8ac6b.firebaseio.com/",
    projectId: "yeah-8ac6b",
    storageBucket: "yeah-8ac6b.appspot.com",
    messagingSenderId: "1051077492767"
  };
  var dataInt = firebase.initializeApp(config);
  var database = firebase.database();
  var app = firebase.initializeApp(config, "app");


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
    var uploader = document.getElementById("file-input");
    var storageRef = firebase.storage(app).ref(file.name);
    storageRef.put(file);

    var reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('image').style.backgroundImage = "url(" + reader.result + ")";        
    };
    if(file){
        reader.readAsDataURL(file);
    }else{
    }
}


database.ref().set(null);



database.ref().on("value", function(snapshot) {



if (snapshot.val() !== null){
$("#w1selected").html("<p id='w1selected' class='white-text'>" + snapshot.val().label1 + "</p>");
$("#w2selected").html("<p id='w2selected' class='white-text'>" + snapshot.val().label2 + "</p>");
$("#w3selected").html("<p id='w3selected' class='white-text'>" + snapshot.val().label3 + "</p>");
$("#w4selected").html("<p id='w4selected' class='white-text'>" + snapshot.val().label4 + "</p>");
}



});

//If you click a word to learn the rest disappear
var currentWord="";

$("#word1").on("click", function(){
	$("#word2,#word3,#word4").addClass("slideOutLeft");
	$("#word2,#word3,#word4").hide(2000);
	$("#chosenWord").html("You just leaned a new word!");
	$("#spanishWord").show();
	currentWord=$("#w1selected").html();
});
$("#word2").on("click", function(){
	$("#word1,#word3,#word4").addClass("slideOutLeft");
	$("#word1,#word3,#word4").hide(2000);
	$("#chosenWord").html("You just leaned a new word!");
	$("#spanishWord").show();
	currentWord=$("#w2selected").html();
});
$("#word3").on("click", function(){
	$("#word2,#word1,#word4").addClass("slideOutLeft");
	$("#word2,#word1,#word4").hide(2000);
	$("#chosenWord").html("You just leaned a new word!");
	$("#spanishWord").show();
	currentWord=$("#w3selected").html();
});
$("#word4").on("click", function(){
	$("#word2,#word3,#word1").addClass("slideOutLeft");
	$("#word2,#word3,#word1").hide(2000);
	$("#chosenWord").html("You just leaned a new word!");
	$("#spanishWord").show();
	currentWord=$("#w4selected").html();
});

//translator call and eender text
//https://translate.yandex.net/api/v1.5/tr.json/translate ? 
            //key=<API key>
            //& text=<text to translate>
            //& lang=<translation direction>
            //& [format=<text format>]
            //& [options=<translation options>]
            //& [callback=<name of the callback function>]
$(document).on('click', '.card-block', function(){
//toTrans = $(this).text());
            var toTrans = currentWord;//This is for testing
            console.log(toTrans);
            var queryUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170717T055534Z.fafe5687552c2a8e.cd5a229178514ac69372d803a9ee77478464085b&lang=en-es&text=" + toTrans ;
            $.ajax({
            url: queryUrl,
            dataType: 'json',
            success: function (data) {
            console.log(data);
      
            $("#spokenSpanish").html(data.text[0]);
            

            //Text to Speech -VOICERRS
			//Speak translated spanish word after you have clicked on the english word
			var spanish = $("#spokenSpanish").html();
	
			$("audio").attr("src","http://api.voicerss.org/?key=87273ff6f9054afc9379fe0b04c92efa&hl=es-mx&src=" +spanish+ ">");

            }
            });
            });





function photoReset(){
	$(".screen2").show();
	$("#screen2").show();
	$("#camera").show();
	$("#camera").addClass("bounceIn");
	$("#screen2text").css("display", "inline-block");
	$("#screen2text").addClass("bounceIn");
	$("#hi").text("Hello, " + name);
}
