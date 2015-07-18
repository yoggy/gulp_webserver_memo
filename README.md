gulp-webserverを使ってみたメモ
====

参考
----
* https://www.npmjs.com/package/gulp-webserver

手順
----

    # 作業ディレクトリの作成
    $ mkdir -p ~/work/gulp_webserver_memo
    $ cd ~/work/gulp_webserver_memo

    # 適当にhtmlを作る
    $ mkdir app
    $ vi app/index.html

    # gulp-webserverをインストール
    $ npm install --save-dev gulp gulp-webserver

    # gulpfile.jsにタスクを記述
    $ vi gulpfile.js

        var gulp = require('gulp');
        var webserver = require('gulp-webserver');

        gulp.task('webserver', function() {
          gulp.src('app')       // ←監視対象のディレクトリを指定
            .pipe(webserver({
              port: 8080,
              livereload: true,
              open: 'http://localhost:8080/index.html',
              fallback: 'index.html'
            }));
        });

        gulp.task('default', ['webserver']);

    # gulpを起動してappディレクトリ以下を監視開始。
    $ gulp

    # 監視対象のファイルを変更・保存すると、自動的にリロードされる
    $ vi app/index.html
