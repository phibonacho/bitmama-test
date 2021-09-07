'use strict';

import MobileMenu from '../mobilemenu';

describe('MobileMenu View', function() {

  beforeEach(() => {
    this.mobileMenu = new MobileMenu();
  });

  it('Should run a few assertions', () => {
    expect(this.mobileMenu);
  });

});
