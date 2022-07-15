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
                data_pdf(data);
            },
            error: function(textStatus) { 
                alert("Status: " + textStatus);
            },
        });   
    });

    function data_pdf(attributes){
        collect_context = attributes.Lecturas.context.map(function(value){
            return value.split("\n");
        });
        

        container = document.getElementById("container_PDF");
        var card_mb4 = document.createElement('div');
        card_mb4.setAttribute('class','card mb-4');
        container.appendChild(card_mb4);
        var card_header = document.createElement('div');
        card_header.setAttribute('class','card-header pb-0');
        card_mb4.appendChild(card_header);
        var h6 = document.createElement('h6');
        h6.appendChild(document.createTextNode(attributes.Lecturas.title));
        card_header.appendChild(h6);
        container.appendChild(card_mb4);
    }
});