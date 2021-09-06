// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';

import Header from '../_modules/header/header';
import MobileMenu from '../_modules/mobilemenu/mobileMenu';
import HeroBanner from '../_modules/herobanner/heroBanner';
import NewsSection from '../_modules/newssection/newsSection';
import TeamSection from '../_modules/teamsection/teamSection';
import PartnerSection from '../_modules/partnersection/partnerSection';


$(() => {
  new Header();
  new MobileMenu();
  new HeroBanner();
  new NewsSection();
  new TeamSection();
  new PartnerSection();

  console.log('Welcome to Yeogurt!');
});
