'use strict';

import HeroBanner from '../herobanner';

describe('HeroBanner View', function() {

  beforeEach(() => {
    this.heroBanner = new HeroBanner();
  });

  it('Should run a few assertions', () => {
    expect(this.heroBanner);
  });

});
