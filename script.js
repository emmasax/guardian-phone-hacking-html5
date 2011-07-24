$(function() {
	$('body').addClass('js-on');
	var info = $('.info');
	$('h3').mouseenter(function(){
		var $this = $(this);
		info.find('ul, h3').remove();
		$('.highlighted').removeClass('highlighted');
		$this.addClass('highlighted');
		
		$this.find('span').clone().appendTo(info);
		info.find('span').wrap('<h3 />');
		$this.next('ul').clone().appendTo(info);
		
		var temp = $this.parent().attr('data-refs');
		var web = temp.split(' ');

		var everyone = $('li[data-refs]');
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
	
	
});
