const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,
	

	effect: 'coverflow',
	coverflowEffect: {
	  rotate: 30,
	  slideShadows: false,
	},
	
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',

	  
	},
  });
  