'use strict';

/**
 * {% mask [bkg_color = #252525] [hover_color = #ffffff] [<time> = 0.5s] %}
 */
var template = function (args, content) {
    var style = "";
    var vars = ["--mask-bkg-color", "--mask-hover-color", "--mask-time"];
    if (args.length > 0 && args.length <= 3) {
        style = ` style="`;
        args.forEach(element => `${vars.shift()}:${element}`).join(";");
    }

    return `<span class="mask"${style}>${content}</span>`
};

hexo.extend.injector.register("head_end", "<style>:root{--mask-bkg-color:#252525;--mask-hover-color:#ffffff;--mask-time:0.5s}.mask{background-color:var(--mask-bkg-color);color:var(--mask-bkg-color);transition:color var(--mask-time)}.mask:hover{color:var(--mask-hover-color)}</style>")
hexo.extend.tag.register('mask', template, { async: false, ends: true },);