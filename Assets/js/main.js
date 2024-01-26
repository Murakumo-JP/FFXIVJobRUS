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