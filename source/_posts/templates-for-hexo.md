---
title: hexo博客插件，预制模板
date: 2025-03-08 18:28:58
tags: 
  - 网络
categories:
  - 技术
---

一段简单的代码，为hexo增加了一个tag-plugin，实现一些可以复用的模板。

## 代码

```js template.js
'use strict';

var fs = require("hexo-fs");
var pathFn = require("path");

var template = function (args) {
    let filename = args[0];
    let path = pathFn.join(hexo.source_dir, "templates", `${filename}.md`);

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
```

## 食用方法
1. 在./scripts文件夹中创建template.js文档并复制以上内容
2. 在./source文件夹中创建templates文件夹
3. 在新建的文件夹中创建需要的模板，文件需为markdown文件，如`foo.md`
4. 使用`{% template &lt;filename&gt; %}`或`{% tpl &lt;filename&gt; %}`插入模板，如`{% tpl foo %}`

## 实例
```md source/templates/constructing.md
{% note warning %}

**“请、、请您稍等！！就、、就快好了！”鱼干抱住，并企图藏住这个页面，说道。**

此页面正在 **施工中……** ⚠

您可能会看见 **如下内容** 出现在此页面中：
- 一只忘记带安全帽的鱼干（只是是找不到了而已
- 一些**杂**物被**鱼**干随意堆放（ ~~简称**杂鱼**~~ ~
- 一个“此页面正在 **施工中……** 的标志牌⚠”（虽然鱼干不觉得有谁会看见，但万一呢……

{% endnote %}
```

```md templates-for-hexo.md
{% tpl constructing %}
```

效果如下
{% tpl constructing %}