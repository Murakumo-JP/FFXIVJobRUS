function openTab(evt, TabName) {
   // Declare all variables
   var i, TabPve, TabPvp;
 
   // Get all elements with class="tabcontent" and hide them
   TabPve = document.getElementsByClassName("job_skil_db");
   for (i = 0; i < TabPve.length; i++) {
      TabPve[i].style.display = "none";
   }
 
   // Get all elements with class="tablinks" and remove the class "active"
   TabPvp = document.getElementsByClassName("job_skil_db_pvp");
   for (i = 0; i < TabPvp.length; i++) {
      TabPvp[i].className = TabPvp[i].className.replace("active", "");
   }
 
   // Show the current tab, and add an "active" class to the button that opened the tab
   document.getElementById(TabName).style.display = "block";
   evt.currentTarget.className += "active";
 }