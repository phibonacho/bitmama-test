'use strict';

import Teamslist from '../teamslist';

describe('Teamslist View', function() {

  beforeEach(() => {
    this.teamslist = new Teamslist();
  });

  it('Should run a few assertions', () => {
    expect(this.teamslist);
  });

});
