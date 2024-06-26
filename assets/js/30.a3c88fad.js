(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    316: function (t, e, a) {
      "use strict";
      a.r(e);
      var r = a(10),
        s = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                e("h1", { attrs: { id: "overall-configuration" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#overall-configuration" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Overall configuration"),
                ]),
                t._v(" "),
                e("h2", { attrs: { id: "basic-structure" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#basic-structure" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Basic Structure"),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "When initializing the workbook, you can set an object configuration string ʻoptions` to customize the configuration of DataDocs."
                  ),
                ]),
                t._v(" "),
                e("p", [
                  t._v("The following is a simple configuration example:"),
                ]),
                t._v(" "),
                e("div", { staticClass: "language-js extra-class" }, [
                  e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    e("code", [
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// Configuration item")]
                      ),
                      t._v("\n"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" options "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n     "),
                      e(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("container")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      e("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'datadocs'"),
                      ]),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// set the id of the DOM container")]
                      ),
                      t._v("\n     "),
                      e(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("title")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      e("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'DataDocs Demo'"),
                      ]),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// set the name of the table")]
                      ),
                      t._v("\n     "),
                      e(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [t._v("lang")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      e("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'zh'"),
                      ]),
                      t._v(" "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// set language")]
                      ),
                      t._v("\n\n     "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// More other settings...")]
                      ),
                      t._v("\n"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n\n"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// Initialize the table")]
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
                        [t._v("create")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("options"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                e(
                  "p",
                  [
                    t._v("The "),
                    e("code", [t._v("options")]),
                    t._v(
                      " configuration item here will affect the entire workbook. In particular, the configuration of a single worksheet needs to be set in the "
                    ),
                    e("code", [t._v("options.data")]),
                    t._v(
                      " array to set corresponding more detailed parameters. Refer to "
                    ),
                    e("RouterLink", { attrs: { to: "/guide/sheet.html" } }, [
                      t._v("Worksheet Configuration"),
                    ]),
                  ],
                  1
                ),
                t._v(" "),
                e("p", [
                  t._v(
                    "For personalized needs, in addition to allowing configuration information bar ("
                  ),
                  e("a", { attrs: { href: "#showinfobar" } }, [
                    t._v("showinfobar"),
                  ]),
                  t._v("), toolbar ("),
                  e("a", { attrs: { href: "#showtoolbar" } }, [
                    t._v("showtoolbar"),
                  ]),
                  t._v("), bottom sheet bar ("),
                  e("a", { attrs: { href: "#showsheetbar" } }, [
                    t._v("showsheetbar"),
                  ]),
                  t._v("), bottom count bar ("),
                  e("a", { attrs: { href: "#showstatisticBar" } }, [
                    t._v("ShowstatisticBar"),
                  ]),
                  t._v(
                    "),\nLuckysheet has opened more detailed custom configuration options, which are as follows:"
                  ),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    t._v("Customize the toolbar ("),
                    e("a", { attrs: { href: "#showtoolbarConfig" } }, [
                      t._v("showtoolbarConfig"),
                    ]),
                    t._v(")"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Customize the bottom sheet bar ("),
                    e("a", { attrs: { href: "#showsheetbarConfig" } }, [
                      t._v("showsheetbarConfig"),
                    ]),
                    t._v(")"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Customize the counting bar ("),
                    e("a", { attrs: { href: "#showstatisticBarConfig" } }, [
                      t._v("showstatisticBarConfig"),
                    ]),
                    t._v(")"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Custom cell right-click menu ("),
                    e("a", { attrs: { href: "#cellRightClickConfig" } }, [
                      t._v("cellRightClickConfig"),
                    ]),
                    t._v(")"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Customize the right-click menu of the bottom sheet bar ("
                    ),
                    e("a", { attrs: { href: "#sheetRightClickConfig" } }, [
                      t._v("sheetRightClickConfig"),
                    ]),
                    t._v(")"),
                  ]),
                ]),
                t._v(" "),
                e("h2", { attrs: { id: "configuration-item" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#configuration-item" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Configuration item"),
                ]),
                t._v(" "),
                e("p", [
                  t._v("The following are all supported setting parameters"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    t._v("Container ID "),
                    e("a", { attrs: { href: "#container" } }, [
                      t._v("container"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Workbook name "),
                    e("a", { attrs: { href: "#title" } }, [t._v("title")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Language "),
                    e("a", { attrs: { href: "#lang" } }, [t._v("lang")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Unique key "),
                    e("a", { attrs: { href: "#gridKey" } }, [t._v("gridKey")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Load the entire workbook "),
                    e("a", { attrs: { href: "#loadUrl" } }, [t._v("loadUrl")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Load other worksheet celldata "),
                    e("a", { attrs: { href: "#loadSheetUrl" } }, [
                      t._v("loadSheetUrl"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Allow updates "),
                    e("a", { attrs: { href: "#allowUpdate" } }, [
                      t._v("allowUpdate"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Update address "),
                    e("a", { attrs: { href: "#updateUrl" } }, [
                      t._v("updateUrl"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Thumbnail update address "),
                    e("a", { attrs: { href: "#updateImageUrl" } }, [
                      t._v("updateImageUrl"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Worksheet configuration "),
                    e("a", { attrs: { href: "#data" } }, [t._v("data")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Plugins "),
                    e("a", { attrs: { href: "#plugins" } }, [t._v("plugins")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Number of columns "),
                    e("a", { attrs: { href: "#column" } }, [t._v("column")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Number of rows "),
                    e("a", { attrs: { href: "#row" } }, [t._v("row")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Billion format "),
                    e("a", { attrs: { href: "#autoFormatw" } }, [
                      t._v("autoFormatw"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Accuracy "),
                    e("a", { attrs: { href: "#accuracy" } }, [
                      t._v("accuracy"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Allow copying "),
                    e("a", { attrs: { href: "#allowCopy" } }, [
                      t._v("allowCopy"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Toolbar "),
                    e("a", { attrs: { href: "#showtoolbar" } }, [
                      t._v("showtoolbar"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Customize Toolbar "),
                    e("a", { attrs: { href: "#showtoolbarConfig" } }, [
                      t._v("showtoolbarConfig"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Information bar "),
                    e("a", { attrs: { href: "#showinfobar" } }, [
                      t._v("showinfobar"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Bottom sheet bar "),
                    e("a", { attrs: { href: "#showsheetbar" } }, [
                      t._v("showsheetbar"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Customize the bottom sheet bar "),
                    e("a", { attrs: { href: "#showsheetbarConfig" } }, [
                      t._v("showsheetbarConfig"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("The bottom count bar "),
                    e("a", { attrs: { href: "#showstatisticBar" } }, [
                      t._v("showstatisticBar"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Custom Count Bar "),
                    e("a", { attrs: { href: "#showstatisticBarConfig" } }, [
                      t._v("showstatisticBarConfig"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Allow adding rows "),
                    e("a", { attrs: { href: "#enableAddRow" } }, [
                      t._v("enableAddRow"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Allow back to top "),
                    e("a", { attrs: { href: "#enableAddBackTop" } }, [
                      t._v("enableAddBackTop"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("User Info "),
                    e("a", { attrs: { href: "#userInfo" } }, [
                      t._v("userInfo"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("User Information Menu "),
                    e("a", { attrs: { href: "#userMenuItem" } }, [
                      t._v("userMenuItem"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Back button link "),
                    e("a", { attrs: { href: "#myFolderUrl" } }, [
                      t._v("myFolderUrl"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Ratio "),
                    e("a", { attrs: { href: "#devicePixelRatio" } }, [
                      t._v("devicePixelRatio"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Function Button "),
                    e("a", { attrs: { href: "#functionButton" } }, [
                      t._v("functionButton"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Auto-indent interface "),
                    e("a", { attrs: { href: "#showConfigWindowResize" } }, [
                      t._v("showConfigWindowResize"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Refresh formula "),
                    e("a", { attrs: { href: "#forceCalculation" } }, [
                      t._v("forceCalculation"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Custom cell right-click menu "),
                    e("a", { attrs: { href: "#cellRightClickConfig" } }, [
                      t._v("cellRightClickConfig"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Customize the right-click menu of the bottom sheet bar "
                    ),
                    e("a", { attrs: { href: "#sheetRightClickConfig" } }, [
                      t._v("sheetRightClickConfig"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("The width of the row header area "),
                    e("a", { attrs: { href: "#rowHeaderWidth" } }, [
                      t._v("rowHeaderWidth"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("The height of the column header area "),
                    e("a", { attrs: { href: "#columnHeaderHeight" } }, [
                      t._v("columnHeaderHeight"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Whether to show the formula bar "),
                    e("a", { attrs: { href: "#sheetFormulaBar" } }, [
                      t._v("sheetFormulaBar"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Initialize the default font size "),
                    e("a", { attrs: { href: "#defaultFontSize" } }, [
                      t._v("defaultFontSize"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Pager "),
                    e("a", { attrs: { href: "#pager" } }, [t._v("pager")]),
                  ]),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "container" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: String")]),
                  t._v(" "),
                  e("li", [t._v('Default: "datadocs"')]),
                  t._v(" "),
                  e("li", [t._v("Usage: Container ID")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "title" } }, [
                  e(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#title" } },
                    [t._v("#")]
                  ),
                  t._v(" title"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: String")]),
                  t._v(" "),
                  e("li", [t._v('Default: "DataDocs Demo"')]),
                  t._v(" "),
                  e("li", [t._v("Usage：Workbook name")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "lang" } }, [
                  e(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#lang" } },
                    [t._v("#")]
                  ),
                  t._v(" lang"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: String")]),
                  t._v(" "),
                  e("li", [t._v('Default: "en"')]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      'Usage: Internationalization settings, allow to set the language of the table, support simplified Chinese ("zh"), English ("en") and traditional Chinese ("zh_tw") and Spanish ("es")'
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "gridkey" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: String")]),
                  t._v(" "),
                  e("li", [t._v('Default: ""')]),
                  t._v(" "),
                  e("li", [t._v("Usage: Workbook unique identifier")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "loadurl" } }, [
                  e(
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
                e("ul", [
                  e("li", [e("p", [t._v("Type: String")])]),
                  t._v(" "),
                  e("li", [e("p", [t._v('Default: ""')])]),
                  t._v(" "),
                  e("li", [
                    e("p", [
                      t._v("Usage: Configure the address of "),
                      e("code", [t._v("loadUrl")]),
                      t._v(" and use it in conjunction with "),
                      e("code", [t._v("loadSheetUrl")]),
                      t._v(
                        ", which is generally used when the amount of data is large. You can also not use the interface parameters provided by DataDocs, and use the "
                      ),
                      e("a", { attrs: { href: "#data" } }, [t._v("data")]),
                      t._v(
                        " parameter to prepare all table data for initialization in advance."
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "DataDocs will request the entire workbook data through ajax, and load all "
                      ),
                      e("code", [t._v("celldata")]),
                      t._v(
                        " in the worksheet data with status 1 by default, and load all the fields except the "
                      ),
                      e("code", [t._v("celldata")]),
                      t._v(
                        " field in the rest of the worksheets. However, considering that some formulas, charts and pivot tables will reference data from other worksheets, the front end will add a judgment. If the current worksheet references data from other worksheets, it will request data through the interface address configured by "
                      ),
                      e("code", [t._v("loadSheetUrl")]),
                      t._v(
                        " , And load the data of the related worksheets. Because "
                      ),
                      e("code", [t._v("loadUrl")]),
                      t._v(
                        " is only responsible for the current worksheet data, it is also necessary to configure "
                      ),
                      e("code", [t._v("loadSheetUrl")]),
                      t._v(" as an interface for asynchronously loading data."),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "loadsheeturl" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: String")]),
                  t._v(" "),
                  e("li", [t._v('Default: ""')]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Configure the address of "),
                    e("code", [t._v("loadSheetUrl")]),
                    t._v(", the parameters are "),
                    e("code", [t._v("gridKey")]),
                    t._v(" (workbook primary key) and "),
                    e("code", [t._v("index")]),
                    t._v(" (worksheet primary key collection, the format is "),
                    e("code", [t._v('["sheet_01","sheet_02","sheet_03"]')]),
                    t._v("), the returned data is the "),
                    e("code", [t._v("celldata")]),
                    t._v(
                      " field data collection of the worksheet. In order to load performance considerations, except for the first load of the celldata data of the current worksheet, the data of the other worksheets will be requested only when the worksheet is switched to that worksheet."
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "allowupdate" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: false")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Whether to allow back-end update after operating the table, used in conjunction with "
                    ),
                    e("code", [t._v("updateUrl")]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "updateurl" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: String")]),
                  t._v(" "),
                  e("li", [t._v('Default: ""')]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: The back-end update address after operating the workbook will be valid only when "
                    ),
                    e("code", [t._v("allowUpdate")]),
                    t._v(" is "),
                    e("code", [t._v("true")]),
                    t._v(
                      ". This interface is also the interface address for shared editing."
                    ),
                  ]),
                ]),
                t._v(" "),
                e("p", [
                  t._v("Note that you also need to configure "),
                  e("code", [t._v("loadUrl")]),
                  t._v(" and "),
                  e("code", [t._v("loadSheetUrl")]),
                  t._v(" to take effect."),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "updateimageurl" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: String")]),
                  t._v(" "),
                  e("li", [t._v('Default: ""')]),
                  t._v(" "),
                  e("li", [t._v("Usage: Update address of thumbnail")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "data" } }, [
                  e(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#data" } },
                    [t._v("#")]
                  ),
                  t._v(" data"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Array")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      'Default: [{ "name": "Sheet1", color: "", "status": "1", "order": "0", "data": [], "config": {}, "index":0 }, { "name": "Sheet2", color: "", "status": "0", "order": "1", "data": [], "config": {}, "index":1  }, { "name": "Sheet3", color: "", "status": "0", "order": "2", "data": [], "config": {}, "index":2  }]'
                    ),
                  ]),
                  t._v(" "),
                  e(
                    "li",
                    [
                      t._v("Usage: When "),
                      e("code", [t._v("loadUrl")]),
                      t._v(" and "),
                      e("code", [t._v("loadSheetUrl")]),
                      t._v(
                        " are not configured, you need to manually configure all the sheet data passed to the entire client "
                      ),
                      e("code", [t._v("[shee1, sheet2, sheet3]")]),
                      t._v(
                        ". For detailed parameter settings, please refer to "
                      ),
                      e("RouterLink", { attrs: { to: "/guide/sheet.html" } }, [
                        t._v("worksheet configuration"),
                      ]),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "plugins" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Array")]),
                  t._v(" "),
                  e("li", [t._v("Default: []")]),
                  t._v(" "),
                  e("li", [
                    t._v('Usage: Configure plug-in, support chart: "chart"'),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "column" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Number")]),
                  t._v(" "),
                  e("li", [t._v("Default: 60")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: The default number of columns in an empty workbook"
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "row" } }, [
                  e(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#row" } },
                    [t._v("#")]
                  ),
                  t._v(" row"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Number")]),
                  t._v(" "),
                  e("li", [t._v("Default: 84")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: The default number of rows in an empty workbook"
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "autoformatw" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: false")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      'Usage: Automatically format numbers with more than 4 digits into "billion format", for example: true or "true" or "TRUE"'
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "accuracy" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Number")]),
                  t._v(" "),
                  e("li", [t._v("Default: undefined")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      'Usage: Set the precision, the number of digits after the decimal point. The parameter is a number or a string of numbers, for example: "0" or 0'
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "allowcopy" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: true")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Whether to allow copy")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "showtoolbar" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: true")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Whether to show the toolbar")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "showtoolbarconfig" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Object")]),
                  t._v(" "),
                  e("li", [t._v("Default: {}")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Custom configuration toolbar,can be used in conjunction with "
                    ),
                    e("code", [t._v("showtoolbar")]),
                    t._v(", "),
                    e("code", [t._v("showtoolbarConfig")]),
                    t._v(" has a higher priority."),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Format:"),
                    e("div", { staticClass: "language-json extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        e("code", [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    undoRedo"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Undo redo")]
                          ),
                          t._v("\n    paintFormat"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Format brush")]
                          ),
                          t._v("\n    currencyFormat"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//currency format")]
                          ),
                          t._v("\n    percentageFormat"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Percentage format")]
                          ),
                          t._v("\n    numberDecrease"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Decrease the number of decimal places'")]
                          ),
                          t._v("\n    numberIncrease"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Increase the number of decimal places")]
                          ),
                          t._v("\n    moreFormats"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'More Formats'")]
                          ),
                          t._v("\n    font"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'font'")]
                          ),
                          t._v("\n    fontSize"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Font size'")]
                          ),
                          t._v("\n    bold"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Bold (Ctrl+B)'")]
                          ),
                          t._v("\n    italic"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Italic (Ctrl+I)'")]
                          ),
                          t._v("\n    strikethrough"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Strikethrough (Alt+Shift+5)'")]
                          ),
                          t._v("\n\tunderline"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 'Underline (Alt+Shift+6)'")]
                          ),
                          t._v("\n\ttextColor"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Text color'")]
                          ),
                          t._v("\n    fillColor"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Cell color'")]
                          ),
                          t._v("\n    border"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'border'")]
                          ),
                          t._v("\n    mergeCell"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Merge cells'")]
                          ),
                          t._v("\n    horizontalAlignMode"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Horizontal alignment'")]
                          ),
                          t._v("\n    verticalAlignMode"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Vertical alignment'")]
                          ),
                          t._v("\n    textWrapMode"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Wrap mode'")]
                          ),
                          t._v("\n    textRotateMode"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Text Rotation Mode'")]
                          ),
                          t._v("\n\timage"),
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
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 'Insert picture'")]
                          ),
                          t._v("\n\tlink"),
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
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 'Insert link'")]
                          ),
                          t._v("\n\tchart"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "//'chart' (the icon is hidden, but if the chart plugin is configured, you can still create a new chart by right click)"
                              ),
                            ]
                          ),
                          t._v("\n\tpostil"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'comment'")]
                          ),
                          t._v("\n\tpivotTable"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'PivotTable'")]
                          ),
                          t._v("\n\tfunction"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'formula'")]
                          ),
                          t._v("\n\tfrozenMode"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'freeze mode'")]
                          ),
                          t._v("\n\tsortAndFilter"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Sort and filter'")]
                          ),
                          t._v("\n\tconditionalFormat"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Conditional Format'")]
                          ),
                          t._v("\n\tdataVerification"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 'Data Verification'")]
                          ),
                          t._v("\n\tsplitColumn"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Split column'")]
                          ),
                          t._v("\n\tscreenshot"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'screenshot'")]
                          ),
                          t._v("\n\tfindAndReplace"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//'Find and Replace'")]
                          ),
                          t._v("\n\tprotection"),
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
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 'Worksheet protection'")]
                          ),
                          t._v("\n\tprint"),
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
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// 'Print'")]
                          ),
                          t._v("\n"),
                          e(
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
                  e("li", [
                    t._v("Example:\n"),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v("Show only the "),
                          e("code", [t._v("undo/redo")]),
                          t._v(" and "),
                          e("code", [t._v("font")]),
                          t._v(" buttons:"),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "language-js extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              e("code", [
                                t._v("\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showtoolbar")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showtoolbarConfig")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("undoRedo")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("font")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                e(
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
                      e("li", [
                        e("p", [
                          t._v("Hide only the "),
                          e("code", [t._v("image")]),
                          t._v(" and "),
                          e("code", [t._v("print")]),
                          t._v(" buttons:"),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "language-js extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              e("code", [
                                t._v("\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showtoolbar")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [
                                    t._v(
                                      "// The default is true, you can leave it unset"
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showtoolbarConfig")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("image")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("print")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                e(
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
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "showinfobar" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: true")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Whether to show the top information bar"),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "showsheetbar" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: true")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Whether to show the bottom sheet button"),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "showsheetbarconfig" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Object")]),
                  t._v(" "),
                  e("li", [t._v("Default: {}")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Custom configuration bottom sheet button, can be used in conjunction with "
                    ),
                    e("code", [t._v("showsheetbar")]),
                    t._v(", "),
                    e("code", [t._v("showsheetbarConfig")]),
                    t._v(" has a higher priority."),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Format:"),
                    e("div", { staticClass: "language-json extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        e("code", [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    add"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Add worksheet")]
                          ),
                          t._v("\n    menu"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Worksheet management menu")]
                          ),
                          t._v("\n    sheet"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Worksheet display")]
                          ),
                          t._v("\n"),
                          e(
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
                  e("li", [
                    t._v("Example:\n"),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v("Only display the "),
                          e("code", [t._v("Add worksheet")]),
                          t._v(" button:"),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "language-js extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              e("code", [
                                t._v("\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showsheetbar")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showsheetbarConfig")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("add")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                e(
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
                      e("li", [
                        e("p", [
                          t._v("Only hide the "),
                          e("code", [t._v("Add worksheet")]),
                          t._v(" and "),
                          e("code", [t._v("Worksheet management menu")]),
                          t._v(" buttons:"),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "language-js extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              e("code", [
                                t._v("\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showsheetbar")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [
                                    t._v(
                                      "// The default is true, you can leave it unset"
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showsheetbarConfig")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("add")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("menu")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                e(
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
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "showstatisticbar" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: true")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Whether to show the bottom count bar"),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "showstatisticbarconfig" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Object")]),
                  t._v(" "),
                  e("li", [t._v("Default: {}")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Customize the bottom count bar, can be used in conjunction with "
                    ),
                    e("code", [t._v("showstatisticBar")]),
                    t._v(", "),
                    e("code", [t._v("showstatisticBarConfig")]),
                    t._v(" has a higher priority."),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Format:"),
                    e("div", { staticClass: "language-json extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        e("code", [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\tcount"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Count bar")]
                          ),
                          t._v("\n\tview"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Print view")]
                          ),
                          t._v("\n    zoom"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Zoom")]
                          ),
                          t._v("\n"),
                          e(
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
                  e("li", [
                    t._v("Example:\n"),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v("Only display the "),
                          e("code", [t._v("Zoom")]),
                          t._v(" button:"),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "language-js extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              e("code", [
                                t._v("\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showstatisticBar")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showstatisticBarConfig")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("zoom")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                e(
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
                      e("li", [
                        e("p", [
                          t._v("Only hide the "),
                          e("code", [t._v("print view")]),
                          t._v(" button:"),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "language-js extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              e("code", [
                                t._v("\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [t._v("//options")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showstatisticBar")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("true")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token comment" },
                                  },
                                  [
                                    t._v(
                                      "// The default is true, you can leave it unset"
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("showstatisticBarConfig")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("view")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
                                e(
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
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "enableaddrow" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: true")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Allow additional rows")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "enableaddbacktop" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: true")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Allow back to top")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "userinfo" } }, [
                  e(
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
                e("ul", [
                  e("li", [e("p", [t._v("Type: String | Boolean | Object")])]),
                  t._v(" "),
                  e("li", [e("p", [t._v("Default: false")])]),
                  t._v(" "),
                  e("li", [
                    e("p", [
                      t._v(
                        "Usage: User information display style in the upper right corner,Support the following three formats"
                      ),
                    ]),
                    t._v(" "),
                    e("ol", [
                      e("li", [t._v("HTML template string, such as:")]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "language-js extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        e("code", [
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("options")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Other configuration")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userInfo")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [
                              t._v(
                                '\'<i style="font-size:16px;color:#ff6a00;" class="fa fa-taxi" aria-hidden="true"></i> Lucky\''
                              ),
                            ]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    e("p", [t._v("Or an ordinary string, such as:")]),
                    t._v(" "),
                    e("div", { staticClass: "language-js extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        e("code", [
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("options")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Other configuration")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userInfo")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'Lucky'")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    e("ol", { attrs: { start: "2" } }, [
                      e("li", [t._v("Boolean type, such as:")]),
                    ]),
                    t._v(" "),
                    e("p", [e("code", [t._v("false")]), t._v(": Do not show")]),
                    t._v(" "),
                    e("div", { staticClass: "language-js extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        e("code", [
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("options")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Other configuration")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userInfo")]
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
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Do not display user information")]
                          ),
                          t._v("\n"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\n"),
                        ]),
                      ]),
                    ]),
                    e("p", [
                      e("code", [t._v("true")]),
                      t._v(": Show the default string"),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "language-js extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        e("code", [
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("options")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Other configuration")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userInfo")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("true")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                '// Show HTML:\'<i style="font-size:16px;color:#ff6a00;" class="fa fa-taxi" aria-hidden="true"></i> Lucky\''
                              ),
                            ]
                          ),
                          t._v("\n"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\n"),
                        ]),
                      ]),
                    ]),
                    e("ol", { attrs: { start: "3" } }, [
                      e("li", [
                        t._v("Object format, set "),
                        e("code", [t._v("userImage")]),
                        t._v(": user avatar address and "),
                        e("code", [t._v("userName")]),
                        t._v(": user name, such as:"),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "language-js extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        e("code", [
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("options")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Other configuration")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userImage")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [
                              t._v(
                                "'https://cdn.jsdelivr.net/npm/luckyresources@1.0.3/assets/img/logo/logo.png'"
                              ),
                            ]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Avatar url")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("userName")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'Lucky'")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// username")]
                          ),
                          t._v("\n"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    e("ol", { attrs: { start: "4" } }, [
                      e("li", [
                        t._v("Note that if set to "),
                        e("code", [t._v("undefined")]),
                        t._v(" or not set, the same as setting "),
                        e("code", [t._v("false")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "usermenuitem" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Array")]),
                  t._v(" "),
                  e("li", [
                    t._v("Default: "),
                    e("code", [
                      t._v(
                        '[{url:"www.baidu.com", "icon":\'<i class="fa fa-folder" aria-hidden="true"></i>\', "name":"我的表格"}, {url:"www.baidu.com", "icon":\'<i class="fa fa-sign-out" aria-hidden="true"></i>\', "name":"退出登陆"}]'
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Click the pop-up menu of user information in the upper right corner"
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "myfolderurl" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: String")]),
                  t._v(" "),
                  e("li", [t._v('Default: "www.baidu.com"')]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: The link of the "),
                    e("code", [t._v("<")]),
                    t._v(" back button in the upper left corner"),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "devicepixelratio" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Number")]),
                  t._v(" "),
                  e("li", [t._v("Default: window.devicePixelRatio")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Device ratio, the larger the ratio, the higher the resolution of the workbook"
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "functionbutton" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: String")]),
                  t._v(" "),
                  e("li", [t._v('Default: ""')]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Function buttons in the upper right corner, for example:"
                    ),
                    e("code", [
                      t._v(
                        '\'<button id="" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">download</button> <button id="" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">share</button> <button id="datadocs-share-btn-title" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">show data</button>\''
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "showconfigwindowresize" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: true")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: The configuration of the chart or pivot table will pop up on the right, set whether the workbook will be automatically indented after popping up"
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "forcecalculation" } }, [
                  e(
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
                e("ul", [
                  e("li", [e("p", [t._v("Type: Boolean")])]),
                  t._v(" "),
                  e("li", [e("p", [t._v("Default: false")])]),
                  t._v(" "),
                  e("li", [
                    e("p", [t._v("Usage: Force refresh formula.")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "By default, in order to improve loading performance, when the table is initialized, cells containing formulas will directly obtain "
                      ),
                      e("code", [t._v("v")]),
                      t._v(" and "),
                      e("code", [t._v("m")]),
                      t._v(
                        " as data results by default without real-time calculation."
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "If the data of the cell associated with the formula has changed, or the result of the cell data where the formula is located has changed, it will cause the calculated result of the associated cell to be inconsistent with the actual displayed result. This requires the formula refresh to be turned on to ensure the data The accuracy of real-time calculations."
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "⚠️Reminder, there will be performance problems when there are more formulas, use it with caution!"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "cellrightclickconfig" } }, [
                  e(
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
                e("ul", [
                  e("li", [e("p", [t._v("Type: Object")])]),
                  t._v(" "),
                  e("li", [e("p", [t._v("Default: {}")])]),
                  t._v(" "),
                  e("li", [
                    e("p", [
                      t._v("Usage: Custom configuration cell right-click menu"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [t._v("Format:")]),
                    t._v(" "),
                    e("div", { staticClass: "language-json extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        e("code", [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\tcopy"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// copy")]
                          ),
                          t._v("\n\tcopyAs"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// copy as")]
                          ),
                          t._v("\n\tpaste"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// paste")]
                          ),
                          t._v("\n\tinsertRow"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// insert row")]
                          ),
                          t._v("\n\tinsertColumn"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// insert column")]
                          ),
                          t._v("\n\tdeleteRow"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// delete the selected row")]
                          ),
                          t._v("\n\tdeleteColumn"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// delete the selected column")]
                          ),
                          t._v("\n\tdeleteCell"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// delete cell")]
                          ),
                          t._v("\n\thideRow"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "// hide the selected row and display the selected row"
                              ),
                            ]
                          ),
                          t._v("\n\thideColumn"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "// hide the selected column and display the selected column"
                              ),
                            ]
                          ),
                          t._v("\n\trowHeight"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// row height")]
                          ),
                          t._v("\n\tcolumnWidth"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// column width")]
                          ),
                          t._v("\n\tclear"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// clear content")]
                          ),
                          t._v("\n\tmatrix"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// matrix operation selection")]
                          ),
                          t._v("\n\tsort"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// sort selection")]
                          ),
                          t._v("\n\tfilter"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// filter selection")]
                          ),
                          t._v("\n\tchart"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// chart generation")]
                          ),
                          t._v("\n\timage"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// insert picture")]
                          ),
                          t._v("\n\tlink"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// insert link")]
                          ),
                          t._v("\n\tdata"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// data verification")]
                          ),
                          t._v("\n\tcellFormat"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Set cell format")]
                          ),
                          t._v("\n"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    e("p", [
                      t._v(
                        "In addition to the cells, the configuration here also includes the row header right-click menu, the column header right-click menu, and the column header drop-down arrow menu. The specific configuration relationships are as follows:"
                      ),
                    ]),
                    t._v(" "),
                    e("table", [
                      e("thead", [
                        e("tr", [
                          e("th", [t._v("Right-click menu configuration")]),
                          t._v(" "),
                          e("th", [t._v("Cell")]),
                          t._v(" "),
                          e("th", [t._v("Row header")]),
                          t._v(" "),
                          e("th", [t._v("Column header")]),
                          t._v(" "),
                          e("th", [t._v("Column arrow")]),
                        ]),
                      ]),
                      t._v(" "),
                      e("tbody", [
                        e("tr", [
                          e("td", [t._v("copy")]),
                          t._v(" "),
                          e("td", [t._v("copy")]),
                          t._v(" "),
                          e("td", [t._v("copy")]),
                          t._v(" "),
                          e("td", [t._v("copy")]),
                          t._v(" "),
                          e("td", [t._v("copy")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("copyAs")]),
                          t._v(" "),
                          e("td", [t._v("copy as")]),
                          t._v(" "),
                          e("td", [t._v("copy as")]),
                          t._v(" "),
                          e("td", [t._v("copy as")]),
                          t._v(" "),
                          e("td", [t._v("copy as")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("paste")]),
                          t._v(" "),
                          e("td", [t._v("paste")]),
                          t._v(" "),
                          e("td", [t._v("paste")]),
                          t._v(" "),
                          e("td", [t._v("paste")]),
                          t._v(" "),
                          e("td", [t._v("paste")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("insertRow")]),
                          t._v(" "),
                          e("td", [t._v("Insert a row")]),
                          t._v(" "),
                          e("td", [
                            t._v(
                              "Increase N rows upwards and N rows downwards"
                            ),
                          ]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("insertColumn")]),
                          t._v(" "),
                          e("td", [t._v("Insert Column")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [
                            t._v(
                              "Add N columns to the left and N columns to the right"
                            ),
                          ]),
                          t._v(" "),
                          e("td", [
                            t._v(
                              "Add N columns to the left and N columns to the right"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("deleteRow")]),
                          t._v(" "),
                          e("td", [t._v("Delete selected row")]),
                          t._v(" "),
                          e("td", [t._v("Delete selected row")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("deleteColumn")]),
                          t._v(" "),
                          e("td", [t._v("Delete selected column")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("Delete selected column")]),
                          t._v(" "),
                          e("td", [t._v("Delete selected column")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("deleteCell")]),
                          t._v(" "),
                          e("td", [t._v("Delete cell")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("hideRow")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [
                            t._v(
                              "Hide the selected row and show the selected row"
                            ),
                          ]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("hideColumn")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [
                            t._v(
                              "Hide the selected column and show the selected column"
                            ),
                          ]),
                          t._v(" "),
                          e("td", [
                            t._v(
                              "Hide the selected column and show the selected column"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("rowHeight")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("row height")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("columnWidth")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                          t._v(" "),
                          e("td", [t._v("Column Width")]),
                          t._v(" "),
                          e("td", [t._v("Column Width")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("clear")]),
                          t._v(" "),
                          e("td", [t._v("clear content")]),
                          t._v(" "),
                          e("td", [t._v("clear content")]),
                          t._v(" "),
                          e("td", [t._v("clear content")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("matrix")]),
                          t._v(" "),
                          e("td", [t._v("Matrix Operation Selection")]),
                          t._v(" "),
                          e("td", [t._v("Matrix Operation Selection")]),
                          t._v(" "),
                          e("td", [t._v("Matrix Operation Selection")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("sort")]),
                          t._v(" "),
                          e("td", [t._v("Sort selection")]),
                          t._v(" "),
                          e("td", [t._v("Sort selection")]),
                          t._v(" "),
                          e("td", [t._v("Sort selection")]),
                          t._v(" "),
                          e("td", [t._v("A-Z sort and Z-A sort")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("filter")]),
                          t._v(" "),
                          e("td", [t._v("Filter selection")]),
                          t._v(" "),
                          e("td", [t._v("Filter selection")]),
                          t._v(" "),
                          e("td", [t._v("Filter selection")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("chart")]),
                          t._v(" "),
                          e("td", [t._v("chart generation")]),
                          t._v(" "),
                          e("td", [t._v("chart generation")]),
                          t._v(" "),
                          e("td", [t._v("chart generation")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("image")]),
                          t._v(" "),
                          e("td", [t._v("Insert Picture")]),
                          t._v(" "),
                          e("td", [t._v("Insert Picture")]),
                          t._v(" "),
                          e("td", [t._v("Insert Picture")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("link")]),
                          t._v(" "),
                          e("td", [t._v("Insert link")]),
                          t._v(" "),
                          e("td", [t._v("Insert link")]),
                          t._v(" "),
                          e("td", [t._v("Insert link")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("data")]),
                          t._v(" "),
                          e("td", [t._v("Data Verification")]),
                          t._v(" "),
                          e("td", [t._v("Data Verification")]),
                          t._v(" "),
                          e("td", [t._v("Data Verification")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                        t._v(" "),
                        e("tr", [
                          e("td", [t._v("cellFormat")]),
                          t._v(" "),
                          e("td", [t._v("Set cell format")]),
                          t._v(" "),
                          e("td", [t._v("Set cell format")]),
                          t._v(" "),
                          e("td", [t._v("Set cell format")]),
                          t._v(" "),
                          e("td", [t._v("-")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetrightclickconfig" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Object")]),
                  t._v(" "),
                  e("li", [t._v("Default: {}")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Customize the right-click menu of the bottom sheet bar"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Format:"),
                    e("div", { staticClass: "language-json extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        e("code", [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("   \n    delete"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Delete")]
                          ),
                          t._v("\n    copy"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Copy")]
                          ),
                          t._v("\n    rename"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Rename")]
                          ),
                          t._v("\n    color"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Change color")]
                          ),
                          t._v("\n    hide"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Hide, unhide")]
                          ),
                          t._v("\n    move"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Move to the left, move to the right")]
                          ),
                          t._v("\n"),
                          e(
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
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rowheaderwidth" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Number")]),
                  t._v(" "),
                  e("li", [t._v("Default: 46")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: The width of the row header area, if set to 0, it means to hide the row header"
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "columnheaderheight" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Number")]),
                  t._v(" "),
                  e("li", [t._v("Default: 20")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: The height of the column header area, if set to 0, it means hide the column header"
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetformulabar" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: true")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Whether to show the formula bar")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "defaultfontsize" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type：Number")]),
                  t._v(" "),
                  e("li", [t._v("Default：11")]),
                  t._v(" "),
                  e("li", [t._v("Usage：Initialize the default font size")]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "limitsheetnamelength" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Boolean")]),
                  t._v(" "),
                  e("li", [t._v("Default: true")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage：Is the length of the sheet name limited in scenarios such as sheet renaming"
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "defaultsheetnamemaxlength" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type：Number")]),
                  t._v(" "),
                  e("li", [t._v("Default：31")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage：Default maximum allowed sheet name length"),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "pager" } }, [
                  e(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#pager" } },
                    [t._v("#")]
                  ),
                  t._v(" pager"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type：Object")]),
                  t._v(" "),
                  e("li", [t._v("Default：null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage：Pager button settings, the first version of the solution is directly used jquery plug-in "
                    ),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/jvbei/sPage",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("sPage"), e("OutboundLink")],
                      1
                    ),
                    t._v(
                      "\nClicking the paging button will trigger the hook function "
                    ),
                    e("code", [t._v("onTogglePager")]),
                    t._v(
                      ", which returns the current page number, which is the same as the "
                    ),
                    e("code", [t._v("backFun")]),
                    t._v(" method of "),
                    e("code", [t._v("sPage")]),
                    t._v(
                      ". This pager setting is only responsible for the UI part. For the specific data request and data rendering after switching paging, please enter the "
                    ),
                    e("code", [t._v("onTogglePager")]),
                    t._v(" custom processing in the number of hook lines."),
                    e("div", { staticClass: "language-js extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        e("code", [
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("pager")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("pageIndex")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Current page number")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("pageSize")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("10")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "//How many rows of data are displayed on each page"
                              ),
                            ]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("total")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("50")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Total number of rows of data")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("selectOption")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("10")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("20")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "//Options that allow setting the number of rows per page"
                              ),
                            ]
                          ),
                          t._v("\n"),
                          e(
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
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "hook-function-todo" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#hook-function-todo" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Hook Function (TODO)"),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "When the hook function is used in secondary development, hooks will be implanted in each common mouse or keyboard operation, and the function passed in by the developer will be called to expand the function of DataDocs."
                  ),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "The hook functions are uniformly configured under ʻoptions.hook`, and configuration hooks can be created separately for cells, sheet pages, and tables."
                  ),
                ]),
                t._v(" "),
                e("h2", { attrs: { id: "cell" } }, [
                  e(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#cell" } },
                    [t._v("#")]
                  ),
                  t._v(" Cell"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "celleditbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Triggered before entering the cell editing mode. When a cell is selected and in the non-editing state, there are usually the following three conventional methods to trigger the edit mode\n"
                    ),
                    e("ul", [
                      e("li", [t._v("Double click the cell")]),
                      t._v(" "),
                      e("li", [t._v("Hit Enter")]),
                      t._v(" "),
                      e("li", [t._v("Use API: enterEditMode")]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Array} [range]: Current selection range"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "cellupdatebefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Triggered before updating this cell value, "),
                    e("code", [t._v("return false")]),
                    t._v(
                      " will not perform subsequent updates. After modifying the cell in the editing state, this hook is triggered before exiting the editing mode and updating the data."
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [r]: The row number of the cell"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Number} [c]: The column number of the cell"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object | String | Number} [value]: The content of the cell to be modified"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Boolean} [isRefresh]: Whether to refresh the entire table"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "cellupdated" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Triggered after updating this cell")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [r]: The row number of the cell"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Number} [c]: The column number of the cell"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [oldValue]: Cell object before modification"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Object} [newValue]: Modified cell object"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Boolean} [isRefresh]: Whether to refresh the entire table"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "cellrenderbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Triggered before the cell is rendered, "),
                    e("code", [t._v("return false")]),
                    t._v(" will not render the cell"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [t._v("{Object} [cell]:Cell object")]),
                      t._v(" "),
                      e("li", [
                        t._v("{Object} [position]:\n"),
                        e("ul", [
                          e("li", [
                            t._v("{Number} [r]: The row number of the cell"),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v("{Number} [c]: The column number of the cell"),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [start_r]: The horizontal coordinate of the upper left corner of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [start_c]: The vertical coordinate of the upper left corner of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [end_r]: The horizontal coordinate of the lower right corner of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [end_c]: The vertical coordinate of the lower right corner of the cell"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [t._v("{Object} [sheet]: Current sheet object")]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [ctx]: The context of the current canvas"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "cellrenderafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [e("p", [t._v("Type: Function")])]),
                  t._v(" "),
                  e("li", [e("p", [t._v("Default: null")])]),
                  t._v(" "),
                  e("li", [
                    e("p", [
                      t._v("Usage: Triggered after the cell rendering ends, "),
                      e("code", [t._v("return false")]),
                      t._v(" will not render the cell"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [t._v("Parameter:")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [t._v("{Object} [cell]: Cell object")]),
                      t._v(" "),
                      e("li", [
                        t._v("{Object} [position]:\n"),
                        e("ul", [
                          e("li", [
                            t._v("{Number} [r]: The row number of the cell"),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v("{Number} [c]: The column number of the cell"),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [start_r]: The horizontal coordinate of the upper left corner of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [start_c]: The vertical coordinate of the upper left corner of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [end_r]: The horizontal coordinate of the lower right corner of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [end_c]: The vertical coordinate of the lower right corner of the cell"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Object} [sheet]: Current worksheet object"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [ctx]: The context of the current canvas"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [t._v("Example:")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "A case of drawing two pictures in the upper left corner and lower right corner of cell D1"
                      ),
                    ]),
                    t._v(" "),
                    e("details", { staticClass: "custom-block details" }, [
                      e("summary", [t._v("DETAILS")]),
                      t._v(" "),
                      e("div", { staticClass: "language-js extra-class" }, [
                        e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                          e("code", [
                            t._v("datadocs"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("create")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("hook")]
                            ),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n            "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token function-variable function",
                                },
                              },
                              [t._v("cellRenderAfter")]
                            ),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("function")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token parameter" } },
                              [
                                t._v("cell"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" position"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v(" sheetFile"),
                                e(
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
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("var")]
                            ),
                            t._v(" r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" position"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("r"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("var")]
                            ),
                            t._v(" c "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" position"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("===")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("0")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&&")]
                            ),
                            t._v(" c "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("===")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("3")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// Specify to process cell D1")]
                            ),
                            t._v("\n                    "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!")]
                            ),
                            t._v("window"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                        window"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n                    "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\t\t\t\t\t\n                    "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("!")]
                            ),
                            t._v("window"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                        window"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n                    "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n                    "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("var")]
                            ),
                            t._v(" img "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("null")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                    "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("var")]
                            ),
                            t._v(" imgRight "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("null")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n                    "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("window"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("image "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("&&")]
                            ),
                            t._v(" window"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("imgRight"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\t\t\t\t\t\t\n\t\t\t\t\t\t"),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("// Fetch directly after loading")]
                            ),
                            t._v("\n                        img "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" window"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("image"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        imgRight "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" window"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("imgRight"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n                    "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("else")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\n                        img "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Image")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        imgRight "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("new")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token class-name" } },
                              [t._v("Image")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n                        img"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("src "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://www.dogedoge.com/favicon/developer.mozilla.org.ico'"
                                ),
                              ]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        imgRight"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("src "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://www.dogedoge.com/static/icons/twemoji/svg/1f637.svg'"
                                ),
                              ]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n\t\t\t\t\t\t"),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [
                                t._v(
                                  "// The picture is cached in the memory, fetched directly next time, no need to reload"
                                ),
                              ]
                            ),
                            t._v("\n                        window"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("image "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" img"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        window"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("storeUserImage"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'_'")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("+")]
                            ),
                            t._v(" c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("imgRight "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" imgRight"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n                    "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n\t\t\t\t\t\n                    "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("img"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("complete"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token comment" } },
                              [t._v("//Direct rendering that has been loaded")]
                            ),
                            t._v("\n                        ctx"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("drawImage")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("img"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("start_c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("start_r"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                    "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("else")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                        img"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            e(
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
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("function")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                            ctx"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("drawImage")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("img"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("start_c"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("start_r"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n                    "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n                    "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("if")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("imgRight"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("complete"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                        ctx"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("drawImage")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("imgRight"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("end_c "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("-")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("end_r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("-")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                    "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("else")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n\n                        imgRight"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            e(
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
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("=")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("function")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                            ctx"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("drawImage")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("imgRight"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("end_c "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("-")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" position"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(".")]
                            ),
                            t._v("end_r "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v("-")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" "),
                            e(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("10")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n                        "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n                    "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n                "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n            "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            e(
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
                      e("p", [t._v(":::")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "cellallrenderbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage:The method executed before all cells are rendered. Internally, this method is added before "
                    ),
                    e("code", [t._v("luckysheetDrawMain")]),
                    t._v(" renders the table."),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [data]: Two-dimensional array data of the current worksheet"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Object} [sheet]: Current worksheet object"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [ctx]: The context of the current canvas"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rowtitlecellrenderbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Triggered before the row header cell is rendered, "
                    ),
                    e("code", [t._v("return false")]),
                    t._v(" will not render the row header"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [t._v("{String} [rowNum]: Row number")]),
                      t._v(" "),
                      e("li", [
                        t._v("{Object} [position]:\n"),
                        e("ul", [
                          e("li", [
                            t._v("{Number} [r]: The row number of the cell"),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [top]: The vertical coordinate of the upper left corner of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [t._v("{Number} [width]: Cell width")]),
                          t._v(" "),
                          e("li", [t._v("{Number} [height]: Cell height")]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [ctx]: The context of the current canvas"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rowtitlecellrenderafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Triggered after the row header cell is rendered, "
                    ),
                    e("code", [t._v("return false")]),
                    t._v(" will not render the row header"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [t._v("{String} [rowNum]: Row number")]),
                      t._v(" "),
                      e("li", [
                        t._v("{Object} [position]:\n"),
                        e("ul", [
                          e("li", [
                            t._v("{Number} [r]: The row number of the cell"),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [top]: The vertical coordinate of the upper left corner of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [t._v("{Number} [width]: Cell width")]),
                          t._v(" "),
                          e("li", [t._v("{Number} [height]: Cell height")]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [ctx]: The context of the current canvas"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "columntitlecellrenderbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Triggered before the column header cell is rendered, "
                    ),
                    e("code", [t._v("return false")]),
                    t._v(" will not render the column header"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Object} [columnAbc]: Column header characters"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Object} [position]:\n"),
                        e("ul", [
                          e("li", [
                            t._v("{Number} [c]: The column number of the cell"),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [left]: The horizontal coordinate of the upper left corner of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [t._v("{Number} [width]: Cell width")]),
                          t._v(" "),
                          e("li", [t._v("{Number} [height]: Cell height")]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [ctx]: The context of the current canvas"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "columntitlecellrenderafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Triggered after the column header cell is rendered, "
                    ),
                    e("code", [t._v("return false")]),
                    t._v(" will not render the column header"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Object} [columnAbc]: Column header characters"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Object} [position]:\n"),
                        e("ul", [
                          e("li", [
                            t._v("{Number} [c]: The column number of the cell"),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [left]: The horizontal coordinate of the upper left corner of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [t._v("{Number} [width]: Cell width")]),
                          t._v(" "),
                          e("li", [t._v("{Number} [height]: Cell height")]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [ctx]: The context of the current canvas"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "selected-area" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#selected-area" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Selected area"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "rangeselect" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Frame selection or trigger after setting selection"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Object} [sheet]: Current worksheet object"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object | Array} [range]: Selection area, may be multiple selection areas"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangemovebefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Before moving the selection, include a single cell"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [range]: The current selection area, can only be a single selection area"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangemoveafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: After moving the selection, include a single cell"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [oldRange]: The current selection range before moving, can only be a single selection"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Array} [newRange]: The current selection range after moving, can only be a single selection"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangeeditbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before the selection")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object | Array} [range]: Selection area, may be multiple selection areas"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [data]: Data corresponding to the selection area"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangeeditafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After the selection is modified")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object | Array} [range]: Selection area, may be multiple selection areas"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [oldData]: Before modification, the data corresponding to the selection area"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [newData]: After modification, the data corresponding to the selection area"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangecopybefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before copying selection")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object | Array} [range]: Selection area, may be multiple selection areas"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [data]: Data corresponding to the selection area"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangecopyafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After copying selection")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object | Array} [range]: Selection area, may be multiple selection areas"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [data]: Data corresponding to the selection area"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangepastebefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before pasting the selection")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object | Array} [range]: Selection area, may be multiple selection areas"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [data]: The data corresponding to the selection area to be pasted"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangepasteafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After pasting the selection")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object | Array} [range]: Selection area, may be multiple selection areas"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [originData]: The data corresponding to the selection area to be pasted"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [t._v("{Object} [pasteData]: Data to paste")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangecutbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before selection cut")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [range]: Selection range, can only be a single range"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [data]: The data corresponding to the selection area to be cut"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangecutafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After selection cut")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [range]: Selection range, can only be a single range"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [data]: The data corresponding to the selection area to be cut"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangedeletebefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before the selection is deleted")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [range]: Selection range, can only be a single range"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [data]: The data corresponding to the selection area to be deleted"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangedeleteafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After the selection is deleted")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [range]: Selection range, can only be a single range"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [data]: The data corresponding to the selection area to be deleted"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangeclearbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before the selection is cleared")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object | Array} [range]: Selection area, may be multiple selection areas"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [data]: The data corresponding to the selection area to be cleared"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangeclearafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After the selection is cleared")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object | Array} [range]: Selection area, may be multiple selection areas"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [data]: The data corresponding to the selection area to be cleared"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangepullbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before selection drop down")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [range]: The current selection range, can only be a single range"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "rangepullafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After selection drop down")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [range]: The selection range after the drop-down can only be a single range"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "worksheet" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#worksheet" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Worksheet"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "sheetcreatekbefore" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetcreatekbefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetCreatekBefore"),
                ]),
                t._v(" "),
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Triggered before the worksheet is created, the new worksheet also includes the new pivot table"
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetcreateafter" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Triggered after the worksheet is created, the new worksheet also includes the new pivot table"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [sheet]: The configuration of the newly created worksheet"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetmovebefore" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before the worksheet is moved")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Number} [order]: "),
                        e("code", [t._v("Order")]),
                        t._v(" of current worksheet"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetmoveafter" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After the worksheet is moved")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Number} [oldOrder]: Before modification, the "),
                        e("code", [t._v("order")]),
                        t._v(" of the current worksheet"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Number} [newOrder]: After modification, the "),
                        e("code", [t._v("order")]),
                        t._v(" of the current worksheet"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetdeletebefore" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before the worksheet is deleted")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [sheet]: Configuration of the worksheet to be deleted"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetdeleteafter" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After the worksheet is deleted")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [sheet]: Configuration of deleted worksheet"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheeteditnamebefore" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Before changing the name of the worksheet"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{String} [name]: Current worksheet name"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheeteditnameafter" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: After changing the name of the worksheet"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{String} [oldName]: Before modification, the current worksheet name"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{String} [newName]: After modification, the current worksheet name"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheeteditcolorbefore" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Before changing the color of the worksheet"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{String} [color]: Current worksheet color"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheeteditcolorafter" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: After changing the color of the worksheet"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{String} [oldColor]: Before modification, the current worksheet color"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{String} [newColor]: After modification, the current worksheet color"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetzoombefore" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before worksheet zoom")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{String} [zoom]: Current worksheet zoom ratio"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetzoomafter" } }, [
                  e(
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
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After worksheet zoom")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{String} [oldZoom]: Before modification, the current worksheet zoom ratio"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{String} [newZoom]: After modification, the current worksheet zoom ratio"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetactivatebefore" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetactivatebefore" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetActivateBefore"),
                ]),
                t._v(" "),
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage：Before worksheet activate")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter：\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetactivateafter" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheetactivateafter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" sheetActivateAfter"),
                ]),
                t._v(" "),
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage：After worksheet activate")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter：\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetdeactivatebefore" } }, [
                  e(
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
                e("p", [t._v("（TODO）")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage：Before the worksheet changes from active to inactive"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter：\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "sheetdeactivateafter" } }, [
                  e(
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
                e("p", [t._v("（TODO）")]),
                t._v(" "),
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage：After the worksheet is changed from active to inactive"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter：\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Number} [i]: "),
                        e("code", [t._v("index")]),
                        t._v(" of current worksheet"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "workbook" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#workbook" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Workbook"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "workbookcreatebefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Triggered before the worksheet is created. The old hook function is called "
                    ),
                    e("code", [t._v("beforeCreateDom")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [book]:Configuration of the entire workbook (options)"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "workbookcreateafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Triggered after the workbook is created"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [book]:Configuration of the entire workbook (options)"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "workbookdestroybefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Triggered before the workbook is destroyed"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [book]:Configuration of the entire workbook (options)"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "workbookdestroyafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v("Usage: Triggered after the workbook is destroyed"),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [book]:Configuration of the entire workbook (options)"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "updated" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: The method executed after each operation is updated is executed after the canvas rendering, monitor changes in worksheet content, that is, every time the client performs a workbook operation, DataDocs saves the operation in the history and triggers it. When undoing and redoing, it is also an operation, of course, the hook function will be triggered."
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [operate]: The history information of this operation will have different history records according to different operations. Refer to the source code "
                        ),
                        e(
                          "a",
                          {
                            attrs: {
                              href: "https://servequery.github.io/datadocs/blob/master/src/controllers/controlHistory.js",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [t._v("History"), e("OutboundLink")],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "resized" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After resize is executed")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [size]: The width and height of the entire workbook area"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "cooperative" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cooperative" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Cooperative"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "cooperativemessage" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type：Function")]),
                  t._v(" "),
                  e("li", [t._v("Default：null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage：Receive the cooperation message, secondary development. Expanding cooperative message instruction set"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Params:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} : Receives the entire collaboration message body object sent by the server"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("h2", { attrs: { id: "image" } }, [
                  e(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#image" } },
                    [t._v("#")]
                  ),
                  t._v(" Image"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "imageinsertbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before the picture is inserted")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [t._v("{Object} [url]: Picture address")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "imageinsertafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After the picture is inserted")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [item]]: Picture address, width and height, location and other information"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "imageupdatebefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Before the picture is modified, the modified content includes operations such as width and height, position, and cropping"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [item]]: Picture address, width and height, location and other information"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "imageupdateafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: After the picture is modified, the modified content includes operations such as width and height, position, and cropping"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [oldItem]]: Before modification, the picture address, width and height, location and other information"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [newItem]]: After modification, the picture address, width and height, location and other information"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "imagedeletebefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before the picture is deleted")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [item]]: Picture address, width and height, location and other information"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "imagedeleteafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After the picture is deleted")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [item]]: Picture address, width and height, location and other information"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "comment" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#comment" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Comment"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "commentinsertbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before inserting comments")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [cell]: The cell information of the comment to be inserted, such as:"
                        ),
                        e("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "commentinsertafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After inserting comments")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [cell]: The cell information where the comment is inserted, such as:"
                        ),
                        e("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                        t._v(", contains comment information"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "commentdeletebefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before deleting comments")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [cell]: The cell information of the comment to be deleted, such as:"
                        ),
                        e("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "commentdeleteafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After deleting the comment")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [cell]: The cell information of the deleted comment, such as:"
                        ),
                        e("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "commentupdatebefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before modifying comments")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [cell]: The cell information of the comment, such as:"
                        ),
                        e("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "commentupdateafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After modifying the comment")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [oldCell]: Before modification, the cell information where the comment is located, such as:"
                        ),
                        e("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [newCell]: After modification, the cell information where the comment is located, such as:"
                        ),
                        e("code", [t._v("{ r:0,c:2,v:{m:'233',v:'233'}}")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "pivot-table" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#pivot-table" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Pivot table"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "pivottableeditbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Before modifying the PivotTable, operations such as dragging fields, etc."
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [sheet]: Worksheet configuration where the pivot table is located"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "pivottableeditafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: After modifying the PivotTable, operations such as dragging fields, etc."
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [oldSheet]: Before modification, the worksheet configuration where the pivot table is located"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object} [newSheet]: After modification, the worksheet configuration where the pivot table is located"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "freeze" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#freeze" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Freeze"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "frozencreatebefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before setting freeze")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Object} [frozen]: Freeze type information"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "frozencreateafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After setting freeze")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Object} [frozen]: Freeze type information"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "frozencancelbefore" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: Before unfreezing")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Object} [frozen]: Freeze type information"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "frozencancelafter" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [t._v("Usage: After unfreezing")]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Object} [frozen]: Freeze type information"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h4", { attrs: { id: "legacy-hook-function" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#legacy-hook-function" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Legacy Hook Function"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "firemousedown" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Customized method of drilling down cell data, note that this hook function is mounted under options: "
                    ),
                    e("code", [t._v("options.fireMousedown")]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "pager-2" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#pager-2" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Pager"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "ontogglepager" } }, [
                  e(
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
                e("ul", [
                  e("li", [t._v("Type: Function")]),
                  t._v(" "),
                  e("li", [t._v("Default: null")]),
                  t._v(" "),
                  e("li", [
                    t._v(
                      "Usage: Click the page button to call back the function, return the current page number, refer to "
                    ),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/jvbei/sPage",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("sPage backFun"), e("OutboundLink")],
                      1
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("Parameter:\n"),
                    e("ul", [
                      e("li", [
                        t._v("{Object} [page]: Return the current page object"),
                      ]),
                    ]),
                  ]),
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
