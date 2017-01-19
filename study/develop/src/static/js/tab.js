/* tab.js
--------------------------------------------------*/
(function($){
	// 0. 필요한 클래스 셋팅
	// 1. 레이아웃 -> item select -> func

	// 2. 해당 item들을 숨긴다.(  )
	// 3. 탭 메뉴 클릭시 on클래스를 추가한다.
	// 4. 탭 메뉴 클릭시 한 개만 보여준다.
	// 5. 탭 메뉴 클릭상태에서 클락한 위치로 이동 시킨다.
	// 6. 탭 메뉴 클릭시 foucs를 해당 레이아웃으로 이동 시킨다.

	var set = {
		tabCurrent : 'is-current',
		speed : '0',
		tabSection : '.tab',
		tabMenu : '.menu',
		tabItems : '.item',
		tabId : 'a[href^="#"]',
		tabArrow: null
	}

	$.fn.tabmenu = function(option) {

		var tab = {},
			el = this;

		var init = function() {
			tab.info = $.extend({}, set, option);
			tab.$el = $(el);
			tab.$li = tab.$el.find('li');
			tab.$item = tab.$el.find(tab.info.tabItems);

			tab.$item.hide();

			// class on을 가지고 있지 않다면 추가
			if(!tab.$li.hasClass(tab.info.tabCurrent)) {
				tab.$li.eq(0).addClass(tab.info.tabCurrent);
				tab.$item.eq(0).stop(true, true).fadeIn().attr('tabindex', 0).focus();
			}

			tab.$li.on('click.tab', function(event){
				var $el = $(this);

				// current를 가지고 있다면 click작동 중지
				if($el.hasClass(tab.info.tabCurrent)) {
					return false;
				}
				// href에 id가 없을 때 클릭 강제 미작동
				if( $el.find(tab.info.tabId).length == 0 ) return;
				event.preventDefault();

				tab.$li.removeClass(tab.info.tabCurrent);
				$el.addClass(tab.info.tabCurrent);

				play();
			});

		};
		init();

		function play() {
			var $li_link = $(tab.$li.filter('.'+tab.info.tabCurrent).find(tab.info.tabId)),
				item_id = $($li_link.attr('href')),
				top = tab.$li.offset().top;

			tab.$item.hide();

			item_id.stop(true, true).fadeIn({
				duration : tab.info.speed,

				complete : function() {
					$('body').stop(true, true).animate({
						scrollTop : top
					});
					item_id.attr('tabindex', 0).focus();
				}
			});
		}
		return this;
	}

	$('.tab').tabmenu();

	$('.test-tab').tabmenu({
		tabSection : '.test-tab',
		tabMenu : '.test-menu',
		tabItems : '.test-item'
	});
})(jQuery);