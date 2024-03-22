var chai = require('chai');
var cname = require('../lib');


describe('Mapper', function() {
  
  it('should request CNAME', function(done) {
    chai.kerouac.map(cname.createMapper())
      .close(function() {
        expect(this).to.request([ '/CNAME' ]);
        done();
      })
      .generate();
  }); // should request CNAME
  
});
