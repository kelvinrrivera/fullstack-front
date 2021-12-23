var form1 = $("#form1");
   form1.on("submit", function(e) { 
       
       let nombre  = $("#ifname").val();
       let apellido = $("#ilname").val();
       
       if(nombre=="")
       {
           setColor('fname','red');
           e.preventDefault();        
       }
   
       if(apellido=="")
       {
           setColor('lname','red');
           e.preventDefault();        
       }
   });
   
   
   $("#tamano").on('change', function() {
   
       // Aqui va la llamada AJAX con JQuery
       let form1 = new FormData();
       form1.append("tamano", this.value);
   
       let settings = {
         "url": "http://localhost:5000/checksize",
         "method": "POST",
         "timeout": 0,
         "processData": false,
         "mimeType": "multipart/form-data",
         "contentType": false,
         "data": form1
       };
   
       $.ajax(settings).done(function (response) {	  
         $("#resultado_tamano").text(response);
       });
   });
