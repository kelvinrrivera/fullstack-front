$(document).ready(function(){

    $("#form1").submit(function () {  
        
        if($("#ifname, #ilname").val().length < 1) {  
            $("#fname, #lname").css("color", "red");
            event.preventDefault();
        }
    });

});

$("#tamano").on('change', function() {
 console.log(this.value);
 // Aqui va la llamada AJAX con JQuery
    
    $.ajax({
        type: "POST",
        url: "/checksize",
        success: function (result) {
        $("tamaño").text(result);
        }
        });

    
});
