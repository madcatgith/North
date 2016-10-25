$(document).ready(function(){
	$('#file_add').on('click',function(e){
		e.preventDefault();
		$('#file').click();
	})
	$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  variableWidth: true,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '140px',
        slidesToShow: 1,
        dots: true,
        variableWidth: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '140px',
        slidesToShow: 1,
        dots: true,
        variableWidth: true
      }
    }
  ]
});
});