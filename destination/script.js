const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {
	var scrolled = window.scrollY;

	if (scrolled < 5) {
		document.getElementById("navbarJS").style.display = "flex";
		document.getElementById("navbarJS").style.backgroundColor =
			"transparent";
		document.getElementById("navB").style.color = "white";
		document.getElementById("navAb").style.color = "white";
		document.getElementById("navC").style.color = "white";
		document.getElementById("navD").style.color = "white";
		document.getElementById("navE").style.color = "white";
		document.getElementById("navF").style.color = "white";
	} else if (scrolled > 5 && scrolled < 600) {
		console.log(scrolled);
		console.log(top);
		document.getElementById("navbarJS").style.display = "none";
	} else {
		document.getElementById("navbarJS").style.display = "flex";
		document.getElementById("navbarJS").style.backgroundColor = "white";
		document.getElementById("navAb").style.color = "black";
		document.getElementById("navB").style.color = "black";
		document.getElementById("navC").style.color = "black";
		document.getElementById("navD").style.color = "black";
		document.getElementById("navE").style.color = "black";
		document.getElementById("navF").style.color = "black";
		document.getElementById("BTJS").style.margin = "0";
		document.getElementById("BTJS").style.margin = "0";
		document.getElementById("BTJS").style.marginLeft = "1.6rem";
	}
});

var runCounter = document.querySelector("#CounterButton1");
var count = 0;

window.addEventListener("scroll", function () {
	const scrolled = window.scrollY;
	console.log(scrolled);
	if (scrolled > 1200) {
		setInterval(function () {
			if (count == 300) {
				return;
			}
			count++;
			runCounter.innerHTML = count;
		}, 7);
	}
});

var runCounter2 = document.querySelector("#CounterButton2");
var count2 = 23500;

window.addEventListener("scroll", function () {
	const scrolled = window.scrollY;
	if (scrolled > 1200) {
		setInterval(function () {
			if (count2 == 24000) {
				return;
			}
			count2++;
			runCounter2.innerHTML = count2;
		}, 1);
	}
});
var runCounter3 = document.querySelector("#CounterButton3");
var count3 = 0;

window.addEventListener("scroll", function () {
	const scrolled = window.scrollY;
	if (scrolled > 1200) {
		setInterval(function () {
			if (count3 == 200) {
				return;
			}
			count3++;
			runCounter3.innerHTML = count3;
		}, 9);
	}
});

const slides = document.querySelectorAll(".slide");

let curSlide = 0;
const maxSlide = slides.length;

const dotContainer = document.querySelector(".dots");

const createDots = function () {
	slides.forEach(function (_, i) {
		dotContainer.insertAdjacentHTML(
			"beforeend",
			`<button class="dots__dot" data-slide="${i}"></button>`
		);
	});
};
createDots();
const goToSlide = function (slide) {
	slides.forEach(function (s, i) {
		s.style.transform = `translateX(${100 * (i - slide)}%)`;
	});
};
goToSlide(0);

const nextSlide = function () {
	if (curSlide === maxSlide - 1) {
		curSlide = 0;
	} else {
		curSlide++;
	}

	goToSlide(curSlide);
};

const prevSlide = function () {
	if (curSlide === 0) {
		curSlide = maxSlide - 1;
	} else {
		curSlide--;
	}

	goToSlide(curSlide);
};

dotContainer.addEventListener("click", function (e) {
	if (e.target.classList.contains("dots__dot")) {
		const { slide } = e.target.dataset;
		goToSlide(slide);
		activateDot(slide);
	}
});

document
	.querySelector(".bestPlaceImage1")
	.addEventListener("mouseenter", enterIntoBox);
document
	.querySelector(".bestPlaceImage1")
	.addEventListener("mouseleave", leaveOutOfBox);

var bx1 = document.querySelector("#bestPlaceBox1");
function enterIntoBox() {
	bx1.style.backgroundColor = "#f9ab30";
	bx1.style.paddingRight = "30px";
	bx1.style.transitionDuration = "0.5s";
}
function leaveOutOfBox() {
	bx1.style.backgroundColor = "#343a40";
	bx1.style.paddingRight = "10px";
}

document
	.querySelector(".bestPlaceImage2")
	.addEventListener("mouseenter", enterIntoBox2);
document
	.querySelector(".bestPlaceImage2")
	.addEventListener("mouseleave", leaveOutOfBox2);

var bx2 = document.querySelector("#bestPlaceBox2");
function enterIntoBox2() {
	bx2.style.backgroundColor = "#f9ab30";
	bx2.style.paddingRight = "30px";
	bx2.style.transitionDuration = "0.5s";
}
function leaveOutOfBox2() {
	bx2.style.backgroundColor = "#343a40";
	bx2.style.paddingRight = "10px";
}

document
	.querySelector(".bestPlaceImage3")
	.addEventListener("mouseenter", enterIntoBox3);
document
	.querySelector(".bestPlaceImage3")
	.addEventListener("mouseleave", leaveOutOfBox3);

var bx3 = document.querySelector("#bestPlaceBox3");
function enterIntoBox3() {
	bx3.style.backgroundColor = "#f9ab30";
	bx3.style.paddingRight = "30px";
	bx3.style.transitionDuration = "0.5s";
}
function leaveOutOfBox3() {
	bx3.style.backgroundColor = "#343a40";
	bx3.style.paddingRight = "10px";
}

document
	.querySelector(".bestPlaceImage4")
	.addEventListener("mouseenter", enterIntoBox4);
document
	.querySelector(".bestPlaceImage4")
	.addEventListener("mouseleave", leaveOutOfBox4);

var bx4 = document.querySelector("#bestPlaceImage1");
console.log(bx4.style.left);
function enterIntoBox4() {
	bx4.style.backgroundColor = "#f9ab30";
	bx4.style.paddingRight = "30px";
	bx4.style.transitionDuration = "0.5s";
}
function leaveOutOfBox4() {
	bx4.style.backgroundColor = "#343a40";
	bx4.style.paddingRight = "10px";
}





