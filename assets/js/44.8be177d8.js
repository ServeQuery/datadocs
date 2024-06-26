(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    330: function (t, a, s) {
      "use strict";
      s.r(a);
      var e = s(10),
        r = Object(e.a)(
          {},
          function () {
            var t = this,
              a = t._self._c;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                a("h1", { attrs: { id: "整体配置" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#整体配置" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 整体配置"),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "基础结构" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#基础结构" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 基础结构"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("初始化表格时，可以设置一个对象配置串"),
                  a("code", [t._v("options")]),
                  t._v("来自定义配置Luckysheet表格。"),
                ]),
                t._v(" "),
                a("p", [t._v("如下是一个简洁的配置案例：")]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// 配置项")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" options "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("container")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'datadocs'"),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// 设定DOM容器的id")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("title")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'DataDocs Demo'"),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// 设定表格名称")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("lang")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'zh'"),
                      ]),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// 设定表格语言")]
                      ),
                      t._v("\n\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// 更多其他设置...")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// 初始化表格")]
                      ),
                      t._v("\nluckysheet"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("create")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("options"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a(
                  "p",
                  [
                    t._v("这里的"),
                    a("code", [t._v("options")]),
                    t._v(
                      "配置项会作用于整个表格，特别的，单个sheet的配置则需要在"
                    ),
                    a("code", [t._v("options.data")]),
                    t._v("数组中，分别设置对应更详细的参数，参考"),
                    a("RouterLink", { attrs: { to: "/guide/sheet.html" } }, [
                      t._v("工作表配置"),
                    ]),
                  ],
                  1
                ),
                t._v(" "),
                a("p", [
                  t._v("针对个性化的需求，除了允许配置信息栏（"),
                  a("a", { attrs: { href: "#showinfobar" } }, [
                    t._v("showinfobar"),
                  ]),
                  t._v("）、工具栏（"),
                  a("a", { attrs: { href: "#showtoolbar" } }, [
                    t._v("showtoolbar"),
                  ]),
                  t._v("）、底部sheet页（"),
                  a("a", { attrs: { href: "#showsheetbar" } }, [
                    t._v("showsheetbar"),
                  ]),
                  t._v("）、底部计数栏（"),
                  a("a", { attrs: { href: "#showstatisticBar" } }, [
                    t._v("showstatisticBar"),
                  ]),
                  t._v(
                    "）之外，\nLuckysheet开放了更细致的自定义配置选项，分别有"
                  ),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [
                    t._v("自定义工具栏（"),
                    a("a", { attrs: { href: "#showtoolbarConfig" } }, [
                      t._v("showtoolbarConfig"),
                    ]),
                    t._v("）"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义底部sheet页（"),
                    a("a", { attrs: { href: "#showsheetbarConfig" } }, [
                      t._v("showsheetbarConfig"),
                    ]),
                    t._v("）"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义计数栏（"),
                    a("a", { attrs: { href: "#showstatisticBarConfig" } }, [
                      t._v("showstatisticBarConfig"),
                    ]),
                    t._v("）"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义单元格右键菜单（"),
                    a("a", { attrs: { href: "#cellRightClickConfig" } }, [
                      t._v("cellRightClickConfig"),
                    ]),
                    t._v("）"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义底部sheet页右击菜单（"),
                    a("a", { attrs: { href: "#sheetRightClickConfig" } }, [
                      t._v("sheetRightClickConfig"),
                    ]),
                    t._v("）"),
                  ]),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "配置项" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#配置项" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 配置项"),
                ]),
                t._v(" "),
                a("p", [t._v("以下为所有支持的设置参数")]),
                t._v(" "),
                a("ul", [
                  a("li", [
                    t._v("容器ID "),
                    a("a", { attrs: { href: "#container" } }, [
                      t._v("container"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("工作簿名称 "),
                    a("a", { attrs: { href: "#title" } }, [t._v("title")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("语言 "),
                    a("a", { attrs: { href: "#lang" } }, [t._v("lang")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("唯一key "),
                    a("a", { attrs: { href: "#gridKey" } }, [t._v("gridKey")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("加载整个工作簿 "),
                    a("a", { attrs: { href: "#loadUrl" } }, [t._v("loadUrl")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("加载其它页celldata "),
                    a("a", { attrs: { href: "#loadSheetUrl" } }, [
                      t._v("loadSheetUrl"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("允许更新 "),
                    a("a", { attrs: { href: "#allowUpdate" } }, [
                      t._v("allowUpdate"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("更新地址 "),
                    a("a", { attrs: { href: "#updateUrl" } }, [
                      t._v("updateUrl"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("缩略图更新地址 "),
                    a("a", { attrs: { href: "#updateImageUrl" } }, [
                      t._v("updateImageUrl"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("工作表配置 "),
                    a("a", { attrs: { href: "#data" } }, [t._v("data")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("插件 "),
                    a("a", { attrs: { href: "#plugins" } }, [t._v("plugins")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("列数 "),
                    a("a", { attrs: { href: "#column" } }, [t._v("column")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("行数 "),
                    a("a", { attrs: { href: "#row" } }, [t._v("row")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("亿万格式 "),
                    a("a", { attrs: { href: "#autoFormatw" } }, [
                      t._v("autoFormatw"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("精度 "),
                    a("a", { attrs: { href: "#accuracy" } }, [
                      t._v("accuracy"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("允许复制 "),
                    a("a", { attrs: { href: "#allowCopy" } }, [
                      t._v("allowCopy"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("工具栏 "),
                    a("a", { attrs: { href: "#showtoolbar" } }, [
                      t._v("showtoolbar"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义工具栏"),
                    a("a", { attrs: { href: "#showtoolbarConfig" } }, [
                      t._v("showtoolbarConfig"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("信息栏 "),
                    a("a", { attrs: { href: "#showinfobar" } }, [
                      t._v("showinfobar"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("底部sheet页 "),
                    a("a", { attrs: { href: "#showsheetbar" } }, [
                      t._v("showsheetbar"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义底部sheet页 "),
                    a("a", { attrs: { href: "#showsheetbarConfig" } }, [
                      t._v("showsheetbarConfig"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("底部计数栏 "),
                    a("a", { attrs: { href: "#showstatisticBar" } }, [
                      t._v("showstatisticBar"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义计数栏 "),
                    a("a", { attrs: { href: "#showstatisticBarConfig" } }, [
                      t._v("showstatisticBarConfig"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("允许添加行 "),
                    a("a", { attrs: { href: "#enableAddRow" } }, [
                      t._v("enableAddRow"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("默认添加行的数目 "),
                    a("a", { attrs: { href: "#addRowCount" } }, [
                      t._v("addRowCount"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("允许回到顶部 "),
                    a("a", { attrs: { href: "#enableAddBackTop" } }, [
                      t._v("enableAddBackTop"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("用户信息 "),
                    a("a", { attrs: { href: "#userInfo" } }, [
                      t._v("userInfo"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("用户信息菜单 "),
                    a("a", { attrs: { href: "#userMenuItem" } }, [
                      t._v("userMenuItem"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("返回按钮链接 "),
                    a("a", { attrs: { href: "#myFolderUrl" } }, [
                      t._v("myFolderUrl"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("比例 "),
                    a("a", { attrs: { href: "#devicePixelRatio" } }, [
                      t._v("devicePixelRatio"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("功能按钮 "),
                    a("a", { attrs: { href: "#functionButton" } }, [
                      t._v("functionButton"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自动缩进界面 "),
                    a("a", { attrs: { href: "#showConfigWindowResize" } }, [
                      t._v("showConfigWindowResize"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("刷新公式 "),
                    a("a", { attrs: { href: "#forceCalculation" } }, [
                      t._v("forceCalculation"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义单元格右键菜单 "),
                    a("a", { attrs: { href: "#cellRightClickConfig" } }, [
                      t._v("cellRightClickConfig"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义sheet页右击菜单 "),
                    a("a", { attrs: { href: "#sheetRightClickConfig" } }, [
                      t._v("sheetRightClickConfig"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("行标题区域的宽度 "),
                    a("a", { attrs: { href: "#rowHeaderWidth" } }, [
                      t._v("rowHeaderWidth"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("列标题区域的高度 "),
                    a("a", { attrs: { href: "#columnHeaderHeight" } }, [
                      t._v("columnHeaderHeight"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("是否显示公式栏 "),
                    a("a", { attrs: { href: "#sheetFormulaBar" } }, [
                      t._v("sheetFormulaBar"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("初始化默认字体大小 "),
                    a("a", { attrs: { href: "#defaultFontSize" } }, [
                      t._v("defaultFontSize"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("是否限制工作表名长度 "),
                    a("a", { attrs: { href: "#limitSheetNameLength" } }, [
                      t._v("limitSheetNameLength"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("默认允许工作表名的最大长度 "),
                    a("a", { attrs: { href: "#defaultSheetNameMaxLength" } }, [
                      t._v("defaultSheetNameMaxLength"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("分页器 "),
                    a("a", { attrs: { href: "#pager" } }, [t._v("pager")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义图片上传 "),
                    a("a", { attrs: { href: "#uploadImage" } }, [
                      t._v("uploadImage"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("自定义图片地址处理 "),
                    a("a", { attrs: { href: "#imageUrlHandle" } }, [
                      t._v("imageUrlHandle"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "container" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#container" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" container"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：String")]),
                  t._v(" "),
                  a("li", [t._v('默认值："datadocs"')]),
                  t._v(" "),
                  a("li", [t._v("作用：容器的ID")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "title" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#title" } },
                    [t._v("#")]
                  ),
                  t._v(" title"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：String")]),
                  t._v(" "),
                  a("li", [t._v('默认值："DataDocs Demo"')]),
                  t._v(" "),
                  a("li", [t._v("作用：工作簿名称")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "lang" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#lang" } },
                    [t._v("#")]
                  ),
                  t._v(" lang"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：String")]),
                  t._v(" "),
                  a("li", [t._v('默认值："en"')]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      '作用：国际化设置，允许设置表格的语言，支持简体中文("zh")、英文("en")、繁体中文("zh_tw")和西班牙文("es")'
                    ),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "gridkey" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#gridkey" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" gridKey"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：String")]),
                  t._v(" "),
                  a("li", [t._v('默认值：""')]),
                  t._v(" "),
                  a("li", [t._v("作用：表格唯一标识符")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "loadurl" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#loadurl" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" loadUrl"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [a("p", [t._v("类型：String")])]),
                  t._v(" "),
                  a("li", [a("p", [t._v('默认值：""')])]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      t._v("作用：配置"),
                      a("code", [t._v("loadUrl")]),
                      t._v(
                        "接口地址，加载所有工作表的配置，并包含当前页单元格数据，与"
                      ),
                      a("code", [t._v("loadSheetUrl")]),
                      t._v("配合使用。参数为"),
                      a("code", [t._v("gridKey")]),
                      t._v("（表格主键）。"),
                    ]),
                    t._v(" "),
                    a("p", [t._v("源码的请求写法是：")]),
                    t._v(" "),
                    a("div", { staticClass: "language-js extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        a("code", [
                          t._v("$"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("post")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          t._v("loadurl"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"gridKey"')]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" server"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("gridKey"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("function")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token parameter" } },
                            [t._v("d")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    a("blockquote", [
                      a("p", [
                        t._v("参见源码 "),
                        a(
                          "a",
                          {
                            attrs: {
                              href: "https://servequery.github.io/datadocs/blob/master/src/core.js",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [a("code", [t._v("src/core.js")]), a("OutboundLink")],
                          1
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    a("p", [
                      t._v(
                        "Luckysheet会通过ajax请求（POST）整个表格的数据，默认载入status为1的sheet数据中的"
                      ),
                      a("code", [t._v("celldata")]),
                      t._v("，其余的sheet载入除"),
                      a("code", [t._v("celldata")]),
                      t._v("字段外的所有配置字段。特别是在数据量大的时候，"),
                      a("code", [t._v("loadUrl")]),
                      t._v("只负责当前页单元格数据，配置"),
                      a("code", [t._v("loadSheetUrl")]),
                      t._v(
                        "作为其它工作表异步加载单元格数据的接口，可以提高性能。"
                      ),
                    ]),
                    t._v(" "),
                    a("p", [t._v("一个合格的接口返回的json字符串数据为：")]),
                    t._v(" "),
                    a("div", { staticClass: "language-js extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        a("code", [
                          t._v('"'),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\t\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "//status为1的sheet页，重点是需要提供初始化的数据celldata"
                              ),
                            ]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"name"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Cell"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"index"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"sheet_01"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"order"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("  "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"status"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"celldata"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"r"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"c"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"v"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"v"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"m"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"1"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"ct"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fa"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"General"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"t"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"n"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "//其他status为0的sheet页，无需提供celldata，只需要配置项即可"
                              ),
                            ]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"name"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Data"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"index"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"sheet_02"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"order"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("  "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"status"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"name"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Picture"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"index"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"sheet_03"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"order"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("  "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("2")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"status"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v('"\n'),
                        ]),
                      ]),
                    ]),
                    a("p", [t._v("有几个注意点")]),
                    t._v(" "),
                    a("ul", [
                      a("li", [
                        t._v(
                          "这是一个字符串，类似于JSON.stringify()处理后的json数据，压缩后的数据便于传输"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("loadUrl是一个post请求，也是为了支持大数据量"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "考虑到一些公式、图表及数据透视表会引用其他sheet的数据，所以前台会加一个判断，如果该当前sheet引用了其他sheet的数据则会通过"
                        ),
                        a("code", [t._v("loadSheetUrl")]),
                        t._v(
                          "配置的接口地址请求数据，把引用到的sheet的数据一并补全，而不用等切换到其它页的时候再请求"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "当数据量小的时候，也可以不用Luckysheet提供的此接口，直接使用"
                        ),
                        a("a", { attrs: { href: "#data" } }, [t._v("data")]),
                        t._v("参数可以提前准备好所有表格数据用于初始化"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "loadsheeturl" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#loadsheeturl" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" loadSheetUrl"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [a("p", [t._v("类型：String")])]),
                  t._v(" "),
                  a("li", [a("p", [t._v('默认值：""')])]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      t._v("作用：配置"),
                      a("code", [t._v("loadSheetUrl")]),
                      t._v("接口地址，用于异步加载其它单元格数据。参数为"),
                      a("code", [t._v("gridKey")]),
                      t._v("（表格主键） 和 "),
                      a("code", [t._v("index")]),
                      t._v("（sheet主键合集，格式为"),
                      a("code", [t._v('["sheet_01","sheet_02","sheet_03"]')]),
                      t._v("）。"),
                    ]),
                    t._v(" "),
                    a("p", [t._v("源码的请求写法是：")]),
                    t._v(" "),
                    a("div", { staticClass: "language-js extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        a("code", [
                          t._v("$"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("post")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          t._v("loadSheetUrl"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"gridKey"')]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" server"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("gridKey"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"index"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" sheetindex"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("join")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('","')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("function")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token parameter" } },
                            [t._v("d")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    a("blockquote", [
                      a("p", [
                        t._v("参见源码 "),
                        a(
                          "a",
                          {
                            attrs: {
                              href: "https://servequery.github.io/datadocs/blob/master/src/controllers/sheetmanage.js",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [
                            a("code", [t._v("src/controllers/sheetmanage.js")]),
                            a("OutboundLink"),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    a("p", [
                      t._v("返回的数据为sheet的"),
                      a("code", [t._v("celldata")]),
                      t._v("字段数据集合。"),
                    ]),
                    t._v(" "),
                    a("p", [t._v("一个合格的接口返回的json字符串数据为：")]),
                    t._v(" "),
                    a("div", { staticClass: "language-js extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        a("code", [
                          t._v('"'),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"sheet_01"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"r"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"c"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"v"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"v"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"m"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"1"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"ct"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fa"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"General"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"t"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"n"')]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"sheet_02"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"r"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"c"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"v"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"v"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"m"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"1"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"ct"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fa"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"General"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"t"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"n"')]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"sheet_03"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"r"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"c"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"v"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"v"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"m"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"1"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"ct"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fa"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"General"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"t"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"n"')]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v('"\n'),
                        ]),
                      ]),
                    ]),
                    a("p", [
                      t._v("同"),
                      a("code", [t._v("loadUrl")]),
                      t._v("类似，"),
                      a("code", [t._v("loadSheetUrl")]),
                      t._v("也要注意这几点："),
                    ]),
                    t._v(" "),
                    a("ul", [
                      a("li", [t._v("这是一个字符串格式数据")]),
                      t._v(" "),
                      a("li", [t._v("这是一个post请求")]),
                      t._v(" "),
                      a("li", [
                        t._v("这个接口会在两种情况下自动调用，一是在"),
                        a("code", [t._v("loadUrl")]),
                        t._v(
                          "加载的当前页数据时发现当前工作表引用了其他工作表，二是切换到一个未曾加载过数据的工作表时"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "allowupdate" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#allowupdate" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" allowUpdate"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：false")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：是否允许操作表格后的后台更新，与"),
                    a("code", [t._v("updateUrl")]),
                    t._v("配合使用。如果要开启共享编辑，此参数必须设置为"),
                    a("code", [t._v("true")]),
                    t._v("。"),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "updateurl" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#updateurl" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" updateUrl"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [a("p", [t._v("类型：String")])]),
                  t._v(" "),
                  a("li", [a("p", [t._v('默认值：""')])]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      t._v(
                        "作用：操作表格后，实时保存数据的websocket地址，此接口也是共享编辑的接口地址。"
                      ),
                    ]),
                    t._v(" "),
                    a("p", [
                      t._v(
                        "有个注意点，要想开启共享编辑，必须满足以下3个条件："
                      ),
                    ]),
                    t._v(" "),
                    a("ul", [
                      a("li", [
                        a("code", [t._v("allowUpdate")]),
                        t._v("为"),
                        a("code", [t._v("true")]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("配置了"), a("code", [t._v("loadUrl")])]),
                      t._v(" "),
                      a("li", [t._v("配置了"), a("code", [t._v("updateUrl")])]),
                    ]),
                    t._v(" "),
                    a("p", [
                      t._v(
                        "注意，发送给后端的数据默认是经过pako压缩过后的。后台拿到数据需要先解压。"
                      ),
                    ]),
                    t._v(" "),
                    a(
                      "p",
                      [
                        t._v(
                          "通过共享编辑功能，可以实现Luckysheet实时保存数据和多人同步数据，每一次操作都会发送不同的参数到后台，具体的操作类型和参数参见"
                        ),
                        a(
                          "RouterLink",
                          { attrs: { to: "/guide/operate.html" } },
                          [t._v("表格操作")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "updateimageurl" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#updateimageurl" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" updateImageUrl"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：String")]),
                  t._v(" "),
                  a("li", [t._v('默认值：""')]),
                  t._v(" "),
                  a("li", [t._v("作用：缩略图的更新地址")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "data" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#data" } },
                    [t._v("#")]
                  ),
                  t._v(" data"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Array")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      '默认值：[{ "name": "Sheet1", color: "", "status": "1", "order": "0", "data": [], "config": {}, "index":0 }, { "name": "Sheet2", color: "", "status": "0", "order": "1", "data": [], "config": {}, "index":1  }, { "name": "Sheet3", color: "", "status": "0", "order": "2", "data": [], "config": {}, "index":2  }]'
                    ),
                  ]),
                  t._v(" "),
                  a(
                    "li",
                    [
                      t._v("作用：当未配置"),
                      a("code", [t._v("loadUrl")]),
                      t._v("和"),
                      a("code", [t._v("loadSheetUrl")]),
                      t._v("的时候，需要手动配置传入整个客户端所有sheet数据"),
                      a("code", [t._v("[shee1, sheet2, sheet3]")]),
                      t._v("，详细参数设置参见"),
                      a("RouterLink", { attrs: { to: "/guide/sheet.html" } }, [
                        t._v("工作表配置"),
                      ]),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "plugins" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#plugins" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" plugins"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Array")]),
                  t._v(" "),
                  a("li", [t._v("默认值：[]")]),
                  t._v(" "),
                  a("li", [t._v('作用：配置插件，支持图表："chart"')]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "column" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#column" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" column"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Number")]),
                  t._v(" "),
                  a("li", [t._v("默认值：60")]),
                  t._v(" "),
                  a("li", [t._v("作用：空表格默认的列数量")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "row" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#row" } },
                    [t._v("#")]
                  ),
                  t._v(" row"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Number")]),
                  t._v(" "),
                  a("li", [t._v("默认值：84")]),
                  t._v(" "),
                  a("li", [t._v("作用：空表格默认的行数据量")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "autoformatw" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#autoformatw" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" autoFormatw"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：false")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      '作用：自动格式化超过4位数的数字为‘亿万格式’，例：true or "true" or "TRUE"'
                    ),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "accuracy" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#accuracy" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" accuracy"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Number")]),
                  t._v(" "),
                  a("li", [t._v("默认值：undefined")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      '作用：设置精度，小数点后的位数。传参数为数字或数字字符串，例： "0" 或 0'
                    ),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "allowcopy" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#allowcopy" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" allowCopy"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：true")]),
                  t._v(" "),
                  a("li", [t._v("作用：是否允许拷贝")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "showtoolbar" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showtoolbar" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" showtoolbar"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：true")]),
                  t._v(" "),
                  a("li", [t._v("作用：是否显示工具栏")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "showtoolbarconfig" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showtoolbarconfig" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" showtoolbarConfig"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Object")]),
                  t._v(" "),
                  a("li", [t._v("默认值：{}")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：自定义配置工具栏，可以与showtoolbar配合使用，"),
                    a("code", [t._v("showtoolbarConfig")]),
                    t._v("拥有更高的优先级。"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("格式1："),
                    a("div", { staticClass: "language-json extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        a("code", [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    undoRedo"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "//撤销重做，注意撤消重做是两个按钮，由这一个配置决定显示还是隐藏"
                              ),
                            ]
                          ),
                          t._v("\n    paintFormat"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//格式刷")]
                          ),
                          t._v("\n    currencyFormat"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//货币格式")]
                          ),
                          t._v("\n    percentageFormat"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//百分比格式")]
                          ),
                          t._v("\n    numberDecrease"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '减少小数位数'")]
                          ),
                          t._v("\n    numberIncrease"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '增加小数位数")]
                          ),
                          t._v("\n    moreFormats"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '更多格式'")]
                          ),
                          t._v("\n    font"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '字体'")]
                          ),
                          t._v("\n    fontSize"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '字号大小'")]
                          ),
                          t._v("\n    bold"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '粗体 (Ctrl+B)'")]
                          ),
                          t._v("\n    italic"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '斜体 (Ctrl+I)'")]
                          ),
                          t._v("\n\tstrikethrough"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '删除线 (Alt+Shift+5)'")]
                          ),
                          t._v("\n\tunderline"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '下划线 (Alt+Shift+6)'")]
                          ),
                          t._v("\n    textColor"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '文本颜色'")]
                          ),
                          t._v("\n    fillColor"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '单元格颜色'")]
                          ),
                          t._v("\n    border"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '边框'")]
                          ),
                          t._v("\n    mergeCell"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '合并单元格'")]
                          ),
                          t._v("\n    horizontalAlignMode"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '水平对齐方式'")]
                          ),
                          t._v("\n    verticalAlignMode"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '垂直对齐方式'")]
                          ),
                          t._v("\n    textWrapMode"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '换行方式'")]
                          ),
                          t._v("\n    textRotateMode"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '文本旋转方式'")]
                          ),
                          t._v("\n\timage"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '插入图片'")]
                          ),
                          t._v("\n\tlink"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '插入链接'")]
                          ),
                          t._v("\n    chart"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "// '图表'（图标隐藏，但是如果配置了chart插件，右击仍然可以新建图表）"
                              ),
                            ]
                          ),
                          t._v("\n    postil"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("  "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'批注'")]
                          ),
                          t._v("\n    pivotTable"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("  "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'数据透视表'")]
                          ),
                          t._v("\n    function"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '公式'")]
                          ),
                          t._v("\n    frozenMode"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '冻结方式'")]
                          ),
                          t._v("\n    sortAndFilter"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '排序和筛选'")]
                          ),
                          t._v("\n    conditionalFormat"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '条件格式'")]
                          ),
                          t._v("\n\tdataVerification"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '数据验证'")]
                          ),
                          t._v("\n    splitColumn"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '分列'")]
                          ),
                          t._v("\n    screenshot"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '截图'")]
                          ),
                          t._v("\n    findAndReplace"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '查找替换'")]
                          ),
                          t._v("\n\tprotection"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '工作表保护'")]
                          ),
                          t._v("\n\tprint"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// '打印'")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("示例1：\n"),
                    a("ul", [
                      a("li", [
                        a("p", [t._v("仅显示撤消重做和字体按钮：")]),
                        t._v(" "),
                        a("div", { staticClass: "language-js extra-class" }, [
                          a(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              a("code", [
                                t._v("\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showtoolbar")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showtoolbarConfig")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("undoRedo")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("font")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [
                        a("p", [t._v("仅隐藏图片和打印按钮：")]),
                        t._v(" "),
                        a("div", { staticClass: "language-js extra-class" }, [
                          a(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              a("code", [
                                t._v("\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showtoolbar")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("// 默认就是true，可以不设置")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showtoolbarConfig")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("image")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("print")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "格式2：\n对象格式可以很方便控制显示隐藏，使用数组形式可轻松控制按钮顺序和位置， 以下为工具栏按钮和分隔符的默认配置。"
                    ),
                    a("div", { staticClass: "language-json extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        a("code", [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("   \n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"undo"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"redo"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"paintFormat"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"|"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" \n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"currencyFormat"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"percentageFormat"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"numberDecrease"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"numberIncrease"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"moreFormats"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"|"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" \n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"font"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"|"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" \n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"fontSize"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"|"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" \n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"bold"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"italic"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"strikethrough"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"underline"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"textColor"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"|"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" \n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"fillColor"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"border"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"mergeCell"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"|"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" \n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"horizontalAlignMode"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"verticalAlignMode"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"textWrapMode"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"textRotateMode"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"|"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" \n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"image"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"link"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"chart"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"postil"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"pivotTable"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"|"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" \n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"function"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"frozenMode"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"sortAndFilter"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"conditionalFormat"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"dataVerification"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"splitColumn"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"screenshot"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"findAndReplace"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"protection"')]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"print"')]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("示例2：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "自定义按钮和位置， 保护放到最前面， 只要字体样式相关按钮。"
                        ),
                        a("div", { staticClass: "language-json extra-class" }, [
                          a(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              a("code", [
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"showtoolbarConfig"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"protection"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"|"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" \n\t\t"),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"font"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"|"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" \n\t\t"),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"fontSize"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"|"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" \n\t\t"),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"bold"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"italic"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"strikethrough"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"underline"')]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"textColor"')]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("]")]
                                ),
                                t._v("\n"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "showinfobar" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showinfobar" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" showinfobar"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：true")]),
                  t._v(" "),
                  a("li", [t._v("作用：是否显示顶部信息栏")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "showsheetbar" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showsheetbar" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" showsheetbar"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：true")]),
                  t._v(" "),
                  a("li", [t._v("作用：是否显示底部sheet页按钮")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "showsheetbarconfig" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showsheetbarconfig" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" showsheetbarConfig"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Object")]),
                  t._v(" "),
                  a("li", [t._v("默认值：{}")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：自定义配置底部sheet页按钮，可以与showsheetbar配合使用，"
                    ),
                    a("code", [t._v("showsheetbarConfig")]),
                    t._v("拥有更高的优先级。"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("格式："),
                    a("div", { staticClass: "language-json extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        a("code", [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    add"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//新增sheet  ")]
                          ),
                          t._v("\n    menu"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//sheet管理菜单")]
                          ),
                          t._v("\n    sheet"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//sheet页显示")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("示例：\n"),
                    a("ul", [
                      a("li", [
                        a("p", [t._v("仅显示新增sheet按钮：")]),
                        t._v(" "),
                        a("div", { staticClass: "language-js extra-class" }, [
                          a(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              a("code", [
                                t._v("\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showsheetbar")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showsheetbarConfig")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("add")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [
                        a("p", [t._v("仅隐藏新增sheet和管理按钮：")]),
                        t._v(" "),
                        a("div", { staticClass: "language-js extra-class" }, [
                          a(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              a("code", [
                                t._v("\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showsheetbar")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("// 默认就是true，可以不设置")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showsheetbarConfig")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("add")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("menu")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "showstatisticbar" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showstatisticbar" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" showstatisticBar"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：true")]),
                  t._v(" "),
                  a("li", [t._v("作用：是否显示底部计数栏")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "showstatisticbarconfig" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showstatisticbarconfig" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" showstatisticBarConfig"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Object")]),
                  t._v(" "),
                  a("li", [t._v("默认值：{}")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：自定义配置底部计数栏，可以与showstatisticBar配合使用，"
                    ),
                    a("code", [t._v("showstatisticBarConfig")]),
                    t._v("拥有更高的优先级。"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("格式："),
                    a("div", { staticClass: "language-json extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        a("code", [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    count"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 计数栏")]
                          ),
                          t._v("\n\tview"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 打印视图")]
                          ),
                          t._v("\n    zoom"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 缩放")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("示例：\n"),
                    a("ul", [
                      a("li", [
                        a("p", [t._v("仅显示缩放按钮：")]),
                        t._v(" "),
                        a("div", { staticClass: "language-js extra-class" }, [
                          a(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              a("code", [
                                t._v("\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showstatisticBar")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showstatisticBarConfig")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("zoom")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [
                        a("p", [t._v("仅隐藏打印视图按钮：")]),
                        t._v(" "),
                        a("div", { staticClass: "language-js extra-class" }, [
                          a(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              a("code", [
                                t._v("\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showstatisticBar")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("// 默认就是true，可以不设置")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showstatisticBarConfig")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("view")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "enableaddrow" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#enableaddrow" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" enableAddRow"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：true")]),
                  t._v(" "),
                  a("li", [t._v("作用：允许添加行")]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "addrowcount" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#addrowcount" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" addRowCount"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("Number")]),
                  t._v(" "),
                  a("li", [t._v("默认值：100")]),
                  t._v(" "),
                  a("li", [t._v("作用：配置新增行处默认新增的行数目")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "enableaddbacktop" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#enableaddbacktop" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" enableAddBackTop"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：true")]),
                  t._v(" "),
                  a("li", [t._v("作用：允许回到顶部")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "userinfo" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#userinfo" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" userInfo"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [a("p", [t._v("类型：String | Boolean | Object")])]),
                  t._v(" "),
                  a("li", [a("p", [t._v("默认值：false")])]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      t._v("作用：右上角的用户信息展示样式，支持以下三种形式"),
                    ]),
                    t._v(" "),
                    a("ol", [a("li", [t._v("HTML模板字符串，如：")])]),
                    t._v(" "),
                    a("div", { staticClass: "language-js extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        a("code", [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("options")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 其他配置")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userInfo")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [
                              t._v(
                                '\'<i style="font-size:16px;color:#ff6a00;" class="fa fa-taxi" aria-hidden="true"></i> Lucky\''
                              ),
                            ]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    a("p", [t._v("或者一个普通字符串，如：")]),
                    t._v(" "),
                    a("div", { staticClass: "language-js extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        a("code", [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("options")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 其他配置")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userInfo")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'Lucky'")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    a("ol", { attrs: { start: "2" } }, [
                      a("li", [t._v("Boolean类型，如：")]),
                    ]),
                    t._v(" "),
                    a("p", [a("code", [t._v("false")]), t._v(":不展示")]),
                    t._v(" "),
                    a("div", { staticClass: "language-js extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        a("code", [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("options")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 其他配置")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userInfo")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 不展示用户信息")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\n"),
                        ]),
                      ]),
                    ]),
                    a("p", [
                      a("code", [t._v("true")]),
                      t._v(":展示默认的字符串"),
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "language-js extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        a("code", [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("options")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 其他配置")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userInfo")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                '// 展示HTML:\'<i style="font-size:16px;color:#ff6a00;" class="fa fa-taxi" aria-hidden="true"></i> Lucky\''
                              ),
                            ]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\n"),
                        ]),
                      ]),
                    ]),
                    a("ol", { attrs: { start: "3" } }, [
                      a("li", [
                        t._v("对象格式，设置 "),
                        a("code", [t._v("userImage")]),
                        t._v("：用户头像地址 和 "),
                        a("code", [t._v("userName")]),
                        t._v("：用户名，如："),
                      ]),
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "language-js extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        a("code", [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("options")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 其他配置")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userInfo")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userImage")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [
                              t._v(
                                "'https://cdn.jsdelivr.net/npm/luckyresources@1.0.3/assets/img/logo/logo.png'"
                              ),
                            ]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 头像url")]
                          ),
                          t._v("\n\t\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userName")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'Lucky'")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 用户名")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    a("ol", { attrs: { start: "4" } }, [
                      a("li", [
                        t._v("注意，设置为"),
                        a("code", [t._v("undefined")]),
                        t._v("或者不设置，同设置"),
                        a("code", [t._v("false")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "usermenuitem" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#usermenuitem" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" userMenuItem"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Array")]),
                  t._v(" "),
                  a("li", [
                    t._v("默认值："),
                    a("code", [
                      t._v(
                        '[{url:"www.baidu.com", "icon":\'<i class="fa fa-folder" aria-hidden="true"></i>\', "name":"我的表格"}, {url:"www.baidu.com", "icon":\'<i class="fa fa-sign-out" aria-hidden="true"></i>\', "name":"退出登陆"}]'
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [t._v("作用：点击右上角的用户信息弹出的菜单")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "myfolderurl" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#myfolderurl" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" myFolderUrl"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：String")]),
                  t._v(" "),
                  a("li", [t._v('默认值："www.baidu.com"')]),
                  t._v(" "),
                  a("li", [t._v("作用：左上角<返回按钮的链接")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "devicepixelratio" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#devicepixelratio" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" devicePixelRatio"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Number")]),
                  t._v(" "),
                  a("li", [t._v("默认值：window.devicePixelRatio")]),
                  t._v(" "),
                  a("li", [t._v("作用：设备比例，比例越大表格分辨率越高")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "functionbutton" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#functionbutton" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" functionButton"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：String")]),
                  t._v(" "),
                  a("li", [t._v('默认值：""')]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：右上角功能按钮，例如"),
                    a("code", [
                      t._v(
                        '\'<button id="" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">下载</button> <button id="" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">分享</button> <button id="datadocs-share-btn-title" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">秀数据</button>\''
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "showconfigwindowresize" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showconfigwindowresize" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" showConfigWindowResize"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：true")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：图表或数据透视表的配置会在右侧弹出，设置弹出后表格是否会自动缩进"
                    ),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "forcecalculation" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#forcecalculation" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" forceCalculation"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [a("p", [t._v("类型：Boolean")])]),
                  t._v(" "),
                  a("li", [a("p", [t._v("默认值：false")])]),
                  t._v(" "),
                  a("li", [
                    a("p", [t._v("作用：强制刷新公式。")]),
                    t._v(" "),
                    a("p", [
                      t._v(
                        "默认情况下，为提高加载性能，表格初始化的时候，含有公式的单元格会默认直接取得"
                      ),
                      a("code", [t._v("v")]),
                      t._v("和"),
                      a("code", [t._v("m")]),
                      t._v("作为数据结果，而不做实时计算。"),
                    ]),
                    t._v(" "),
                    a("p", [
                      t._v(
                        "如果公式关联到的单元格数据已经变化，或者公式所在的单元格数据结果改变了，则会导致关联单元格应该计算得出的结果和实际显示结果不一致，这是就需要开启公式刷新，保证数据实时计算的准确性。"
                      ),
                    ]),
                    t._v(" "),
                    a("p", [t._v("⚠️提醒，公式较多时会有性能问题，慎用！")]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "cellrightclickconfig" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cellrightclickconfig" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cellRightClickConfig"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [a("p", [t._v("类型：Object")])]),
                  t._v(" "),
                  a("li", [a("p", [t._v("默认值：{}")])]),
                  t._v(" "),
                  a("li", [a("p", [t._v("作用：自定义配置单元格右击菜单")])]),
                  t._v(" "),
                  a("li", [
                    a("p", [t._v("格式：")]),
                    t._v(" "),
                    a("div", { staticClass: "language-json extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        a("code", [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    copy"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 复制")]
                          ),
                          t._v("\n    copyAs"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 复制为")]
                          ),
                          t._v("\n    paste"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 粘贴")]
                          ),
                          t._v("\n    insertRow"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 插入行")]
                          ),
                          t._v("\n    insertColumn"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 插入列")]
                          ),
                          t._v("\n    deleteRow"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 删除选中行")]
                          ),
                          t._v("\n    deleteColumn"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 删除选中列")]
                          ),
                          t._v("\n    deleteCell"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 删除单元格")]
                          ),
                          t._v("\n    hideRow"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 隐藏选中行和显示选中行")]
                          ),
                          t._v("\n    hideColumn"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 隐藏选中列和显示选中列")]
                          ),
                          t._v("\n    rowHeight"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 行高")]
                          ),
                          t._v("\n    columnWidth"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 列宽")]
                          ),
                          t._v("\n    clear"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 清除内容")]
                          ),
                          t._v("\n    matrix"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 矩阵操作选区")]
                          ),
                          t._v("\n    sort"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 排序选区")]
                          ),
                          t._v("\n    filter"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 筛选选区")]
                          ),
                          t._v("\n    chart"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 图表生成")]
                          ),
                          t._v("\n    image"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 插入图片")]
                          ),
                          t._v("\n    link"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 插入链接")]
                          ),
                          t._v("\n    data"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 数据验证")]
                          ),
                          t._v("\n\tcellFormat"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 设置单元格格式")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    a("p", [
                      t._v(
                        "除了单元格，这里的配置还包括行标题右击菜单、列标题右击菜单和列标题下拉箭头的菜单，具体配置关系如下表格："
                      ),
                    ]),
                    t._v(" "),
                    a("table", [
                      a("thead", [
                        a("tr", [
                          a("th", [t._v("右击菜单配置")]),
                          t._v(" "),
                          a("th", [t._v("单元格")]),
                          t._v(" "),
                          a("th", [t._v("行标题")]),
                          t._v(" "),
                          a("th", [t._v("列标题")]),
                          t._v(" "),
                          a("th", [t._v("列箭头")]),
                        ]),
                      ]),
                      t._v(" "),
                      a("tbody", [
                        a("tr", [
                          a("td", [t._v("copy")]),
                          t._v(" "),
                          a("td", [t._v("复制")]),
                          t._v(" "),
                          a("td", [t._v("复制")]),
                          t._v(" "),
                          a("td", [t._v("复制")]),
                          t._v(" "),
                          a("td", [t._v("复制")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("copyAs")]),
                          t._v(" "),
                          a("td", [t._v("复制为")]),
                          t._v(" "),
                          a("td", [t._v("复制为")]),
                          t._v(" "),
                          a("td", [t._v("复制为")]),
                          t._v(" "),
                          a("td", [t._v("复制为")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("paste")]),
                          t._v(" "),
                          a("td", [t._v("粘贴")]),
                          t._v(" "),
                          a("td", [t._v("粘贴")]),
                          t._v(" "),
                          a("td", [t._v("粘贴")]),
                          t._v(" "),
                          a("td", [t._v("粘贴")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("insertRow")]),
                          t._v(" "),
                          a("td", [t._v("插入行")]),
                          t._v(" "),
                          a("td", [t._v("向上增加N行，向下增加N行")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("insertColumn")]),
                          t._v(" "),
                          a("td", [t._v("插入列")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("向左增加N列，向右增加N列")]),
                          t._v(" "),
                          a("td", [t._v("向左增加N列，向右增加N列")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("deleteRow")]),
                          t._v(" "),
                          a("td", [t._v("删除选中行")]),
                          t._v(" "),
                          a("td", [t._v("删除选中行")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("deleteColumn")]),
                          t._v(" "),
                          a("td", [t._v("删除选中列")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("删除选中列")]),
                          t._v(" "),
                          a("td", [t._v("删除选中列")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("deleteCell")]),
                          t._v(" "),
                          a("td", [t._v("删除单元格")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("hideRow")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("隐藏选中行和显示选中行")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("hideColumn")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("隐藏选中列和显示选中列")]),
                          t._v(" "),
                          a("td", [t._v("隐藏选中列和显示选中列")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("rowHeight")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("行高")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("columnWidth")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                          t._v(" "),
                          a("td", [t._v("列宽")]),
                          t._v(" "),
                          a("td", [t._v("列宽")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("clear")]),
                          t._v(" "),
                          a("td", [t._v("清除内容")]),
                          t._v(" "),
                          a("td", [t._v("清除内容")]),
                          t._v(" "),
                          a("td", [t._v("清除内容")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("matrix")]),
                          t._v(" "),
                          a("td", [t._v("矩阵操作选区")]),
                          t._v(" "),
                          a("td", [t._v("矩阵操作选区")]),
                          t._v(" "),
                          a("td", [t._v("矩阵操作选区")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("sort")]),
                          t._v(" "),
                          a("td", [t._v("排序选区")]),
                          t._v(" "),
                          a("td", [t._v("排序选区")]),
                          t._v(" "),
                          a("td", [t._v("排序选区")]),
                          t._v(" "),
                          a("td", [t._v("A-Z排序和Z-A排序")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("filter")]),
                          t._v(" "),
                          a("td", [t._v("筛选选区")]),
                          t._v(" "),
                          a("td", [t._v("筛选选区")]),
                          t._v(" "),
                          a("td", [t._v("筛选选区")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("chart")]),
                          t._v(" "),
                          a("td", [t._v("图表生成")]),
                          t._v(" "),
                          a("td", [t._v("图表生成")]),
                          t._v(" "),
                          a("td", [t._v("图表生成")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("image")]),
                          t._v(" "),
                          a("td", [t._v("插入图片")]),
                          t._v(" "),
                          a("td", [t._v("插入图片")]),
                          t._v(" "),
                          a("td", [t._v("插入图片")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("link")]),
                          t._v(" "),
                          a("td", [t._v("插入链接")]),
                          t._v(" "),
                          a("td", [t._v("插入链接")]),
                          t._v(" "),
                          a("td", [t._v("插入链接")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("data")]),
                          t._v(" "),
                          a("td", [t._v("数据验证")]),
                          t._v(" "),
                          a("td", [t._v("数据验证")]),
                          t._v(" "),
                          a("td", [t._v("数据验证")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        a("tr", [
                          a("td", [t._v("cellFormat")]),
                          t._v(" "),
                          a("td", [t._v("设置单元格格式")]),
                          t._v(" "),
                          a("td", [t._v("设置单元格格式")]),
                          t._v(" "),
                          a("td", [t._v("设置单元格格式")]),
                          t._v(" "),
                          a("td", [t._v("-")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetrightclickconfig" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetrightclickconfig" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetRightClickConfig"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Object")]),
                  t._v(" "),
                  a("li", [t._v("默认值：{}")]),
                  t._v(" "),
                  a("li", [t._v("作用：自定义配置sheet页右击菜单")]),
                  t._v(" "),
                  a("li", [
                    t._v("格式："),
                    a("div", { staticClass: "language-json extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        a("code", [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("   \n    delete"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 删除")]
                          ),
                          t._v("\n    copy"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 复制")]
                          ),
                          t._v("\n    rename"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//重命名")]
                          ),
                          t._v("\n    color"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//更改颜色")]
                          ),
                          t._v("\n    hide"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//隐藏，取消隐藏")]
                          ),
                          t._v("\n    move"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//向左移，向右移")]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rowheaderwidth" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rowheaderwidth" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rowHeaderWidth"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Number")]),
                  t._v(" "),
                  a("li", [t._v("默认值：46")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：行标题区域的宽度，如果设置为0，则表示隐藏行标题"
                    ),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "columnheaderheight" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#columnheaderheight" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" columnHeaderHeight"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Number")]),
                  t._v(" "),
                  a("li", [t._v("默认值：20")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：列标题区域的高度，如果设置为0，则表示隐藏列标题"
                    ),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetformulabar" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetformulabar" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetFormulaBar"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：true")]),
                  t._v(" "),
                  a("li", [t._v("作用：是否显示公式栏")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "defaultfontsize" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#defaultfontsize" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" defaultFontSize"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Number")]),
                  t._v(" "),
                  a("li", [t._v("默认值：11")]),
                  t._v(" "),
                  a("li", [t._v("作用：初始化默认字体大小")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "limitsheetnamelength" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#limitsheetnamelength" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" limitSheetNameLength"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Boolean")]),
                  t._v(" "),
                  a("li", [t._v("默认值：true")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：工作表重命名等场景下是否限制工作表名称的长度"),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "defaultsheetnamemaxlength" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#defaultsheetnamemaxlength" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" defaultSheetNameMaxLength"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Number")]),
                  t._v(" "),
                  a("li", [t._v("默认值：31")]),
                  t._v(" "),
                  a("li", [t._v("作用：默认允许的工作表名最大长度")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "pager" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#pager" } },
                    [t._v("#")]
                  ),
                  t._v(" pager"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Object")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：分页器按钮设置，初版方案是直接使用的jquery插件 "
                    ),
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/jvbei/sPage",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("sPage"), a("OutboundLink")],
                      1
                    ),
                    t._v("\n点击分页按钮会触发钩子函数 "),
                    a("code", [t._v("onTogglePager")]),
                    t._v("，返回当前页码，同"),
                    a("code", [t._v("sPage")]),
                    t._v("的"),
                    a("code", [t._v("backFun")]),
                    t._v(
                      "方法，此分页器设置只负责UI部分，具体切换分页后的数据请求和数据渲染，请在"
                    ),
                    a("code", [t._v("onTogglePager")]),
                    t._v("钩子行数里自定义处理。"),
                    a("div", { staticClass: "language-js extra-class" }, [
                      a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        a("code", [
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("pager")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("pageIndex")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//当前页码，必填")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("total")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("100")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//数据总条数，必填")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("selectOption")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("10")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("20")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("30")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 选择每页的行数，")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("pageSize")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("10")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//每页显示多少条数据，默认10条")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("showTotal")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 是否显示总数，默认关闭：false")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("showSkip")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//是否显示跳页，默认关闭：false")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("showPN")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//是否显示上下翻页，默认开启：true")]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("prevPage")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("''")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v('//上翻页文字描述，默认"上一页"')]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("nextPage")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("''")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v('//下翻页文字描述，默认"下一页"')]
                          ),
                          t._v("\n\t"),
                          a(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("totalTxt")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("''")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v('// 数据总条数文字描述，默认"总共：{total}"')]
                          ),
                          t._v("\n"),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "uploadimage" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#uploadimage" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" uploadImage"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "用于自定义图片的上传，默认情况下，插入的图片是以base64的形式放入sheet数据中，如果需要单独上传图片，仅在sheet中引用图片地址可使用此配置。"
                  ),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [
                    t._v("类型： "),
                    a("code", [t._v("function (file) => Promise(imgUrl)")]),
                    t._v("，接受file对象，返回Promise，值为上传完成的图片url"),
                  ]),
                  t._v(" "),
                  a("li", [t._v("默认值： "), a("code", [t._v("undefined")])]),
                ]),
                t._v(" "),
                a("details", { staticClass: "custom-block details" }, [
                  a("summary", [t._v("查看示例配置")]),
                  t._v(" "),
                  a("div", { staticClass: "language-js extra-class" }, [
                    a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                      a("code", [
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: {
                              class: "token function-variable function",
                            },
                          },
                          [t._v("uploadImage")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(":")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("function")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token parameter" } },
                          [t._v("file")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("return")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("new")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token class-name" } },
                          [t._v("Promise")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("function")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token parameter" } },
                          [
                            t._v("resolve"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" reject"),
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("var")]
                        ),
                        t._v(" xhr "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("new")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token class-name" } },
                          [t._v("XMLHttpRequest")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n            xhr"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("open")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'POST'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [
                            t._v(
                              "'http://192.168.210.159/miniuiServer/imageUploader.php'"
                            ),
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n\n\t\t\t"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// 额外的请求头")]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("var")]
                        ),
                        t._v(" headers "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("if")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("headers"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n                Object"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("keys")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("headers"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("forEach")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("function")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token parameter" } },
                          [t._v("k")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n                    xhr"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("setRequestHeader")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("k"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" headers"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("[")]
                        ),
                        t._v("k"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("]")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("var")]
                        ),
                        t._v(" data "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("new")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token class-name" } },
                          [t._v("FormData")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n\t\t\t"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// 要上传的图片文件")]
                        ),
                        t._v("\n            data"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("append")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'file'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" file"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" file"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("name "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("||")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("''")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n\n            xhr"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("send")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("data"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n            xhr"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: {
                              class: "token function-variable function",
                            },
                          },
                          [t._v("onreadystatechange")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("function")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("if")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("xhr"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("readyState "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("===")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token number" } },
                          [t._v("4")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n                    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("if")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("xhr"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("status "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("===")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token number" } },
                          [t._v("200")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n                        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("var")]
                        ),
                        t._v(" res "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token constant" } },
                          [t._v("JSON")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("parse")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("xhr"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("responseText"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n                        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("var")]
                        ),
                        t._v(" url "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=")]
                        ),
                        t._v(" res"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        t._v("downloadUrl"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n                        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("if")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("url"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n                            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("resolve")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("url"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("// 给上传的后的地址")]
                        ),
                        t._v("\n                        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("else")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n                            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("reject")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'image upload error'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n                        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n                    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("else")]
                        ),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n                        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("reject")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v("'image upload error'")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n                    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n"),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n\n"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "imageurlhandle" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#imageurlhandle" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" imageUrlHandle"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("图片上传的路径处理函数，和 "),
                  a("a", { attrs: { href: "#uploadImage" } }, [
                    t._v("uploadImage"),
                  ]),
                  t._v(" 相关，一般只有使用自定义图片上传才需要此配置。"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [
                    t._v("类型： "),
                    a("code", [t._v("function (string) => string")]),
                    t._v("，接受原始路径，返回新路径"),
                  ]),
                  t._v(" "),
                  a("li", [t._v("默认值： "), a("code", [t._v("undefined")])]),
                  t._v(" "),
                  a("li", [
                    t._v("作用，处理图片显示时的路径。"),
                    a("br"),
                    t._v("\n如上传返回地址为接口地址，如： "),
                    a("code", [t._v("rest/attach/[fileguid]")]),
                    t._v("， 则需要处理为 "),
                    a("code", [
                      t._v("http://localhost:8080/xxx/rest/attach/[fileguid]"),
                    ]),
                    t._v(
                      " 才能显示，但将前面域名信息写入数据，后续使用可能会有问题，因此可使用此方法处理路径，全路径仅在展示使用，数据内仅存储 "
                    ),
                    a("code", [t._v("rest/attach/[fileguid]")]),
                  ]),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// 处理上传图片的地址")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token function-variable function" },
                        },
                        [t._v("imageUrlHandle")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("function")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("url")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// 已经是 // http data 开头则不处理 ")]
                      ),
                      t._v("\n        "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("if")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token regex" } }, [
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token regex-delimiter" },
                          },
                          [t._v("/")]
                        ),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: {
                              class: "token regex-source language-regex",
                            },
                          },
                          [t._v("^(?:\\/\\/|(?:http|https|data):)")]
                        ),
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token regex-delimiter" },
                          },
                          [t._v("/")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token regex-flags" } },
                          [t._v("i")]
                        ),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("test")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("url"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n            "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("return")]
                      ),
                      t._v(" url"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n        "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n        "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("return")]
                      ),
                      t._v(" location"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("origin "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("+")]
                      ),
                      t._v(" url"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "钩子函数" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#钩子函数" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 钩子函数"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "钩子函数应用于二次开发时，会在各个常用鼠标或者键盘操作时植入钩子，调用开发者传入的函数，起到扩展Luckysheet功能的作用。"
                  ),
                ]),
                t._v(" "),
                a("p", [
                  t._v("钩子函数统一配置在"),
                  a("code", [t._v("options.hook")]),
                  t._v("下，可以分别针对单元格、sheet页、表格创建配置hook。"),
                ]),
                t._v(" "),
                a("blockquote", [
                  a("p", [
                    t._v("使用案例可参考源码 "),
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/index.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/index.html"), a("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "单元格" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#单元格" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 单元格"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "celleditbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#celleditbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cellEditBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [a("p", [t._v("类型：Function")])]),
                  t._v(" "),
                  a("li", [a("p", [t._v("默认值：null")])]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      t._v(
                        "作用：进入单元格编辑模式之前触发。在选中了某个单元格且在非编辑状态下，通常有以下三种常规方法触发进入编辑模式"
                      ),
                    ]),
                    t._v(" "),
                    a("ul", [
                      a("li", [t._v("双击单元格")]),
                      t._v(" "),
                      a("li", [t._v("敲Enter键")]),
                      t._v(" "),
                      a("li", [t._v("使用API：enterEditMode")]),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    a("p", [t._v("参数：")]),
                    t._v(" "),
                    a("ul", [a("li", [t._v("{Array} [range]: 当前选区范围")])]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "cellupdatebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cellupdatebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cellUpdateBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：更新这个单元格值之前触发，"),
                    a("code", [t._v("return false")]),
                    t._v(
                      " 则不执行后续的更新。在编辑状态下修改了单元格之后，退出编辑模式并进行数据更新之前触发这个钩子。"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Number} [r]: 单元格所在行数")]),
                      t._v(" "),
                      a("li", [t._v("{Number} [c]: 单元格所在列数")]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object | String | Number} [value]: 要修改的单元格内容"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Boolean} [isRefresh]: 是否刷新整个表格"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "cellupdated" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cellupdated" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cellUpdated"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：更新这个单元格后触发")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Number} [r]: 单元格所在行数")]),
                      t._v(" "),
                      a("li", [t._v("{Number} [c]: 单元格所在列数")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [oldValue]: 修改前的单元格对象"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [newValue]: 修改后的单元格对象"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Boolean} [isRefresh]: 是否刷新整个表格"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "cellrenderbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cellrenderbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cellRenderBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：单元格渲染前触发，"),
                    a("code", [t._v("return false")]),
                    t._v(" 则不渲染该单元格"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [cell]:单元格对象")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [r]:单元格所在行号")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [c]:单元格所在列号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_r]:单元格左上角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_c]:单元格左上角的水平坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_r]:单元格右下角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_c]:单元格右下角的水平坐标"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [sheet]:当前sheet对象")]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "cellrenderafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cellrenderafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cellRenderAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [a("p", [t._v("类型：Function")])]),
                  t._v(" "),
                  a("li", [a("p", [t._v("默认值：null")])]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      t._v("作用：单元格渲染结束后触发，"),
                      a("code", [t._v("return false")]),
                      t._v(" 则不渲染该单元格"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    a("p", [t._v("参数：")]),
                    t._v(" "),
                    a("ul", [
                      a("li", [t._v("{Object} [cell]:单元格对象")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [r]:单元格所在行号")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [c]:单元格所在列号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_r]:单元格左上角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_c]:单元格左上角的水平坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_r]:单元格右下角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_c]:单元格右下角的水平坐标"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [sheet]:当前sheet对象")]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    a("p", [t._v("示例：")]),
                    t._v(" "),
                    a("p", [
                      t._v(
                        "一个在D1单元格的左上角和右下角分别绘制两张图的案例"
                      ),
                    ]),
                    t._v(" "),
                    a("details", { staticClass: "custom-block details" }, [
                      a("summary", [t._v("DETAILS")]),
                      t._v(" "),
                      a("div", { staticClass: "language-js extra-class" }, [
                        a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          a("code", [
                            t._v("datadocs"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("create")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("hook")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token function-variable function",
                                },
                              },
                              [t._v("cellRenderAfter")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("function")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token parameter" } },
                              [
                                t._v("cell"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" position"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" sheetFile"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" ctx"),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("var")]
                            ),
                            t._v(" r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" position"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("r"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("var")]
                            ),
                            t._v(" c "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" position"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("===")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("0")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&&")]
                            ),
                            t._v(" c "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("===")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("3")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// 指定处理D1单元格")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!")]
                            ),
                            t._v("window"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                        window"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\t\t\t\t\t\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!")]
                            ),
                            t._v("window"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                        window"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("var")]
                            ),
                            t._v(" img "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("null")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("var")]
                            ),
                            t._v(" imgRight "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("null")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("window"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("image "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&&")]
                            ),
                            t._v(" window"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("imgRight"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\t\t\t\t\t\n\t\t\t\t\t\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// 加载过直接取")]
                            ),
                            t._v("\n                        img "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" window"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("image"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        imgRight "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" window"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("imgRight"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("else")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\n                        img "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Image")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        imgRight "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Image")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n                        img"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("src "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://www.dogedoge.com/favicon/developer.mozilla.org.ico'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        imgRight"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("src "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://www.dogedoge.com/static/icons/twemoji/svg/1f637.svg'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n\t\t\t\t\t\t"),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// 图片缓存到内存，下次直接取，不用再重新加载"
                                ),
                              ]
                            ),
                            t._v("\n                        window"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("image "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" img"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        window"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("imgRight "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" imgRight"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n\t\t\t\t\t\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("img"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("complete"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// 已经加载完成的直接渲染")]
                            ),
                            t._v("\n                        ctx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("drawImage")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("img"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("start_c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("start_r"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("else")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                        img"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token function-variable function",
                                },
                              },
                              [t._v("onload")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("function")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                            ctx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("drawImage")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("img"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("start_c"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("start_r"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("imgRight"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("complete"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                        ctx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("drawImage")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("imgRight"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("end_c "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("-")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("end_r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("-")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("else")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\n                        imgRight"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token function-variable function",
                                },
                              },
                              [t._v("onload")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("function")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                            ctx"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("drawImage")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("imgRight"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("end_c "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("-")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("end_r "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("-")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v("\n"),
                          ]),
                        ]),
                      ]),
                      a("p", [t._v(":::")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "cellallrenderbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cellallrenderbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cellAllRenderBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：所有单元格渲染之前执行的方法。在内部，这个方法加在了"
                    ),
                    a("code", [t._v("luckysheetDrawMain")]),
                    t._v("渲染表格之前。"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [data]: 当前工作表二维数组数据"),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [sheet]:当前sheet对象")]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rowtitlecellrenderbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rowtitlecellrenderbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rowTitleCellRenderBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：行标题单元格渲染前触发，"),
                    a("code", [t._v("return false")]),
                    t._v(" 则不渲染行标题"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{String} [rowNum]:行号")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [r]:单元格所在行号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [top]:单元格左上角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [t._v("{Number} [width]:单元格宽度")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [height]:单元格高度")]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rowtitlecellrenderafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rowtitlecellrenderafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rowTitleCellRenderAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：行标题单元格渲染后触发，"),
                    a("code", [t._v("return false")]),
                    t._v(" 则不渲染行标题"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{String} [rowNum]:行号")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [r]:单元格所在行号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [top]:单元格左上角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [t._v("{Number} [width]:单元格宽度")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [height]:单元格高度")]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "columntitlecellrenderbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#columntitlecellrenderbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" columnTitleCellRenderBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：列标题单元格渲染前触发，"),
                    a("code", [t._v("return false")]),
                    t._v(" 则不渲染列标题"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [columnAbc]:列标题字符")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [c]:单元格所在列号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [left]:单元格左上角的水平坐标"),
                          ]),
                          t._v(" "),
                          a("li", [t._v("{Number} [width]:单元格宽度")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [height]:单元格高度")]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "columntitlecellrenderafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#columntitlecellrenderafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" columnTitleCellRenderAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：列标题单元格渲染后触发，"),
                    a("code", [t._v("return false")]),
                    t._v(" 则不渲染列标题"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [columnAbc]:列标题字符")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [c]:单元格所在列号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [left]:单元格左上角的水平坐标"),
                          ]),
                          t._v(" "),
                          a("li", [t._v("{Number} [width]:单元格宽度")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [height]:单元格高度")]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "鼠标钩子" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#鼠标钩子" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 鼠标钩子"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "cellmousedownbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cellmousedownbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cellMousedownBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：单元格点击前的事件，"),
                    a("code", [t._v("return false")]),
                    t._v("则终止之后的点击操作"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [cell]:单元格对象")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [r]:单元格所在行号")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [c]:单元格所在列号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_r]:单元格左上角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_c]:单元格左上角的水平坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_r]:单元格右下角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_c]:单元格右下角的水平坐标"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [sheet]:当前sheet对象")]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "cellmousedown" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cellmousedown" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cellMousedown"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：单元格点击后的事件，"),
                    a("code", [t._v("return false")]),
                    t._v("则终止之后的点击操作"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [cell]:单元格对象")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [r]:单元格所在行号")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [c]:单元格所在列号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_r]:单元格左上角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_c]:单元格左上角的水平坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_r]:单元格右下角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_c]:单元格右下角的水平坐标"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [sheet]:当前sheet对象")]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetmousemove" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetmousemove" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetMousemove"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：鼠标移动事件，可通过cell判断鼠标停留在哪个单元格"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [cell]:单元格对象")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [r]:单元格所在行号")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [c]:单元格所在列号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_r]:单元格左上角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_c]:单元格左上角的水平坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_r]:单元格右下角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_c]:单元格右下角的水平坐标"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [sheet]:当前sheet对象")]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object} [moveState]:鼠标移动状态，可判断现在鼠标操作的对象，false和true\n"
                        ),
                        a("ul", [
                          a("li", [
                            t._v("{Boolean} [functionResizeStatus]:工具栏拖动"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [horizontalmoveState]:水平冻结分割栏拖动"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [verticalmoveState]:垂直冻结分割栏拖动"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [pivotTableMoveState]:数据透视表字段拖动"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [sheetMoveStatus]:sheet改变你位置拖动"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [scrollStatus]:鼠标触发了滚动条移动"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [selectStatus]:鼠标移动框选数据"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [rowsSelectedStatus]:通过行标题来选择整行操作"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [colsSelectedStatus]:通过列标题来选择整列操作"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [cellSelectedMove]:选框的移动"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [cellSelectedExtend]:选框下拉填充"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [colsChangeSize]:拖拽改变列宽"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [rowsChangeSize]:拖拽改变行高"),
                          ]),
                          t._v(" "),
                          a("li", [t._v("{Boolean} [chartMove]:图表移动")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [chartResize]:图表改变大小"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [rangeResize]:公式参数高亮选区的大小拖拽"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [rangeMove]:公式参数高亮选区的位置拖拽"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetmouseup" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetmouseup" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetMouseup"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：鼠标按钮释放事件，可通过cell判断鼠标停留在哪个单元格"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [cell]:单元格对象")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [r]:单元格所在行号")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [c]:单元格所在列号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_r]:单元格左上角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_c]:单元格左上角的水平坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_r]:单元格右下角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_c]:单元格右下角的水平坐标"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [sheet]:当前sheet对象")]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object} [moveState]:鼠标移动状态，可判断现在鼠标操作的对象，false和true\n"
                        ),
                        a("ul", [
                          a("li", [
                            t._v("{Boolean} [functionResizeStatus]:工具栏拖动"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [horizontalmoveState]:水平冻结分割栏拖动"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [verticalmoveState]:垂直冻结分割栏拖动"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [pivotTableMoveState]:数据透视表字段拖动"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [sheetMoveStatus]:sheet改变你位置拖动"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [scrollStatus]:鼠标触发了滚动条移动"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [selectStatus]:鼠标移动框选数据"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [rowsSelectedStatus]:通过行标题来选择整行操作"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [colsSelectedStatus]:通过列标题来选择整列操作"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [cellSelectedMove]:选框的移动"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [cellSelectedExtend]:选框下拉填充"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [colsChangeSize]:拖拽改变列宽"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [rowsChangeSize]:拖拽改变行高"),
                          ]),
                          t._v(" "),
                          a("li", [t._v("{Boolean} [chartMove]:图表移动")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [chartResize]:图表改变大小"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [rangeResize]:公式参数高亮选区的大小拖拽"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [rangeMove]:公式参数高亮选区的位置拖拽"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [cellRightClick]:单元格右击"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [rowTitleRightClick]:行标题右击"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v(
                              "{Boolean} [columnTitleRightClick]:列标题右击"
                            ),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [sheetRightClick]:底部sheet页右击"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Boolean} [hyperlinkClick]:点击超链接"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "scroll" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#scroll" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" scroll"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：鼠标滚动事件")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [
                            t._v("{Number} [scrollLeft]:横向滚动条的位置"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [scrollTop]:垂直滚动条的位置"),
                          ]),
                          t._v(" "),
                          a("li", [t._v("{Number} [canvasHeight]:canvas高度")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "celldragstop" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#celldragstop" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cellDragStop"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：鼠标拖拽文件到Luckysheet内部的结束事件"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [cell]:单元格对象")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [position]:\n"),
                        a("ul", [
                          a("li", [t._v("{Number} [r]:单元格所在行号")]),
                          t._v(" "),
                          a("li", [t._v("{Number} [c]:单元格所在列号")]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_r]:单元格左上角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [start_c]:单元格左上角的水平坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_r]:单元格右下角的垂直坐标"),
                          ]),
                          t._v(" "),
                          a("li", [
                            t._v("{Number} [end_c]:单元格右下角的水平坐标"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [sheet]:当前sheet对象")]),
                      t._v(" "),
                      a("li", [t._v("{Object} [ctx]: 当前画布的context")]),
                      t._v(" "),
                      a("li", [t._v("{Object} [event]: 当前事件对象")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "选区操作-包括单元格" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#选区操作-包括单元格" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 选区操作（包括单元格）"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "rangeselect" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangeselect" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeSelect"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：框选或者设置选区后触发")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [sheet]:当前sheet对象")]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object | Array} [range]: 选区范围，可能为多个选区"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangemovebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangemovebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeMoveBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：移动选区前，包括单个单元格")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Array} [range]: 当前选区范围，只能为单个选区"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangemoveafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangemoveafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeMoveAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：移动选区后，包括单个单元格")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Array} [oldRange]: 移动前当前选区范围，只能为单个选区"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Array} [newRange]: 移动后当前选区范围，只能为单个选区"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangeeditbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangeeditbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeEditBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区修改前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object | Array} [range]: 选区范围，可能为多个选区"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [data]: 选区范围所对应的数据")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangeeditafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangeeditafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeEditAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区修改后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object | Array} [range]: 选区范围，可能为多个选区"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [oldData]: 修改前选区范围所对应的数据"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [newData]: 修改后选区范围所对应的数据"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangecopybefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangecopybefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeCopyBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区复制前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object | Array} [range]: 选区范围，可能为多个选区"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [data]: 选区范围所对应的数据")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangecopyafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangecopyafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeCopyAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区复制后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object | Array} [range]: 选区范围，可能为多个选区"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [data]: 选区范围所对应的数据")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangepastebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangepastebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangePasteBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区粘贴前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object | Array} [range]: 选区范围，可能为多个选区"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [data]: 要被粘贴的选区范围所对应的数据"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangepasteafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangepasteafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangePasteAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区粘贴后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object | Array} [range]: 选区范围，可能为多个选区"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object} [originData]: 要被粘贴的选区范围所对应的数据"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{Object} [pasteData]: 要粘贴的数据")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangecutbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangecutbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeCutBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区剪切前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Array} [range]: 选区范围，只能为单个范围"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [data]: 要被剪切的选区范围所对应的数据"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangecutafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangecutafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeCutAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区剪切后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Array} [range]: 选区范围，只能为单个范围"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [data]: 被剪切的选区范围所对应的数据"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangedeletebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangedeletebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeDeleteBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区删除前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Array} [range]: 选区范围，只能为单个范围"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [data]: 要被删除的选区范围所对应的数据"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangedeleteafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangedeleteafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeDeleteAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区删除后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Array} [range]: 选区范围，只能为单个范围"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [data]: 被删除的选区范围所对应的数据"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangeclearbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangeclearbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeClearBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区清除前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object | Array} [range]: 选区范围，可能为多个选区"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [data]: 要被清除的选区范围所对应的数据"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangeclearafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangeclearafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangeClearAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区清除后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object | Array} [range]: 选区范围，可能为多个选区"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [data]: 被清除的选区范围所对应的数据"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangepullbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangepullbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangePullBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区下拉前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Array} [range]: 当前选区范围，只能为单个范围"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "rangepullafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rangepullafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" rangePullAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：选区下拉后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Array} [range]: 下拉后的选区范围，只能为单个范围"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "工作表" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#工作表" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 工作表"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "sheetcreatebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetcreatebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetCreateBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：创建sheet页前触发，sheet页新建也包含数据透视表新建"
                    ),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetcreateafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetcreateafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetCreateAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：创建sheet页后触发，sheet页新建也包含数据透视表新建"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [sheet]: 当前新创建的sheet页的配置"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetcopybefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetcopybefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetCopyBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：拷贝创建sheet页前触发，sheet页新建也包含数据透视表新建"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [targetSheet]: 被拷贝的sheet页配置"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Object} [copySheet]: 拷贝得到的sheet页的配置"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetcopyafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetcopyafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetCopyAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：拷贝创建sheet页后触发，sheet页新建也包含数据透视表新建"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [sheet]: 当前创建的sheet页的配置"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheethidebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheethidebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetHideBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：隐藏sheet页前触发")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [sheet]: 将要隐藏的sheet页的配置"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheethideafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheethideafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetHideAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：隐藏sheet页后触发")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [sheet]: 要隐藏的sheet页的配置"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetshowbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetshowbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetShowBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：显示sheet页前触发")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [sheet]: 将要显示的sheet页的配置"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetshowafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetshowafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetShowAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：显示sheet页后触发")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [sheet]: 要显示的sheet页的配置"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetmovebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetmovebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetMoveBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：sheet移动前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Number} [i]: 当前sheet页的"),
                        a("code", [t._v("index")]),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Number} [order]: 当前sheet页"),
                        a("code", [t._v("order")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetmoveafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetmoveafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetMoveAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：sheet移动后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Number} [i]: 当前sheet页的"),
                        a("code", [t._v("index")]),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Number} [oldOrder]: 修改前当前sheet页"),
                        a("code", [t._v("order")]),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Number} [newOrder]: 修改后当前sheet页"),
                        a("code", [t._v("order")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetdeletebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetdeletebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetDeleteBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：sheet删除前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [sheet]: 要被删除sheet页的配置"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetdeleteafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetdeleteafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetDeleteAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：sheet删除后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [sheet]: 已被删除sheet页的配置"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheeteditnamebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheeteditnamebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetEditNameBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：sheet修改名称前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Number} [i]: sheet页的"),
                        a("code", [t._v("index")]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{String} [name]: 当前sheet页名称")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheeteditnameafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheeteditnameafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetEditNameAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：sheet修改名称后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Number} [i]: sheet页的index")]),
                      t._v(" "),
                      a("li", [
                        t._v("{String} [oldName]: 修改前当前sheet页名称"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{String} [newName]: 修改后当前sheet页名称"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheeteditcolorbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheeteditcolorbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetEditColorBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：sheet修改颜色前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Number} [i]: sheet页的"),
                        a("code", [t._v("index")]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{String} [color]: 当前sheet页颜色")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheeteditcolorafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheeteditcolorafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetEditColorAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：sheet修改颜色后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Number} [i]: sheet页的"),
                        a("code", [t._v("index")]),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{String} [oldColor]: 修改前当前sheet页颜色"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{String} [newColor]: 修改后当前sheet页颜色"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetzoombefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetzoombefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetZoomBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：sheet缩放前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Number} [i]: sheet页的"),
                        a("code", [t._v("index")]),
                      ]),
                      t._v(" "),
                      a("li", [t._v("{String} [zoom]: 当前sheet页缩放比例")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetzoomafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetzoomafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetZoomAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：sheet缩放后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Number} [i]: sheet页的"),
                        a("code", [t._v("index")]),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{String} [oldZoom]: 修改前当前sheet页缩放比例"),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{String} [newZoom]: 修改后当前sheet页缩放比例"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetactivate" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetactivate" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetActivate"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：激活工作表前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Number} [i]: sheet页的"),
                        a("code", [t._v("index")]),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Boolean} [isPivotInitial]: 是否切换到了数据透视表页"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v("{Boolean} [isNewSheet]: 是否新建了sheet页"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetdeactivatebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetdeactivatebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetDeactivateBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：工作表从活动状态转为非活动状态前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Number} [i]: sheet页的"),
                        a("code", [t._v("index")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "sheetdeactivateafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetdeactivateafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetDeactivateAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：工作表从活动状态转为非活动状态后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Number} [i]: sheet页的"),
                        a("code", [t._v("index")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "imagedeletebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#imagedeletebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" imageDeleteBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：图片删除前触发")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [imageItem]: 要删除的图片配置对象"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "imagedeleteafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#imagedeleteafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" imageDeleteAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：图片删除后触发，如果自定义了图片上传，可在此处发请求删除图片"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [imageItem]: 删除的图片配置对象"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n\t"),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("hook")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n\t\t"),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token function-variable function" },
                        },
                        [t._v("imageDeleteAfter")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("function")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("imageItem")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n\t\t\t"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("var")]
                      ),
                      t._v(" src "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" imgItem"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("src"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\t\t\t$"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("post")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'/rest/file/deletebyurl'"),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("downloadUrl")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" src"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\t\t"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n\t"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "工作簿" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#工作簿" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 工作簿"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "workbookcreatebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#workbookcreatebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" workbookCreateBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：表格创建之前触发。旧的钩子函数叫做"),
                    a("code", [t._v("beforeCreateDom")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [book]: 整个工作簿的配置（options）"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "workbookcreateafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#workbookcreateafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" workbookCreateAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：表格创建之后触发")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [book]: 整个工作簿的配置（options）"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "workbookdestroybefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#workbookdestroybefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" workbookDestroyBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：表格销毁之前触发")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [book]: 整个工作簿的配置（options）"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "workbookdestroyafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#workbookdestroyafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" workbookDestroyAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：表格销毁之后触发")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [book]: 整个工作簿的配置（options）"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "updated" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#updated" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" updated"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：协同编辑中的每次操作后执行的方法，监听表格内容变化，即客户端每执行一次表格操作，Luckysheet将这次操作存到历史记录中后触发，撤销重做时因为也算一次操作，也会触发此钩子函数。"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object} [operate]: 本次操作的历史记录信息，根据不同的操作，会有不同的历史记录，参考源码 "
                        ),
                        a(
                          "a",
                          {
                            attrs: {
                              href: "https://servequery.github.io/datadocs/blob/master/src/controllers/controlHistory.js",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [t._v("历史记录"), a("OutboundLink")],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "resized" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#resized" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" resized"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：resize执行之后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [size]: 整个工作簿区域的宽高")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "scroll-2" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#scroll-2" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" scroll"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：监听表格滚动值")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Number} [scrollLeft]: 水平方向滚动值")]),
                      t._v(" "),
                      a("li", [t._v("{Number} [scrollTop]: 垂直方向滚动值")]),
                      t._v(" "),
                      a("li", [
                        t._v("{Number} [canvasHeight]: 滚动容器的高度"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "协作消息" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#协作消息" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 协作消息"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "cooperativemessage" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cooperativemessage" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cooperativeMessage"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：接受协作消息，二次开发。拓展协作消息指令集"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} : 收到服务器发送的整个协作消息体对象"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "图片" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#图片" } },
                    [t._v("#")]
                  ),
                  t._v(" 图片"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "imageinsertbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#imageinsertbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" imageInsertBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：图片插入之前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [a("li", [t._v("{Object} [url]: 图片地址")])]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "imageinsertafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#imageinsertafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" imageInsertAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：图片插入之后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [item]]: 图片地址、宽高、位置等信息"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "imageupdatebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#imageupdatebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" imageUpdateBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：图片修改之前，修改的内容包括宽高、位置、裁剪等操作"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [item]]: 图片地址、宽高、位置等信息"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "imageupdateafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#imageupdateafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" imageUpdateAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：图片修改之后，修改的内容包括宽高、位置、裁剪等操作"
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object} [oldItem]]: 修改前图片地址、宽高、位置等信息"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object} [newItem]]: 修改后图片地址、宽高、位置等信息"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "imagedeletebefore-2" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#imagedeletebefore-2" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" imageDeleteBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：图片删除之前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [item]]: 图片地址、宽高、位置等信息"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "imagedeleteafter-2" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#imagedeleteafter-2" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" imageDeleteAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：图片删除之后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [item]]: 图片地址、宽高、位置等信息"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "批注" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#批注" } },
                    [t._v("#")]
                  ),
                  t._v(" 批注"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "commentinsertbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#commentinsertbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" commentInsertBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：插入批注之前，"),
                    a("code", [t._v("return false")]),
                    t._v(" 则不插入批注"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Number} [r]:单元格所在行号")]),
                      t._v(" "),
                      a("li", [t._v("{Number} [c]:单元格所在列号")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "commentinsertafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#commentinsertafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" commentInsertAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：插入批注之后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Number} [r]:单元格所在行号")]),
                      t._v(" "),
                      a("li", [t._v("{Number} [c]:单元格所在列号")]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object} [cell]: 被插入批注所在的单元格信息，如："
                        ),
                        a("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                        t._v("，包含批注信息"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "commentdeletebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#commentdeletebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" commentDeleteBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：删除批注之前，"),
                    a("code", [t._v("return false")]),
                    t._v(" 则不删除批注"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Number} [r]:单元格所在行号")]),
                      t._v(" "),
                      a("li", [t._v("{Number} [c]:单元格所在列号")]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object} [cell]: 要删除的批注所在的单元格信息，如："
                        ),
                        a("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                        t._v("，可以看到批注信息"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "commentdeleteafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#commentdeleteafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" commentDeleteAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：删除批注之后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Number} [r]:单元格所在行号")]),
                      t._v(" "),
                      a("li", [t._v("{Number} [c]:单元格所在列号")]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object} [cell]: 被删除批注所在的单元格信息，如："
                        ),
                        a("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                        t._v("，可以看到批注已被删除"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "commentupdatebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#commentupdatebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" commentUpdateBefore"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：修改批注之前，"),
                    a("code", [t._v("return false")]),
                    t._v(" 则不修改批注"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Number} [r]:单元格所在行号")]),
                      t._v(" "),
                      a("li", [t._v("{Number} [c]:单元格所在列号")]),
                      t._v(" "),
                      a("li", [t._v("{String} [value]: 新的批注内容")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "commentupdateafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#commentupdateafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" commentUpdateAfter"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：修改批注之后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Number} [r]:单元格所在行号")]),
                      t._v(" "),
                      a("li", [t._v("{Number} [c]:单元格所在列号")]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object} [oldCell]: 修改前批注所在的单元格信息，如："
                        ),
                        a("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object} [newCell]: 修改后批注所在的单元格信息，如："
                        ),
                        a("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "数据透视表" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#数据透视表" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 数据透视表"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "pivottableeditbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#pivottableeditbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" pivotTableEditBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：修改数据透视表之前，操作如：拖动字段等"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v("{Object} [sheet]: 数据透视表所在sheet页配置"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "pivottableeditafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#pivottableeditafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" pivotTableEditAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v("作用：修改数据透视表之后，操作如：拖动字段等"),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [
                        t._v(
                          "{Object} [oldSheet]: 修改前数据透视表所在sheet页配置"
                        ),
                      ]),
                      t._v(" "),
                      a("li", [
                        t._v(
                          "{Object} [newSheet]: 修改后数据透视表所在sheet页配置"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "冻结" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#冻结" } },
                    [t._v("#")]
                  ),
                  t._v(" 冻结"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "frozencreatebefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#frozencreatebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" frozenCreateBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：设置冻结前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [frozen]: 冻结类型信息")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "frozencreateafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#frozencreateafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" frozenCreateAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：设置冻结后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [frozen]: 冻结类型信息")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "frozencancelbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#frozencancelbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" frozenCancelBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：取消冻结前")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [frozen]: 冻结类型信息")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h3", { attrs: { id: "frozencancelafter" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#frozencancelafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" frozenCancelAfter"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：取消冻结后")]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [frozen]: 冻结类型信息")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "打印" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#打印" } },
                    [t._v("#")]
                  ),
                  t._v(" 打印"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "printbefore" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#printbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" printBefore"),
                ]),
                t._v(" "),
                a("p", [t._v("（TODO）")]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [t._v("作用：打印前")]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "旧版钩子函数" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#旧版钩子函数" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 旧版钩子函数"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "firemousedown" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#firemousedown" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" fireMousedown"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：单元格数据下钻自定义方法，注意此钩子函数是挂载在options下："
                    ),
                    a("code", [t._v("options.fireMousedown")]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
                t._v(" "),
                a("h2", { attrs: { id: "分页器" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#分页器" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 分页器"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "ontogglepager" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#ontogglepager" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" onTogglePager"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("类型：Function")]),
                  t._v(" "),
                  a("li", [t._v("默认值：null")]),
                  t._v(" "),
                  a("li", [
                    t._v(
                      "作用：点击分页按钮回调函数，返回当前页码，具体参数参照"
                    ),
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/jvbei/sPage",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("sPage backFun"), a("OutboundLink")],
                      1
                    ),
                  ]),
                  t._v(" "),
                  a("li", [
                    t._v("参数：\n"),
                    a("ul", [
                      a("li", [t._v("{Object} [page]: 返回当前分页对象")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("hr"),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      a.default = r.exports;
    },
  },
]);
