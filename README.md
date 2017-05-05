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
