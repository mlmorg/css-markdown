var fs = require('fs');
var expect = require('chai').expect;
var cssMarkdown = require('../');

describe('parsing a file with markdown in css comments', function () {
  before(function () {
    var css = fs.readFileSync(__dirname + '/fixtures/basic.css', 'utf8');
    this.html = cssMarkdown.parse(css);
    this.expectedHtml = fs.readFileSync(__dirname + '/fixtures/basic.html', 'utf8');
  });

  it('should parse correctly', function () {
    expect(this.html).to.eql(this.expectedHtml);
  });
});
