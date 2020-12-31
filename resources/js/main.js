$(document).ready(function () {
	$("#aniPoint1").waypoint(
		function () {
			$("#aniPoint1").addClass("anistart");
		},
		{ offset: "80%" }
	);
	$("#aniPoint2").waypoint(
		function () {
			$("#aniPoint2").addClass("anistart");
		},
		{ offset: "80%" }
	);
	$("#aniPoint3").waypoint(
		function () {
			$("#aniPoint3").addClass("anistart");
		},
		{ offset: "80%" }
	);
	$("#aniFooter").waypoint(
		function () {
			$("#aniFooter").addClass("anistart");
		},
		{ offset: "80%" }
	);

	$("#mainSlider").slick({
		dots: true,
		// adaptiveHeight: true,
		arrows: false,
	});
});
