// Doom Load
$(document).ready(function () {
	$('#jq_tank').load('RoleActions/Tank.html');
	$('#jq_healer').load('RoleActions/Healer.html');
	$('#jq_meleeDPS').load('RoleActions/MeleeDPS.html');
	$('#jq_physicalDPS').load('RoleActions/PhysicalDPS.html');
	$('#jq_magicalDPS').load('RoleActions/MagicalDPS.html');
	$('#jq_menu').load('Other/MenuJob.html');
	$('#jq_menu_cg').load('Other/MenuCG.html');
	$('#jq_actions').load('Other/Actions.html');
	$('#jq_patch').load('Other/Path.html');
});
/* Preloader */
document.body.onload = function () {
	setTimeout(function () {
		var preloader = document.getElementById('page-preloader');
		var loader = document.getElementById('page-loader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
			loader.classList.add('loader_none');
			$('body').css('overflow', 'visible');
		}
		var id = window.location.hash;
		//console.log(typeof id);
		if (id != '') {
			activate_tab(id.substring(1));
		}
	}, 500);
};
// Smooth Scrolling
var $page = $('html, body');
$('a[href*="#"]').click(function () {
	$page.animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top - 48,
		},
		1500
	);
	return false;
});
// Open JobMenu
$(document).ready(function () {
	$('.nav_floating_icon').click(() => {
		$('.nav_floating_list').fadeToggle();
	});
});
// Tabs
function activate_tab(id) {
	$('.js-tab-trigger[data-tab="' + id + '"]').toggleClass('active', true);
	$('.js-tab-trigger:not([data-tab="' + id + '"])').toggleClass('active', false);

	$('.js-tab-content[data-tab="' + id + '"]').toggleClass('active', true);
	$('.js-tab-content:not([data-tab="' + id + '"])').toggleClass('active', false);
}
$('.js-tab-trigger').click(function () {
	var id = $(this).attr('data-tab');
	activate_tab(id);
	window.location.hash = '#' + id;
});
// Back to Top
function backToTop() {
	let button = $('.nome_app_top');

	$(window).on('scroll', () => {
		if ($(this).scrollTop() >= 200) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({ scrollTop: 0 }, 1000);
	});
}

backToTop();