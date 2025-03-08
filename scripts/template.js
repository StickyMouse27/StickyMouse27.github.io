var fs = require("hexo-fs");
var pathFn = require("path");

'use strict';

var template = function (args) {
    let filename = args[0];
    let path = pathFn.join(hexo.source_dir, `${filename}.md`);

    // ONLY MARKDOWN
    // let mdRender = content => hexo.render.renderSync({ text: content, engine: 'markdown' })
    // Post.render
    // return fs.readFile(`${path}.md`).then(function (content) {
    //     return `<div class="hexo-template ${filename}">${mdRender(content)}</div>`;
    // });

    // POST
    return fs.readFile(path).then(content =>
        hexo.post.render(path, { content: content, _content: content }).then(value =>
            `<div class="hexo-template ${filename}">${value.content}</div>`
        )
    );
}

hexo.extend.tag.register('template', template, { async: true },);
hexo.extend.tag.register('tpl', template, { async: true },);
