$(document).ready(function(){
    // Hide all divs except for main
    $('#galxcmb').hide();
    $('#clusters').hide();    
    $('#sz').hide();
    $('#indirectdetection').hide();
    $('#tensions').hide();
    $('#machinelearning').hide();

    // If user presses browser back u
    //window.onhashchange = function() {
    //	//blah blah blah
    //	console.log("TEEEHEE");
    //	if ($(#main_wrap).is(':hidden')){
    //	    console.log("hidden");
    //	}
    //}
    
    
    // Home button
    $('#gohomelink').click(function(){
	$('#galxcmb').hide();
	$('#clusters').hide();	
	$('#sz').hide();
	$('#indirectdetection').hide();
	$('#tensions').hide();
	$('#machinelearning').hide();		
	$('#main_wrap').show();
    });

    // Show appropriate div
    $('#galxcmblink').click(function(){
	$('#main_wrap').hide();
	$('#galxcmb').show();
    });
    $('#cmbclusterlensinglink').click(function(){
	$('#main_wrap').hide();
	$('#cmbclusterlensing').show();
    });
    $('#szlink').click(function(){
	$('#main_wrap').hide();
	$('#sz').show();
    });
    $('#indirectdetectionlink').click(function(){
	$('#main_wrap').hide();
	$('#indirectdetection').show();
    });
    $('#tensionslink').click(function(){
	$('#main_wrap').hide();
	$('#tensions').show();
    });
    $('#tensionlink').click(function(){
	$('#main_wrap').hide();
	$('#tension').show();
    });
    $('#clusterslink').click(function(){
	$('#main_wrap').hide();
	$('#clusters').show();
    });
    $('#machinelearninglink').click(function(){
	$('#main_wrap').hide();
	$('#machinelearning').show();
    });

    $('#returnhome1').click(function(){
	$('#main_wrap').show();
	$('#galxcmb').hide();
    });
    $('#returnhome2').click(function(){
	$('#main_wrap').show();
	$('#clusters').hide();	
    });
    $('#returnhome3').click(function(){
	$('#main_wrap').show();
	$('#sz').hide();	
    });
    $('#returnhome4').click(function(){
	$('#main_wrap').show();
	$('#indirectdetection').hide();	
    });
    $('#returnhome5').click(function(){
	$('#main_wrap').show();
	$('#tensions').hide();	
    });
    $('#returnhome6').click(function(){
	$('#main_wrap').show();
	$('#machinelearning').hide();	
    });

});
