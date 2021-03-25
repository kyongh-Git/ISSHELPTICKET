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
$("#li_32").hide();
$("#li_33").hide();
$("#li_34").hide();
$("#li_35").hide();
$("#li_36").hide();
$("#li_37").hide();
$("#li_38").hide();
$("#li_39").hide();
$("#li_40").hide();
$("#li_41").hide();
$("#li_42").hide();
$("#li_43").hide();
$("#li_44").hide();
$("#li_45").hide();
$("#li_46").hide();
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
			$("#li_32").show();
			$("#li_12").show();
        }
		else if($("#element_8_16").is(":not(:checked)")){
			$("#li_32").hide();
			$("#li_12").hide();
        }
		//Enrollment
		if($("#element_8_5").is(":checked")){
            $("#li_33").show();
			$("#li_13").show();
        }
        else if($("#element_8_5").is(":not(:checked)")){
            $("#li_33").hide();
			$("#li_13").hide();
        }
		
		//Travel
		if($("#element_8_18").is(":checked")){
			$("#li_34").show();
            $("#li_15").show();
			$("#li_14").show();
        }
        else if($("#element_8_18").is(":not(:checked)")){
			$("#li_34").hide();
            $("#li_15").hide();
			$("#li_14").hide();
        }
		//Employment
		if($("#element_8_6").is(":checked")){
			$("#li_35").show();
            $("#li_16").show();
        }
        else if($("#element_8_6").is(":not(:checked)")){
			$("#li_35").hide();
            $("#li_16").hide();
        }
		
		//Tax
		if($("#element_8_17").is(":checked")){
			$("#li_36").show();
            $("#li_17").show();
        }
        else if($("#element_8_17").is(":not(:checked)")){
			$("#li_36").hide();
            $("#li_17").hide();
        }
		//J visa issues
		if($("#element_8_20").is(":checked")){
			$("#li_45").show();
            $("#li_46").show();
        }
        else if($("#element_8_20").is(":not(:checked)")){
			$("#li_45").hide();
            $("#li_46").hide();
        }
		//Athletic Issues
		if($("#element_8_7").is(":checked")){
			$("#li_37").show();
            $("#li_18").show();
        }
        else if($("#element_8_7").is(":not(:checked)")){
			$("#li_37").hide();
            $("#li_18").hide();
        }
		//SPA
		if($("#element_8_8").is(":checked")){
			$("#li_38").show();
            $("#li_19").show();
        }
        else if($("#element_8_8").is(":not(:checked)")){
			$("#li_38").hide();
            $("#li_19").hide();
        }
		//CPT
		if($("#element_8_9").is(":checked")){
			$("#li_39").show();
            $("#li_20").show();
        }
        else if($("#element_8_9").is(":not(:checked)")){
			$("#li_39").hide();
            $("#li_20").hide();
        }
		//OPT
		if($("#element_8_10").is(":checked")){
			$("#li_40").show();
            $("#li_21").show();
        }
        else if($("#element_8_10").is(":not(:checked)")){
			$("#li_40").hide();
            $("#li_21").hide();
        }
		//OPT-STEM
		if($("#element_8_11").is(":checked")){
			$("#li_41").show();
            $("#li_23").show();
        }
        else if($("#element_8_11").is(":not(:checked)")){
			$("#li_41").hide();
            $("#li_23").hide();
        }
		//Insurance
		if($("#element_8_12").is(":checked")){
			$("#li_42").show();
            $("#li_24").show();
        }
        else if($("#element_8_12").is(":not(:checked)")){
			$("#li_42").hide();
            $("#li_24").hide();
        }
		//E-ship issues
		if($("#element_8_13").is(":checked")){
			$("#li_43").show();
            $("#li_25").show();
        }
        else if($("#element_8_13").is(":not(:checked)")){
			$("#li_43").hide();
            $("#li_25").hide();
        }
		//Other
		if($("#element_8_14").is(":checked")){
			$("#li_44").show();
            $("#li_26").show();
        }
        else if($("#element_8_14").is(":not(:checked)")){
			$("#li_44").hide();
            $("#li_26").hide();
        }
    });
});