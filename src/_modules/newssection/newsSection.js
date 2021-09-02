'use strict';

import Glide from '@glidejs/glide'

export default class NewsSection {
  constructor() {
    this.name = 'newsSection';
    console.log('%s module', this.name.toLowerCase());

    new Glide('.glide', {
      type: 'carousel',
      perView: 3,
    }).mount()
  }
}


