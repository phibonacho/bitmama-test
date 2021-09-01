// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import { Link } from '../_modules/link/link';
import Header from '../_modules/header/header';
$(() => {
  new Link(); // Activate Link modules logic,
  new Header();
  console.log('Welcome to Yeogurt!');
});
