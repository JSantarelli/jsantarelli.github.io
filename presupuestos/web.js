(function($) {
  
    $(document).ready( function() {
  
      $('.devices').on('click', 'a', function() {
        var device_selected = $(this).attr('href').replace('#', '');
        
        $('.device').removeClass().addClass('device device-' + device_selected);
        
      })
      
    });
  
  })(jQuery);