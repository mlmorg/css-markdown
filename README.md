# css-markdown [![Build Status](https://travis-ci.org/mlmorg/css-markdown.png?branch=master)](https://travis-ci.org/mlmorg/css-markdown)

Extract markdown comments in your css.

## Usage

Mark up your css comments with markdown, specifying its type with a `/*md`, `/*markdown`, or `/*doc` comment prefix:

```css
/*md
# Some Floats

These float elements left or right!

```html
<div class="float--left">Floated left</div>
<div class="float--right">Floated right</div>
\```
*/
.float--left { float: left; }
.float--right { float: right; }
```

Then run the `css-markdown` command:

```bash
css-markdown floats.css > floats.md
```

`floats.md` will now contain:

```css
# Some Floats

These float elements left or right!

```html
<div class="float--left">Floated left</div>
<div class="float--right">Floated right</div>
```
