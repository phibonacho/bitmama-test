'use strict';

import Shopbanner from '../shopbanner';

describe('Shopbanner View', function() {

  beforeEach(() => {
    this.shopbanner = new Shopbanner();
  });

  it('Should run a few assertions', () => {
    expect(this.shopbanner);
  });

});
