(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    332: function (t, s, a) {
      "use strict";
      a.r(s);
      var n = a(10),
        r = Object(n.a)(
          {},
          function () {
            var t = this,
              s = t._self._c;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s("h1", { attrs: { id: "表格操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#表格操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 表格操作"),
                ]),
                t._v(" "),
                s(
                  "p",
                  [
                    t._v(
                      "每一次操作都会保存历史记录，用于撤销和重做，如果在表格初始化的时候开启了"
                    ),
                    s(
                      "RouterLink",
                      { attrs: { to: "/guide/config.html#updateurl" } },
                      [t._v("共享编辑")]
                    ),
                    t._v("功能，则会通过websocket将操作实时更新到后台。"),
                  ],
                  1
                ),
                t._v(" "),
                s("blockquote", [
                  s("p", [
                    t._v("源码 "),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/controllers/server.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        s("code", [t._v("src/controllers/server.js")]),
                        s("OutboundLink"),
                      ],
                      1
                    ),
                    t._v(" 模块实现了后台保存功能"),
                  ]),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "通常，共享编辑（或者叫协同编辑）是需要和账户系统配合来控制权限的，开发者可以根据已有功能，配合自己的账户管理功能自行实现权限控制。"
                  ),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "以下为所有的支持传输到后台的操作类型，并且以MongoDB做存储示例，讲解如何做前后端交互。"
                  ),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "注意一点，对象中的i为当前sheet的index值，而不是order。"
                  ),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "单元格刷新" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#单元格刷新" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 单元格刷新"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "单个单元格刷新" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#单个单元格刷新" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 单个单元格刷新"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Sheet_0554kKiKl4M7_1597974810804"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("233")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"ct"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"fa"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"General"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"n"')]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"m"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"233"')]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"r"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"c"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [t._v("当前sheet的index值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s(
                            "td",
                            [
                              t._v(
                                "单元格的值，数字、字符串或着对象格式，对象参考 "
                              ),
                              s(
                                "RouterLink",
                                {
                                  attrs: {
                                    to: "/guide/cell.html#基本单元格",
                                  },
                                },
                                [t._v("单元格属性表")]
                              ),
                            ],
                            1
                          ),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("r")]),
                          t._v(" "),
                          s("td", [t._v("单元格的行号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("c")]),
                          t._v(" "),
                          s("td", [t._v("单元格的列号")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "前端维护luckysheetfile[i].data，而单元格更新到后台，继续维护"
                      ),
                      s("code", [t._v("luckysheetfile[i].celldata")]),
                      t._v(" 参数，celldata是一个一维数组："),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("r"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" c"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"值1"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("r"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("10")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" c"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("11")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"值2"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("r"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("10")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" c"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("11")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("f"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"=sum"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"100"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    s("p", [
                      t._v("后台在保存前台推送的数据时，会更新 "),
                      s("code", [t._v("luckysheetfile[i].celldata")]),
                      t._v(
                        " 字段，如果存在该单元格则更新，如果没有则添加，如果存在该单元格但是"
                      ),
                      s("code", [t._v("v")]),
                      t._v("为null则删除该单元格。"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "范围单元格刷新" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#范围单元格刷新" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 范围单元格刷新"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"rv"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Sheet_ahKdzaNC65iL_1598343160744"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("3")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"ct"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"fa"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"General"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"n"')]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"m"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"3"')]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("4")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"ct"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"fa"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"General"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"n"')]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"m"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"4"')]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"range"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"row"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("2")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"column"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [t._v("当前sheet的索引值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s(
                            "td",
                            [
                              t._v("范围二维数组，单元格对象参考 "),
                              s(
                                "RouterLink",
                                {
                                  attrs: {
                                    to: "/guide/cell.html#基本单元格",
                                  },
                                },
                                [t._v("单元格属性表")]
                              ),
                            ],
                            1
                          ),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("range")]),
                          t._v(" "),
                          s("td", [t._v("范围行列数")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "前端维护luckysheetfile[i].data，而单元格更新到后台，继续维护"
                      ),
                      s("code", [t._v("luckysheetfile[i].celldata")]),
                      t._v(" 参数，需要将指定位置"),
                      s("code", [t._v("range")]),
                      t._v("的所有单元格数据替换为新的数据"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "config操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#config操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" config操作"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          t._v("  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"cg"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Sheet_0554kKiKl4M7_1597974810804"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n              "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rangeType"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"range"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n              "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"borderType"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"border-all"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n              "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"color"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"#000"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n              "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"style"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"1"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n              "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"range"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"row"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"column"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n          "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"k"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"borderInfo"')]
                          ),
                          t._v("\n  "),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [t._v("当前sheet的index值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [t._v("需要更新value值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("k")]),
                          t._v(" "),
                          s("td", [
                            t._v("操作的key值，可选 边框："),
                            s("code", [t._v("'borderInfo'")]),
                            t._v(" / ：行隐藏："),
                            s("code", [t._v("'rowhidden'")]),
                            t._v(" / 列隐藏："),
                            s("code", [t._v("'colhidden'")]),
                            t._v(" / 行高："),
                            s("code", [t._v("'rowlen'")]),
                            t._v(" / 列宽："),
                            s("code", [t._v("'columnlen'")]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("更新 "),
                      s("code", [t._v("luckysheetfile[i].config[k] = v")]),
                      t._v(" ，如果"),
                      s("code", [t._v("config")]),
                      t._v("中不存在"),
                      s("code", [t._v("k")]),
                      t._v("，则新建一个"),
                      s("code", [t._v("k")]),
                      t._v("属性并设置为空。"),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "注意一点，修改config中的某个配置时，会把这个配置全部传输到后台，比如修改borderInfo，本来已经有一个含边框的单元格了，再新设置一个单元格边框，这时候会把这两个单元格边框信息都传输到后台，而不做更细颗粒的操作。"
                      ),
                    ]),
                    t._v(" "),
                    s("ol", [
                      s("li", [
                        s("p", [t._v("行隐藏：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"cg"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_0554kKiKl4M7_1597974810804"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"5"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"6"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"13"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"14"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token comment" },
                                        },
                                        [t._v("// 包含所有隐藏行信息")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"rowhidden"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s("code", [
                              t._v(
                                'luckysheetfile["Sheet_0554kKiKl4M7_1597974810804"].config["rowhidden"] = { "5": 0, "6": 0, "13": 0, "14": 0 }'
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("修改行高：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"cg"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_0554kKiKl4M7_1597974810804"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"9"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("20")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"11"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("71")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"15"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("58")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token comment" },
                                        },
                                        [
                                          t._v(
                                            "// 包含所有修改过高度的单元格信息"
                                          ),
                                        ]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"rowlen"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s("code", [
                              t._v(
                                'luckysheetfile["Sheet_0554kKiKl4M7_1597974810804"].config["rowlen"] = { "9": 20, "11": 71, "15": 58 }'
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("修改列宽：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"cg"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_0554kKiKl4M7_1597974810804"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"2"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("135")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"columnlen"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s("code", [
                              t._v(
                                'luckysheetfile["Sheet_0554kKiKl4M7_1597974810804"].config["columnlen"] = { "2": 135 }'
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "通用保存" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#通用保存" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 通用保存"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          t._v("  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"all"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n          "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"type"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"rangeRow"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n          "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"range"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"row_focus"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"column_focus"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"k"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"frozen"')]
                          ),
                          t._v("\n  "),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [t._v("当前sheet的index值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [t._v("需要更新value值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("k")]),
                          t._v(" "),
                          s("td", [t._v("操作的key值")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("更新 "),
                      s("code", [t._v("luckysheetfile[i][k] = v")]),
                      t._v(" ，如果"),
                      s("code", [t._v("luckysheetfile[i]")]),
                      t._v("中不存在"),
                      s("code", [t._v("k")]),
                      t._v("，则新建一个"),
                      s("code", [t._v("k")]),
                      t._v("属性并设置为空。"),
                    ]),
                    t._v(" "),
                    s("ol", [
                      s("li", [
                        s("p", [t._v("冻结行列：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"all"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"type"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"rangeRow"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"range"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"row_focus"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"column_focus"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"frozen"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s(
                              "div",
                              { staticClass: "language-js extra-class" },
                              [
                                s(
                                  "pre",
                                  { pre: !0, attrs: { class: "language-js" } },
                                  [
                                    s("code", [
                                      t._v("luckysheetfile"),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"frozen"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v("=")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"type"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"rangeRow"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"range"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"row_focus"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"column_focus"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
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
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("修改工作表名称：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"all"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"Cell22"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"name"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s("code", [
                              t._v('luckysheetfile[0]["name"] = "Cell22"'),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("修改工作表颜色：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"all"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#f02323"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"color"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s("code", [
                              t._v('luckysheetfile[0]["color"] = "#f02323"'),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("合并单元格：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("p", [t._v("发送到后台：")]),
                            t._v(" "),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"all"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_aheLt0Waf1lk_1598248231626"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"merge"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"0_0"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"r"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("  "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"c"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"rs"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"cs"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"rowlen"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"config"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("p", [t._v("后台更新：")]),
                            t._v(" "),
                            s(
                              "div",
                              { staticClass: "language-js extra-class" },
                              [
                                s(
                                  "pre",
                                  { pre: !0, attrs: { class: "language-js" } },
                                  [
                                    s("code", [
                                      t._v("luckysheetfile"),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_aheLt0Waf1lk_1598248231626"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"config"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v("=")]
                                      ),
                                      t._v("  "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"merge"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"0_0"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"r"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("  "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"c"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"rs"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"cs"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"rowlen"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                            s("p", [
                              t._v(
                                "注意，合并单元格的更新比较特殊，要求把整个config传输到后台，因为合并单元格可能会影响到其他参数。"
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("筛选范围：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"all"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"row"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("16")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("21")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"filter_select"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s(
                              "div",
                              { staticClass: "language-js extra-class" },
                              [
                                s(
                                  "pre",
                                  { pre: !0, attrs: { class: "language-js" } },
                                  [
                                    s("code", [
                                      t._v("luckysheetfile"),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"filter_select"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v("=")]
                                      ),
                                      t._v("  "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"row"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("16")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("21")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n    "),
                                      s(
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
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("筛选的具体设置：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"all"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"0"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"0"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"caljs"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"value"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"textinclude"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"text"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"Text contains"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"type"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"1"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"value1"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"Lucky"')]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"rowhidden"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"18"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"optionstate"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token boolean" },
                                        },
                                        [t._v("true")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"str"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("17")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"edr"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("19")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"cindex"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"stc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"edc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"filter"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s(
                              "div",
                              { staticClass: "language-js extra-class" },
                              [
                                s(
                                  "pre",
                                  { pre: !0, attrs: { class: "language-js" } },
                                  [
                                    s("code", [
                                      t._v("luckysheetfile"),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"filter"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v("=")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"0"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"caljs"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"value"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"textinclude"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"text"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"Text contains"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"type"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"1"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"value1"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"Lucky"')]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"rowhidden"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"18"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"optionstate"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token boolean" },
                                        },
                                        [t._v("true")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"str"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("17")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"edr"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("19")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"cindex"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"stc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"edc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
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
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("交替颜色：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"all"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_4N45tpMd0ni4_1598250591760"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"cellrange"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"row"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"format"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"head"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"fc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#000"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"bc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#f6cb4b"')]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"one"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"fc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#000"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"bc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#ffffff"')]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"two"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"fc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#000"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"bc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#fff9e7"')]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"foot"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"fc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#000"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"bc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#ffebac"')]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"hasRowHeader"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token boolean" },
                                        },
                                        [t._v("true")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"hasRowFooter"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token boolean" },
                                        },
                                        [t._v("true")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"luckysheet_alternateformat_save"'
                                          ),
                                        ]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s(
                              "div",
                              { staticClass: "language-js extra-class" },
                              [
                                s(
                                  "pre",
                                  { pre: !0, attrs: { class: "language-js" } },
                                  [
                                    s("code", [
                                      t._v("luckysheetfile"),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_4N45tpMd0ni4_1598250591760"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"luckysheet_alternateformat_save"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v("=")]
                                      ),
                                      t._v("   "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"cellrange"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"row"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"format"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"head"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"fc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#000"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"bc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#f6cb4b"')]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"one"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"fc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#000"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"bc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#ffffff"')]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"two"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"fc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#000"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"bc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#fff9e7"')]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"foot"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"fc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#000"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"bc"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#ffebac"')]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"hasRowHeader"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token boolean" },
                                        },
                                        [t._v("true")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"hasRowFooter"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token boolean" },
                                        },
                                        [t._v("true")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n"),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("条件格式：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"all"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_545W7w03kLkC_1598251927583"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"type"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"default"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"cellrange"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"row"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"format"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"textColor"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#9c0006"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"cellColor"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#ffc7ce"')]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"conditionName"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"greaterThan"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"conditionRange"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"conditionValue"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"3"')]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"luckysheet_conditionformat_save"'
                                          ),
                                        ]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s(
                              "div",
                              { staticClass: "language-js extra-class" },
                              [
                                s(
                                  "pre",
                                  { pre: !0, attrs: { class: "language-js" } },
                                  [
                                    s("code", [
                                      t._v("luckysheetfile"),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_545W7w03kLkC_1598251927583"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"luckysheet_conditionformat_save"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v("=")]
                                      ),
                                      t._v("   "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"type"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"default"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"cellrange"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"row"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"format"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"textColor"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#9c0006"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"cellColor"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"#ffc7ce"')]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"conditionName"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"greaterThan"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"conditionRange"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"conditionValue"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"3"')]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n"),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("数据透视表：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("p", [t._v("发送到后台：")]),
                            t._v(" "),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"all"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_r3Cz5bbxipL3_1598252547290"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"pivot_select_save"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"row"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"pivotDataSheetIndex"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_31ikLMip330K_1598252536645"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"row"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"filter"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"values"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"showType"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"pivotTable"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("p", [t._v("后台更新：")]),
                            t._v(" "),
                            s(
                              "div",
                              { staticClass: "language-js extra-class" },
                              [
                                s(
                                  "pre",
                                  { pre: !0, attrs: { class: "language-js" } },
                                  [
                                    s("code", [
                                      t._v("luckysheetfile"),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_r3Cz5bbxipL3_1598252547290"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"pivotTable"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v("=")]
                                      ),
                                      t._v("  "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"pivot_select_save"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"row"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("0")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"pivotDataSheetIndex"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_31ikLMip330K_1598252536645"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"row"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"filter"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"values"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"showType"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"column"')]
                                      ),
                                      t._v("\n    "),
                                      s(
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
                              ]
                            ),
                            s("p", [
                              t._v(
                                "注意，虽然数据透视表的格式是这个，但是当你选择一个范围之后，点击生产数据透视表时，Luckysheet会先执行新建sheet页和切换到该sheet页的操作，才能在新建的sheet页加上数据透视表。"
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("动态数组：")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("发送到后台："),
                            s(
                              "div",
                              { staticClass: "language-json extra-class" },
                              [
                                s(
                                  "pre",
                                  {
                                    pre: !0,
                                    attrs: { class: "language-json" },
                                  },
                                  [
                                    s("code", [
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"t"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"all"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"i"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_r3Cz5bbxipL3_1598252547290"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"v"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"r"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"c"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("5")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"f"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"=UNIQUE(B2:E9)"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"data"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("5")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("5")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("5")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("7")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("5")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("7")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("8")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("7")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("8")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("9")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("7")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("8")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("9")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("10")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("8")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("9")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("10")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("11")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token property" },
                                        },
                                        [t._v('"k"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"dynamicArray"')]
                                      ),
                                      t._v("\n"),
                                      s(
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
                              ]
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("后台更新："),
                            s(
                              "div",
                              { staticClass: "language-js extra-class" },
                              [
                                s(
                                  "pre",
                                  { pre: !0, attrs: { class: "language-js" } },
                                  [
                                    s("code", [
                                      t._v("luckysheetfile"),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [
                                          t._v(
                                            '"Sheet_r3Cz5bbxipL3_1598252547290"'
                                          ),
                                        ]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"dynamicArray"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v("=")]
                                      ),
                                      t._v("   "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("{")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"r"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"c"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("5")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"f"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token string" },
                                        },
                                        [t._v('"=UNIQUE(B2:E9)"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"data"')]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token operator" },
                                        },
                                        [t._v(":")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("1")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("2")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("5")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("3")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("5")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("4")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("5")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("7")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("5")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("7")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("8")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("6")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("7")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("8")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("9")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("7")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("8")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("9")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("10")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v("\n                "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("[")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("8")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("9")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("10")]
                                      ),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v(",")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token number" },
                                        },
                                        [t._v("11")]
                                      ),
                                      t._v(" "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n            "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n    "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("]")]
                                      ),
                                      t._v("\n"),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "函数链操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#函数链操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 函数链操作"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"fc"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"0"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [
                              t._v(
                                '"{\\"r\\":1,\\"c\\":1,\\"index\\":\\"0\\",\\"func\\":[true,3,\\"=sum(A1:B1)\\"]}"'
                              ),
                            ]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"op"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"add"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"pos"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [t._v("当前sheet的index值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v(
                              "对象值，这里对象的内部字段不需要单独更新，所以存为文本即可"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [
                            t._v("操作类型,"),
                            s("code", [t._v("add")]),
                            t._v("为新增，"),
                            s("code", [t._v("update")]),
                            t._v("为更新，"),
                            s("code", [t._v("del")]),
                            t._v("为删除"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("pos")]),
                          t._v(" "),
                          s("td", [t._v("更新或者删除的函数位置")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("calcChain为一个数组")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("如果"),
                        s("code", [t._v("op")]),
                        t._v("的值为"),
                        s("code", [t._v("add")]),
                        t._v("则添加到末尾 "),
                        s("code", [
                          t._v("luckysheetfile[0].calcChain.push(v)"),
                        ]),
                        t._v("，"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("如果"),
                        s("code", [t._v("op")]),
                        t._v("的值为"),
                        s("code", [t._v("update")]),
                        t._v("，格式为："),
                        s("div", { staticClass: "language-json extra-class" }, [
                          s(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              s("code", [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"fc"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"i"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"0"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [
                                    t._v(
                                      '"{\\"r\\":0,\\"c\\":3,\\"index\\":\\"0\\",\\"func\\":[true,1,\\"=Formula!A1+Formula!B1+1\\"],\\"color\\":\\"w\\",\\"parent\\":null,\\"chidren\\":{},\\"times\\":0}"'
                                    ),
                                  ]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"op"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"update"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"pos"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                t._v("\n"),
                                s(
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
                        t._v("更新 "),
                        s("code", [
                          t._v("luckysheetfile[0].calcChain[pos] = v"),
                        ]),
                        t._v("，"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("如果"),
                        s("code", [t._v("op")]),
                        t._v("的值为"),
                        s("code", [t._v("del")]),
                        t._v("则删除，格式为："),
                        s("div", { staticClass: "language-json extra-class" }, [
                          s(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              s("code", [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"fc"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"i"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token null keyword" },
                                  },
                                  [t._v("null")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"op"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"del"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"pos"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                t._v("\n"),
                                s(
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
                        s("code", [
                          t._v("luckysheetfile[0].calcChain.splice(pos, 1)"),
                        ]),
                        t._v("。"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "行列操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#行列操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 行列操作"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "删除行或列" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#删除行或列" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 删除行或列"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"drc"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("3")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"index"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("6")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"len"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("2")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rc"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"r"')]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("参数")]),
                        t._v(" "),
                        s("td", [t._v("说明")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("t")]),
                        t._v(" "),
                        s("td", [t._v("操作类型表示符号")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("i")]),
                        t._v(" "),
                        s("td", [t._v("当前sheet的index值")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("rc")]),
                        t._v(" "),
                        s("td", [
                          t._v("行操作还是列操作，值`r`代表行，`c`代表列"),
                        ]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { rowspan: "2" } }, [t._v("v")]),
                        t._v(" "),
                        s("td", [t._v("index")]),
                        t._v(" "),
                        s("td", [t._v("从第几行或者列开始删除")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("len")]),
                        t._v(" "),
                        s("td", [t._v("删除多少行或者列")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("如果"),
                      s("code", [t._v("rc")]),
                      t._v("的值是"),
                      s("code", [t._v("'r'")]),
                      t._v("删除行， 如果"),
                      s("code", [t._v("rc")]),
                      t._v("的值为"),
                      s("code", [t._v("'c'")]),
                      t._v("则删除列， 例如"),
                      s("code", [t._v("rc='r'")]),
                      t._v("，"),
                      s("code", [t._v("index=4")]),
                      t._v("，"),
                      s("code", [t._v("len=5")]),
                      t._v(
                        "，则代表从第4行开始删除之后的5行（4、5、6、7、8）。"
                      ),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("主要是对 "),
                      s("code", [t._v("luckysheetfile[i].celldata")]),
                      t._v(
                        " 中的单元格进行操作，删除参数中所描述符合条件的单元格并且更新其他单元格的行列值，以上述为例，首先查找单元格中"
                      ),
                      s("code", [t._v("r")]),
                      t._v(
                        "值在4到8的所有单元格并删除，然后把本来行号9以后的单元格的"
                      ),
                      s("code", [t._v("r")]),
                      t._v("值减去5，最后把 "),
                      s("code", [t._v("luckysheetfile[i].row")]),
                      t._v(" 减去5。\n如果"),
                      s("code", [t._v("v")]),
                      t._v("值为 "),
                      s("code", [t._v('"#__qkdelete#"')]),
                      t._v("（不含引号），则此处为需要删除的单元格。"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "增加行或列" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#增加行或列" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 增加行或列"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"arc"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"0"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"index"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"len"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"direction"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"lefttop"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"data"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rc"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"r"')]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("参数")]),
                        t._v(" "),
                        s("td", [t._v("说明")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("t")]),
                        t._v(" "),
                        s("td", [t._v("操作类型表示符号")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("i")]),
                        t._v(" "),
                        s("td", [t._v("当前sheet的index值")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("rc")]),
                        t._v(" "),
                        s("td", [
                          t._v("行操作还是列操作，值`r`代表行，`c`代表列"),
                        ]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { rowspan: "4" } }, [t._v("v")]),
                        t._v(" "),
                        s("td", [t._v("index")]),
                        t._v(" "),
                        s("td", [t._v("从第几行或者列开始新增")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("len")]),
                        t._v(" "),
                        s("td", [t._v("增加多少行或者列")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("direction")]),
                        t._v(" "),
                        s("td", [t._v("方向")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("data")]),
                        t._v(" "),
                        s("td", [t._v("新增行或者列的内容")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("如果"),
                      s("code", [t._v("rc")]),
                      t._v("的值是"),
                      s("code", [t._v("r")]),
                      t._v("新增行， 如果"),
                      s("code", [t._v("rc")]),
                      t._v("的值为"),
                      s("code", [t._v("c")]),
                      t._v("则新增列， 例如"),
                      s("code", [t._v("rc=r，index=4，len=5")]),
                      t._v("，则代表从第4行开始增加5行，如果"),
                      s("code", [t._v("data")]),
                      t._v("为空则增加空行，如果"),
                      s("code", [t._v("data")]),
                      t._v("不为空则用"),
                      s("code", [t._v("data")]),
                      t._v("中的数组添加新增的行中。"),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("主要是对 "),
                      s("code", [t._v("luckysheetfile[i].celldata")]),
                      t._v(" 中的单元格进行操作，以上述为例，首先 "),
                      s("code", [t._v("luckysheetfile[i].row")]),
                      t._v(" 加5，然后把"),
                      s("code", [t._v("r")]),
                      t._v("大于4的单元格的整体的"),
                      s("code", [t._v("r")]),
                      t._v("值+5，如果"),
                      s("code", [t._v("data")]),
                      t._v("为空则增加空行则结束，如果"),
                      s("code", [t._v("data")]),
                      t._v("不为空则把二维数组"),
                      s("code", [t._v("data")]),
                      t._v("转换为 "),
                      s("code", [t._v("{r:0,c:0,v:100}")]),
                      t._v(" 的格式并添加到"),
                      s("code", [t._v("celldata")]),
                      t._v("中，转换的伪代码如下："),
                    ]),
                    t._v(" "),
                    s(
                      "div",
                      { staticClass: "language-javascript extra-class" },
                      [
                        s(
                          "pre",
                          { pre: !0, attrs: { class: "language-javascript" } },
                          [
                            s("code", [
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token keyword" } },
                                [t._v("var")]
                              ),
                              t._v(" ret "),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v("=")]
                              ),
                              t._v(" "),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("[")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("]")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(";")]
                              ),
                              t._v("\n"),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token keyword" } },
                                [t._v("for")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("(")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token keyword" } },
                                [t._v("var")]
                              ),
                              t._v(" r"),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v("=")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token number" } },
                                [t._v("0")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(";")]
                              ),
                              t._v("r"),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v("<")]
                              ),
                              t._v("data"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(".")]
                              ),
                              t._v("length"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(";")]
                              ),
                              t._v("r"),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v("++")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(")")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("{")]
                              ),
                              t._v("\n    "),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token keyword" } },
                                [t._v("for")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("(")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token keyword" } },
                                [t._v("var")]
                              ),
                              t._v(" c"),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v("=")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token number" } },
                                [t._v("0")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(";")]
                              ),
                              t._v("c"),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v("<")]
                              ),
                              t._v("data"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("[")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token number" } },
                                [t._v("0")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("]")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(".")]
                              ),
                              t._v("length"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(";")]
                              ),
                              t._v("c"),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v("++")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(")")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("{")]
                              ),
                              t._v("\n        "),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token keyword" } },
                                [t._v("if")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("(")]
                              ),
                              t._v("d"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("[")]
                              ),
                              t._v("r"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("]")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("[")]
                              ),
                              t._v("c"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("]")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v("==")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token keyword" } },
                                [t._v("null")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(")")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("{")]
                              ),
                              t._v("\n            "),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token keyword" } },
                                [t._v("continue")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(";")]
                              ),
                              t._v("\n        "),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("}")]
                              ),
                              t._v("\n        ret"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(".")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token function" } },
                                [t._v("push")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("(")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("{")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class: "token literal-property property",
                                  },
                                },
                                [t._v("r")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v(":")]
                              ),
                              t._v("r"),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v("+")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token number" } },
                                [t._v("5")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(",")]
                              ),
                              t._v(" "),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class: "token literal-property property",
                                  },
                                },
                                [t._v("c")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v(":")]
                              ),
                              t._v("c"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(",")]
                              ),
                              t._v(" "),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: {
                                    class: "token literal-property property",
                                  },
                                },
                                [t._v("v")]
                              ),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token operator" } },
                                [t._v(":")]
                              ),
                              t._v(" data"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("[")]
                              ),
                              t._v("r"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("]")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("[")]
                              ),
                              t._v("c"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("]")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("}")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(")")]
                              ),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(";")]
                              ),
                              t._v("\n    "),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("}")]
                              ),
                              t._v("\n"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v("}")]
                              ),
                              t._v("\n"),
                              s(
                                "span",
                                { pre: !0, attrs: { class: "token keyword" } },
                                [t._v("return")]
                              ),
                              t._v(" ret"),
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" },
                                },
                                [t._v(";")]
                              ),
                              t._v("\n"),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "筛选操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#筛选操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 筛选操作"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "清除筛选" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#清除筛选" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 清除筛选"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"fsc"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token null keyword" } },
                            [t._v("null")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("清除 "),
                      s("code", [t._v("luckysheetfile[0].filter = null")]),
                      t._v(" ， "),
                      s("code", [
                        t._v("luckysheetfile[i].filter_select = null"),
                      ]),
                      t._v("。"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "恢复筛选" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#恢复筛选" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 恢复筛选"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"fsr"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"filter"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"filter_select"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("清除 "),
                      s("code", [t._v("luckysheetfile[i]. filter = v.filter")]),
                      t._v("， "),
                      s("code", [
                        t._v(
                          "luckysheetfile[i]. filter_select = v. filter_select"
                        ),
                      ]),
                      t._v("。"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "sheet操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheet操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheet操作"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "新建sheet" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#新建sheet" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 新建sheet"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"sha"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token null keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"name"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Sheet11"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"color"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('""')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"status"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"0"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"order"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("10")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"index"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Sheet_oWlM5pKnwL1s_1598331858653"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"celldata"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"row"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("84")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"column"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("60")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"config"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"pivotTable"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token null keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"isPivotTable"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("参数")]),
                        t._v(" "),
                        s("td", [t._v("说明")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("t")]),
                        t._v(" "),
                        s("td", [t._v("操作类型表示符号")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("i")]),
                        t._v(" "),
                        s("td", [t._v("当前sheet的index值")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { rowspan: "11" } }, [t._v("v")]),
                        t._v(" "),
                        s("td", [t._v("name")]),
                        t._v(" "),
                        s("td", [t._v("隐藏后跳转的sheet的index值")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("color")]),
                        t._v(" "),
                        s("td", [t._v("Sheet颜色")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("status")]),
                        t._v(" "),
                        s("td", [t._v("激活状态")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("order")]),
                        t._v(" "),
                        s("td", [t._v("Sheet摆放顺序")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("index")]),
                        t._v(" "),
                        s("td", [t._v("Index索引")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("celldata")]),
                        t._v(" "),
                        s("td", [t._v("单元格数据集")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("row")]),
                        t._v(" "),
                        s("td", [t._v("行数")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("column")]),
                        t._v(" "),
                        s("td", [t._v("列数")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("config")]),
                        t._v(" "),
                        s("td", [t._v("设置")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("pivotTable")]),
                        t._v(" "),
                        s("td", [t._v("数据透视表设置")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("isPivotTable")]),
                        t._v(" "),
                        s("td", [t._v("是否数据透视表")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("添加一行（一个文档）到数据库中。\n"),
                      s("code", [t._v("luckysheetfile.push(json)")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "复制sheet" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#复制sheet" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 复制sheet"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"shc"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Sheet_e5pKTeloilhe_1598332166630"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"copyindex"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"name"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Cell(Copy)"')]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("复制表格中的sheet索引值为"),
                      s("code", [t._v("copyindex")]),
                      t._v("并添加到数据库中，添加的设置该新文档的"),
                      s("code", [t._v("index")]),
                      t._v("为"),
                      s("code", [t._v("i")]),
                      t._v("对应的值。"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "删除sheet" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#删除sheet" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 删除sheet"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"shd"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token null keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"deleIndex"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("参数")]),
                        t._v(" "),
                        s("td", [t._v("说明")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("t")]),
                        t._v(" "),
                        s("td", [t._v("操作类型表示符号")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { rowspan: "2" } }, [t._v("v")]),
                        t._v(" "),
                        s("td", [t._v("deleIndex")]),
                        t._v(" "),
                        s("td", [t._v("需要删除的sheet索引")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("删除索引为"),
                      s("code", [t._v("deleIndex")]),
                      t._v("对应值的sheet。"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "删除sheet后恢复操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#删除sheet后恢复操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 删除sheet后恢复操作"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"shre"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token null keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"reIndex"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"0"')]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("参数")]),
                        t._v(" "),
                        s("td", [t._v("说明")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("t")]),
                        t._v(" "),
                        s("td", [t._v("操作类型表示符号")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { rowspan: "2" } }, [t._v("v")]),
                        t._v(" "),
                        s("td", [t._v("deleIndex")]),
                        t._v(" "),
                        s("td", [t._v("需要恢复的sheet索引")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("恢复索引为"),
                      s("code", [t._v("reIndex")]),
                      t._v("对应值的sheet。"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "调整sheet位置" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#调整sheet位置" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 调整sheet位置"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"shr"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token null keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"0"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"1"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"2"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("2")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"3"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("3")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"4"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("4")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"5"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("5")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"6"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("6")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"7"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("7")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"Sheet_6az6nei65t1i_1596209937084"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("8")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v("设置Sheet的排序，为一个键值对，"),
                            s("code", [t._v("key")]),
                            t._v("代表sheet的"),
                            s("code", [t._v("index")]),
                            t._v("，"),
                            s("code", [t._v("value")]),
                            t._v("代表"),
                            s("code", [t._v("order")]),
                            t._v("值。格式为："),
                            s("code", [t._v('{"1": 3, "2":1, "0": 2, "3":0}')]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("对sheet的"),
                      s("code", [t._v("index")]),
                      t._v("等于"),
                      s("code", [t._v("key")]),
                      t._v("的页，设置其"),
                      s("code", [t._v("order")]),
                      t._v("属性为"),
                      s("code", [t._v("value")]),
                      t._v("值。示例："),
                    ]),
                    t._v(" "),
                    s("p", [
                      s("code", [t._v("luckysheetfile[key1].order = value1")]),
                      t._v(" "),
                      s("code", [t._v("luckysheetfile[key2].order = value2")]),
                      t._v(" "),
                      s("code", [t._v("luckysheetfile[key3].order = value3")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "切换到指定sheet" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#切换到指定sheet" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 切换到指定sheet"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"shs"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token null keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [t._v("要切换到的sheet页索引")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("对sheet的"),
                      s("code", [t._v("index")]),
                      t._v("等于"),
                      s("code", [t._v("v")]),
                      t._v("的页，设置其"),
                      s("code", [t._v("status")]),
                      t._v("属性为"),
                      s("code", [t._v("1")]),
                      t._v("值。示例："),
                    ]),
                    t._v(" "),
                    s("p", [s("code", [t._v("luckysheetfile[v].status = 1")])]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "sheet属性-隐藏或显示" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheet属性-隐藏或显示" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheet属性(隐藏或显示)"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"sh"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"op"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"hide"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"cur"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [t._v("当前sheet的index值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [t._v("操作选项，有hide、show")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v("如果"),
                            s("code", [t._v("hide")]),
                            t._v("为"),
                            s("code", [t._v("1")]),
                            t._v("则隐藏，为"),
                            s("code", [t._v("0")]),
                            t._v("或者空则为显示"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("cur")]),
                          t._v(" "),
                          s("td", [
                            t._v("隐藏后设置索引对应"),
                            s("code", [t._v("cur")]),
                            t._v("的sheet为激活状态"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("更新"),
                      s("code", [t._v("i")]),
                      t._v("对应sheet的根路径"),
                      s("code", [t._v("hide")]),
                      t._v("字段为"),
                      s("code", [t._v("v")]),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("当隐藏时"),
                      s("code", [t._v("status")]),
                      t._v("值为"),
                      s("code", [t._v("0")]),
                      t._v("，更新"),
                      s("code", [t._v("index")]),
                      t._v("对应"),
                      s("code", [t._v("cur")]),
                      t._v("的sheet的"),
                      s("code", [t._v("status")]),
                      t._v("状态为"),
                      s("code", [t._v("1")]),
                    ]),
                    t._v(" "),
                    s("p", [
                      s("code", [t._v("luckysheetfile[0].hide = 1")]),
                      t._v(" "),
                      s("code", [t._v("luckysheetfile[0].status = 0")]),
                      t._v(" "),
                      s("code", [t._v("luckysheetfile[1].status = 1")]),
                    ]),
                    t._v(" "),
                    s("p", [t._v("显示某个sheet页时，json为")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"sh"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("6")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"op"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"show"')]
                          ),
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    s("p", [
                      s("code", [t._v("status")]),
                      t._v("值为"),
                      s("code", [t._v("1")]),
                      t._v("，上一个激活sheet的"),
                      s("code", [t._v("status")]),
                      t._v("状态为"),
                      s("code", [t._v("0")]),
                    ]),
                    t._v(" "),
                    s("p", [
                      s("code", [t._v("luckysheetfile[6].hide = 0")]),
                      t._v(" "),
                      s("code", [t._v("luckysheetfile[6].status = 1")]),
                      t._v(" "),
                      s("code", [t._v("luckysheetfile[old_cur].status = 0")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "表格信息更改" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#表格信息更改" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 表格信息更改"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "修改工作簿名称" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#修改工作簿名称" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 修改工作簿名称"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"na"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token null keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"DataDocs Demo1"')]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [t._v("工作簿名称")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("Luckysheet配置，修改title为"),
                      s("code", [t._v('"DataDocs Demo1"')]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "图表-todo" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#图表-todo" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 图表(TODO)"),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    '图表操作类型有4种，分别为新增图表"add"、移动图表位置"xy"、缩放图表"wh"、修改图表配置"update"'
                  ),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "新增图表" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#新增图表" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 新增图表"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"c"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"op"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"add"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chart_id"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"chart_p145W6i73otw_1596209943446"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"width"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("400")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"height"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("250")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"left"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("20")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"top"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("120")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"sheetIndex"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Sheet_6az6nei65t1i_1596209937084"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"needRangeShow"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chartOptions"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chart_id"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"chart_p145W6i73otw_1596209943446"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chartAllType"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"echarts|line|default"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rangeArray"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"row"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("4")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"column"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("7")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rangeColCheck"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"exits"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"range"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rangeRowCheck"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"exits"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"range"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rangeConfigCheck"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"defaultOption"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"title"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n                    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"show"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"text"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"默认标题"')]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"isShow"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [t._v("当前sheet的index值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [t._v("操作选项")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [t._v("图表的配置信息")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("更新对应sheet页中的图表设置，如果"),
                      s("code", [t._v("luckysheetfile[i].chart")]),
                      t._v("为null，则初始化为空数组 "),
                      s("code", [t._v("[]")]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          t._v("luckysheetfile"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(".chart.push(v)\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "移动图表位置" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#移动图表位置" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 移动图表位置"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"c"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"op"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"xy"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chart_id"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"chart_p145W6i73otw_1596209943446"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"left"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("20")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"top"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("120")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [t._v("当前sheet的index值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [t._v("操作选项")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [t._v("图表的配置信息")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("更新对应sheet页中的图表设置")]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          t._v("luckysheetfile"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart_id"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("left "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("left"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\nluckysheetfile"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart_id"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("top "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("top"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "缩放图表" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#缩放图表" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 缩放图表"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"c"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"op"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"wh"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chart_id"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"chart_p145W6i73otw_1596209943446"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"width"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("400")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"height"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("250")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"left"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("20")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"top"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("120")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [t._v("当前sheet的index值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [t._v("操作选项")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [t._v("图表的配置信息")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("更新对应sheet页中的图表设置")]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          t._v("luckysheetfile"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart_id"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("left "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("left"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\nluckysheetfile"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart_id"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("top "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("top"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\nluckysheetfile"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart_id"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("width "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("width"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\nluckysheetfile"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart_id"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("height "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("height"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "修改图表配置" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#修改图表配置" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 修改图表配置"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("格式")]), t._v("：")]),
                    t._v(" "),
                    s("div", { staticClass: "language-json extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"c"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"i"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"op"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"update"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chart_id"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"chart_p145W6i73otw_1596209943446"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"width"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("400")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"height"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("250")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"left"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("20")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"top"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("120")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"sheetIndex"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Sheet_6az6nei65t1i_1596209937084"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"needRangeShow"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chartOptions"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chart_id"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"chart_p145W6i73otw_1596209943446"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chartAllType"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"echarts|line|default"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rangeArray"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"row"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("4")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"column"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("7")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rangeColCheck"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"exits"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"range"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rangeRowCheck"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"exits"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"range"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rangeConfigCheck"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"defaultOption"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"title"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n                    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"show"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"text"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"默认标题"')]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"isShow"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("参数")]),
                          t._v(" "),
                          s("th", [t._v("说明")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("操作类型表示符号")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [t._v("当前sheet的index值")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [t._v("操作选项")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [t._v("图表的配置信息")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("后台更新")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("更新对应sheet页中的图表设置")]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          t._v("luckysheetfile"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("chart_id"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" v"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "后端返回格式" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#后端返回格式" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 后端返回格式"),
                ]),
                t._v(" "),
                s("p", [t._v("websocket 后端返回的数据格式")]),
                t._v(" "),
                s("div", { staticClass: "language-js extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("createTime")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" 命令发送时间\n    "),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("data")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" 修改的命令\n    "),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("id")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"7a"'),
                      ]),
                      t._v("   websocket的id\n    "),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("returnMessage")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"success"'),
                      ]),
                      t._v("\n    "),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("status")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"0"'),
                      ]),
                      t._v("  "),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      t._v("告诉前端需要根据data的命令修改  "),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      t._v("无意义\n    "),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("type")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      t._v("：连接成功，"),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      t._v("：发送给当前连接的用户，"),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("2"),
                      ]),
                      t._v("：发送信息给其他用户，"),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("3"),
                      ]),
                      t._v("：发送选区位置信息，"),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("999"),
                      ]),
                      t._v("：用户连接断开\n    "),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("username")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" 用户名\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      s.default = r.exports;
    },
  },
]);
