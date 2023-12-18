function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('is-active');
    
    const navbarLinks = dropdown.querySelector('.navbar-start');
    navbarLinks.style.display = navbarLinks.style.display === 'none' ? 'flex' : 'none';

    const menuButton = dropdown.querySelector('.navbar-burger');
    menuButton.style.display = menuButton.style.display === 'none' ? 'block' : 'none';
  }
  
        // Displaying Logo
        const logoElement = document.querySelector('.logo');
        const logoHTML = '<h1 class="logo-txt"><span class="span">Bori</span>Fan</h1>';
        logoElement.innerHTML = logoHTML;

        // Displaying Navigation
        const navElement = document.querySelector('.nav');
        const navHTML = 
        <ul class="nav__gul">
        <li class="nav__gul__lipop"><a href="./index.html" class="nav__gul__alibo">home</a></li>
        <li  class="nav__gul__lipop"><a href="./about.html" class="nav__gul__alibo">about me</a></li>
        <li  class="nav__gul__lipop"><a href="./accomp.html" class="nav__gul__alibo">accomplishment</a></li>
        <li  class="nav__gul__lipop"><a href="./favorite.html" class="nav__gul__alibo"> my favorite</a></li>
        <li  class="nav__gul__lipop"><a href="./contact.html" class="nav__gul__alibo">contact</a></li>
    </ul>
            `;
        navElement.innerHTML = navHTML;
  
