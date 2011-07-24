$(function() {
	$('body').addClass('js-on');
	var info = $('.info');
	var everyone = $('li[data-refs]');

	everyone.mouseenter(function(){
		var $this = $(this);
		info.find('ul, h3').remove();
		$('.highlighted').removeClass('highlighted');
		$this.addClass('highlighted');
		
		$this.find('h3').clone().appendTo(info);
		$this.find('ul').clone().appendTo(info);
		
		var temp = $this.attr('data-refs');
		var web = temp.split(' ');

		// console.log(everyone);


		for(var i=0; i < web.length; i++) {
			

			console.log('items relationships: ' + web[i]);
			
			everyone.each(function() {
				if($(this).hasClass(web[i])) {
					$(this).addClass('highlighted');
				}
			});

		}
	});
	

	everyone.eq(0).trigger('mouseenter');
	
});
