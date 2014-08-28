var fs = require('fs');
var expect = require('chai').expect;
var cssMarkdown = require('../');

describe('parsing a file with markdown in css comments', function () {
  before(function () {
    var css = fs.readFileSync(__dirname + '/fixtures/basic.css', 'utf8');
    this.markdown = cssMarkdown.parse(css);
    this.expectedMarkdown = fs.readFileSync(__dirname + '/fixtures/basic.md', 'utf8');
  });

  it('should parse correctly', function () {
    expect(this.markdown).to.eql(this.expectedMarkdown);
  });
});
