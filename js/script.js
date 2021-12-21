$(document).ready(function(){

    $("#form1").submit(function () {  
        
        if($("#ifname, #ilname").val().length < 1) {  
            $("#fname, #lname").css("color", "red");
            event.preventDefault();
        }
    });

});