(function() {
	'use strict';

	var $link = $('a[href^="#"]'),
		bg = '<div class=content-bg></div>',
		btn_el = '<button type="button" class="close"><img src="./static/images/close.png" alt=""></button>';

	$link.on('click', function() {
		var $el = $(this),
			$target = $($el.attr('href')),
		    bg_append = $target.filter('.popup-box').prepend(bg),
		    btn_append = $target.find('.content').append(btn_el),
			$content_bg = $target.find('.content-bg'),
			$close_btn = $target.find('.close');

		$target.stop().fadeIn(500);

		$close_btn.on('click', close);
		$content_bg.on('click', close);
		$(window).on('keydown.close', function(event){
			var key_code = event.keyCode;
			if(key_code === 27) {
				close();
			}
		});

		function close(){
			$el.focus();
			$target.stop().fadeOut({
				'duration': 500,
				'complete': function() {
					$(this).find($content_bg).remove();
				}
			})
			$close_btn.remove();
			$(window).off('keydown.close');
		}
	});

	function Kevin($selector) {
		this.init($selector);
		this.event();

		return this;
	}
	Kevin.prototype.init = function($selector) {
		this.$target = $($selector);
		this.$age = this.$target.find('.age');
		this.$sex = this.$target.find('.sex');
		this.$job = this.$target.find('.job');
	}
	Kevin.prototype.event = function() {

		var objThis = this;

		this.$target.on('click', function() {
			console.log(objThis);
			console.log($(this));
		});

	}

	var kevin_info = new Kevin('.kevin-info');
})();