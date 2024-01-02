<h2>Introduction</h2>
Following <a href='https://github.com/NathanKr/purge-css-vanilla-playground'>purge-css-vanilla-playground</a> it is clear what is PurgeCSS and how to use it on vanilla js project. But how to do this in next.js ??

<h2>next.js customizing plugin issue</h2>
according to the <a href='https://nextjs.org/docs/pages/building-your-application/configuring/post-css'>documentration</a> next.js use postCSS to create css file in next.js project. So if you want to <a href='Out of the box, with no configuration, Next.js compiles CSS with the following transformations:'>add postCSS plugin</a> you need to configure from scratch all these setting in postcss.config.json \ postcss.config.js


<h2>CSS size</h2>
<p>With purgecss we have 10X smaller css !!! (delete .next directory before npm run build)</p>

<p>without postcss.config.js</p>
<p>css/2f46408f68d2058a.css               31.4 kB</p>

<p>with postcss.config.js</p>
<p>css/8e19002ffea2efd4.css               3.52 kB</p>


<h2>Open issue</h2>
no bootstrap style for component from react-bootstrap even using the following in postcss.config.js

```
 "./node_modules/react-bootstrap/**/*.js", 
```