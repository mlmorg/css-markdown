# css-markdown

Parse markdown comments in your css to html.

## Usage

Mark up your css comments with markdown, specifying it's type with a `/*md` comment prefix:

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
css-markdown floats.css > floats.html
```

`floats.html` will now contain:

```html
<h1 id="some-floats">Some floats</h1>
<p>These float elements left or right!</p>
<pre><code class="lang-html">&lt;div class=&quot;float--left&quot;&gt;Floated left&lt;/div&gt;
&lt;div class=&quot;float--right&quot;&gt;Floated right&lt;/div&gt;
</code></pre>
```
