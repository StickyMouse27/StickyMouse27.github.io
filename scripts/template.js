'use strict';

var fs = require("hexo-fs");
var pathFn = require("path");

var template = function (args) {
    let filename = args.join(" ");
    let path = pathFn.join(hexo.source_dir, "templates", `${filename}.md`);

    return fs.readFile(path).then(content =>
        hexo.post.render(path, { content: content, _content: content }).then(value =>
            `<div class="hexo-template ${filename}">${value.content}</div>`
        )
    );
}

hexo.extend.tag.register('template', template, { async: true },);
hexo.extend.tag.register('tpl', template, { async: true },);
