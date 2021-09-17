function onHover(){
	$(".logo").attr('src','Images/logo_stroke.png');
}

function offHover(){
	$(".logo").attr('src','Images/logo.png');
}

function activeNav(pageName){
	console.log("ActivateNav...");
	
	console.log(pageName);
	$(".logo").attr('src','Images/logo.png');
	
	$(".logo").attr('onmouseover', 'onHover()');
	$(".logo").attr('onmouseout', 'offHover()');
	
	//$("#" + pageName).removeClass("nav-link");
	$("#" + pageName).addClass("active");
}
/*
onmouseover="onHover();" 
onmouseout="offHover();"
href="index.html"
*/