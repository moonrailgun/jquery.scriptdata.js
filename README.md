## A light script data plugin

## Basic Usage

test.html
```html
<!-- jquery is required -->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="../jquery.scriptdata.js"></script>
<script type="text/javascript" src="test.js" data="a=0"></script>
```

test.js
```javascript
console.log($.script.getData());
// =>{a: "0"}
```

## Advanced Usage

- more data
```html
<script type="text/javascript" src="test.js" data="a=0&b=1&c=s&d=2"></script>
```
```javascript
console.log($.script.getData());
// =>{a: "0", b: "1", c: "s", d: "2"}
```

- more field
```html
<script type="text/javascript" src="test.js" data="a=0&b=1&c=s&d=2" data2="a=3&b=d&c=w&d=e"></script>
```
```javascript
console.log($.script.getData());
// =>{a: "0", b: "1", c: "s", d: "2"}
console.log($.script.getData('data2'));
// =>{a: "3", b: "d", c: "w", d: "e"}
```

- json string
```html
<meta charset="UTF-8">
<script type="text/javascript" src="test.js" data='{"a":0,"b":1,"c":"hello","d":"你好"}'></script>
```
```javascript
console.log($.script.getData());
// =>{a: 0, b: 1, c: "hello", d: "你好"}
```

- multiple file
```html
<script type="text/javascript" src="test.js" data='{"a":0}'></script>
<script type="text/javascript" src="test.js" data='{"a":"0"}'></script>
<script type="text/javascript" src="test.js" data='{"a":"s"}'></script>
<script type="text/javascript" src="test.js" data='{"a":""}'></script>
<script type="text/javascript" src="test.js" data='{"a":a}'></script>
```
```javascript
console.log($.script.getData());
// =>{a: 0}
// =>{a: "0"}
// =>{a: "s"}
// =>{{"a":a}: undefined}
```
**be sure input is a valid json string!**

## Use in `$(function(){…});`

If you want use struct like `$(function(){…});` to warp your js logic.I think we have not a good solution now because the nested logic is run when all script have been load.

If have own one script need param.Please put it at the lastest script tag.
If have two or more script. Try to set a globar var in js file, outside of `$(function(){…});` struct.

I will try to fix it in next version.
