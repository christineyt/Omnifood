function doOPEN(){	
	$(".main-nav").removeClass("goOUT").addClass("goIN");
}
	
function doCLOSE(){
	$(".main-nav").removeClass("goIN").addClass("goOUT");
}

$(".mobile-nav-icon").on("click", doOPEN );
	
$(".main-nav").on("click", doCLOSE );
