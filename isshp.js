$(function(){
//var validval=$("#element_8_4").val();
$('input[type="checkbox"]').click(function(){
            if($("#element_8_4").is(":checked")){
                $("#li_7").show();
				$("#li_9").show();
            }
            else if($("#element_8_4").is(":not(:checked)")){
                $("#li_7").hide();
				$("#li_9").hide();
            }
			if($("#element_8_15").is(":checked")){
                $("#li_10").show();
				$("#li_11").show();
            }
            else if($("#element_8_15").is(":not(:checked)")){
                $("#li_10").hide();
				$("#li_11").hide();
            }
			if($("#element_8_16").is(":checked")){
                $("#li_12").show();
				$("#li_12").show();
            }
            else if($("#element_8_16").is(":not(:checked)")){
                $("#li_12").hide();
				$("#li_12").hide();
            }
        });
//alert(validval);

});