'use strict';

export default class Header {

  constructor() {
    this.name = 'Header';
    console.log('%s module', this.name.toLowerCase());

    
    document.getElementById('mobile-menu-button').addEventListener('click', (event) => {
      let mobileMenu = document.getElementById('mobile-menu');

      if(mobileMenu.style.display === 'none') {
        mobileMenu.style.display = 'block';
        setTimeout(() => {
          mobileMenu.classList.toggle('active');
        }, 200);
      } else {
        mobileMenu.classList.toggle('active');
        setTimeout(() => {
          mobileMenu.style.display = 'none';
        }, 500);
      }
      document.documentElement.classList.toggle('stop-scroll');
    });


    
    let dropdowns = document.querySelectorAll('.has-submenu'); 
    dropdowns.forEach(dropdown => dropdown.addEventListener('click',  (event) => {
      dropdown.nextElementSibling.firstElementChild.classList.toggle('active');
    }));

  }
  
}



