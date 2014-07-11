var marked = require('marked');

var commentBeginPattern = /^\/\*\s*(md|markdown|doc)/i;
var commentEndPattern = /\*\//;

exports.parse = function (css) {
  var lines = css.split('\n');

  var blocks = [];
  var i, line, currentBlock, inCommentBlock;
  for (i = 0; i < lines.length; i++) {
    line = lines[i];

    // Find the beginning of a comment block and start a new markdown block
    if (line.match(commentBeginPattern)) {
      currentBlock = line.replace(commentBeginPattern, '') + '\n';
      inCommentBlock = true;
    }
    // Once a comment has ended, add the markdown to the array of blocks
    else if (line.match(commentEndPattern) && inCommentBlock) {
      currentBlock += line.replace(commentEndPattern, '');
      blocks.push(currentBlock);
      inCommentBlock = false;
    }
    // When inside a comment block, just tack on to the existing block
    else if (inCommentBlock) {
      currentBlock += line + '\n';
    }
  }

  var html = '';
  for (i = 0; i < blocks.length; i++) {
    html += marked(blocks[i]);
  }

  return html;
};
