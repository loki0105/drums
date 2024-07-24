var j = document.querySelectorAll(".drum").length;

for (let index = 0; j > index; index++) {
	document.querySelectorAll(".drum")
		[index].addEventListener("click", function () {
			var hel = this.innerHTML;
			makesound(hel);
			animate(hel);
		});


	
}





document.addEventListener("keydown", function (event) {
	makesound(event.key);
	animate(event.key);
	console.log(event.key);
});

function makesound(key) {
	switch (key) {
		case "w":
			var audio = new Audio("sounds/tom-1.mp3");
			audio.play();

			break;
		case "a":
			var audio = new Audio("sounds/tom-2.mp3");
			audio.play();

			break;
		case "s":
			var audio = new Audio("sounds/tom-3.mp3");
			audio.play();

			break;
		case "d":
			var audio = new Audio("sounds/tom-4.mp3");
			audio.play();

			break;
		case "j":
			var audio = new Audio("sounds/snare.mp3");
			audio.play();

			break;
		case "k":
			var audio = new Audio("sounds/crash.mp3");
			audio.play();

			break;
		case "l":
			var audio = new Audio("sounds/kick-bass.mp3");
			audio.play();

			break;

		default:
			break;
	}
}	

function animate(kkk)
{
	var acbuttno = document.querySelector("." + kkk);
	
	acbuttno.classList.add("pressed");


	
	setInterval((function rem(){
var acbuttno = document.querySelector("." + kkk);

	acbuttno.classList.remove("pressed");
	}),1000);
	
	

}
