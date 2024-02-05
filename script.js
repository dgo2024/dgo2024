document.addEventListener("DOMContentLoaded", function(){
// make it as accordion for smaller screens
if (window.innerWidth < 992) {

  // close all inner dropdowns when parent is closed
  document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
    everydropdown.addEventListener('hidden.bs.dropdown', function () {
      // after dropdown is hidden, then find all submenus
        this.querySelectorAll('.submenu').forEach(function(everysubmenu){
          // hide every submenu as well
          everysubmenu.style.display = 'none';
          console.log('12345')
        });
    })
  });

  document.querySelectorAll('.dropdown-menu a').forEach(function(element){
    element.addEventListener('click', function (e) {
        const nextEl = this.nextElementSibling;
        const parentEl = this.parentElement.parentElement;
        console.log('nextEl:' + nextEl.classList+', parentEl:'+ parentEl.classList)
        if(nextEl && nextEl.classList.contains('submenu')) {
          console.log('123')
          e.preventDefault();
          if(nextEl.style.display === 'none'){
            nextEl.style.display = 'block';
            parentEl.style.display = 'block';
          } else {
            nextEl.style.display = 'none';
            console.log('1234')
          }

        }
    });
  })
}
// end if innerWidth
}); 
// DOMContentLoaded  end

