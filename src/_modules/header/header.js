'use strict';

export default class Header {
  constructor() {
    this.name = 'Header';
    console.log('%s module', this.name.toLowerCase());

    document.getElementById('mobile-menu-button').addEventListener('click', (event) => {
      document.getElementById('mobile-menu').classList.toggle('active');
      document.documentElement.classList.toggle('stop-scroll');
    });
  }
}



