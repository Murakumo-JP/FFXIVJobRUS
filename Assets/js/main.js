// Doom
$("#jq_tank").load("RoleActions/Tank.html")
$("#jq_healer").load("RoleActions/Healer.html")
$("#jq_meleeDPS").load("RoleActions/MeleeDPS.html")
$("#jq_patch").load("Other/Path.html")
/* Preloader */
document.body.onload = function() {
	setTimeout(function(){
		var preloader = document.getElementById("page-preloader");
		var loader = document.getElementById("page-loader");
		if(!preloader.classList.contains("done"))
		{
			preloader.classList.add("done");
			loader.classList.add("loader_none");
			$('body').css('overflow', 'visible');
		}
	}, 1500);
}
// Back to Top
function backToTop() {
	let button = $(".nome_app_top")
 
	$(window).on("scroll", () => {
	  if ($(this).scrollTop() >= 200) {
		 button.fadeIn()
	  } else {
		 button.fadeOut()
	  }
	})
 
	button.on("click", e => {
	  e.preventDefault()
	  $("html").animate({ scrollTop: 0 }, 1000)
	})
 }
 
 backToTop()