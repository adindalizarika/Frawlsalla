document.getElementById("button-mobile").addEventListener("click", function () {
	var menu = document.getElementById("menu-mobile");
	if (menu.classList.contains("display-none")) {
		menu.classList.remove("display-none");
		menu.classList.add("display-block");
	} else {
		menu.classList.remove("display-block");
		menu.classList.add("display-none");
	}
});
var form = document.querySelector("#play-form");
if (form) {
	form.addEventListener("submit", function (e) {
		e.preventDefault();
		if (document.getElementById("name").value.length < 5) {
			alert("Name Minimum 5 Character");
			return false;
		} else if (document.getElementById("email").value.length < 5) {
			alert("Email also Minimum 5 Character");
			return false;
		} else if (document.getElementById("password").value.length < 8) {
			alert("Password Minimum 8 Character");
			return false;
		} else if (document.getElementById("gender").value.length < 1) {
			alert("Gender Not Selected");
			return false;
		} else if (document.getElementById("check").checked == false) {
			alert("Terms of Service must be checked");
			return false;
		} else {
			alert("Success Register");
			window.location = "home.html";
		}
	});
}

$(document).ready(function () {
	function imageSlider() {
		var firstSlide = $("#image-slider").find("div:first");
		var width = firstSlide.width();
		firstSlide.animate(
			{
				marginLeft: -width,
			},
			1000,
			function () {
				var lastSlide = $("#image-slider").find("div:last");
				lastSlide.after(firstSlide);
				firstSlide.css({
					marginLeft: 0,
				});
			}
		);
	}
	window.setInterval(imageSlider, 6000);
});
