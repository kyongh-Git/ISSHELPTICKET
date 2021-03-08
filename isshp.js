$(function(){
//var validval=$("#element_8_4").val();
$('input[type="checkbox"]').click(function(){
            if($("#element_8_4").is(":checked")){
                $("#li_7").show();
            }
            else if($("#element_8_4").is(":not(:checked)")){
                $("#li_7").hide();
            }
        });
//hide the continue button when page loads
/*if(validval=="")
{
$("#li_5").hide();
$("#validateCWID").show();
}*/

//alert(validval);

});