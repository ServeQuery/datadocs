(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    326: function (t, e, r) {
      "use strict";
      r.r(e);
      var a = r(10),
        s = Object(a.a)(
          {},
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                e("h1", { attrs: { id: "常见问题" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#常见问题" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 常见问题"),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "本章内容搜集了大家反馈的常见问题，如果官方文档和此列表都不能解答您的疑问，推荐到"
                  ),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/discussions",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("官方论坛"), e("OutboundLink")],
                    1
                  ),
                  t._v("反馈"),
                ]),
                t._v(" "),
                e(
                  "h2",
                  {
                    attrs: { id: "luckysheetfile中的data和celldata有什么区别" },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#luckysheetfile中的data和celldata有什么区别",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" luckysheetfile中的data和celldata有什么区别？"),
                  ]
                ),
                t._v(" "),
                e(
                  "p",
                  [
                    e("strong", [
                      e("span", { staticStyle: { "font-size": "20px" } }, [
                        t._v("A"),
                      ]),
                    ]),
                    t._v("：表格初始化时使用一维数组格式的 "),
                    e(
                      "RouterLink",
                      { attrs: { to: "/guide/sheet.html#celldata" } },
                      [t._v("celldata")]
                    ),
                    t._v(
                      "，初始化完成后转化为二维数组格式的data作为存储更新使用，celldata不再使用。"
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "p",
                  [
                    t._v("如果需要将"),
                    e("code", [t._v("data")]),
                    t._v("拿出来作为初始化数据，则需要执行 "),
                    e(
                      "RouterLink",
                      {
                        attrs: {
                          to: "/guide/api.html#transtocelldata-data-setting",
                        },
                      },
                      [t._v("transToCellData(data)")]
                    ),
                    t._v("转换为celldata数据。\n其中"),
                    e("code", [t._v("{ r, c, v }")]),
                    t._v("格式的celldata转换为二维数组使用的是"),
                    e(
                      "RouterLink",
                      {
                        attrs: {
                          to: "/guide/api.html#transtodata-celldata-setting",
                        },
                      },
                      [t._v("transToData(celldata)")]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e("p", [t._v("总结如下：")]),
                t._v(" "),
                e("div", { staticClass: "language-js extra-class" }, [
                  e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    e("code", [
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          t._v(
                            "// data => celldata 二维数组数据 转化成 {r, c, v}格式 一维数组"
                          ),
                        ]
                      ),
                      t._v("\nluckysheet"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("transToCellData")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("data"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n\n"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// celldata => data 生成表格所需二维数组")]
                      ),
                      t._v("\nluckysheet"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("transToData")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("celldata"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "单元格的类型有哪些" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#单元格的类型有哪些" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 单元格的类型有哪些？"),
                ]),
                t._v(" "),
                e(
                  "p",
                  [
                    e("strong", [
                      e("span", { staticStyle: { "font-size": "20px" } }, [
                        t._v("A"),
                      ]),
                    ]),
                    t._v("：参考"),
                    e("RouterLink", { attrs: { to: "/guide/cell.html" } }, [
                      t._v("单元格格式列表"),
                    ]),
                    t._v(",例举了可用的单元格格式"),
                  ],
                  1
                ),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  { attrs: { id: "如何在vue-react项目中使用luckysheet" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#如何在vue-react项目中使用luckysheet" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 如何在Vue/React项目中使用Luckysheet？"),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：参考"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    t._v("Vue案例："),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/mengshukeji/datadocs-vue",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("datadocs-vue"), e("OutboundLink")],
                      1
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("React案例："),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/mengshukeji/datadocs-react",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("datadocs-react"), e("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  { attrs: { id: "为什么初始化后表格里面的公式不会被触发" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#为什么初始化后表格里面的公式不会被触发",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 为什么初始化后表格里面的公式不会被触发？"),
                  ]
                ),
                t._v(" "),
                e(
                  "p",
                  [
                    e("strong", [
                      e("span", { staticStyle: { "font-size": "20px" } }, [
                        t._v("A"),
                      ]),
                    ]),
                    t._v("：参考 "),
                    e(
                      "RouterLink",
                      { attrs: { to: "/guide/sheet.html#calcchain" } },
                      [t._v("表格数据格式")]
                    ),
                    t._v(" ,设置单元格数据对应的calcChain即可。"),
                  ],
                  1
                ),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  { attrs: { id: "远端加载数据是loadurl还是updateurl" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#远端加载数据是loadurl还是updateurl" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 远端加载数据是loadUrl还是updateUrl？"),
                  ]
                ),
                t._v(" "),
                e(
                  "p",
                  [
                    e("strong", [
                      e("span", { staticStyle: { "font-size": "20px" } }, [
                        t._v("A"),
                      ]),
                    ]),
                    t._v("："),
                    e(
                      "RouterLink",
                      { attrs: { to: "/guide/config.html#loadurl" } },
                      [t._v("loadUrl")]
                    ),
                    t._v(
                      "。配置了loadUrl，Luckysheet会通过ajax请求整个表格数据，而updateUrl会作为协同编辑实时保存的接口地址。\n注意：初始化数据需要配置loadUrl参数，而协同编辑则在配置loadUrl、updateUrl和allowUpdate四个参数才能生效。"
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  { attrs: { id: "每个sheet页的index和order有什么区别" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#每个sheet页的index和order有什么区别" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 每个sheet页的"),
                    e("code", [t._v("index")]),
                    t._v("和"),
                    e("code", [t._v("order")]),
                    t._v("有什么区别？"),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：每个sheet页都有一个唯一id，就是"),
                  e("code", [t._v("index")]),
                  t._v("，可以用数字递增，也可以使用随机字符串，而"),
                  e("code", [t._v("order")]),
                  t._v("是所有的sheet的排序情况，从0开始，只能为数字"),
                  e("code", [t._v("0,1,2...")]),
                  t._v("。"),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  { attrs: { id: "dist文件夹下为什么不能直接运行项目" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#dist文件夹下为什么不能直接运行项目" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" dist文件夹下为什么不能直接运行项目？"),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：需要启动本地服务器"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/JacksonTian/anywhere",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("Node搭建本地服务器"), e("OutboundLink")],
                      1
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/set_up_a_local_testing_server",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("Python搭建本地服务器"), e("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "excel导入导出怎么做" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#excel导入导出怎么做" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" excel导入导出怎么做？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：配合Luckysheet开发的excel导入导出库-"),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/mengshukeji/Luckyexcel",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("Luckyexcel"), e("OutboundLink")],
                    1
                  ),
                  t._v(
                    "已经实现了excel导入功能，导出功能正在开发当中。现阶段excel导出可以参考这2篇博文："
                  ),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://docs.servequery.com/recode-hyh/p/13168226.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        t._v("基于LuckySheet在线表格的Excel下载功能开发"),
                        e("OutboundLink"),
                      ],
                      1
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://blog.csdn.net/csdn_lsy/article/details/107179708",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        t._v("使用exceljs导出luckysheet表格"),
                        e("OutboundLink"),
                      ],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "初始化时合并单元格怎么做" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#初始化时合并单元格怎么做" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 初始化时合并单元格怎么做？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：参考以下案例"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://docs.servequery.com/ServeQuery/p/13272397.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("DataDocs"), e("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  {
                    attrs: {
                      id: "luckysheet如何把表格里的数据保存到数据库-有没有服务端存储和协作的解决方案",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#luckysheet如何把表格里的数据保存到数据库-有没有服务端存储和协作的解决方案",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(
                      " Luckysheet如何把表格里的数据保存到数据库？有没有服务端存储和协作的解决方案？"
                    ),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：有两个方案："),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    t._v("一是表格操作完成后，使用"),
                    e("code", [t._v("datadocs.getAllSheets()")]),
                    t._v("方法获取到全部的工作表数据，全部发送到后台存储。"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "二是开启协同编辑功能，实时传输数据给后端。\n具体的操作步骤参考这篇文章："
                    ),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://docs.servequery.com/ServeQuery/p/13857874.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        t._v("Luckysheet如何把表格里的数据保存到数据库"),
                        e("OutboundLink"),
                      ],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  {
                    attrs: {
                      id: "如何监听单元格hover或者点击事件-cellrenderafter如何实时监听变化",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#如何监听单元格hover或者点击事件-cellrenderafter如何实时监听变化",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 如何监听单元格hover或者点击事件？"),
                    e("code", [t._v("cellRenderAfter")]),
                    t._v("如何实时监听变化？"),
                  ]
                ),
                t._v(" "),
                e(
                  "p",
                  [
                    e("strong", [
                      e("span", { staticStyle: { "font-size": "20px" } }, [
                        t._v("A"),
                      ]),
                    ]),
                    t._v(
                      "：我们搜集到需要针对单元格事件的二次开发需求，规划了单元格相关的钩子函数，参考"
                    ),
                    e(
                      "RouterLink",
                      {
                        attrs: { to: "/guide/config.html#cellrenderafter" },
                      },
                      [t._v("单元格钩子函数")]
                    ),
                    t._v("（显示的TODO的暂未开放）"),
                  ],
                  1
                ),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "顶部的工具栏不支持自定义配置" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#顶部的工具栏不支持自定义配置" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 顶部的工具栏不支持自定义配置？"),
                ]),
                t._v(" "),
                e(
                  "p",
                  [
                    e("strong", [
                      e("span", { staticStyle: { "font-size": "20px" } }, [
                        t._v("A"),
                      ]),
                    ]),
                    t._v("：\n顶部工具栏的自定义配置使用初始"),
                    e(
                      "RouterLink",
                      {
                        attrs: {
                          to: "/guide/config.html#showtoolbarconfig",
                        },
                      },
                      [t._v("options.showtoolbarconfig")]
                    ),
                    t._v("(如果标注TODO表示暂未开发)"),
                  ],
                  1
                ),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "项目使用了jquery吗" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#项目使用了jquery吗" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 项目使用了jQuery吗？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v(
                    "：是的。Luckysheet内部启动时间比开源的时间早很多，所以用到了jQuery。打包工具会把jQuery集成到打包目录的"
                  ),
                  e("code", [t._v("./plugins/js/plugin.js")]),
                  t._v("文件中。"),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "如果您的项目中（比如React/Vue）也自己全局引用了jQuery，且造成了冲突，可以尝试去掉一个jQuery。"
                  ),
                ]),
                t._v(" "),
                e("p", [
                  t._v("要想在Luckysheet里去除jQuery，需要在源码根目录下的"),
                  e("code", [t._v("gulpfile.js")]),
                  t._v("文件中找到打包jQuery的地方："),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/blob/master/gulpfile.js",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("src/plugins/js/jquery.min.js"), e("OutboundLink")],
                    1
                  ),
                  t._v("，删除jQuery相关的信息即可。"),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "如何为单元格对象新增字段" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#如何为单元格对象新增字段" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 如何为单元格对象新增字段？"),
                ]),
                t._v(" "),
                e(
                  "p",
                  [
                    e("strong", [
                      e("span", { staticStyle: { "font-size": "20px" } }, [
                        t._v("A"),
                      ]),
                    ]),
                    t._v("：首先参考"),
                    e("RouterLink", { attrs: { to: "/guide/cell.html" } }, [
                      t._v("单元格对象格式"),
                    ]),
                    t._v("，然后参照源码批注的部分"),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/controllers/postil.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/controllers/postil.js"), e("OutboundLink")],
                      1
                    ),
                    t._v("。批注是一个加在单元格对象上的一个配置。"),
                  ],
                  1
                ),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "工具栏图标加载不出来" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#工具栏图标加载不出来" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 工具栏图标加载不出来？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v(
                    "：工具栏及其他部分图标采用了iconfont图标，加载不出来是因为缺少了iconfont.css的引入，之前旧版官方文档未写清楚这一点对大家造成误导，很抱歉。"
                  ),
                ]),
                t._v(" "),
                e(
                  "p",
                  [
                    t._v("详细的Luckysheet使用教程参考已经更新的"),
                    e("RouterLink", { attrs: { to: "/guide/#使用步骤" } }, [
                      t._v("官方文档"),
                    ]),
                  ],
                  1
                ),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "luckyexcel打包后不动" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#luckyexcel打包后不动" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Luckyexcel打包后不动？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：打包的终端命令行不显示结束，但是如果"),
                  e("code", [t._v("dist")]),
                  t._v("文件夹内已经有了结果文件"),
                  e("code", [t._v("luckyexcel.js")]),
                  t._v("，则表明是正常的。"),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "Luckyexcel是excel导入导出库，项目采用了gulp作为打包工具，旧版打包工具有点问题在命令行显示这块有些问题，问题已经修复。请还出现此问题的小伙伴做如下更新操作："
                  ),
                ]),
                t._v(" "),
                e("ol", [
                  e("li", [t._v("pull最新代码")]),
                  t._v(" "),
                  e("li", [e("code", [t._v("npm i")])]),
                  t._v(" "),
                  e("li", [e("code", [t._v("npm run build")])]),
                ]),
                t._v(" "),
                e("p", [
                  t._v("更多详细信息关注："),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/mengshukeji/Luckyexcel/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("Luckyexcel"), e("OutboundLink")],
                    1
                  ),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  { attrs: { id: "单元格不可编辑如何控制-表格保护怎么操作" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#单元格不可编辑如何控制-表格保护怎么操作",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 单元格不可编辑如何控制？表格保护怎么操作？"),
                  ]
                ),
                t._v(" "),
                e(
                  "p",
                  [
                    e("strong", [
                      e("span", { staticStyle: { "font-size": "20px" } }, [
                        t._v("A"),
                      ]),
                    ]),
                    t._v(
                      "：单元格不可编辑属于工作表保护的功能范畴，需要配置在每个sheet页中"
                    ),
                    e("code", [t._v("config.authority")]),
                    t._v("，最新的设置参数请参考"),
                    e(
                      "RouterLink",
                      {
                        attrs: { to: "/guide/sheet.html#config-authority" },
                      },
                      [t._v("工作表保护")]
                    ),
                    t._v("。"),
                  ],
                  1
                ),
                t._v(" "),
                e("p", [
                  t._v(
                    "为了大家便于理解工作表保护的功能使用，下方的视频演示了如何让当前整个工作表不可编辑，但是允许某一列单元格可编辑的功能："
                  ),
                ]),
                t._v(" "),
                e("iframe", {
                  attrs: {
                    frameborder: "0",
                    src: "https://v.qq.com/txp/iframe/player.html?vid=g3162sacwn6",
                    allowFullScreen: "true",
                  },
                }),
                t._v(" "),
                e("p", [
                  t._v(
                    "跟着演示操作一下本地的工作表，然后打开浏览器控制台，使用"
                  ),
                  e("code", [
                    t._v("datadocs.getLuckysheetfile()[0].config.authority"),
                  ]),
                  t._v("就可以获取到第一个工作表的工作表保护参数。"),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "数据验证怎么配置" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#数据验证怎么配置" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 数据验证怎么配置？"),
                ]),
                t._v(" "),
                e(
                  "p",
                  [
                    e("strong", [
                      e("span", { staticStyle: { "font-size": "20px" } }, [
                        t._v("A"),
                      ]),
                    ]),
                    t._v("：最新文档已经提供了数据验证的配置信息，参考"),
                    e(
                      "RouterLink",
                      {
                        attrs: { to: "/guide/sheet.html#dataVerification" },
                      },
                      [t._v("数据验证配置")]
                    ),
                    t._v("。官方也提供了API方法 "),
                    e(
                      "RouterLink",
                      {
                        attrs: {
                          to: "/guide/api.html#setdataverification-optionitem-setting",
                        },
                      },
                      [t._v("setDataVerification")]
                    ),
                    t._v("，用于动态设置数据验证功能。"),
                  ],
                  1
                ),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "luckysheet通过引入cdn有案例吗" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#luckysheet通过引入cdn有案例吗" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Luckysheet通过引入CDN有案例吗？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：Luckysheet支持CDN方式引入，参考："),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://docs.servequery.com/ServeQuery/p/13859103.html",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [
                      t._v("本地HTML采用cdn加载方式引入Luckysheet的案例"),
                      e("OutboundLink"),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  {
                    attrs: { id: "请问一下图片怎么限制在单元格里面自适应高度" },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#请问一下图片怎么限制在单元格里面自适应高度",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 请问一下图片怎么限制在单元格里面自适应高度？"),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v(
                    "：首先需要对图片设置移动并调整单元格大小，然后有以下几种情况："
                  ),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    t._v(
                      "如果图片位置完全在单元格内部时，当拉长单元格的宽度或高度的时候，图片不会随着单元格的变大而伸缩变大"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "如果图片位置完全在单元格内部时，当拉短单元格的宽度或高度，贴到图片的边时，图片会随着单元格的变小而伸缩变小"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "当这个图片超过单元格的边框时，图片可以跟随单元格大小变化"
                    ),
                  ]),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "根据图片的第二个特性，可以操作得到图片位置信息，原理就是将图片的位置设置成和单元格边框重叠（源码中，需要重叠超过2px），以下演示视频展示了怎么将图片限制在单元格里面自适应宽高。"
                  ),
                ]),
                t._v(" "),
                e("iframe", {
                  attrs: {
                    frameborder: "0",
                    src: "https://v.qq.com/txp/iframe/player.html?vid=y3163ya0q6c",
                    allowFullScreen: "true",
                  },
                }),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "如何获取工作表默认的行高列宽" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#如何获取工作表默认的行高列宽" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 如何获取工作表默认的行高列宽？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：有两种方式可以获取"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    t._v("一是使用"),
                    e("code", [t._v("datadocs.getLuckysheetfile()")]),
                    t._v(
                      "获取到所有工作表配置后，在各个工作表的配置中直接取得默认行高"
                    ),
                    e("code", [t._v("defaultRowHeight")]),
                    t._v("和默认列宽"),
                    e("code", [t._v("defaultColWidth")]),
                    t._v("。"),
                  ]),
                  t._v(" "),
                  e(
                    "li",
                    [
                      t._v("二是开放了API可以获取到工作表默认的行高"),
                      e(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/api.html#getdefaultrowheight-setting",
                          },
                        },
                        [t._v("getDefaultRowHeight")]
                      ),
                      t._v("和列宽"),
                      e(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/api.html#getdefaultcolwidth-setting",
                          },
                        },
                        [t._v("getDefaultColWidth")]
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  {
                    attrs: {
                      id: "如何隐藏工作表下方的添加行按钮和回到顶部按钮",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#如何隐藏工作表下方的添加行按钮和回到顶部按钮",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 如何隐藏工作表下方的添加行按钮和回到顶部按钮？"),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：已开放配置"),
                ]),
                t._v(" "),
                e("ul", [
                  e(
                    "li",
                    [
                      t._v("允许添加行 "),
                      e(
                        "RouterLink",
                        { attrs: { to: "/guide/config.html#enableaddrow" } },
                        [t._v("enableAddRow")]
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  e(
                    "li",
                    [
                      t._v("允许回到顶部 "),
                      e(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/config.html#enableAddBackTop",
                          },
                        },
                        [t._v("enableAddBackTop")]
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "如何隐藏工作表的行标题和列标题" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#如何隐藏工作表的行标题和列标题" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 如何隐藏工作表的行标题和列标题？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：已开放配置"),
                ]),
                t._v(" "),
                e("ul", [
                  e(
                    "li",
                    [
                      t._v("行标题区域的宽度 "),
                      e(
                        "RouterLink",
                        {
                          attrs: { to: "/guide/config.html#rowheaderwidth" },
                        },
                        [t._v("rowHeaderWidth")]
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  e(
                    "li",
                    [
                      t._v("列标题区域的高度 "),
                      e(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/config.html#columnHeaderHeight",
                          },
                        },
                        [t._v("columnHeaderHeight")]
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "调用什么方法能设置config-merge" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#调用什么方法能设置config-merge" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 调用什么方法能设置"),
                  e("code", [t._v("config.merge")]),
                  t._v("？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：三个方法"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("界面操作")]),
                  t._v(" "),
                  e(
                    "li",
                    [
                      t._v("用API："),
                      e(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/api.html#setrangemerge-type-setting",
                          },
                        },
                        [t._v("setRangeMerge")]
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  e("li", [t._v("手动组装merge参数")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "为什么官方公布的新功能没有效果" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#为什么官方公布的新功能没有效果" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 为什么官方公布的新功能没有效果？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：第一步，检查下您是否使用了CDN的方式引入，"),
                ]),
                t._v(" "),
                e("p", [
                  t._v("Luckysheet教程里采用的CDN链接是 "),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://www.jsdelivr.com/package/npm/datadocs",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("jsdelivr"), e("OutboundLink")],
                    1
                  ),
                  t._v(" 提供的服务，代码是从 "),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://www.npmjs.com/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("npmjs.com"), e("OutboundLink")],
                    1
                  ),
                  t._v(" 自动同步过去的，不是从 "),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("Github"), e("OutboundLink")],
                    1
                  ),
                  t._v(
                    " 同步过去的。因为我们新提交的代码，还需要经过一段时间的测试，所以不会立即发布到npm使用，导致了npm的代码稍滞后于Github。"
                  ),
                ]),
                t._v(" "),
                e("p", [
                  t._v("如果需要尝试最新代码，我们强烈建议您从 "),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("DataDocs Github"), e("OutboundLink")],
                    1
                  ),
                  t._v(
                    " 主仓库拉取代码。后续我们版本稳定了，会考虑实时发布npm包。"
                  ),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "第二步，如果是引用github仓库打包后的代码，测试判断是否有bug，您可以查找问题并尝试修复，再"
                  ),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/pulls",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("提交PR"), e("OutboundLink")],
                    1
                  ),
                  t._v("，如果修复不了，请"),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/issues",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("提交issues"), e("OutboundLink")],
                    1
                  ),
                  t._v("。"),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  {
                    attrs: {
                      id: "npm-run-dev报错-error-cannot-find-module-rollup",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#npm-run-dev报错-error-cannot-find-module-rollup",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" "),
                    e("code", [t._v("npm run dev")]),
                    t._v("报错："),
                    e("code", [t._v("Error: Cannot find module 'rollup'")]),
                    t._v("？"),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：可能是npm包安装问题，尝试以下步骤："),
                ]),
                t._v(" "),
                e("ol", [
                  e("li", [e("code", [t._v("npm cache clean --force")])]),
                  t._v(" "),
                  e("li", [e("code", [t._v("npm i rimraf -g")])]),
                  t._v(" "),
                  e("li", [e("code", [t._v("rimraf node_modules")])]),
                  t._v(" "),
                  e("li", [t._v("删除package-lock.json文件")]),
                  t._v(" "),
                  e("li", [e("code", [t._v("npm i")])]),
                  t._v(" "),
                  e("li", [e("code", [t._v("npm run dev")])]),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "提示：大多数的其他npm安装问题，也可以尝试此步骤来解决。"
                  ),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  { attrs: { id: "怎样在vue工程里对luckysheet进行二次开发" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#怎样在vue工程里对luckysheet进行二次开发",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 怎样在vue工程里对Luckysheet进行二次开发？"),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("："),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/mengshukeji/datadocs-vue",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("datadocs-vue"), e("OutboundLink")],
                    1
                  ),
                  t._v(" 案例是提供一个应用集成的方案。"),
                ]),
                t._v(" "),
                e("p", [t._v("如果本地直接开发的话：")]),
                t._v(" "),
                e("ol", [
                  e("li", [
                    t._v(
                      "把Luckysheet的工程和自己的Vue工程都启动起来，比如Luckysheet的工程在 "
                    ),
                    e("code", [t._v("http://localhost:3001")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("在Vue工程里面通过 "),
                    e("code", [t._v("http://localhost:3001")]),
                    t._v(" 引入Luckysheet使用"),
                  ]),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "这样的话，Luckysheet实时修改后，Vue工程里是可以看到更改的"
                  ),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  { attrs: { id: "创建图表时候报错store-createchart" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#创建图表时候报错store-createchart" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 创建图表时候报错"),
                    e("code", [t._v("Store.createChart")]),
                    t._v("？"),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v(
                    "：需要引入图表插件才能使用，工作簿初始化的时候应该配置图表插件使用，参考"
                  ),
                ]),
                t._v(" "),
                e("ul", [
                  e(
                    "li",
                    [
                      t._v("插件配置 "),
                      e(
                        "RouterLink",
                        { attrs: { to: "/guide/config.html#配置项" } },
                        [t._v("plugins")]
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  e("li", [
                    t._v("或 官方demo "),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/index.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/index.html"), e("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "通常，参考demo配置完后就可以和demo一样正常使用了，但是还是会偶现"
                  ),
                  e("code", [t._v("chartmix is not defined")]),
                  t._v(
                    "，这时需要在谷歌浏览器控制台的network里检查下图表的依赖是否都加载了，有5项依赖需要关注："
                  ),
                  e("code", [
                    t._v("vue / vuex / element-ui / echarts / chartmix.umd.js"),
                  ]),
                  t._v("。"),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "单元格能增加自定义属性吗" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#单元格能增加自定义属性吗" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 单元格能增加自定义属性吗？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v(
                    "：直接赋值到单元格对象上的自定义属性会被过滤，要想使得自定义属性生效，需要二开去除过滤属性的代码。"
                  ),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  {
                    attrs: {
                      id: "如何输入以-开头的文本-例如-currentdate-yyyy-mm-dd-它默认会去掉函数-函数怎么禁止",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#如何输入以-开头的文本-例如-currentdate-yyyy-mm-dd-它默认会去掉函数-函数怎么禁止",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 如何输入以"),
                    e("code", [t._v("'='")]),
                    t._v("开头的文本？例如"),
                    e("code", [t._v("=currentDate('YYYY-MM-DD')")]),
                    t._v("，它默认会去掉函数，函数怎么禁止？"),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v(
                    "：前面加一个单引号就行，会强制识别为字符串，和excel表现一致的。比如："
                  ),
                  e("code", [t._v("'=currentDate('YYYY-MM-DD')")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "create回调为什么没有效果" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#create回调为什么没有效果" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" create回调为什么没有效果？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：API 方法"),
                  e("code", [t._v("datadocs.create()")]),
                  t._v(
                    "这个方法没有回调，但是Luckysheet提供了钩子函数用于在指定位置执行回调方法，比如："
                  ),
                ]),
                t._v(" "),
                e("ul", [
                  e(
                    "li",
                    [
                      t._v("表格创建之前触发 "),
                      e(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/config.html#workbookcreatebefore",
                          },
                        },
                        [t._v("workbookCreateBefore")]
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  e(
                    "li",
                    [
                      t._v("表格创建之后触发 "),
                      e(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/config.html#workbookcreateafter",
                          },
                        },
                        [t._v("workbookCreateAfter")]
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  {
                    attrs: { id: "create的时候默认选中第一个单元格-怎么去除" },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#create的时候默认选中第一个单元格-怎么去除",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" create的时候默认选中第一个单元格，怎么去除？"),
                  ]
                ),
                t._v(" "),
                e(
                  "p",
                  [
                    e("strong", [
                      e("span", { staticStyle: { "font-size": "20px" } }, [
                        t._v("A"),
                      ]),
                    ]),
                    t._v("：选中单元格时默认是高亮，把高亮去除即可，使用API: "),
                    e(
                      "RouterLink",
                      {
                        attrs: {
                          to: "/guide/api.html#setrangeshow-range-setting",
                        },
                      },
                      [t._v("setRangeShow")]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e("div", { staticClass: "language-js extra-class" }, [
                  e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    e("code", [
                      t._v("datadocs"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("setRangeShow")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      e("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"A2"'),
                      ]),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      e(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("show")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("false")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "右键事件绑定在哪" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#右键事件绑定在哪" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 右键事件绑定在哪？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：在源码的 "),
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/blob/master/src/controllers/handler.js",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("src/controllers/hander.js"), e("OutboundLink")],
                    1
                  ),
                  t._v(" 搜索"),
                  e("code", [t._v('event.which == "3"')]),
                  t._v("即可找到右键事件触发执行的代码。"),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "如何添加自定义工具栏" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#如何添加自定义工具栏" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 如何添加自定义工具栏？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v(
                    "：暂未提供配置，可以参照工具栏打印按钮的实现来修改源码："
                  ),
                ]),
                t._v(" "),
                e("ol", [
                  e("li", [
                    t._v("全局搜索 "),
                    e("code", [t._v("datadocs-icon-print")]),
                    t._v("即可找到打印按钮的实现，在 "),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/controllers/constant.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/controllers/constant.js"), e("OutboundLink")],
                      1
                    ),
                    t._v(" 中增加一个类似的模板字符串，需要自定义一个唯一id"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("修改 "),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/controllers/resize.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/controllers/resize.js"), e("OutboundLink")],
                      1
                    ),
                    t._v(" ，在toobarConfig对象中新增一条记录"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("修改 "),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/controllers/menuButton.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        t._v("src/controllers/menuButton.js"),
                        e("OutboundLink"),
                      ],
                      1
                    ),
                    t._v(" ，新增一个事件监听"),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "如何添加自定义公式" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#如何添加自定义公式" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 如何添加自定义公式？"),
                ]),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：需要修改两处源码："),
                ]),
                t._v(" "),
                e("ol", [
                  e("li", [
                    t._v("在 "),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/function/functionImplementation.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        t._v("src/function/functionImplementation.js"),
                        e("OutboundLink"),
                      ],
                      1
                    ),
                    t._v(" 文件中的"),
                    e("code", [t._v("functionImplementation")]),
                    t._v("对象中增加一个公式，格式参考"),
                    e("code", [t._v("SUM")]),
                    t._v("/"),
                    e("code", [t._v("AVERAGE")]),
                    t._v("等公式"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("修改 "),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/locale",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/locale"), e("OutboundLink")],
                      1
                    ),
                    t._v(" 文件目录下所有的语言包，将自己新增的公式说明加到"),
                    e("code", [t._v("functionlist")]),
                    t._v("数组中。其中，"),
                    e("code", [t._v("t")]),
                    t._v("是函数的类别，"),
                    e("code", [t._v("m")]),
                    t._v("是参数的个数，最小参数个数和最大参数个数。"),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h2",
                  {
                    attrs: {
                      id: "有没有类似loaddata接口-我想实现先加载10条记录-然后再动态加载数据-这些数据都追加到表格中",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#有没有类似loaddata接口-我想实现先加载10条记录-然后再动态加载数据-这些数据都追加到表格中",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(
                      " 有没有类似loadData接口，我想实现先加载10条记录，然后再动态加载数据，这些数据都追加到表格中？"
                    ),
                  ]
                ),
                t._v(" "),
                e("p", [
                  e("strong", [
                    e("span", { staticStyle: { "font-size": "20px" } }, [
                      t._v("A"),
                    ]),
                  ]),
                  t._v("：有的。我们"),
                  e("code", [t._v("loadSheetUrl")]),
                  t._v("提供了这个功能，初始化"),
                  e("code", [t._v("options.enablePage = true")]),
                  t._v("可以开启。"),
                ]),
                t._v(" "),
                e("p", [
                  t._v("源码里搜索"),
                  e("code", [t._v("enablePage")]),
                  t._v("可以看到，有个"),
                  e("code", [t._v("method.addDataAjax")]),
                  t._v(
                    "方法，里面就有一个ajax请求，用来动态加载数据，这些数据会追加到表格中。"
                  ),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "这个功能现在在文档上是隐藏的，是因为这个接口我们做的时候，接口参数是根据我们实际业务匹配的，可能不太通用，我们准备抽象后再放出来给大家用，如果您想自己用可以依据这个改下。"
                  ),
                ]),
                t._v(" "),
                e("p", [
                  t._v("推荐您考虑自己写接口来加载数据，然后使用"),
                  e("code", [t._v("setRangeValue")]),
                  t._v("来在指定位置追加数据，这样的自定义程度更高。"),
                ]),
                t._v(" "),
                e("hr"),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = s.exports;
    },
  },
]);
