var size = $('.tl-page > div').length;

var myTemplateObject = {
 myTemplate: {
  tilesNum: size,
  tiles: {
   0: 'col-xs-5 col-sm-4 col-md-4 col-lg-3',
   1: 'col-xs-5 col-sm-4 col-md-4 col-lg-3',
   2: 'col-xs-5 col-sm-4 col-md-4 col-lg-3',
	 3: 'col-xs-5 col-sm-4 col-md-4 col-lg-3',
	 4: 'col-xs-5 col-sm-4 col-md-4 col-lg-3',
	 5: 'col-xs-5 col-sm-4 col-md-4 col-lg-3'
 },
	animations: {
		0: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:100 },
		1: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:150 },
		2: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:200 },
		3: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:250 },
		4: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:300 },
		5: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:350 }
	}
 }
}
var opt = {
 //Set the custom template
 templateObj: myTemplateObject
}

$('#tiles-container').jstiles(opt);

//
// $(window).bind("load", function(){
//
// 	var url   = location.hostname;
//
// 	if(url != "a153001.azurewebsites.net"){
// 		$('.webfont-aleat-wrapper').removeClass('hidden');
// 	}else {
// 	  $(document.body).removeClass('offcanvas-stop-scrolling');
// 	};
//
// });
//
// $(function(){
//   $(".btn-continue").click(function(){
//     $(".webfont-aleat-wrapper").fadeOut();
//     $(document.body).removeClass('offcanvas-stop-scrolling');
//   });
// });
