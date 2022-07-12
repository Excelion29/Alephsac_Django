
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
                $('#SECTION_FLSCD_03_CONTENT').show(1000);    
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
        $('#F_LSCD0_12_lecturas').dataTable().fnDestroy();
        $.ajax({
            url:"api/F_LSCD_012",
            type:"POST",
            data: {'Lecturas':JSON.stringify(attributes)}, 
            success: function (json){
                var o = json['Lecturas'];  
                crear_F_LSCD0_12_lecturas(o); 
                crear_Calibraciones(o);      
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

    function crear_Calibraciones(request){ 
        var ordinales = ['PRIMER', 'SEGUNDO', 'TERCER', 'CUARTO', 'QUINTO', 'SEXTO', 'SÉPTIMO', 'OCTAVO', 'NOVENO', 'DÉCIMO', 'UNDÉCIMO', 'DUODÉCIMO', 'DÉCIMO TERCER', 'DÉCIMO CUARTO', 'DÉCIMO QUINTO'];
        var cabezales_puntos_de_calibracion = ['Tasa de dosis VCV (µSv/h)','Lectura tasa de dosis del monitor (unidad del monitor)','D.S. lecturas monitor','Lectura mínima del monitor','# Lecturas tomados del monitor','Distancia fuente - monitor(m)'] 
        
        $('#calibraciones_contenedor').html('');
        let  div_contenedor_global = document.getElementById("calibraciones_contenedor");
        
        
        for (let index = 0; index < request.length; index++) {   

            var button = document.createElement('button');
            button.setAttribute('type',"button" );
            button.setAttribute('class',"btn bg-gradient-info btn-block mb-3");
            button.setAttribute('data-bs-toggle',"modal" );
            button.setAttribute('data-bs-target',"#exampleModalLong"+index+''+request[index].unidad);            
            button.appendChild(document.createTextNode(request[index].tasa_dosis+' '+request[index].unidad));


            var div_modal_fade = document.createElement('div');
            div_modal_fade.setAttribute('class',"modal fade");
            div_modal_fade.setAttribute('id',"exampleModalLong"+index+''+request[index].unidad);
            div_modal_fade.setAttribute('tabindex',"-1");
            div_modal_fade.setAttribute('role',"dialog");
            div_modal_fade.setAttribute('aria-labelledby',"exampleModalLongTitle");
            div_modal_fade.setAttribute('aria-hidden','true');

            var div_modal_dialog = document.createElement('div');
            div_modal_dialog.setAttribute('class',"modal-dialog");
            div_modal_dialog.setAttribute('role',"document" );
            div_modal_fade.appendChild(div_modal_dialog);

            var div_modal_content = document.createElement('div');
            div_modal_content.setAttribute('class',"modal-content");
            div_modal_dialog.appendChild(div_modal_content);

            var div_modal_header = document.createElement('div');
            div_modal_header.setAttribute('class',"modal-header");
            div_modal_content.appendChild(div_modal_header);

            var h5 = document.createElement('h5');
            h5.setAttribute('class',"modal-title");
            h5.setAttribute('id',"exampleModalLongTitle");
            h5.appendChild(document.createTextNode(ordinales[index]+' PUNTO DE CALIBRACIÓN'));
            div_modal_header.appendChild(h5);

            var button_click = document.createElement('button');
            button_click.setAttribute('type',"button");
            button_click.setAttribute('class',"btn-close text-dark");
            button_click.setAttribute('data-bs-dismiss',"modal");
            button_click.setAttribute('aria_label',"Close");
            div_modal_header.appendChild(button_click);
            
            var span = document.createElement('span');
            span.setAttribute('aria-hidden','true');
            span.appendChild(document.createTextNode('x'));
            button_click.appendChild(span);

            var div_modal_body = document.createElement('div');
            div_modal_body.setAttribute('class',"modal-body");
            div_modal_content.appendChild(div_modal_body);


            // ANTES DEL AJUSTE 

            // CONTENEDOR GLOBAL
            var div_col_border = document.createElement('div');
            div_col_border.setAttribute('class','col-6 border');
            div_modal_body.appendChild(div_col_border);

            // CONTENEDOR TITLE
            var div_card_body = document.createElement('div');
            div_card_body.setAttribute('class','card-body');            
            div_col_border.appendChild(div_card_body);

            var h6_card_title = document.createElement('h6');
            h6_card_title.setAttribute('class','card-title');
            h6_card_title.appendChild(document.createTextNode('Antes del ajuste'));         
            div_card_body.appendChild(h6_card_title);

            // CONTENEDOR TABLES DETAILS 1
            var div_card_check1 = document.createElement('div');
            div_card_check1.setAttribute('class','card-deck');       
            div_col_border.appendChild(div_card_check1);

            var div_card1 = document.createElement('div');
            div_card1.setAttribute('class','card');   
            div_card_check1.appendChild(div_card1);

            var table1 = document.createElement('table');
            table1.setAttribute('class','table');

            for (let item_cabezal = 0; item_cabezal < cabezales_puntos_de_calibracion.length; item_cabezal++) {
                var tr1 = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.setAttribute('scope','row');   
                td1.setAttribute('class','text-left');  
                td1.appendChild(document.createTextNode(cabezales_puntos_de_calibracion[item_cabezal]));  
                tr1.appendChild(td1);

                td2.setAttribute('scope','row');   
                td2.appendChild(document.createTextNode(request[index].tasa_dosis));  
                tr1.appendChild(td2);

                table1.appendChild(tr1);
            }
            div_card1.appendChild(table1);

            








            var div_modal_footer= document.createElement('div');
            div_modal_footer.setAttribute('class',"modal-footer");
            div_modal_content.appendChild(div_modal_footer);

            var button_close = document.createElement('button');
            button_close.setAttribute('type',"button");
            button_close.setAttribute('class',"btn bg-gradient-secondary");
            button_close.setAttribute('data-bs-dismiss',"modal");
            button_close.appendChild(document.createTextNode('Close'));
            div_modal_footer.appendChild(button_close);

            
            div_contenedor_global.appendChild(button);
            div_contenedor_global.appendChild(div_modal_fade);
        }
    }
});


