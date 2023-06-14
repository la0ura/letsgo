function sub() {
	var email = $("#e-mail").val();

	$.ajax({
		url: '../back-end/subscription.php',
		method: 'POST',
		data: {
			email: email,
		},
		success: function (info) {
			alert(`You successfully subscribed to our newsletter!`);
			location.reload(true);
		},
		error: function (error) {
			console.log(error);
		}
	});
}

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};