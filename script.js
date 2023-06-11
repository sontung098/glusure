// Click menu
var a = document.querySelectorAll(".header li");
for (var i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    var b = document.querySelector(".header li.active");
    if (b) b.classList.remove("active"); 
      this.classList.add('active');
  };
}; 

// VanillaTilt Testimonial
VanillaTilt.init(document.querySelector(".box"), {
	max: 15,
	speed: 400,
	glare: true,
});
VanillaTilt.init(document.querySelectorAll(".box"));

// product-use
let imgBx = document.querySelectorAll('.imgBx');
let contentBx = document.querySelectorAll('.contentBx');

for (let i=0; i<imgBx.length; i++) {
	imgBx[i].addEventListener('click', function() {
		for (let i=0; i<contentBx.length; i++) {
			contentBx[i].className = 'contentBx';
		}
		document.getElementById(this.dataset.id).className = 'contentBx active';

		for (let i = 0; i<imgBx.length; i++) {
			imgBx[i].className = 'imgBx';
		}
		this.className = 'imgBx active';
	})
}

// Menu Toggle
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('.header');
menuToggle.onclick = function() {
  header.classList.toggle('active');
}