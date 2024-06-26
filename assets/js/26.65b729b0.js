(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    312: function (e, t, a) {
      "use strict";
      a.r(t);
      var o = a(10),
        r = Object(o.a)(
          {},
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                t("h1", { attrs: { id: "faq" } }, [
                  t(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#faq" } },
                    [e._v("#")]
                  ),
                  e._v(" FAQ"),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "The content of this chapter collects the common problems that everyone has feedback. If the official documents and this list can’t answer your questions, I recommend you to "
                  ),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/discussions",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("Official Forum"), t("OutboundLink")],
                    1
                  ),
                ]),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "what-is-the-difference-between-data-and-celldata-in-luckysheetfile",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#what-is-the-difference-between-data-and-celldata-in-luckysheetfile",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " What is the difference between data and celldata in luckysheetfile?"
                    ),
                  ]
                ),
                e._v(" "),
                t(
                  "p",
                  [
                    t("strong", [
                      t("span", { staticStyle: { "font-size": "20px" } }, [
                        e._v("A"),
                      ]),
                    ]),
                    e._v(": Use one-dimensional array format "),
                    t(
                      "RouterLink",
                      { attrs: { to: "/guide/sheet.html#celldata" } },
                      [e._v("celldata")]
                    ),
                    e._v(
                      ", after the initialization is completed, the data converted into a two-dimensional array format is used for storage and update, and celldata is no longer used."
                    ),
                  ],
                  1
                ),
                e._v(" "),
                t(
                  "p",
                  [
                    e._v("If you need to take out "),
                    t("code", [e._v("data")]),
                    e._v(" as initial data, you need to execute "),
                    t(
                      "RouterLink",
                      {
                        attrs: {
                          to: "/guide/api.html#transtocelldata-data-setting",
                        },
                      },
                      [e._v("transToCellData(data)")]
                    ),
                    e._v(
                      " to convert it to celldata data.\nAmong them, the celldata in "
                    ),
                    t("code", [e._v("{ r, c, v }")]),
                    e._v(
                      " format is converted to a two-dimensional array using "
                    ),
                    t(
                      "RouterLink",
                      {
                        attrs: {
                          to: "/guide/api.html#transtodata-celldata-setting",
                        },
                      },
                      [e._v("transToData(celldata)")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                t("p", [e._v("Summarized as follows:")]),
                e._v(" "),
                t("div", { staticClass: "language-js extra-class" }, [
                  t("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    t("code", [
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          e._v(
                            "// data => celldata two-dimensional array data into {r, c, v} format one-dimensional array"
                          ),
                        ]
                      ),
                      e._v("\nluckysheet"),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v(".")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [e._v("transToCellData")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v("(")]
                      ),
                      e._v("data"),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v(")")]
                      ),
                      e._v("\n\n"),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          e._v(
                            "// celldata => data to generate the two-dimensional array required for the table"
                          ),
                        ]
                      ),
                      e._v("\nluckysheet"),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v(".")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [e._v("transToData")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v("(")]
                      ),
                      e._v("celldata"),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v(")")]
                      ),
                      e._v("\n"),
                    ]),
                  ]),
                ]),
                t("hr"),
                e._v(" "),
                t("h2", { attrs: { id: "what-are-the-cell-types" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#what-are-the-cell-types" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" What are the cell types?"),
                ]),
                e._v(" "),
                t(
                  "p",
                  [
                    t("strong", [
                      t("span", { staticStyle: { "font-size": "20px" } }, [
                        e._v("A"),
                      ]),
                    ]),
                    e._v(": Refer to "),
                    t("RouterLink", { attrs: { to: "/guide/cell.html" } }, [
                      e._v("Cell Format List"),
                    ]),
                    e._v(", with examples of available cell formats"),
                  ],
                  1
                ),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: { id: "how-to-use-datadocs-in-vue-react-project" },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-to-use-datadocs-in-vue-react-project",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" How to use DataDocs in Vue/React project?"),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": Check"),
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    e._v("Vue case: "),
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/mengshukeji/datadocs-vue",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("datadocs-vue"), t("OutboundLink")],
                      1
                    ),
                  ]),
                  e._v(" "),
                  t("li", [
                    e._v("React case: "),
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/mengshukeji/datadocs-react",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("datadocs-react"), t("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "why-will-the-formula-in-the-table-not-be-triggered-after-initialization",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#why-will-the-formula-in-the-table-not-be-triggered-after-initialization",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " Why will the formula in the table not be triggered after initialization?"
                    ),
                  ]
                ),
                e._v(" "),
                t(
                  "p",
                  [
                    t("strong", [
                      t("span", { staticStyle: { "font-size": "20px" } }, [
                        e._v("A"),
                      ]),
                    ]),
                    e._v(": Refer to "),
                    t(
                      "RouterLink",
                      { attrs: { to: "/guide/sheet.html#calcchain" } },
                      [e._v("Table data format")]
                    ),
                    e._v(
                      " ,just set the calcChain corresponding to the cell data."
                    ),
                  ],
                  1
                ),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "is-the-remote-loading-data-loadurl-or-updateurl",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#is-the-remote-loading-data-loadurl-or-updateurl",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" Is the remote loading data loadUrl or updateUrl?"),
                  ]
                ),
                e._v(" "),
                t(
                  "p",
                  [
                    t("strong", [
                      t("span", { staticStyle: { "font-size": "20px" } }, [
                        e._v("A"),
                      ]),
                    ]),
                    e._v(": "),
                    t(
                      "RouterLink",
                      { attrs: { to: "/guide/config.html#loadurl" } },
                      [e._v("loadUrl")]
                    ),
                    e._v(
                      ". Configure loadUrl, DataDocs will request the entire table data through ajax, and updateUrl will be used as the interface address for collaborative editing in real-time saving.\nNote: Initial data needs to be configured with loadUrl parameter, while for collaborative editing, the four parameters of loadUrl, updateUrl and allowUpdate can be configured to take effect."
                    ),
                  ],
                  1
                ),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "what-is-the-difference-between-index-and-order-for-each-sheet-page",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#what-is-the-difference-between-index-and-order-for-each-sheet-page",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" What is the difference between "),
                    t("code", [e._v("index")]),
                    e._v(" and "),
                    t("code", [e._v("order")]),
                    e._v(" for each sheet page?"),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": Each sheet page has a unique id, which is "),
                  t("code", [e._v("index")]),
                  e._v(
                    ", which can be incremented by numbers or a random string. And "
                  ),
                  t("code", [e._v("order")]),
                  e._v(
                    " is the sorting situation of all sheets, starting from 0, can only be numbers "
                  ),
                  t("code", [e._v("0,1,2...")]),
                  e._v("."),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "why-can-t-i-run-the-project-directly-under-the-dist-folder",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#why-can-t-i-run-the-project-directly-under-the-dist-folder",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " Why can’t I run the project directly under the dist folder?"
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": Need to start the local server"),
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/JacksonTian/anywhere",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("Node build a local server"), t("OutboundLink")],
                      1
                    ),
                  ]),
                  e._v(" "),
                  t("li", [
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("Python build local server"), t("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t("h2", { attrs: { id: "how-to-import-and-export-excel" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#how-to-import-and-export-excel" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" How to import and export excel?"),
                ]),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(
                    ": The excel import and export library developed with DataDocs-"
                  ),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/mengshukeji/Luckyexcel",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("Luckyexcel"), t("OutboundLink")],
                    1
                  ),
                  e._v(
                    " has realized the excel import function, and the export function is under development.You can refer to these 2 blog posts for excel export at this stage:"
                  ),
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://docs.servequery.com/recode-hyh/p/13168226.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        e._v(
                          "Development of Excel download function based on LuckySheet online form"
                        ),
                        t("OutboundLink"),
                      ],
                      1
                    ),
                  ]),
                  e._v(" "),
                  t("li", [
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://blog.csdn.net/csdn_lsy/article/details/107179708",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        e._v("Use exceljs to export datadocs form"),
                        t("OutboundLink"),
                      ],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  { attrs: { id: "how-to-merge-cells-during-initialization" } },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-to-merge-cells-during-initialization",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" How to merge cells during initialization?"),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": Refer to the following case:"),
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://docs.servequery.com/ServeQuery/p/13272397.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        e._v(
                          "How DataDocs initializes the data with merged cells"
                        ),
                        t("OutboundLink"),
                      ],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "how-does-datadocs-save-the-data-from-the-table-to-the-database-is-there-a-soulution-for-storage-and-collaboration",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-does-datadocs-save-the-data-from-the-table-to-the-database-is-there-a-soulution-for-storage-and-collaboration",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " How does 'DataDocs' save the data from the table to the database? Is there a soulution for storage and collaboration?"
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": There are two options:"),
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("ol", [
                      t("li", [
                        e._v(
                          "after the table operation is completed, you can use "
                        ),
                        t("code", [e._v("datadocs.getAllSheets()")]),
                        e._v(
                          " to get all sheet data that stroed in the back-end."
                        ),
                      ]),
                    ]),
                  ]),
                  e._v(" "),
                  t("li", [
                    t("ol", { attrs: { start: "2" } }, [
                      t("li", [
                        e._v(
                          "enable the collaborative editing function to transmit data to the back-end in real-time.\nrefer this article:\n"
                        ),
                        t(
                          "a",
                          {
                            attrs: {
                              href: "https://docs.servequery.com/ServeQuery/p/13857874.html",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [
                            e._v(
                              "How DataDocs saves the data in the table to the database"
                            ),
                            t("OutboundLink"),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "how-to-monitor-cell-hover-or-click-events-how-to-monitor-cellrenderafter-in-real-time",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-to-monitor-cell-hover-or-click-events-how-to-monitor-cellrenderafter-in-real-time",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " How to monitor cell hover or click events? how to monitor "
                    ),
                    t("code", [e._v("cellRenderAfter")]),
                    e._v(" in real-time?"),
                  ]
                ),
                e._v(" "),
                t(
                  "p",
                  [
                    t("strong", [
                      t("span", { staticStyle: { "font-size": "20px" } }, [
                        e._v("A"),
                      ]),
                    ]),
                    e._v(
                      ": We have collected the secondary development requirements for cell events, and planned the cell-related hook functions, refer to "
                    ),
                    t(
                      "RouterLink",
                      { attrs: { to: "/guide/config.html#cellrenderafter" } },
                      [e._v("cell hook function")]
                    ),
                    e._v(" (the TODO displayed is not yet open)"),
                  ],
                  1
                ),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t("h2", { attrs: { id: "how-to-customize-the-top-toolbar" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#how-to-customize-the-top-toolbar" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" How to customize the top toolbar?"),
                ]),
                e._v(" "),
                t(
                  "p",
                  [
                    t("strong", [
                      t("span", { staticStyle: { "font-size": "20px" } }, [
                        e._v("A"),
                      ]),
                    ]),
                    e._v(":\nreference: "),
                    t(
                      "RouterLink",
                      { attrs: { to: "/guide/config.html#showtoolbarconfig" } },
                      [e._v("options.showtoolbarconfig")]
                    ),
                    e._v("(TODO means waiting to developed)"),
                  ],
                  1
                ),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t("h2", { attrs: { id: "does-the-project-use-jquery" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#does-the-project-use-jquery" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Does the project use jQuery?"),
                ]),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(
                    ": yes. At the beginning, DataDocs uses jQuery。The packaging tool will package the jQuery to this file "
                  ),
                  t("code", [e._v("./plugins/js/plugin.js")]),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "If your project (such as react / Vue) also references jQuery globally and causes conflicts, you can try to remove a jQuery."
                  ),
                ]),
                e._v(" "),
                t("p", [
                  e._v("if you want to remove jQuery in "),
                  t("code", [e._v("DataDocs")]),
                  e._v(", you can find "),
                  t("code", [e._v("jQuery")]),
                  e._v(" in source code folder "),
                  t("code", [e._v("gulpfile.js")]),
                  e._v(": "),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/blob/master/gulpfile.js",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("src/plugins/js/jquery.min.js"), t("OutboundLink")],
                    1
                  ),
                  e._v("，then delete information related to jQuery."),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  { attrs: { id: "how-to-add-a-field-to-a-cell-object" } },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#how-to-add-a-field-to-a-cell-object" },
                      },
                      [e._v("#")]
                    ),
                    e._v(" How to add a field to a cell object?"),
                  ]
                ),
                e._v(" "),
                t(
                  "p",
                  [
                    t("strong", [
                      t("span", { staticStyle: { "font-size": "20px" } }, [
                        e._v("A"),
                      ]),
                    ]),
                    e._v(": reference "),
                    t("RouterLink", { attrs: { to: "/guide/cell.html" } }, [
                      e._v("cell object format"),
                    ]),
                    e._v("，then read this annotation"),
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/controllers/postil.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("src/controllers/postil.js"), t("OutboundLink")],
                      1
                    ),
                    e._v(
                      "。the annotation is a configuration in a cell object."
                    ),
                  ],
                  1
                ),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "the-toolbar-icon-is-on-the-loading-stage-all-the-time",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#the-toolbar-icon-is-on-the-loading-stage-all-the-time",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " The toolbar icon is on the loading stage all the time."
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(
                    ": The datadocs use iconfont icon in this project, if any icon cannot be loaded ,plz check your iconfont.css. we are so sorry that we did not describe it clearly in the old version documents."
                  ),
                ]),
                e._v(" "),
                t(
                  "p",
                  [
                    e._v("Now the documents have been updated."),
                    t(
                      "RouterLink",
                      { attrs: { to: "/guide/#steps-for-usage" } },
                      [e._v("official documents")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  { attrs: { id: "can-t-run-luckyexcel-after-package" } },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#can-t-run-luckyexcel-after-package" },
                      },
                      [e._v("#")]
                    ),
                    e._v(" Can't run Luckyexcel after package."),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": Terminal does not show "),
                  t("code", [e._v("end")]),
                  e._v(", but if the "),
                  t("code", [e._v("dist")]),
                  e._v(" folder has this file "),
                  t("code", [e._v("luckyexcel.js")]),
                  e._v(", it is normal."),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "Lucky excel is an excel import and export library. The project uses "
                  ),
                  t("code", [e._v("gulp")]),
                  e._v(
                    " as a packaging tool. There is a problem with the old version of the packaging tool, but it is fixed now. if this problem still troubles you, plz check the following steps:"
                  ),
                ]),
                e._v(" "),
                t("ol", [
                  t("li", [e._v("pull the latest code.")]),
                  e._v(" "),
                  t("li", [t("code", [e._v("npm i")])]),
                  e._v(" "),
                  t("li", [t("code", [e._v("npm run build")])]),
                ]),
                e._v(" "),
                t("p", [
                  e._v("more information: "),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/mengshukeji/Luckyexcel/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("Luckyexcel"), t("OutboundLink")],
                    1
                  ),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "how-to-disable-editing-of-cells-how-to-open-sheet-protection",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-to-disable-editing-of-cells-how-to-open-sheet-protection",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " How to disable editing of cells？How to open sheet protection?"
                    ),
                  ]
                ),
                e._v(" "),
                t(
                  "p",
                  [
                    t("strong", [
                      t("span", { staticStyle: { "font-size": "20px" } }, [
                        e._v("A"),
                      ]),
                    ]),
                    e._v(
                      ": Sheet protection includes disable editing of cells that you need to make some configurations on each sheets. "
                    ),
                    t("code", [e._v("config.authority")]),
                    e._v(", the latest configurations"),
                    t(
                      "RouterLink",
                      { attrs: { to: "/guide/sheet.html#config-authority" } },
                      [e._v("sheet protection")]
                    ),
                    e._v("。"),
                  ],
                  1
                ),
                e._v(" "),
                t("p", [
                  e._v(
                    "In order to make it easier for you to understand the function of sheet protection, the following video shows how to make the whole sheet uneditable, but allow a column of cells to be edited:"
                  ),
                ]),
                e._v(" "),
                t("iframe", {
                  attrs: {
                    frameborder: "0",
                    src: "https://v.qq.com/txp/iframe/player.html?vid=g3162sacwn6",
                    allowFullScreen: "true",
                  },
                }),
                e._v(" "),
                t("p", [
                  e._v(
                    "In you local browser, you can open the control pannel, use "
                  ),
                  t("code", [
                    e._v("datadocs.getLuckysheetfile()[0].config.authority"),
                  ]),
                  e._v(" to get the configuration parameters."),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t("h2", { attrs: { id: "how-to-configure-data-validation" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#how-to-configure-data-validation" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" How to configure data validation?"),
                ]),
                e._v(" "),
                t(
                  "p",
                  [
                    t("strong", [
                      t("span", { staticStyle: { "font-size": "20px" } }, [
                        e._v("A"),
                      ]),
                    ]),
                    e._v(": there is the configuration of data validation，"),
                    t(
                      "RouterLink",
                      { attrs: { to: "/guide/sheet.html#dataVerification" } },
                      [e._v("data validation")]
                    ),
                    e._v("。Also there is the API that you can use "),
                    t("code", [e._v("data validation")]),
                    e._v(" in any time. "),
                    t(
                      "RouterLink",
                      {
                        attrs: {
                          to: "/guide/api.html#setdataverification-optionitem-setting",
                        },
                      },
                      [e._v("setDataVerification")]
                    ),
                    e._v("."),
                  ],
                  1
                ),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "is-there-a-case-for-using-datadocs-with-cdn",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#is-there-a-case-for-using-datadocs-with-cdn",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" Is there a case for using DataDocs with CDN?"),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": DataDocs supports CDN. reference: "),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://docs.servequery.com/ServeQuery/p/13859103.html",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [
                      e._v("The case of using datadocs by CDN"),
                      t("OutboundLink"),
                    ],
                    1
                  ),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "how-to-limit-the-adaptive-height-of-a-picture-in-a-cell",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-to-limit-the-adaptive-height-of-a-picture-in-a-cell",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " how to limit the adaptive height of a picture in a cell？"
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(
                    ": First of all, you need to move the picture and adjust the cell size, and then there are the following situations:"
                  ),
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    e._v(
                      "if the cell contains a picture and you expand the cell, the picure will not be expanded."
                    ),
                  ]),
                  e._v(" "),
                  t("li", [
                    e._v(
                      "if the cell contains a picture and you shorten the cell to the edge of the picture, the picture will shrink."
                    ),
                  ]),
                  e._v(" "),
                  t("li", [
                    e._v(
                      "When the picture exceeds the border of the cell, the size of this picture will change with the size of the cell."
                    ),
                  ]),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "if you want to get the position of the picture, you can overlap the picture with the border of the cell.(in the source code, it needs to overlap more than 2px.)The following demo video shows how to limit the image to the adaptive width and height of the cell."
                  ),
                ]),
                e._v(" "),
                t("iframe", {
                  attrs: {
                    frameborder: "0",
                    src: "https://v.qq.com/txp/iframe/player.html?vid=y3163ya0q6c",
                    allowFullScreen: "true",
                  },
                }),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "how-to-get-the-default-row-height-and-column-width-of-the-worksheet",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-to-get-the-default-row-height-and-column-width-of-the-worksheet",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " How to get the default row height and column width of the worksheet?"
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": There are two ways to get it"),
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("ol", [
                      t("li", [
                        e._v("use "),
                        t("code", [e._v("datadocs.getLuckysheetfile()")]),
                        e._v(
                          " to get all configuration data, so you can get the "
                        ),
                        t("code", [e._v("defaultRowHeight")]),
                        e._v(" and "),
                        t("code", [e._v("defaultColWidth")]),
                        e._v(" in the sheet configuration data。"),
                      ]),
                    ]),
                  ]),
                  e._v(" "),
                  t("li", [
                    t("ol", { attrs: { start: "2" } }, [
                      t(
                        "li",
                        [
                          e._v("use API to get the default row height "),
                          t(
                            "RouterLink",
                            {
                              attrs: {
                                to: "/guide/api.html#getdefaultrowheight-setting",
                              },
                            },
                            [e._v("getDefaultRowHeight")]
                          ),
                          e._v(" and column width."),
                          t(
                            "RouterLink",
                            {
                              attrs: {
                                to: "/guide/api.html#getdefaultcolwidth-setting",
                              },
                            },
                            [e._v("getDefaultColWidth")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "how-to-hide-the-add-row-button-and-the-back-to-top-button-below-the-worksheet",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-to-hide-the-add-row-button-and-the-back-to-top-button-below-the-worksheet",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " How to hide the add row button and the back to top button below the worksheet?"
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": Configuration is open"),
                ]),
                e._v(" "),
                t("ul", [
                  t(
                    "li",
                    [
                      e._v("Allow adding rows "),
                      t(
                        "RouterLink",
                        { attrs: { to: "/guide/config.html#enableaddrow" } },
                        [e._v("enableAddRow")]
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
                  t(
                    "li",
                    [
                      e._v("Allow back to top "),
                      t(
                        "RouterLink",
                        {
                          attrs: { to: "/guide/config.html#enableAddBackTop" },
                        },
                        [e._v("enableAddBackTop")]
                      ),
                    ],
                    1
                  ),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "how-to-hide-the-row-and-column-headings-of-the-worksheet",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-to-hide-the-row-and-column-headings-of-the-worksheet",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " How to hide the row and column headings of the worksheet?"
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": Configuration is open"),
                ]),
                e._v(" "),
                t("ul", [
                  t(
                    "li",
                    [
                      e._v("The width of the row header area "),
                      t(
                        "RouterLink",
                        { attrs: { to: "/guide/config.html#rowheaderwidth" } },
                        [e._v("rowHeaderWidth")]
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
                  t(
                    "li",
                    [
                      e._v("The height of the column header area "),
                      t(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/config.html#columnHeaderHeight",
                          },
                        },
                        [e._v("columnHeaderHeight")]
                      ),
                    ],
                    1
                  ),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "what-method-can-be-called-to-set-config-merge",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#what-method-can-be-called-to-set-config-merge",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" What method can be called to set "),
                    t("code", [e._v("config.merge")]),
                    e._v("?"),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": Three methods"),
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [e._v("Interface operation")]),
                  e._v(" "),
                  t(
                    "li",
                    [
                      e._v("Use API: "),
                      t(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/api.html#setrangemerge-type-setting",
                          },
                        },
                        [e._v("setRangeMerge")]
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
                  t("li", [e._v("Manually assemble merge parameters")]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "why-is-the-official-new-feature-ineffective",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#why-is-the-official-new-feature-ineffective",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" Why is the official new feature ineffective?"),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(
                    ": The first step is to check whether you have used CDN to import,"
                  ),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "The CDN link used in the DataDocs tutorial is the service provided by "
                  ),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://www.jsdelivr.com/package/npm/datadocs",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("jsdelivr"), t("OutboundLink")],
                    1
                  ),
                  e._v(", and the code is from "),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://www.npmjs.com/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("npmjs.com"), t("OutboundLink")],
                    1
                  ),
                  e._v(" automatically sync the past, not from "),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("Github"), t("OutboundLink")],
                    1
                  ),
                  e._v(
                    ". Because our newly submitted code still needs to be tested for a period of time, it will not be released to npm immediately, causing the npm code to lag behind Github."
                  ),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "If you need to try the latest code, we strongly recommend that you pull the code from the "
                  ),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("DataDocs Github"), t("OutboundLink")],
                    1
                  ),
                  e._v(
                    " main repository. After our version is stable, we will consider releasing the npm package in real time."
                  ),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "The second step, if it is to import the packaged code of the github repository, test to determine whether there is a bug, you can find the problem and try to fix it, and then "
                  ),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/pulls",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("submit a PR"), t("OutboundLink")],
                    1
                  ),
                  e._v(", if can't fix it, please "),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/issues",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("submit issues"), t("OutboundLink")],
                    1
                  ),
                  e._v("."),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "npm-run-dev-reported-an-error-ʻerror-cannot-find-module-rollup",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#npm-run-dev-reported-an-error-ʻerror-cannot-find-module-rollup",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    t("code", [e._v("npm run dev")]),
                    e._v(
                      " reported an error: ʻError: Cannot find module'rollup'`?"
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(
                    ": It may be a problem with the npm package installation, try the following steps:"
                  ),
                ]),
                e._v(" "),
                t("ol", [
                  t("li", [t("code", [e._v("npm cache clean --force")])]),
                  e._v(" "),
                  t("li", [t("code", [e._v("npm i rimraf -g")])]),
                  e._v(" "),
                  t("li", [t("code", [e._v("rimraf node_modules")])]),
                  e._v(" "),
                  t("li", [e._v("Delete the package-lock.json file")]),
                  e._v(" "),
                  t("li", [t("code", [e._v("npm i")])]),
                  e._v(" "),
                  t("li", [t("code", [e._v("npm run dev")])]),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "Tip: Most other npm installation problems can also be solved by trying above steps."
                  ),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "how-to-carry-out-secondary-development-of-datadocs-in-vue-project",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-to-carry-out-secondary-development-of-datadocs-in-vue-project",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " How to carry out secondary development of DataDocs in Vue project?"
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": The "),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/mengshukeji/datadocs-vue",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("datadocs-vue"), t("OutboundLink")],
                    1
                  ),
                  e._v(
                    " case is to provide an application integration solution."
                  ),
                ]),
                e._v(" "),
                t("p", [e._v("If directly developed locally:")]),
                e._v(" "),
                t("ol", [
                  t("li", [
                    e._v(
                      "Start both the DataDocs project and your own Vue project. For example, the DataDocs project is at http://localhost:3001"
                    ),
                  ]),
                  e._v(" "),
                  t("li", [
                    e._v("Import DataDocs to use in the Vue project through "),
                    t("code", [e._v("http://localhost:3001")]),
                  ]),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "In this case, after DataDocs is modified in real time, the changes can be seen in the Vue project"
                  ),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "error-reporting-store-createchart-when-creating-chart",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#error-reporting-store-createchart-when-creating-chart",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" Error reporting "),
                    t("code", [e._v("Store.createChart")]),
                    e._v(" when creating chart?"),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(
                    ": You need to introduce a chart plugin to use it. You should configure the chart plugin to use when the workbook is initialized. Refer to"
                  ),
                ]),
                e._v(" "),
                t("ul", [
                  t(
                    "li",
                    [
                      e._v("Plugins configuration "),
                      t(
                        "RouterLink",
                        { attrs: { to: "/guide/config.html#plugins" } },
                        [e._v("plugins")]
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
                  t("li", [
                    e._v("或 官方demo "),
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/index.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("src/index.html"), t("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t("h2", { attrs: { id: "can-cells-add-custom-attributes" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#can-cells-add-custom-attributes" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Can cells add custom attributes?"),
                ]),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(
                    ": The custom attributes directly assigned to the cell object will be filtered. To make the custom attributes take effect, you need to edit the code to remove the filter attributes."
                  ),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "how-to-enter-text-starting-with-for-example-currentdate-yyyy-mm-dd-it-will-remove-the-function-by-default-how-to-prohibit-the-function",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#how-to-enter-text-starting-with-for-example-currentdate-yyyy-mm-dd-it-will-remove-the-function-by-default-how-to-prohibit-the-function",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" How to enter text starting with "),
                    t("code", [e._v("'='")]),
                    e._v("? For example, "),
                    t("code", [e._v("=currentDate('YYYY-MM-DD')")]),
                    e._v(
                      ", it will remove the function by default, how to prohibit the function?"
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(
                    ": Just add a single quotation mark in front of it, and it will be forcibly recognized as a string, which is consistent with excel. For example: "
                  ),
                  t("code", [e._v("'=currentDate('YYYY-MM-DD')")]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "why-does-the-create-callback-have-no-effect",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#why-does-the-create-callback-have-no-effect",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" Why does the create callback have no effect?"),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": The API method "),
                  t("code", [e._v("datadocs.create()")]),
                  e._v(
                    " does not have a callback, but DataDocs provides a hook function to execute the callback method at a specified location, such as:"
                  ),
                ]),
                e._v(" "),
                t("ul", [
                  t(
                    "li",
                    [
                      e._v("Triggered before the workbook is created "),
                      t(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/config.html#workbookcreatebefore",
                          },
                        },
                        [e._v("workbookCreateBefore")]
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
                  t(
                    "li",
                    [
                      e._v("Triggered after the workbook is created "),
                      t(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/config.html#workbookcreateafter",
                          },
                        },
                        [e._v("workbookCreateAfter")]
                      ),
                    ],
                    1
                  ),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "when-create-the-first-cell-is-selected-by-default-how-to-remove-it",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#when-create-the-first-cell-is-selected-by-default-how-to-remove-it",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " When create, the first cell is selected by default, how to remove it?"
                    ),
                  ]
                ),
                e._v(" "),
                t(
                  "p",
                  [
                    t("strong", [
                      t("span", { staticStyle: { "font-size": "20px" } }, [
                        e._v("A"),
                      ]),
                    ]),
                    e._v(
                      ": When the cell is selected, it is highlighted by default, just remove the highlight, use API: "
                    ),
                    t(
                      "RouterLink",
                      {
                        attrs: {
                          to: "/guide/api.html#setrangeshow-range-setting",
                        },
                      },
                      [e._v("setRangeShow")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                t("div", { staticClass: "language-js extra-class" }, [
                  t("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    t("code", [
                      e._v("datadocs"),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v(".")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [e._v("setRangeShow")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v("(")]
                      ),
                      t("span", { pre: !0, attrs: { class: "token string" } }, [
                        e._v('"A2"'),
                      ]),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v(",")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v("{")]
                      ),
                      t(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [e._v("show")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [e._v(":")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [e._v("false")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v("}")]
                      ),
                      t(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [e._v(")")]
                      ),
                      e._v("\n"),
                    ]),
                  ]),
                ]),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  { attrs: { id: "where-is-the-right-click-event-bound" } },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#where-is-the-right-click-event-bound",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(" Where is the right-click event bound?"),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": In the source code "),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/blob/master/src/controllers/handler.js",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [e._v("src/controllers/hander.js"), t("OutboundLink")],
                    1
                  ),
                  e._v(", search for "),
                  t("code", [e._v('event.which == "3"')]),
                  e._v(" to find the code executed by the right-click event."),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t("h2", { attrs: { id: "how-to-add-a-custom-toolbar" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#how-to-add-a-custom-toolbar" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" How to add a custom toolbar?"),
                ]),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(
                    ": No configuration is currently provided, you can refer to the implementation of the print button in the toolbar to modify the source code:"
                  ),
                ]),
                e._v(" "),
                t("ol", [
                  t("li", [
                    e._v("Search for "),
                    t("code", [e._v("datadocs-icon-print")]),
                    e._v(
                      " globally to find the implementation of the print button, in "
                    ),
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/controllers/constant.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("src/controllers/constant.js"), t("OutboundLink")],
                      1
                    ),
                    e._v(
                      " add a similar template string, you need to customize a unique id"
                    ),
                  ]),
                  e._v(" "),
                  t("li", [
                    e._v("Modify "),
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/controllers/resize.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("src/controllers/resize.js"), t("OutboundLink")],
                      1
                    ),
                    e._v(" and add a new record in the toobarConfig object"),
                  ]),
                  e._v(" "),
                  t("li", [
                    e._v("Modify "),
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/controllers/menuButton.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        e._v("src/controllers/menuButton.js"),
                        t("OutboundLink"),
                      ],
                      1
                    ),
                    e._v(" to add an event listener"),
                  ]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t("h2", { attrs: { id: "how-to-add-custom-formulas" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#how-to-add-custom-formulas" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" How to add custom formulas?"),
                ]),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": Two source codes need to be modified:"),
                ]),
                e._v(" "),
                t("ol", [
                  t("li", [
                    e._v("Add a formula to the "),
                    t("code", [e._v("functionImplementation")]),
                    e._v(" object in the "),
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/function/functionImplementation.js",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [
                        e._v("src/function/functionImplementation.js"),
                        t("OutboundLink"),
                      ],
                      1
                    ),
                    e._v(" file, format refer to formulas such as "),
                    t("code", [e._v("SUM")]),
                    e._v("/"),
                    t("code", [e._v("AVERAGE")]),
                  ]),
                  e._v(" "),
                  t("li", [
                    e._v("Modify all the language packs in the "),
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/src/locale",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("src/locale"), t("OutboundLink")],
                      1
                    ),
                    e._v(
                      " file directory, and add the new formula description to the "
                    ),
                    t("code", [e._v("functionlist")]),
                    e._v(" array in. Among them, "),
                    t("code", [e._v("t")]),
                    e._v(" is the category of the function, "),
                    t("code", [e._v("m")]),
                    e._v(
                      " is the number of parameters, the minimum number of parameters and the maximum number of parameters."
                    ),
                  ]),
                ]),
                e._v(" "),
                t("hr"),
                e._v(" "),
                t(
                  "h2",
                  {
                    attrs: {
                      id: "is-there-a-similar-loaddata-interface-i-want-to-load-10-records-first-and-then-dynamically-load-the-data-these-data-are-appended-to-the-table",
                    },
                  },
                  [
                    t(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#is-there-a-similar-loaddata-interface-i-want-to-load-10-records-first-and-then-dynamically-load-the-data-these-data-are-appended-to-the-table",
                        },
                      },
                      [e._v("#")]
                    ),
                    e._v(
                      " Is there a similar loadData interface, I want to load 10 records first, and then dynamically load the data, these data are appended to the table?"
                    ),
                  ]
                ),
                e._v(" "),
                t("p", [
                  t("strong", [
                    t("span", { staticStyle: { "font-size": "20px" } }, [
                      e._v("A"),
                    ]),
                  ]),
                  e._v(": Yes. Our "),
                  t("code", [e._v("loadSheetUrl")]),
                  e._v(
                    " provides this function, which can be turned on by initializing "
                  ),
                  t("code", [e._v("options.enablePage = true")]),
                  e._v("."),
                ]),
                e._v(" "),
                t("p", [
                  e._v("Searching for "),
                  t("code", [e._v("enablePage")]),
                  e._v(" in the source code, you can see that there is a "),
                  t("code", [e._v("method.addDataAjax")]),
                  e._v(
                    " method, which contains an ajax request to dynamically load data, which will be appended to the worksheet."
                  ),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "This function is now hidden in the document, because when we made this interface, the interface parameters were matched according to our actual business, which may not be universal. We are going to abstract and release it for everyone to use. If you want to use it yourself you can change it based on this."
                  ),
                ]),
                e._v(" "),
                t("p", [
                  e._v(
                    "It is recommended that you consider writing your own interface to load the data, and then use "
                  ),
                  t("code", [e._v("setRangeValue")]),
                  e._v(
                    " to append the data at the specified location, which has a higher degree of customization."
                  ),
                ]),
                e._v(" "),
                t("hr"),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = r.exports;
    },
  },
]);
