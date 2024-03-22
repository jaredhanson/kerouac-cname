var events = require('events')
  , util = require('util');

function Mapper() {
  events.EventEmitter.call(this);
}

util.inherits(Mapper, events.EventEmitter);

Mapper.prototype.map = function(server) {
  this.request('/CNAME');
  this.end();
};

module.exports = Mapper;
