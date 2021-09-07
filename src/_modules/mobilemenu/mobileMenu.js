'use strict';

export default class MobileMenu {
  constructor() {
    this.name = 'mobileMenu';
    console.log('%s module', this.name.toLowerCase());

    let content = document.getElementById('dropdown-content');
    content.addEventListener('click', (event) => event.stopPropagation());

    document.getElementById('dropdown-toggle').addEventListener('click', (event) => {

      if(content.style.display === 'none') {
        content.style.display = 'flex';
        setTimeout(() => {
          content.classList.toggle('dropdown__options--active');
        }, 200);
      } else {
        content.classList.toggle('dropdown__options--active');
        setTimeout(() => {
          content.style.display = 'none';
        }, 500);
      }
    })
  }
}
