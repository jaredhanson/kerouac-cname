var chai = require('chai');
var mock = require('chai-kerouac-middleware');
var cname = require('../lib');


describe('kerouac-cname', function() {
  
  it('should export function', function() {
    expect(cname).to.be.a('function');
  });
  
  describe('cname', function() {
    var page, err;

    before(function(done) {
      chai.kerouac.use(cname())
        .page(function(page) {
          page.baseURL = 'http://www.example.com/';
        })
        .end(function(p) {
          page = p;
          done();
        })
        .dispatch();
    });
  
    it('should write CNAME', function() {
      expect(page.body).to.equal('www.example.com');
    });
  }); // cname
  
  describe('without base url setting', function() {
    var page, err;

    before(function(done) {
      chai.kerouac.use(cname())
        .page(function(page) {
        })
        .next(function(e) {
          err = e;
          done();
        })
        .dispatch();
    });
  
    it('should error', function() {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.message).to.equal('CNAME require "base url" setting');
    });
  }); // without base url setting
  
});
