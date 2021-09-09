'use strict';

import Chisiamotext from '../chisiamotext';

describe('Chisiamotext View', function() {

  beforeEach(() => {
    this.chisiamotext = new Chisiamotext();
  });

  it('Should run a few assertions', () => {
    expect(this.chisiamotext);
  });

});
