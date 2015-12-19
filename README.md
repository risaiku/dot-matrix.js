dot-matrix.js
======
ドットマトリックスを描画するJavaScriptライブラリです。

## 概要
* SVGによるドットマトリックスの描画
* 他のライブラリに依存しません
* ASCIIの 20-7E の範囲の文字を標準で描画可能
* 字体をカスタマイズ可能
* 独自の字体を登録可能

## 簡単な使い方
```HTML
<html>
<script src="dot-matrix.js"></script>
<body>
<div style="display: inline-block; background-color: Black;">
	<div id="dotmatrixins" style="width:57px; height:80px;"></div>
</div>
<script>
var dotmatrix = new DotMatrix("dotmatrixins");
dotmatrix.draw({value : "A."});
</script>
</body>
</html>
```

## その他のオプション
次のURLを参照  
http://risaiku.net/archives/2832/

## ライセンス等
MIT License  
Copyright 2015, risaiku  
http://risaiku.net  
https://github.com/risaiku/dot-matrix.js

