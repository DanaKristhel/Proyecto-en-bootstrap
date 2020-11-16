      $(function() {
        $("[data-toggle='tooltip']").tooltip();
        $("[data-toggle=popover]").popover();
        $('.carousel').carousel({
          interval: 2000,
        });
      });
      $('#contacto').on('show.bs.modal', function(e){
      console.log('modal visible');
      $('#contactoBtn1').removeClass('btn-outline-success');
      $('#contactoBtn1').addClass('btn-primary');
      $('#contactoBtn1').prop('disabled', true); 
  });
  $('#contacto').on('hidden.bs.modal', function(e){
    console.log('el modal contacto se ocultó');
    $('#contactoBtn1').prop('disabled', false);
  });
  $('#contacto').on('hide.bs.modal', function(e){
    console.log('el modal contacto se oculta');
  });
  $('#contacto').on('shown.bs.modal', function(e){
    console.log('el modal contacto se mostró');
  });