$(function(){
//var validval=$("#element_8_4").val();
$('input[type="checkbox"]').click(function(){
            if($("#element_8_4").is(":checked")){
                $("#li_5").hide();
            }
            else if($("#element_8_4").is(":not(:checked)")){
                $("#li_5").show();
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