
var HeadLSCD3 = new Array();
HeadLSCD3 = ['', 'Tasa de dosis'];

function createTableLSCD036() {
    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'TableLSCD03');
    empTable.setAttribute('mame', 'TableLSCD03');
    empTable.setAttribute('class', 'table table-striped table-bordered table-sm dt-responsive');
    empTable.setAttribute('cellspacing', '0');
    empTable.setAttribute('width', '100%');
    var empThead = document.createElement('thead');
    empThead.setAttribute('class', 'thead-dark');
    var tr = empThead.insertRow(-1);
    for (var h = 0; h < HeadLSCD3.length; h++) { 
        var th = document.createElement('th');
        th.setAttribute('class','sorting sorting_asc');
        th.innerHTML = HeadLSCD3[h];
        tr.appendChild(th);
    }
    var div = document.getElementById('cont');
    var empTbody = document.createElement('tbody');
    empTable.appendChild(empThead);
    empTable.appendChild(empTbody);
    div.appendChild(empTable);           
};
function addDosis(){
    var empTab = document.getElementById('TableLSCD03');
    var empTbody = empTab.children[1];
    var rowCnt = empTbody.rows.length;
    var tr = empTbody.insertRow(rowCnt);
    tr = empTbody.insertRow(rowCnt);

    for (let c = 0; c < HeadLSCD3.length; c++) {
        var td = document.createElement('td');
        td = tr.insertCell(c);
        if (c == 0) {              
            var i = document.createElement('i');
            i.setAttribute('class','ni ni-fat-remove');
            var span = document.createElement('span');
            var button = document.createElement('button');
            span.setAttribute('class','btn-inner--icon');
            button.setAttribute('type', 'button');
            button.setAttribute('class', 'btn btn-icon btn-2 btn-primary');
            button.setAttribute('onclick', 'removeDosis(this)');
            span.appendChild(i);
            button.appendChild(span);
            td.appendChild(button);
        }  
        if (c == 1){
            var ele = document.createElement('input');
              ele.setAttribute('type', 'text');
              ele.setAttribute('class', 'form-control');     
              ele.setAttribute('placeholder', 'Tasa');
              ele.setAttribute('required','true');
              ele.setAttribute('id', 'tasaVCV'); 
              ele.setAttribute('name', 'tasaVCV[]'); 	
              td.appendChild(ele);
        }   
    }
}
function removeDosis(oButton) {
    var empTab = document.getElementById('TableLSCD03');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
};

$(function(){
    $('#id_FLSCD_03').on('submit',function(event){
        event.preventDefault();
        var formdata = $('#id_FLSCD_03').serializeArray().map(function(value){
            return parseFloat(value.value);
        });
        crear_post(formdata.slice(1));
    })
    
    // function crear_post(formdata){
    //     $('#example').dataTable( {
    //         dom: 'Bfrtip',
    //         data : jsonObject,
    //         buttons: [
    //             'copy', 'csv', 'excel', 'pdf'
    //         ],
    //         ajax: {
    //             url:"api/tasa_dosis",
    //             type:"POST",
    //             data: {'tasaVCV':JSON.stringify(formdata)}
    //         },
    //         columns: [
    //             {"data" : "key"},
    //             {"data" : "tasa_dosis"},
    //             {"data" : "unidad"},     
    //             {"data" : "unidad"},   
    //             {"data" : "atenuador"},   
    //             {"data" : "distancia"},         
    //         ],
    //     });
    // }
    function crear_post(formdata){
        $('#example').dataTable().fnDestroy();
        $.ajax({
            url:"api/tasa_dosis",
            type:"POST",
            data: {'tasaVCV':JSON.stringify(formdata)}, 
            success: function (json){
                var o = json['tasaVCV'];
                $('#example').dataTable({
                    data:o,
                    columns:[
                        {"data":"tasa_dosis"},
                        {"data":"unidad"},                        
                        {"data":"atenuador"},
                        {"data":"distancia"}
                    ]
                }).api();
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            },
        });
    
    }
});


