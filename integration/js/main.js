$(document).ready(function(){
	$('#file_add').on('click',function(e){
		e.preventDefault();
		$('#file').click();
	})
	/*$('.center').slick({
	  centerMode: true,
	  centerPadding: '60px',
 	 slidesToShow: 1,
 	 dots: true,
 	 arrows: false,
	  responsive: [
 	   {
 	     breakpoint: 768,
 	     settings: {
  	      arrows: false,
  	      centerMode: true,
  	      centerPadding: '40px',
  	      slidesToShow: 2
  	    }
  	  },
  	  {
  	    breakpoint: 480,
  	    settings: {
  	      arrows: false,
  	      centerMode: true,
  	      centerPadding: '40px',
  	      slidesToShow: 1
  	    }
 	   }
	  ]
	});*/

	$('.center').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		dots: true,
  		centerMode: true,
  		focusOnSelect: true,
  		arrows:false
	});
});