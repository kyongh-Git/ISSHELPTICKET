$(function(){
$("#li_7").hide();
$("#li_9").hide();
$("#li_10").hide();
$("#li_11").hide();
$("#li_12").hide();
$("#li_13").hide();
$("#li_14").hide();
$("#li_15").hide();
$("#li_16").hide();
$("#li_17").hide();
$("#li_18").hide();
$("#li_19").hide();
$("#li_20").hide();
$("#li_21").hide();
$("#li_23").hide();
$("#li_24").hide();
$("#li_25").hide();
$("#li_26").hide();
$('input[type="checkbox"]').click(function(){
	//Registration
        if($("#element_8_4").is(":checked")){
			$("#li_7").show();
			$("#li_9").show();
        }
        else if($("#element_8_4").is(":not(:checked)")){
            $("#li_7").hide();
			$("#li_9").hide();
        }
		//Orientation
		if($("#element_8_15").is(":checked")){
            $("#li_10").show();
			$("#li_11").show();
        }
        else if($("#element_8_15").is(":not(:checked)")){
            $("#li_10").hide();
			$("#li_11").hide();
        }
		//Holds
		if($("#element_8_16").is(":checked")){
			$("#li_12").show();
        }
		else if($("#element_8_16").is(":not(:checked)")){
			$("#li_12").hide();
        }
		//Enrollment
		if($("#element_8_5").is(":checked")){
            $("#li_13").show();
        }
        else if($("#element_8_5").is(":not(:checked)")){
            $("#li_13").hide();
        }
		
		//Travel
		if($("#element_8_18").is(":checked")){
            $("#li_15").show();
			$("#li_14").show();
        }
        else if($("#element_8_18").is(":not(:checked)")){
            $("#li_15").hide();
			$("#li_14").hide();
        }
		//Employment
		if($("#element_8_6").is(":checked")){
            $("#li_16").show();
        }
        else if($("#element_8_6").is(":not(:checked)")){
            $("#li_16").hide();
        }
		
		//Tax
		if($("#element_8_17").is(":checked")){
            $("#li_17").show();
        }
        else if($("#element_8_17").is(":not(:checked)")){
            $("#li_17").hide();
        }
		//Athletic Issues
		if($("#element_8_7").is(":checked")){
            $("#li_18").show();
        }
        else if($("#element_8_7").is(":not(:checked)")){
            $("#li_18").hide();
        }
		//SPA
		if($("#element_8_8").is(":checked")){
            $("#li_19").show();
        }
        else if($("#element_8_8").is(":not(:checked)")){
            $("#li_19").hide();
        }
		//CPT
		if($("#element_8_9").is(":checked")){
            $("#li_20").show();
        }
        else if($("#element_8_9").is(":not(:checked)")){
            $("#li_20").hide();
        }
		//OPT
		if($("#element_8_10").is(":checked")){
            $("#li_21").show();
        }
        else if($("#element_8_10").is(":not(:checked)")){
            $("#li_21").hide();
        }
		//OPT-STEM
		if($("#element_8_11").is(":checked")){
            $("#li_23").show();
        }
        else if($("#element_8_11").is(":not(:checked)")){
            $("#li_23").hide();
        }
		//Insurance
		if($("#element_8_12").is(":checked")){
            $("#li_24").show();
        }
        else if($("#element_8_12").is(":not(:checked)")){
            $("#li_24").hide();
        }
		//E-ship issues
		if($("#element_8_13").is(":checked")){
            $("#li_25").show();
        }
        else if($("#element_8_13").is(":not(:checked)")){
            $("#li_25").hide();
        }
		//Other
		if($("#element_8_14").is(":checked")){
            $("#li_26").show();
        }
        else if($("#element_8_14").is(":not(:checked)")){
            $("#li_26").hide();
        }
    });
});