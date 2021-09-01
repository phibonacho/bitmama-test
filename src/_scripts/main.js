// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import { Link } from '../_modules/link/link';
import Header from '../_modules/header/header';
import HeroBanner from '../_modules/herobanner/heroBanner';
import NewsSection from '../_modules/newssection/newsSection';
import TeamSection from '../_modules/teamsection/teamSection';
import PartnerSection from '../_modules/partnersection/partnerSection';


$(() => {
  new Link(); // Activate Link modules logic,
  new Header();
  new HeroBanner();
  new NewsSection();
  new TeamSection();
  new PartnerSection();

  console.log('Welcome to Yeogurt!');
});
