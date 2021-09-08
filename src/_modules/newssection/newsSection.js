'use strict';

import Glide from '@glidejs/glide'
import simpleParallax from 'simple-parallax-js';

export default class NewsSection {
  constructor() {
    this.name = 'newsSection';
    console.log('%s module', this.name.toLowerCase());

    new Glide('.glide', {
      type: 'carousel',
      perView: 3,
      breakpoints: {
        1024: {
          perView: 2,
          gap: 30
        },
        767: {
          perView: 1,
          gap: 20
        }
      }
    }).mount()

    new simpleParallax(document.getElementById('flare-decoration'), {
      orientation: "down",
      overflow: true,
    });

    new simpleParallax(document.getElementById('particle-1'), {
      orientation: "down",
      overflow: true,
      scale: 1.1
    });

    new simpleParallax(document.getElementById('particle-2'), {
      orientation: "down",
      overflow: true,
      scale: 1.2
    });

    new simpleParallax(document.getElementById('particle-3'), {
      orientation: "down",
      overflow: true
    });


  }
}


