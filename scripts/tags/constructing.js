var fs = require("hexo-fs");
var pathFn = require("path");

'use strict';

hexo.extend.tag.register('constructing',
    function (args) {
        var filename = args[0];
        var path = pathFn.join(hexo.source_dir, "quickp", filename);
        return fs.readFile(`${path}.md`).then(function (content) {
            return hexo.render.renderSync({ text: content, engine: 'markdown' });
        });
    },
    { async: true },);
