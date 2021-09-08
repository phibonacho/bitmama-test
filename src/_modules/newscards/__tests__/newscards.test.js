'use strict';

import Newscards from '../newscards';

describe('Newscards View', function() {

  beforeEach(() => {
    this.newscards = new Newscards();
  });

  it('Should run a few assertions', () => {
    expect(this.newscards);
  });

});
