$('*[data-link^="/"]').click(function(){
    window.location.href = $(this).data('link')
    })