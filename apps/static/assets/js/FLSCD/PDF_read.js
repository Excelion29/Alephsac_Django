$(function(){
    
    $('#formFile_OT').on('change',function(event){
        var input = document.getElementById("formFile_OT"); 
        console.log(input.files[0]);

        $.ajax({
            url:"api/PDF_READ",
            type:"POST",
            enctype: "multipart/form-data",
            data  : {'file':fReader},
            success: function (data){
                console.log(data);
            },
            error: function(textStatus) { 
                alert("Status: " + textStatus);
            },
        });   
    });
});