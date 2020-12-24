$(document).ready(function () {
	// 스크롤 바로이동
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$("#topPage").fadeIn();
		} else {
			$("#topPage").fadeOut();
		}
	});

	// scroll body to 0px on click
	$("#btnTop").bind("click", function (e) {
		// Prevents the default action to be triggered.
		e.preventDefault();

		$("body,html").animate(
			{
				scrollTop: 0,
			},
			500
		);
	});

	// 스크롤 바로이동
	$(".anchor").click(function (e) {
		// Prevents the default action to be triggered.
		e.preventDefault();

		$("html,body").animate(
			{
				scrollTop: $(this.hash).offset().top - 120,
			},
			500
		);
	});

	// gnb
	$("#btGnb, #btGnbClose, .fixmasking").bind("click", function (e) {
		e.preventDefault();
		let allMenu = $("#wrapper");

		if (allMenu.hasClass("gnbopen") === false) {
			$("body").addClass("noscroll");
			allMenu.addClass("gnbopen");
		} else {
			$("body").removeClass("noscroll");
			allMenu.removeClass("gnbopen");
		}
	});

	// 탭메뉴
	$(".tablist .tab > a").bind("click", function (e) {
		e.preventDefault();

		let $status = $(this).parent(".tab");
		let $index = $status.attr("aria-controls");

		if ($status.hasClass("current") == false) {
			$(".tablist .tab").removeClass("current").attr("aria-selected", "false");
			$status.addClass("current").attr("aria-selected", "true");
		}

		$(".tabpanel").addClass("noshow");
		$(".tab_content #" + $index).removeClass("noshow");
	});

	$(".popupwrap").popup();
});
