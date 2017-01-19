/*
	Project : pulmuone

	ref :
	http://tomasz.janczuk.org/2013/05/multi-line-strings-in-javascript-and.html
	http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript/5571069#5571069
*/

function hereDoc(f) {
	var scriptEls = document.getElementsByTagName('script'),
		scriptSrc = scriptEls[scriptEls.length - 1].src,
		isIdx = /\?index$/.test(scriptSrc);

	return f.toString().
		replace(/^[^\/]+\/\*!?/, '').
		replace(/\*\/[^\/]+$/, '').
		replace(isIdx?/="\.\.\//g:'', isIdx?'="./':'');

	//'/
}

var IG = window.IG || {};
IG.DEV = true;

var legacy_html = hereDoc(function () {/*
	<p>사용중인 브라우저는 지원이 중단된 브라우저입니다.<br>
	<a href="http://windows.microsoft.com/ko-kr/internet-explorer/ie-11-worldwide-languages" target="_blank">최신 버전</a>으로 업그레이드하시거나
	<a href="https://www.google.com/intl/ko/chrome/browser/" target="_blank">Chrome(크롬)</a>,
	<a href="https://www.mozilla.org/ko/firefox/new/" target="_blank">FireFox(파이어폭스)</a>
	같은 모던 브라우저를 이용해 주세요.</p>
	<button type="button" id="close-browser-guide" class="close-browser-guide">닫기<i class="icon"></i></button>
*/});

var header_html = hereDoc(function () {/*
*/});

var footer_html = hereDoc(function () {/*
*/});

if ( document.getElementById('header') != undefined ) {
	// document.getElementById('header').innerHTML = header_html;
}

if ( document.getElementById('footer') != undefined ) {
	// document.getElementById('footer').innerHTML = footer_html;
}