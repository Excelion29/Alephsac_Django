
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
            i.setAttribute('class','ni ni-fat-remove cursor-pointer');
            var span = document.createElement('span');
            var button = document.createElement('button');
            span.setAttribute('class','btn-inner--icon');
            button.setAttribute('type', 'button');
            button.setAttribute('class', 'badge bg-gradient-danger');
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

    function crear_post(formdata){
        $('#F_LSCD_03').dataTable().fnDestroy();
        $('#F_LSCD_012').dataTable().fnDestroy();
        $.ajax({
            url:"api/tasa_dosis",
            type:"POST",
            data: {'tasaVCV':JSON.stringify(formdata)}, 
            success: function (json){
                var o = json['tasaVCV'];
                crear_F_LSCD03(o); 
                crear_F_LSCD012(o);          
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            },
        });    
    }

    function crear_F_LSCD03(request){
        $('#F_LSCD_03').dataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ],
            data:request,
            columns:[
                {"data":"tasa_dosis"},
                {"data":"unidad"},                        
                {"data":"atenuador"},
                {"data":"distancia"}
            ]
        }).api();
    }

    function crear_F_LSCD012(request){
        $('#F_LSCD_012').dataTable({
            data:request,
            columns:[
                {   
                    "data":"tasa_dosis",
                    render:function (data){
                        return data+"<input type='hidden' name='tasaVCV' class='form-control border-0 ps-3' value="+data+" required></input>";
                    }        
                },
                {
                    render: function () {
                        return "<input type='text' name='lectura1' class='form-control border-0 ps-3' value='0.01' required></input>";
                    }
                },
                {
                    render: function () {
                        return "<input type='text' name='lectura2' class='form-control border-0 ps-3' value='0.01' required></input>";
                    }
                },
                {
                    render: function () {
                        return "<input type='text' name='lectura3' class='form-control border-0 ps-3' value='0.01' required></input>";
                    }
                },
                {
                    render: function () {
                        return "<input type='text' name='lectura4' class='form-control border-0 ps-3' value='0.01' required></input>";
                    }
                },
                {
                    render: function () {
                        return "<input type='text' name='lectura5' class='form-control border-0 ps-3' value='0.01' required></input>";
                    }
                },
                {
                    render: function () {
                        return "<input type='text' name='lectura6' class='form-control border-0 ps-3' value='0.01' required></input>";
                    }
                },
                {
                    render: function () {
                        return "<input type='text' name='lectura7' class='form-control border-0 ps-3' value='0.01' required></input>";
                    }
                },
                {
                    render: function () {
                        return "<input type='text' name='lectura8' class='form-control border-0 ps-3' value='0.01' required></input>";
                    }
                },
                {
                    render: function () {
                        return "<input type='text' name='lectura9' class='form-control border-0 ps-3' value='0.01' required></input>";
                    }
                },
                {
                    render: function () {
                        return "<input type='text' name='lectura10' class='form-control border-0 ps-3' value='0.01' required></input>";
                    }
                },
                {
                    render: function () {
                        return "<select name='select' required> <option selected value='' disabled> Unidades </option> <option value='µSv'>µSv</option> <option value='mSv'>mSv</option> <option value='Sv'>Sv</option><option value='R'>R</option><option value='mR'>mR</option><option value='µR'>µR</option><option value='rem'>rem</option><option value='mrem'>mrem</option></select>";
                    }
                }
            ]
        }).api();
        $('#id_li_F_LSCD_012').show(500); 
    }

    $('#id_FLSCD_012').on('submit',function(event){
        event.preventDefault();
        var form_array = new Array();
        var formdata = $('#id_FLSCD_012').serializeArray().map(function(value){
            return value.value;
        });
        var array_clean = formdata.slice(2);
        for (let index = 0; index <= array_clean.length/12*11; index+=12) {  
            form_array.push(array_clean.slice(0+index, 12+index));         
        }
        form_F_LSCF_012(form_array);
    })

    function form_F_LSCF_012(attributes){
        console.log({'Lecturas':JSON.stringify(attributes)});
        $('#F_LSCD0_12_lecturas').dataTable().fnDestroy();
        $.ajax({
            url:"api/F_LSCD_012",
            type:"POST",
            data: {'Lecturas':JSON.stringify(attributes)}, 
            success: function (json){
                var o = json['Lecturas'];  
                crear_F_LSCD0_12_lecturas(o);       
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            },
        });  
    }

    function crear_F_LSCD0_12_lecturas(request){
        $('#F_LSCD0_12_lecturas').dataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ],
            data:request,
            columns:[
                {"data":"tasa_dosis"},
                {"data":"lectura_1"},                        
                {"data":"lectura_2"},
                {"data":"lectura_3"},
                {"data":"lectura_4"},
                {"data":"lectura_5"},
                {"data":"lectura_6"},
                {"data":"lectura_7"},
                {"data":"lectura_8"},
                {"data":"lectura_9"},
                {"data":"lectura_10"},
                {"data":"lectura_minima"},
                {"data":"unidad"},
                {"data":"promedio"},
                {"data":"d_s"},
                {"data":"c_v"},
                {"data":"factor_k"},
                {"data":"var_resp"},
                {"data":"incert"},
                {"data":"test"},
            ]
        }).api();
        $('#id_li_Insert_Cal_Mon').show(500);
    }
});


