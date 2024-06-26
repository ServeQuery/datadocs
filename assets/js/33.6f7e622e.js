(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    321: function (t, s, a) {
      "use strict";
      a.r(s);
      var e = a(10),
        n = Object(e.a)(
          {},
          function () {
            var t = this,
              s = t._self._c;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s("h1", { attrs: { id: "table-operation" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#table-operation" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Table Operation"),
                ]),
                t._v(" "),
                s("p", [
                  s("code", [t._v("datadocs")]),
                  t._v(" stores all operations in the history to "),
                  s("code", [t._v("undo")]),
                  t._v(" and "),
                  s("code", [t._v("redo")]),
                  t._v(". If "),
                  s("code", [t._v("allowupdate")]),
                  t._v(" is set to true and "),
                  s("code", [t._v("updateURL")]),
                  t._v(
                    " is available in initial, operations will be updated on the backend in real-time via webSocket. And every one can edit same sheet on the same time."
                  ),
                ]),
                t._v(" "),
                s("blockquote", [
                  s("p", [
                    t._v("Source code ["),
                    s("code", [t._v("src/controllers/server.js")]),
                    t._v(
                      "] (https://servequery.github.io/datadocs/blob/master/src/controllers/server.js) The module shows us the function of background saving."
                    ),
                  ]),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "In general, shared editing(or collaborative editing) is controled by the account system created by developers to control permissions."
                  ),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "The following are all types of operations that support transferring to the background. In this case, I use mongodb as a storage example to explain how front-end and back-end interacts with eachother."
                  ),
                ]),
                t._v(" "),
                s("p", [
                  t._v("Pay attention, "),
                  s("code", [t._v("i")]),
                  t._v(" in the object is the "),
                  s("code", [t._v("index")]),
                  t._v(" of the sheet rather than "),
                  s("code", [t._v("order")]),
                  t._v("."),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "cell-refresh" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cell-refresh" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Cell refresh"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "single-cell-refresh" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#single-cell-refresh" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" single cell refresh"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [
                            t._v("The index value of the current sheet"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s(
                            "td",
                            [
                              t._v("Cell value, refer to "),
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
                          s("td", [t._v("Row number of cell")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("c")]),
                          t._v(" "),
                          s("td", [t._v("The column number of the cell")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("The cell update is mainly to update the "),
                      s("code", [t._v("luckysheetfile[i].celldata")]),
                      t._v(" parameter, which is an array:"),
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
                            [t._v('"value1"')]
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
                            [t._v('"value2"')]
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
                      t._v(
                        "Store the values in all the cells in the sheet, DataDocs will create a new table data according to the number of rows and columns in "
                      ),
                      s("code", [t._v("luckysheetfile[i].row")]),
                      t._v(" and "),
                      s("code", [t._v("luckysheetfile[i].column")]),
                      t._v(" when it is created, and then use "),
                      s("code", [t._v("data[ r][c]=v")]),
                      t._v(
                        " to fill the table data, empty data cells are represented by null."
                      ),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "When saving the data posted by the frontend, the backend needs to convert the parameters to the format of "
                      ),
                      s("code", [t._v("{r:0, c:1:v:100}")]),
                      t._v(" first, and then update the field of "),
                      s("code", [t._v("luckysheetfile[i].celldata")]),
                      t._v(
                        ", if the cell exists the cell is updated, if not, it is added, and if the cell exists but "
                      ),
                      s("code", [t._v("v")]),
                      t._v(" is null, the cell is deleted."),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Frontend view")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "You can modify the value of any cell, and then go to the chrome console to view the operation of "
                      ),
                      s("code", [t._v('"t"=="v"')]),
                      t._v("."),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "config-operation" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#config-operation" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Config operation"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                            [t._v('"cg"')]
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
                            [t._v("192")]
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
                            [t._v('"rowlen"')]
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [
                            t._v("The index value of the current sheet"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v(
                              "The internal key-value that needs to be updated"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("k")]),
                          t._v(" "),
                          s("td", [t._v("Operation key name")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("Update "),
                      s("code", [
                        t._v("luckysheetfile[i].config.[k][v.key] = v.value"),
                      ]),
                      t._v(", if "),
                      s("code", [t._v("k")]),
                      t._v(" does not exist in "),
                      s("code", [t._v("config")]),
                      t._v(", then create a new "),
                      s("code", [t._v("k")]),
                      t._v(" attribute and set it to empty, If there is no "),
                      s("code", [t._v("v.key")]),
                      t._v(" in "),
                      s("code", [t._v("k")]),
                      t._v(", create a new "),
                      s("code", [t._v("v.key")]),
                      t._v(" and update "),
                      s("code", [t._v("v.value")]),
                      t._v("."),
                    ]),
                    t._v(" "),
                    s("ol", [
                      s("li", [
                        s("p", [t._v("Examples of modifying row height:")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("Enter: "),
                            s("code", [
                              t._v(
                                '{"t":"cg","i":3,"v":{"3":10, "5":70, "10":100},"k":" rowlen"}'
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Update: "),
                            s("code", [
                              t._v(
                                'luckysheetfile[3].config.["rowlen"]["3"] = 10'
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("Examples of modifying column width:")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("Enter: "),
                            s("code", [
                              t._v(
                                '{"t":"cg","i":1,"v":{"20":74, "15":170, "6":40},"k":" columnlen"}'
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Update: "),
                            s("code", [
                              t._v(
                                'luckysheetfile[1].config.["columnlen"]["20"] = 74'
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("Examples of merged cells:")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("Enter: "),
                            s("code", [
                              t._v(
                                '{"t":"cg","i":1,"v":{"5_10":{row:[1,3], column:[3,5]},"k":" merge "}'
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Update: "),
                            s("code", [
                              t._v(
                                'luckysheetfile[1].config.["merge"]["5_10"] = {row:[1,3], column:[3,5]}'
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "general-save" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#general-save" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" General save"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                            [t._v('"all"')]
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
                          t._v("\n      "),
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
                            [t._v('"freezen"')]
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
                            [t._v('"s"')]
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [
                            t._v("The index value of the current sheet"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v(
                              "The internal key-value that needs to be updated"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("k")]),
                          t._v(" "),
                          s("td", [
                            t._v("The "),
                            s("code", [t._v("value")]),
                            t._v(" in the key-value that needs to be saved"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("s")]),
                          t._v(" "),
                          s("td", [
                            t._v("If it is "),
                            s("code", [t._v("true")]),
                            t._v(" then "),
                            s("code", [t._v("v")]),
                            t._v(
                              " is saved as a string, otherwise it is saved according to the object"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      s("code", [t._v("luckysheetfile[3].[k]= v")]),
                      t._v("\nIf "),
                      s("code", [t._v("s")]),
                      t._v(" is "),
                      s("code", [t._v("true")]),
                      t._v(", it is "),
                      s("code", [
                        t._v("luckysheetfile[3].[k]= JSON.stringify(v)"),
                      ]),
                    ]),
                    t._v(" "),
                    s("ol", [
                      s("li", [
                        s("p", [t._v("Pivot table:")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("Enter: "),
                            s("code", [
                              t._v(
                                '{"t":"all","i":1,"v":{………},"k":"pivotTable", "s": false}'
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Update: "),
                            s("code", [
                              t._v('luckysheetfile[1].["pivotTable"] = {………}'),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("Freeze rows and columns:")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("Enter: "),
                            s("code", [
                              t._v(
                                '{"t":"all","i":3,"v":{………},"k":"freezen", "s": false}'
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Update: "),
                            s("code", [
                              t._v('luckysheetfile[3].["freezen"] = {………}'),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("Filter range:")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("Enter: "),
                            s("code", [
                              t._v(
                                '{"t":"all","i":3,"v":{………},"k":"filter_select", "s": true }'
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Update: "),
                            s("code", [
                              t._v(
                                'luckysheetfile[3].["filter_select"] = JSON.stringify ({………})'
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("Sheet name:")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("Enter: "),
                            s("code", [
                              t._v(
                                '{"t":"all","i":1,"v":"doc","k":"name", "s": false}'
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Update: "),
                            s("code", [
                              t._v('luckysheetfile[1].["name"] = "doc"'),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("Sheet color:")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("Enter:  "),
                            s("code", [
                              t._v(
                                '{"t":"all","i":2,"v":"#FFF000","k":"color", "s": false}'
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Update: "),
                            s("code", [
                              t._v('luckysheetfile[2].["color"] = "#FFF000"'),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "function-chain-operation" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#function-chain-operation" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Function chain operation"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                            [t._v('"func"')]
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
                          t._v("\n          "),
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
                          t._v("\n          "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("187282")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n          "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"=SUM(E4:G4)"')]
                          ),
                          t._v("\n      "),
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
                            [t._v("0")]
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [
                            t._v("The index value of the current sheet"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v(
                              "Object value, the internal fields of the object do not need to be updated separately, so save as text"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [
                            t._v("Operation type, "),
                            s("code", [t._v("add")]),
                            t._v(" is add, "),
                            s("code", [t._v("update")]),
                            t._v(" is update, and "),
                            s("code", [t._v("del")]),
                            t._v(" is delete"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("pos")]),
                          t._v(" "),
                          s("td", [
                            t._v("Updated or deleted function location"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("calcChain is an array")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("If the value of "),
                        s("code", [t._v("op")]),
                        t._v(" is "),
                        s("code", [t._v("add")]),
                        t._v(" then add to the end "),
                        s("code", [
                          t._v("luckysheetfile[i].calcChain.push (v)"),
                        ]),
                        t._v("，"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("If the value of "),
                        s("code", [t._v("op")]),
                        t._v(" is "),
                        s("code", [t._v("update")]),
                        t._v(" then update  "),
                        s("code", [
                          t._v("luckysheetfile[i].calcChain[pos]= v"),
                        ]),
                        t._v("，"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("If the value of "),
                        s("code", [t._v("op")]),
                        t._v(" is "),
                        s("code", [t._v("del")]),
                        t._v(" then delete "),
                        s("code", [
                          t._v("luckysheetfile[i].calcChain.splice(pos, 1)"),
                        ]),
                        t._v("。"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Frontend view")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "You can modify the value of any cell, and then go to the chrome console to view the operation of "
                      ),
                      s("code", [t._v('"t"=="v"')]),
                      t._v("."),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "row-and-column-operations" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#row-and-column-operations" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Row and column operations"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "delete-rows-or-columns" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#delete-rows-or-columns" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Delete rows or columns"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [
                          t._v("Parameter"),
                        ]),
                        t._v(" "),
                        s("td", [t._v("Explanation")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("t")]),
                        t._v(" "),
                        s("td", [t._v("Operation type symbol")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("i")]),
                        t._v(" "),
                        s("td", [t._v("The index value of the current sheet")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("rc")]),
                        t._v(" "),
                        s("td", [
                          t._v(
                            "Row operation or column operation, the value `r` stands for row, and `c` stands for column"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { rowspan: "2" } }, [t._v("v")]),
                        t._v(" "),
                        s("td", [t._v("index")]),
                        t._v(" "),
                        s("td", [t._v("Delete from which row or column")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("len")]),
                        t._v(" "),
                        s("td", [t._v("Number of rows or columns deleted")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("If the value of "),
                      s("code", [t._v("rc")]),
                      t._v(" is "),
                      s("code", [t._v("'r'")]),
                      t._v(" then delete the row, if the value of "),
                      s("code", [t._v("rc")]),
                      t._v(" is "),
                      s("code", [t._v("'c'")]),
                      t._v(" then delete the column, eg "),
                      s("code", [t._v("rc='r'")]),
                      t._v(", "),
                      s("code", [t._v("index=4")]),
                      t._v(", "),
                      s("code", [t._v("len= 5")]),
                      t._v(
                        ", means to delete the next 5 lines (4, 5, 6, 7, 8) from the 4th line."
                      ),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("Mainly operate on the cells in "),
                      s("code", [t._v("luckysheetfile[i].celldata")]),
                      t._v(
                        ", delete the qualified cells described in the parameters and update the row and column values of other cells. Taking the above as an example, first find the "
                      ),
                      s("code", [t._v("r")]),
                      t._v(
                        " in the cell Delete all the cells with values from 4 to 8, and then subtract the value of 5 from the original cell number 9 and later, and finally subtract 5 from "
                      ),
                      s("code", [t._v("luckysheetfile[i].row")]),
                      t._v(".\nIf the "),
                      s("code", [t._v("v")]),
                      t._v(" value is "),
                      s("code", [t._v('"#__qkdelete#"')]),
                      t._v(
                        " (without quotes), then this is the cell to be deleted."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Front view")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "You can delete rows or columns, and then go to the chrome console to view the operation of "
                      ),
                      s("code", [t._v('"t"=="drc"')]),
                      t._v("."),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "add-rows-or-columns" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#add-rows-or-columns" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Add rows or columns"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                            [t._v('"c"')]
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [
                          t._v("Parameter"),
                        ]),
                        t._v(" "),
                        s("td", [t._v("Explanation")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("t")]),
                        t._v(" "),
                        s("td", [t._v("Operation type symbol")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("i")]),
                        t._v(" "),
                        s("td", [t._v("The index value of the current sheet")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("rc")]),
                        t._v(" "),
                        s("td", [
                          t._v(
                            "Row operation or column operation, the value `r` stands for row, and `c` stands for column"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { rowspan: "3" } }, [t._v("v")]),
                        t._v(" "),
                        s("td", [t._v("index")]),
                        t._v(" "),
                        s("td", [t._v("Start from which row or column")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("len")]),
                        t._v(" "),
                        s("td", [t._v("How many rows or columns to add")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("data")]),
                        t._v(" "),
                        s("td", [t._v("New row or column content")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("If the value of "),
                      s("code", [t._v("rc")]),
                      t._v(" is "),
                      s("code", [t._v("r")]),
                      t._v(", add a new row. If the value of "),
                      s("code", [t._v("rc")]),
                      t._v(" is "),
                      s("code", [t._v("c")]),
                      t._v(", add a new column. For example, "),
                      s("code", [t._v("rc=r, index=4, len=5")]),
                      t._v(" then it means increase 5 lines from line 4. If "),
                      s("code", [t._v("data")]),
                      t._v(" is empty, add an empty line. If "),
                      s("code", [t._v("data")]),
                      t._v(" is not empty, use the array in "),
                      s("code", [t._v("data")]),
                      t._v(" to add a new line."),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("Mainly operate on the cells in "),
                      s("code", [t._v("luckysheetfile[i].celldata")]),
                      t._v(". Taking the above as an example, first add 5 to "),
                      s("code", [t._v("luckysheetfile[i].row")]),
                      t._v(", and then add "),
                      s("code", [t._v("r")]),
                      t._v(" greater than 4 to the entire cell"),
                      s("code", [t._v("r")]),
                      t._v("Value +5, if "),
                      s("code", [t._v("data")]),
                      t._v(" is empty, add an empty line to end, if "),
                      s("code", [t._v("data")]),
                      t._v(" is not empty, convert the two-dimensional array "),
                      s("code", [t._v("data")]),
                      t._v(" to "),
                      s("code", [t._v("{r:0,c:0,v:100}")]),
                      t._v(" Format and added to "),
                      s("code", [t._v("celldata")]),
                      t._v(", the pseudo code for conversion is as follows:"),
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
                  t._v(" "),
                  s("li", [
                    s("p", [
                      s("strong", [t._v("Front view")]),
                      t._v(
                        "：\nYou can add rows or columns, and then go to the chrome console to view the operation of "
                      ),
                      s("code", [t._v('"t"=="arc"')]),
                      t._v(
                        ". If you want to view the operation with the value of "
                      ),
                      s("code", [t._v("data")]),
                      t._v(
                        ", you can delete some rows or columns, and then undelete (Ctrl+Z), you can see."
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "filter-operating" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#filter-operating" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Filter operating"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "select-filter-condition" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#select-filter-condition" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Select filter condition"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                            [t._v('"f"')]
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
                            { pre: !0, attrs: { class: "token string" } },
                            [
                              t._v(
                                '"{\\"caljs\\":{},\\"selected\\":{\\"Qingdao\\":\\"1\\",\\"Guangxi\\":\\"1\\",\\"Chongqing\\":\\"1\\"},\\"rowhidden\\":{\\"1\\":0,\\"2\\":0,\\"3\\":0,\\"4\\":0,\\"6\\":0,\\"7\\":0,\\"8\\":0,\\"9\\":0,\\"10\\":0,\\"11\\":0,\\"12\\":0,\\"13\\":0,\\"14\\":0,\\"15\\":0,\\"16\\":0,\\"17\\":0,\\"18\\":0,\\"19\\":0,\\"21\\":0,\\"22\\":0,\\"24\\":0,\\"25\\":0,\\"26\\":0,\\"27\\":0,\\"28\\":0,\\"29\\":0,\\"30\\":0,\\"31\\":0,\\"32\\":0,\\"33\\":0,\\"34\\":0,\\"35\\":0}}"'
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
                            [t._v('"upOrAdd"')]
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
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [
                            t._v("The index value of the current sheet"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v(
                              "Object value, the internal fields of the object do not need to be updated separately, so save as text"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [
                            t._v("The operation type "),
                            s("code", [t._v("upOrAdd")]),
                            t._v(
                              " is update, if it does not exist, it is added, and "
                            ),
                            s("code", [t._v("del")]),
                            t._v(" is delete"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("pos")]),
                          t._v(" "),
                          s("td", [
                            t._v("Updated or deleted "),
                            s("code", [t._v("option")]),
                            t._v(" location"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("Update "),
                      s("code", [t._v("luckysheetfile[i].filter = {pos: v }")]),
                      t._v(", the value of "),
                      s("code", [t._v("v")]),
                      t._v(" is a string in JSON format. "),
                      s("code", [t._v("filter")]),
                      t._v(" is a key-value pair, "),
                      s("code", [t._v("key")]),
                      t._v(
                        " is the index value (in characters) of the option position, and "
                      ),
                      s("code", [t._v("v")]),
                      t._v(" is a json string parameter. "),
                      s("code", [t._v("filter")]),
                      t._v(" represents a set of filter conditions."),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "clear-filter" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#clear-filter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Clear filter"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("Clear "),
                      s("code", [t._v("luckysheetfile[i]. filter = null")]),
                      t._v(" ， "),
                      s("code", [
                        t._v("luckysheetfile[i]. filter_select = null"),
                      ]),
                      t._v("。"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "restore-filter" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#restore-filter" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Restore filter"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("Clear "),
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
                s("h2", { attrs: { id: "sheet-operation" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheet-operation" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Sheet operation"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "new-sheet" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#new-sheet" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" New sheet"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                            [t._v('"Sheet4"')]
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [
                          t._v("Parameter"),
                        ]),
                        t._v(" "),
                        s("td", [t._v("Explanation")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("t")]),
                        t._v(" "),
                        s("td", [t._v("Operation type symbol")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("i")]),
                        t._v(" "),
                        s("td", [t._v("The index value of the current sheet")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { rowspan: "9" } }, [t._v("v")]),
                        t._v(" "),
                        s("td", [t._v("name")]),
                        t._v(" "),
                        s("td", [
                          t._v(
                            "The index value of the sheet jumped after hiding"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("color")]),
                        t._v(" "),
                        s("td", [t._v("Sheet color")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("status")]),
                        t._v(" "),
                        s("td", [t._v("Active state")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("order")]),
                        t._v(" "),
                        s("td", [t._v("Sheet order")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("index")]),
                        t._v(" "),
                        s("td", [t._v("Sheet Index")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("celldata")]),
                        t._v(" "),
                        s("td", [t._v("Cell dataset")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("config")]),
                        t._v(" "),
                        s("td", [t._v("Setting")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("pivotTable")]),
                        t._v(" "),
                        s("td", [t._v("Pivot table settings")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", [t._v("isPivotTable")]),
                        t._v(" "),
                        s("td", [t._v("Whether the pivot table")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("Add a line (a document) to the database.")]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "copy-sheet" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#copy-sheet" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Copy sheet"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                            [t._v('"New sheet location"')]
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
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"copyindex"')]
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
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "Copy the sheet index value in the table, set it to "
                      ),
                      s("code", [t._v("copyindex")]),
                      t._v(" and add it to the database, set the "),
                      s("code", [t._v("index")]),
                      t._v(
                        " of the new document to the value corresponding to "
                      ),
                      s("code", [t._v("i")]),
                      t._v("."),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "delete-sheet" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#delete-sheet" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Delete sheet"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [
                          t._v("Parameter"),
                        ]),
                        t._v(" "),
                        s("td", [t._v("Explanation")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("t")]),
                        t._v(" "),
                        s("td", [t._v("Operation type symbol")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { rowspan: "2" } }, [t._v("v")]),
                        t._v(" "),
                        s("td", [t._v("deleIndex")]),
                        t._v(" "),
                        s("td", [t._v("The sheet index to be deleted")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "Delete the sheet whose index is the value corresponding to "
                      ),
                      s("code", [t._v("deleIndex")]),
                      t._v("."),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "restore-from-a-deleted-sheet" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#restore-from-a-deleted-sheet" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" restore from a deleted sheet"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("format")]), t._v("：")]),
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [
                          t._v("Parameter"),
                        ]),
                        t._v(" "),
                        s("td", [t._v("Explanation")]),
                      ]),
                      t._v(" "),
                      s("tr", [
                        s("td", { attrs: { colspan: "2" } }, [t._v("t")]),
                        t._v(" "),
                        s("td", [t._v("Operation type symbol")]),
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
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("restore the sheet whose index is the number of "),
                      s("code", [t._v("reIndex")]),
                      t._v("."),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "position" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#position" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Position"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v(
                              "Set the sorting of Sheet as a key-value pair, "
                            ),
                            s("code", [t._v("key")]),
                            t._v(" represents the index of the sheet, and "),
                            s("code", [t._v("value")]),
                            t._v(
                              " represents the order value. The format is: "
                            ),
                            s("code", [t._v('{"1": 3, "2":1, "0": 2, "3":0}')]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("For the page where the "),
                      s("code", [t._v("index")]),
                      t._v(" of the sheet is equal to the "),
                      s("code", [t._v("key")]),
                      t._v(", set its "),
                      s("code", [t._v("order")]),
                      t._v(" attribute to the "),
                      s("code", [t._v("value")]),
                      t._v(". Examples:"),
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
                s("h3", { attrs: { id: "switch-to-the-specified-sheet" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#switch-to-the-specified-sheet" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" switch to the specified sheet"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("format")]), t._v("：")]),
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [t._v("index of the specified sheet")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("setting the "),
                      s("code", [t._v("status")]),
                      t._v(" = "),
                      s("code", [t._v("1")]),
                      t._v(", when the "),
                      s("code", [t._v("index")]),
                      t._v(" of a sheet is eaqul to "),
                      s("code", [t._v("v")]),
                      t._v("："),
                    ]),
                    t._v(" "),
                    s("p", [s("code", [t._v("luckysheetfile[v].status = 1")])]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "sheet-attributes-hide-or-show" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sheet-attributes-hide-or-show" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Sheet attributes (hide or show)"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                            [t._v('" hide"')]
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
                            [t._v("2")]
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [
                            t._v("The index value of the current sheet"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [
                            t._v("Operation options include hide and show"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v("Hide if "),
                            s("code", [t._v("hide")]),
                            t._v(" is "),
                            s("code", [t._v("1")]),
                            t._v(", show if "),
                            s("code", [t._v("0")]),
                            t._v(" or empty"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("cur")]),
                          t._v(" "),
                          s("td", [
                            t._v(
                              "After hiding, set sheet which index corresponding to the "
                            ),
                            s("code", [t._v("cur")]),
                            t._v(" to the active state"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("The "),
                      s("code", [t._v("hide")]),
                      t._v(
                        " field of the root path of the sheet corresponding to "
                      ),
                      s("code", [t._v("i")]),
                      t._v(" is updated to "),
                      s("code", [t._v("v")]),
                      t._v(". When hidden, the "),
                      s("code", [t._v("status")]),
                      t._v(" value is "),
                      s("code", [t._v("0")]),
                      t._v(". When displayed, it is "),
                      s("code", [t._v("1")]),
                      t._v(". If hidden, the sheet which "),
                      s("code", [t._v("cur")]),
                      t._v(" corresponds to  "),
                      s("code", [t._v("index")]),
                      t._v(", its "),
                      s("code", [t._v("status")]),
                      t._v(" is updated to "),
                      s("code", [t._v("1")]),
                      t._v("."),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "table-information-change" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#table-information-change" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Table information change"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "table-name" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#table-name" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Table name"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                            [t._v('"na"')]
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
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Data"')]
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [t._v("The name of the table")]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "Update the table name in the database according to gridkey."
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "thumbnail" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#thumbnail" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Thumbnail"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Format")]), t._v("：")]),
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
                            [t._v('"thumb"')]
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
                            [t._v('"img"')]
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
                            [t._v('"base64"')]
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
                            [t._v('"curindex"')]
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
                            [t._v('"curindx"')]
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("img")]),
                          t._v(" "),
                          s("td", [
                            t._v("Thumbnail of current table, base64 string"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("curindex")]),
                          t._v(" "),
                          s("td", [
                            t._v("The current sheet opened by default"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "According to gridkey, update the thumbnail field of the table in mysql to the img value, and update the status field of the sheet whose index is the curindex value to 1, and set the status value of other sheets to 0."
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "chart-todo" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#chart-todo" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Chart(TODO)"),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    'There are four types of chart operations: add new chart -"add", move chart position-"xy", zoom chart-"wh", and update chart configuration-"update".'
                  ),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "new-chart" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#new-chart" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" new chart"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("format")]), t._v("：")]),
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
                            [t._v('"default title"')]
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [
                            t._v("The index value of the current sheet"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [
                            t._v("Operation options include hide and show"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v("configuration information of charts"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("update the chart settings in the current sheet,if"),
                      s("code", [t._v("luckysheetfile[i].chart")]),
                      t._v(" is null，the array should be "),
                      s("code", [t._v("[]")]),
                      t._v(" on initial."),
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
                s("h3", { attrs: { id: "move-chart-position" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#move-chart-position" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" move chart position"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("format")]), t._v("：")]),
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [
                            t._v("The index value of the current sheet"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [
                            t._v("Operation options include hide and show"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v("configuration information of charts"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("update the chart settings in the current sheet"),
                    ]),
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
                s("h3", { attrs: { id: "zoom-chart" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#zoom-chart" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" zoom chart"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("format")]), t._v("：")]),
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [
                            t._v("The index value of the current sheet"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [
                            t._v("Operation options include hide and show"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v("configuration information of charts"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("update the chart settings in the current sheet"),
                    ]),
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
                s(
                  "h3",
                  { attrs: { id: "change-the-configuration-of-charts" } },
                  [
                    s(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#change-the-configuration-of-charts" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" change the configuration of charts"),
                  ]
                ),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("format")]), t._v("：")]),
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
                            [t._v('"default title"')]
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
                    s("p", [s("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    s("table", [
                      s("thead", [
                        s("tr", [
                          s("th", [t._v("Parameter")]),
                          t._v(" "),
                          s("th", [t._v("Explanation")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("t")]),
                          t._v(" "),
                          s("td", [t._v("Operation type symbol")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("i")]),
                          t._v(" "),
                          s("td", [
                            t._v("The index value of the current sheet"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("op")]),
                          t._v(" "),
                          s("td", [
                            t._v("Operation options include hide and show"),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("v")]),
                          t._v(" "),
                          s("td", [
                            t._v("configuration information of charts"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("Backend update")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("update the chart settings in the current sheet"),
                    ]),
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
                s("h2", { attrs: { id: "backend-return-format" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#backend-return-format" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Backend return format"),
                ]),
                t._v(" "),
                s("p", [t._v("Data format returned by websocket backend")]),
                t._v(" "),
                s("div", { staticClass: "language-js extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n     "),
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
                      t._v(" command sending time\n     "),
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
                      t._v(" modified command\n     "),
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
                      t._v(" websocket id\n     "),
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
                      t._v("\n     "),
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
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      t._v(
                        " tells the front end to modify according to the data command "
                      ),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      t._v(" meaningless\n     "),
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
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" connection is successful"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" send to the currently connected user"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("2"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" send information to other users"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("3"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" send selection location information"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("999"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" user disconnected\n     "),
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
                      t._v(" username\n"),
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
      s.default = n.exports;
    },
  },
]);
