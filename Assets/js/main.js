// Role Actions
$("#jq_tank").load("RoleActions/Tank.html")
$("#jq_healer").load("RoleActions/Healer.html")

$("#jq_patch").load("PathNotes/Path.html")
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