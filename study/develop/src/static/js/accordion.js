/*
var defaults	= {
	easing       : 'easeOutQuint',
	speed        : 400,
	activeClass  :'on',
	titleSelector:'.q',
	contSelector :'.a',
	collapsibel  : false,
	callback     : function() {
		console.log('slideUp');
	},
	onOpen       : function($item) {}
};

$.fn.accordion = function(opt) {

		if(this.length == 0) return this;

		// console.log(this.length + '개 존재하고 있습니다.');

		if(this.length > 1) {
			this.each(function(){ $(this).accordion(opt); });
			return this;
			//opt를 넘겨주는데 retrun this가 왜 필요한가?
		}

		var folder = {},
			el   = this;

		// console.log(el);

		var init = function() {
			folder.set   = $.extend({}, defaults, opt);
			folder.$el = $(el);
			folder.$q  = folder.$el.find(folder.set.titleSelector);
			folder.$a  = folder.$el.find(folder.set.contSelector);
			folder.$items = folder.$q.parent();
			folder.$cur = folder.$el.filter('.'+folder.set.activeClass);

			folder.$q.css('cursor', 'pointer').attr('tabindex', 0);
			folder.$q.on('click keypress.open', function(event) {

				if( event.type == 'click' || event.which == 13) {
					// console.log(event.which);
					open($(this).parent());
				}
			});

            folder.$cur.length && open(folder.$cur.eq(0));
            folder.$items.not(folder.$cur).find(folder.set.contSelector).hide();
		}

		var open = function($target) {
			var current = $target.hasClass(folder.set.activeClass);

            folder.$items.each(function() {
                var $this = $(this);

                $this.data('open', function() {
                    open($this);
                });
            });

			folder.$items.removeClass(folder.set.activeClass);
			folder.$a.stop().slideUp({
				duration: folder.set.speed,
				// easing: folder.set.easing,
				complete: function() {
					folder.set.callback();
					folder.$a.css('zoom', 1);
				}
			});

			if (current) return;

			$target.addClass(folder.set.activeClass).find(folder.set.contSelector).stop().slideDown({
				duration: folder.set.speed,
				// easing: folder.set.easing,
				complete: function() {
					folder.set.callback();
					folder.set.onOpen($target);
				}
			});
		}

	init();

	return this;
}
*/


/* 혼자 힘으로 고고
--------------------------------------------------*/
(function($){
	var set = {
		speed  	 : 400,
		easing 	 : 'easeOutQuint',
		cSelect	 : 'on',
		qSelect	 : '.q',
		aSelect	 : '.a',
		callback : function() {}
	};

	$.fn.accordion = function(opt) {

		if (this.length == 0) return;

		if (this.length > 1) {

			//아코디언 설정값 수정시 each문 으로 셋팅
			this.each(function(){
				$(this).accordion(opt);
			});
			return this;
		}

		var accord = {},
			el = this;

		//init
		var init = function() {
			accord._set = $.extend({}, set, opt);
			accord.$el = $(el);
			accord.$q = el.find(accord._set.qSelect);
			accord.$a = el.find(accord._set.aSelect);
			accord.$items = accord.$q.parent();

			accord.$q.css('cursor', 'pointer').attr('tabindex', 0);
			accord.$q.on('click.open keypress.open', function(event) {
				if( event.type == 'click' || event.which == 13 ) {
					open( $(this).parent() );
				}
			});
			accord.$a.hide();
		}
		init();

		var open = function($target) {
			var current = $target.hasClass(accord._set.cSelect);

			accord.$items.removeClass(accord._set.cSelect);
			accord.$a
				.stop(true, true).slideUp({
					duration : accord._set.speed
				});

			if(current) return;

			$target
				.addClass(accord._set.cSelect)
				.find(accord._set.aSelect)
				.stop(true, true).slideDown({
					duration : accord._set.speed,
					complete : function() {
						accord._set.callback,
						$('body').stop(true, true).animate({
							scrollTop: $(this).offset().top - 50
						});
					}
				});
		}
		return this;
	}

	$('.folder').accordion({
		speed: 300,
		qSelect : '.q-test',
		aSelect : '.a-test',
		callback : function() {
			console.log('callback 함수 실행문');
		}
	});
})(jQuery);