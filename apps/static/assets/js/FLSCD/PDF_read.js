$(function(){
    
    $('#formFile_OT').on('change',function(event){
        var input = document.getElementById("formFile_OT");
        var formData = new FormData();
        formData.append('file', $(this)[0].files[0]);
        $.ajax({
            url:"api/PDF_READ",
            type:"POST",
            data  : formData,
            cache: false,
            contentType: false,
	        processData: false,
            success: function (data){
                collect_context = data.Lecturas.context.map(function(value){
                    return value.split("\n");
                });
                console.log(collect_context);
                $("#title").html("Title: " + data.Lecturas.title);
                $("#metadata").html("Metadata: " + data.Lecturas.Metadada.producer);
                $("#context").html("Orden de Trabajo: " +collect_context[0][7]);
            },
            error: function(textStatus) { 
                alert("Status: " + textStatus);
            },
        });   
    });
});