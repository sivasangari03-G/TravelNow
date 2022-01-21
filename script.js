const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active')
})




window.addEventListener("scroll",()=>{
    var scrolled  = window.scrollY;

    if(scrolled<5) {
        document.getElementById("navbarJS").style.display = "flex"
        document.getElementById("navbarJS").style.backgroundColor = "transparent"
        document.getElementById("navB").style.color = "white"
        document.getElementById("navAb").style.color = "white"
        document.getElementById("navC").style.color = "white"
        document.getElementById("navD").style.color = "white"
        document.getElementById("navE").style.color = "white"
        document.getElementById("navF").style.color = "white"    
    }

    else if(scrolled>5 && scrolled<600) {
        console.log(scrolled);
        console.log(top)
        document.getElementById("navbarJS").style.display = "none"
    }
    else {
        document.getElementById("navbarJS").style.display = "flex"
        document.getElementById("navbarJS").style.backgroundColor = "white"
        document.getElementById("navAb").style.color = "black"
        document.getElementById("navB").style.color = "black"
        document.getElementById("navC").style.color = "black"
        document.getElementById("navD").style.color = "black"
        document.getElementById("navE").style.color = "black"
        document.getElementById("navF").style.color = "black"
        document.getElementById("BTJS").style.margin = "0"
        document.getElementById("BTJS").style.margin = "0"
        document.getElementById("BTJS").style.marginLeft = "1.6rem"



    }
})







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

