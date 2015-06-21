# gulp-markdownblog

gulp-markdownblogは特定のフォルダにmarkdown記法で記述されたファイルを
置くと自動的にHTMLに変換し配信します。

## インストール

次の環境を構築が必要です。

 - node.js
 - npm

上記の環境を構築した状態で下記のコマンドを実行すると必要な
パッケージがダウンロードされます。

```
$ sudo npm install
```  

## 実行

実行するには次のコマンドを実行します。

```
$ gulp
```

実行中にhttp://localhost:8000/contents/<ファイル名>.html
へアクセスするとmarkdown記法で記述したファイルのHTML化したファイルを
確認できます。

## 使い方

実行中にプロジェクト内のapp/markdownにmdファイルを配置すると
自動的にapp/public/contentsにHTMLファイルを配置します。
