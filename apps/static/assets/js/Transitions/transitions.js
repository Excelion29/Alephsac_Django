$("#url_SECTION_FLSCD_012").on("click", function(){
    // Desaparecer
    $('#F_LSCD0_03_dosis').hide(1000);
    $('#Insert_Cal_Mon').hide(1000);

    // Activar link
    $('#href_url_SECTION_FLSCD_03').removeClass("active");
    $('#url_SECTION_Insert_Cal_Mon').removeClass("active");
    $('#url_SECTION_FLSCD_012').addClass("active");

    // Link seleccionado
    $('#PAGE_F_LSCD0_12_LECTURAS').show(1000);
  });

  $("#url_SECTION_Insert_Cal_Mon").on("click", function(){

    // Desaparecer
    $('#PAGE_F_LSCD0_12_LECTURAS').hide(1000);
    $('#F_LSCD0_03_dosis').hide(1000);

    // Activar link
    $('#href_url_SECTION_FLSCD_03').removeClass("active");
    $('#url_SECTION_FLSCD_012').removeClass("active");
    $('#url_SECTION_Insert_Cal_Mon').addClass("active");

    // Link seleccionado
    $('#Insert_Cal_Mon').show(1000);
  });

  $("#url_SECTION_FLSCD_03").on("click", function(){

    // Desaparecer
    $('#PAGE_F_LSCD0_12_LECTURAS').hide(1000);
    $('#Insert_Cal_Mon').hide(1000);
    
    // Activar link
    $('#href_url_SECTION_FLSCD_03').addClass("active");
    $('#url_SECTION_FLSCD_012').removeClass("active");
    $('#url_SECTION_Insert_Cal_Mon').removeClass("active");
    
    // Link seleccionado
    $('#F_LSCD0_03_dosis').show(1000);
  });


