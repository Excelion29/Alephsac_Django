
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
        div = document.getElementById("calibraciones_contenedor");
        $('#calibraciones_contenedor').html('');
        ul = document.createElement("ul");
        ul.setAttribute("class","nav nav-pills nav-fill p-1 bg-transparent");
        ul.setAttribute("id","ul_calibraciones_contenedor");
        ul.setAttribute("role","tablist");
        div.appendChild(ul);
        ul.innerHTML="<li class='nav-item' style='display:none;'><a class='nav-link mb-0 px-0 py-1 active' data-bs-toggle='tab' href='javascript:;' role='tab' aria-controls='overview' aria-selected='true'><svg class='text-dark' width='16px' height='16px' viewBox='0 0 42 42' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Basic-Elements' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Rounded-Icons' transform='translate(-2319.000000, -291.000000)' fill='#FFFFFF' fill-rule='nonzero'><g id='Icons-with-opacity' transform='translate(1716.000000, 291.000000)'><g id='box-3d-50' transform='translate(603.000000, 0.000000)'><path class='color-background' d='M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z' id='Path'></path><path class='color-background' d='M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z' id='Path' opacity='0.7'></path><path class='color-background' d='M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z' id='Path' opacity='0.7'></path></g></g></g></g></svg><span class='ms-1'>Overview</span></a></li>";
        for (let index = 0; index < request.length; index++) {                
            li = document.createElement("li");
            li.setAttribute("class","nav-item");
            ul.appendChild(li);
    
            a = document.createElement("a");
            a.setAttribute("class","nav-link mb-0 px-0 py-1");
            a.setAttribute("data-bs-toggle","tab"); 
            a.setAttribute("href","javascript:;"); 
            a.setAttribute("role","tab");
            a.setAttribute("aria-controls","teams"); 
            a.setAttribute("aria-selected","false");
            li.appendChild(a);
    
            svg = document.createElement("svg");
            svg.setAttribute("class","text-dark");
            svg.setAttribute("width","16px"); 
            svg.setAttribute("height","16px"); 
            svg.setAttribute("viewBox","0 0 "+(42+index+2)+""+(42+index+2));
            svg.setAttribute("version","1.1"); 
            svg.setAttribute("xmlns",'http://www.w3.org/2000/svg');
            svg.setAttribute("xmlns:xlink",'http://www.w3.org/1999/xlink');
            a.appendChild(svg);
    
            span = document.createElement("span");
            span.setAttribute("class","ms-1");
            span.appendChild(document.createTextNode('Tasa de dosis VCV (µSv/h) '+request[index].tasa_dosis) );
            a.appendChild(span);
    
            title = document.createElement('title');
            title.appendChild(document.createTextNode('document'+request[index].tasa_dosis) );
            svg.appendChild(title);
    
            g = document.createElement("g");
            g.setAttribute("id","Basic-Elements");
            g.setAttribute("stroke","none"); 
            g.setAttribute("stroke-width","1"); 
            g.setAttribute("file","none");
            g.setAttribute("fill-rule","evenodd"); 
            svg.appendChild(g);
    
            g1 = document.createElement("g");
            g1.setAttribute("id","Rounded-Icons");
            g1.setAttribute("transform","translate(-1870.000000, -591.000000)"); 
            g1.setAttribute("fill","#FFFFFF"); 
            g1.setAttribute("fill-rule","nonzero");
            g.appendChild(g1);
    
            g2 = document.createElement("g");
            g2.setAttribute("id","Icons-with-opacity");
            g2.setAttribute("transform","translate(1716.000000, 291.000000)"); 
            g1.appendChild(g2);
    
            g3 = document.createElement("g");
            g3.setAttribute("id","document"+request[index].tasa_dosis);
            g3.setAttribute("transform","translate(154.000000, 300.000000)"); 
            g2.appendChild(g3);
    
            path = document.createElement("path");        
            path.setAttribute("class","color-background");
            path.setAttribute("d","M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"); 
            path.setAttribute("id","Path");
            path.setAttribute("opacity","0.603585379");
            g3.appendChild(path);
    
            path1 = document.createElement("path");
            path1.setAttribute("class","color-background");
            path1.setAttribute("d","30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"); 
            path1.setAttribute("id","Shape");
            g3.appendChild(path1);
        }
    }
});


