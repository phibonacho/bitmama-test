'use strict';

import NewsSection from '../newssection';

describe('NewsSection View', function() {

  beforeEach(() => {
    this.newsSection = new NewsSection();
  });

  it('Should run a few assertions', () => {
    expect(this.newsSection);
  });

});
