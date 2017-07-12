

$("#go").on("click", function(){
	//Save the name feild to firebase
	var name = $("#name").val();  //////////////Save Variable in firebase!
	
	$(".screen1").addClass("rotateOutUpRight");
	$(".name").hide();
	$(".screen1").hide();
	$("#camera").show();
	$("#camera").addClass("bounceIn");
	$("#screen2text").show();
	$("#screen2text").addClass("bounceIn");

});