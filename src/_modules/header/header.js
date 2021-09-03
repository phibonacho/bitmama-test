'use strict';

export default class Header {
  constructor() {
    this.name = 'Header';
    console.log('%s module', this.name.toLowerCase());
  }
}


/*document.addEventListener('DOMContentLoaded', function () {
  var dropdownItem = document.querySelector('.dropdown-item');
  var dropdown = document.querySelector('.dropdown');

  dropdownItem.addEventListener('mouseenter', function (e) {
      dropdown.classList.add('dropdown-show');
  });
  dropdownItem.addEventListener('mouseleave', function () {
      dropdown.classList.remove('dropdown-show');
  })

})*/