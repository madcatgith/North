$(document).ready(function(){
	$('#file_add').on('click',function(e){
		e.preventDefault();
		$('#file').click();
	})
	$('.center').slick({
	  centerMode: true,
	  centerPadding: '60px',
 	 slidesToShow: 2,
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
  	      slidesToShow: 2
  	    }
 	   }
	  ]
	});
});