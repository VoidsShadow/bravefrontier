$('#nav-toggle').on('click', function () {
    e.preventDefault();
    this.classList.toggle('active');
    if ($('#overlayC').hasClass('close')) {
    	$('#overlayC').removeClass('close');
    	$('#overlayC').addClass('open');
    }
    else {
	    $('#overlayC').removeClass('open');
    	$('#overlayC').addClass('close');
    }
});
