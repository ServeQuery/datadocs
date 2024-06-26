(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    318: function (t, s, a) {
      "use strict";
      a.r(s);
      var r = a(10),
        n = Object(r.a)(
          {},
          function () {
            var t = this,
              s = t._self._c;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s("h1", { attrs: { id: "table-data" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#table-data" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Table Data"),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "get-table-data" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#get-table-data" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Get table data"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Configuration")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("Configure the address of "),
                      s("code", [t._v("updateUrl")]),
                      t._v(
                        ", DataDocs will request the table data through ajax. By default, all "
                      ),
                      s("code", [t._v("data")]),
                      t._v(
                        " in the sheet data with status 1 is loaded, and the rest of the sheet loads all fields except the "
                      ),
                      s("code", [t._v("data")]),
                      t._v(" field."),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [
                      s("strong", [t._v("Format")]),
                      t._v("：\nThrough the global method "),
                      s("code", [t._v("datadocs.getluckysheetfile()")]),
                      t._v(
                        ", the configuration information of all worksheets can be obtained."
                      ),
                    ]),
                    t._v(" "),
                    s("p", [t._v("The luckysheetfile example is as follows:")]),
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
                          t._v("\n        "),
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
                            [t._v('"Cell"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Worksheet name")]
                          ),
                          t._v("\n        "),
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Worksheet color")]
                          ),
                          t._v("\n        "),
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
                            [t._v('"0"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Worksheet index")]
                          ),
                          t._v("\n        "),
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
                            [t._v('"1"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Activation status")]
                          ),
                          t._v("\n        "),
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
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"0"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//The order of the worksheet")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"hide"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//whether to hide")]
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
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("36")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//number of rows")]
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
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("18")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Number of columns")]
                          ),
                          t._v("\n        "),
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
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"merge"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//merged cells")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rowlen"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Table row height")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"columnlen"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Table column width")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rowhidden"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//hidden rows")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"colhidden"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//hidden columns")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"borderInfo"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//borders")]
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//initialize the cell data")]
                          ),
                          t._v("\n        "),
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Update and store the cell data ")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"scrollLeft"')]
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Left and right scroll bar position")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"scrollTop"')]
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
                            [t._v("315")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Up and down scroll bar position")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"luckysheet_select_save"')]
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//selected area")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"luckysheet_conditionformat_save"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Conditional format")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"calcChain"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Formula chain")]
                          ),
                          t._v("\n        "),
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Whether to pivot table")]
                          ),
                          t._v("\n        "),
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Pivot table configuration")]
                          ),
                          t._v("\n        "),
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
                            { pre: !0, attrs: { class: "token null keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Filter range")]
                          ),
                          t._v("\n        "),
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
                            { pre: !0, attrs: { class: "token null keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Filter configuration")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"luckysheet_alternateformat_save"')]
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Alternate colors")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [
                              t._v(
                                '"luckysheet_alternateformat_save_modelCustom"'
                              ),
                            ]
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Customize alternate colors")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"chart"')]
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//Chart configuration")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"visibledatarow"')]
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//The position of all rows")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"visibledatacolumn"')]
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//The position of all columns")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"ch_width"')]
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
                            [t._v("2322")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//The width of the worksheet area")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rh_height"')]
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
                            [t._v("949")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//The height of the worksheet area")]
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
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
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
                            [t._v('"Sheet2"')]
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
                          t._v("\n        "),
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
                          t._v("\n        "),
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
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"1"')]
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
                          t._v("\n        "),
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
                          t._v("\n        "),
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
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
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
                            [t._v('"Sheet3"')]
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
                          t._v("\n        "),
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
                          t._v("\n        "),
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
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"2"')]
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
                          t._v("\n        "),
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
                          t._v("\n        "),
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
                            [t._v("2")]
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
                            [t._v("]")]
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
                    s("h2", { attrs: { id: "name" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#name" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" name"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：String")]),
                      t._v(" "),
                      s("li", [t._v('Default："Sheet1"')]),
                      t._v(" "),
                      s("li", [t._v("Usage：Worksheet name")]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "color" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#color" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" color"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：String")]),
                      t._v(" "),
                      s("li", [t._v('Default："##f20e0e"')]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage：Worksheet color, there will be a bottom border under the worksheet name"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "index" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#index" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" index"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：0")]),
                      t._v(" "),
                      s("li", [
                        t._v("Usage：Worksheet index, starting from 0"),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "status" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#status" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" status"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：1")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage：Active state, there is only one active worksheet which number will be 1 and the other worksheets are 0"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "order" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#order" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" order"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：0")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage： The index of the worksheets is starting from 0. it will increase when a worksheet is added."
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "hide" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#hide" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" hide"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：0")]),
                      t._v(" "),
                      s("li", [
                        t._v("Usage： Whether to hide, "),
                        s("code", [t._v("0")]),
                        t._v(" means not to hide, "),
                        s("code", [t._v("1")]),
                        t._v(" means to hide"),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "row" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#row" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" row"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：36")]),
                      t._v(" "),
                      s("li", [t._v("Usage： The number of cell rows")]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "column" } }, [
                      s(
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
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：18")]),
                      t._v(" "),
                      s("li", [t._v("Usage： The number of cell columns")]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "scrollleft" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#scrollleft" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" scrollLeft"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：0")]),
                      t._v(" "),
                      s("li", [
                        t._v("Usage： Left and right scroll bar position"),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "scrolltop" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#scrolltop" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" scrollTop"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：0")]),
                      t._v(" "),
                      s("li", [
                        t._v("Usage： Up and down scroll bar position"),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "config" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#config" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" config"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type: Object")]),
                      t._v(" "),
                      s("li", [t._v("Default: {}")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage: Table row height, column width, merged cells, borders, hidden rows and other settings"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("h3", { attrs: { id: "config-merge" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#config-merge" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" config.merge"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Object")]),
                      t._v(" "),
                      s("li", [t._v("Default：{}")]),
                      t._v(" "),
                      s("li", [t._v("Usage：Merge cell settings")]),
                      t._v(" "),
                      s("li", [
                        t._v("example:"),
                        s("div", { staticClass: "language-js extra-class" }, [
                          s(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
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
                                t._v("\n        "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"13_5"')]
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
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("13")]
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
                                      class: "token string-property property",
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"13_7"')]
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
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("13")]
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
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"14_2"')]
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
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("14")]
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
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
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
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("The "),
                      s("code", [t._v("key")]),
                      t._v(" in the object is the spliced value of "),
                      s("code", [t._v("r +'_' + c")]),
                      t._v(", and the "),
                      s("code", [t._v("value")]),
                      t._v(
                        " is the cell information in the upper left corner: r: number of rows, c: number of columns, rs: number of merged rows, cs: merge Number of columns"
                      ),
                    ]),
                    t._v(" "),
                    s("h3", { attrs: { id: "config-rowlen" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#config-rowlen" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" config.rowlen"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Object")]),
                      t._v(" "),
                      s("li", [t._v("Default：{}")]),
                      t._v(" "),
                      s("li", [t._v("Usage：The row height of each cell")]),
                      t._v(" "),
                      s("li", [
                        t._v("example:"),
                        s("div", { staticClass: "language-js extra-class" }, [
                          s(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              s("code", [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"1"')]
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("20")]
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
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    s("h3", { attrs: { id: "config-columnlen" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#config-columnlen" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" config.columnlen"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Object")]),
                      t._v(" "),
                      s("li", [t._v("Default：{}")]),
                      t._v(" "),
                      s("li", [t._v("Usage：The column width of each cell")]),
                      t._v(" "),
                      s("li", [
                        t._v("example:"),
                        s("div", { staticClass: "language-js extra-class" }, [
                          s(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              s("code", [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"columnlen"')]
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
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("97")]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"1"')]
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
                                  [t._v("115")]
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
                                      class: "token string-property property",
                                    },
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("128")]
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
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    s("h3", { attrs: { id: "config-rowhidden" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#config-rowhidden" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" config.rowhidden"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [s("p", [t._v("Type：Object")])]),
                      t._v(" "),
                      s("li", [s("p", [t._v("Default：{}")])]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("Usage：Hidden row information, Rows："),
                          s("code", [t._v("rowhidden[Rows]: 0")]),
                          t._v(","),
                        ]),
                        t._v(" "),
                        s("p", [
                          t._v("you should specify the number of rows by "),
                          s("code", [t._v("key")]),
                          t._v(","),
                          s("code", [t._v("value")]),
                          t._v(" is always "),
                          s("code", [t._v("0")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("example:")]),
                        t._v(" "),
                        s("div", { staticClass: "language-js extra-class" }, [
                          s(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              s("code", [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"30"')]
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"31"')]
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
                                t._v("\n        "),
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
                      ]),
                    ]),
                    t._v(" "),
                    s("h3", { attrs: { id: "config-colhidden" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#config-colhidden" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" config.colhidden"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [s("p", [t._v("Type：Object")])]),
                      t._v(" "),
                      s("li", [s("p", [t._v("Default：{}")])]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("Usage：Hidden column information, Columns："),
                          s("code", [t._v("colhidden[Columns]: 0")]),
                          t._v(","),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("key")]),
                          t._v(" specify the number of columns,"),
                          s("code", [t._v("value")]),
                          t._v(" is always "),
                          s("code", [t._v("0")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("example:")]),
                        t._v(" "),
                        s("div", { staticClass: "language-js extra-class" }, [
                          s(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              s("code", [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"colhidden"')]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"30"')]
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
                                t._v("\n            "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"31"')]
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
                                t._v("\n        "),
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
                      ]),
                    ]),
                    t._v(" "),
                    s("h3", { attrs: { id: "config-borderinfo" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#config-borderinfo" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" config.borderInfo"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Array")]),
                      t._v(" "),
                      s("li", [t._v("Default：{}")]),
                      t._v(" "),
                      s("li", [
                        t._v("Usage：The border information of the cell"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("example:"),
                        s("div", { staticClass: "language-js extra-class" }, [
                          s(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              s("code", [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"borderInfo"')]
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
                                  [t._v("{")]
                                ),
                                t._v("\n                "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"rangeType"')]
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
                                  [t._v('"cell"')]
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
                                      class: "token string-property property",
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"row_index"')]
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
                                t._v("\n                    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"col_index"')]
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
                                t._v("\n                    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"l"')]
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
                                t._v("\n                        "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"style"')]
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
                                t._v("\n                        "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"color"')]
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
                                  [t._v('"rgb(255, 0, 0)"')]
                                ),
                                t._v("\n                    "),
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
                                t._v("\n                    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n                        "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"style"')]
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
                                t._v("\n                        "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"color"')]
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
                                  [t._v('"rgb(255, 0, 0)"')]
                                ),
                                t._v("\n                    "),
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
                                t._v("\n                    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n                        "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"style"')]
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
                                t._v("\n                        "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"color"')]
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
                                  [t._v('"rgb(255, 0, 0)"')]
                                ),
                                t._v("\n                    "),
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
                                t._v("\n                    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"b"')]
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
                                t._v("\n                        "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"style"')]
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
                                t._v("\n                        "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"color"')]
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
                                  [t._v('"rgb(255, 0, 0)"')]
                                ),
                                t._v("\n                    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"rangeType"')]
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
                                  [t._v('"range"')]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"borderType"')]
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
                                  [t._v('"border-all"')]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"style"')]
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
                                  [t._v('"3"')]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"color"')]
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
                                  [t._v('"#0000ff"')]
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
                                      class: "token string-property property",
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
                                  [t._v("[")]
                                ),
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
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("8")]
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
                                t._v("\n                    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("3")]
                                ),
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"rangeType"')]
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
                                  [t._v('"range"')]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"borderType"')]
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
                                  [t._v('"border-inside"')]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"style"')]
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
                                  [t._v('"3"')]
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
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"color"')]
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
                                  [t._v('"#0000ff"')]
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
                                      class: "token string-property property",
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
                                  [t._v("[")]
                                ),
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
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("8")]
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
                                t._v("\n                    "),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("9")]
                                ),
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
                                  [t._v("]")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "The range type can be divided into single cell and selected area"
                      ),
                    ]),
                    t._v(" "),
                    s("ol", [
                      s("li", [
                        s("p", [
                          t._v("selection "),
                          s("code", [t._v('rangeType: "range"')]),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("Border type "),
                            s("code", [
                              t._v(
                                'borderType："border-left" | "border-right" | "border-top" | "border-bottom" | "border-all" | "border-outside" | "border-inside" | "border-horizontal" | "border-vertical" | "border-none"'
                              ),
                            ]),
                            t._v(","),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Border thickness "),
                            s("code", [
                              t._v(
                                "style: 1 Thin | 2 Hair | 3 Dotted | 4 Dashed | 5 DashDot | 6 DashDotDot | 7 Double | 8 Medium | 9 MediumDashed | 10 MediumDashDot | 11 MediumDashDotDot | 12 SlantedDashDot | 13 Thick"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Border color "),
                            s("code", [t._v("color: Hexadecimal color value")]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Selection area "),
                            s("code", [
                              t._v("range: Row and column information array"),
                            ]),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("Single cell "),
                          s("code", [t._v('rangeType："cell"')]),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("Number of rows and columns "),
                            s("code", [
                              t._v(
                                "value.row_index: number,value.col_index: number"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Four border objects "),
                            s("code", [
                              t._v(
                                "value.l:Left border,value.r:Right border,value.t:Top border,value.b:Bottom border"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Border thickness "),
                            s("code", [
                              t._v(
                                "value.l.style: 1 Thin | 2 Hair | 3 Dotted | 4 Dashed | 5 DashDot | 6 DashDotDot | 7 Double | 8 Medium | 9 MediumDashed | 10 MediumDashDot | 11 MediumDashDotDot | 12 SlantedDashDot | 13 Thick"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("Border color "),
                            s("code", [
                              t._v("value.l.color: Hexadecimal color value"),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("示例\n"),
                        s("ul", [
                          s("li", [
                            s(
                              "div",
                              { staticClass: "language-js extra-class" },
                              [
                                s(
                                  "pre",
                                  { pre: !0, attrs: { class: "language-js" } },
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
                                          attrs: {
                                            class:
                                              "token string-property property",
                                          },
                                        },
                                        [t._v('"rangeType"')]
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
                                        [t._v('"range"')]
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
                                        [t._v('"borderType"')]
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
                                        [t._v('"border-all"')]
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
                                        [t._v('"style"')]
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
                                        [t._v('"3"')]
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
                                        [t._v('"color"')]
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
                                        [t._v('"#0000ff"')]
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
                                        [t._v("[")]
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
                                        [t._v("]")]
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
                                "Represents a selection with a setting range of "
                              ),
                              s("code", [
                                t._v('{"row": [7, 8], "column": [2, 3]}'),
                              ]),
                              t._v(
                                ", the type is all borders, the border thickness is "
                              ),
                              s("code", [t._v("Dotted")]),
                              t._v(", and the color is "),
                              s("code", [t._v('"#0000ff"')]),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            s(
                              "div",
                              { staticClass: "language-js extra-class" },
                              [
                                s(
                                  "pre",
                                  { pre: !0, attrs: { class: "language-js" } },
                                  [
                                    s("code", [
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
                                        [t._v('"rangeType"')]
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
                                        [t._v('"cell"')]
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
                                        [t._v('"row_index"')]
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
                                        [t._v('"col_index"')]
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
                                        [t._v('"l"')]
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
                                        [t._v('"style"')]
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
                                        [t._v('"color"')]
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
                                        [t._v('"rgb(255, 0, 0)"')]
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
                                        [t._v('"style"')]
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
                                        [t._v('"color"')]
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
                                        [t._v('"rgb(255, 0, 0)"')]
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
                                        [t._v('"style"')]
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
                                        [t._v('"color"')]
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
                                        [t._v('"rgb(255, 0, 0)"')]
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
                                        [t._v('"b"')]
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
                                        [t._v('"style"')]
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
                                        [t._v('"color"')]
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
                                        [t._v('"rgb(255, 0, 0)"')]
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
                                      t._v("\n        "),
                                      s(
                                        "span",
                                        {
                                          pre: !0,
                                          attrs: { class: "token punctuation" },
                                        },
                                        [t._v("}")]
                                      ),
                                      t._v("\n "),
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
                              t._v("Means to set the cell "),
                              s("code", [t._v('"D4"')]),
                              t._v(
                                ", the upper border/lower border/left border/right border are all border thicknesses "
                              ),
                              s("code", [t._v('"MediumDashDot"')]),
                              t._v(", color is "),
                              s("code", [t._v('"rgb(255, 0, 0)"')]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "celldata" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#celldata" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" celldata"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Array")]),
                      t._v(" "),
                      s("li", [t._v("Default：[]")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage： The original cell data set is a set containing "
                        ),
                        s("code", [
                          t._v(
                            '{r:0,c:0,v:{m:"value",v:"value",ct: {fa: "General", t: "g"}} }'
                          ),
                        ]),
                        t._v(
                          "The one-dimensional array of format cell information is only used during initialization. After the table is initialized with celldata, the data is converted to the same level field data in the luckysheetfile, such as "
                        ),
                        s("code", [t._v("luckysheetfile[0].data")]),
                        t._v(
                          ", the subsequent operation of the table Data update will be updated to this data field, and celldata is no longer used. Example:"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("ct")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("fa")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("t")]
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
                            [t._v('"g"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("m")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"value1"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"value1"')]
                          ),
                          t._v("\n\t"),
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("ct")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("fa")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("t")]
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
                            [t._v('"g"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("m")]
                          ),
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
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"value2"')]
                          ),
                          t._v("\n\t"),
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "datadocs-select-save" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#datadocs-select-save" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" luckysheet_select_save"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Array")]),
                      t._v(" "),
                      s("li", [t._v("Default：[]")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage： The selected area supports multiple selections and is a one-dimensional array containing multiple selection objects. Example:"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("97")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"left_move"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"width_move"')]
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
                            [t._v("97")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"top_move"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"height_move"')]
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
                            [t._v("41")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
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
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("98")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("73")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("63")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"left_move"')]
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
                            [t._v("98")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"width_move"')]
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
                            [t._v("189")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"top_move"')]
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
                            [t._v("63")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"height_move"')]
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
                            [t._v("41")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("3")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("288")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("128")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("21")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"left_move"')]
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
                            [t._v("288")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"width_move"')]
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
                            [t._v("128")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"top_move"')]
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
                            [t._v("21")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"height_move"')]
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
                            [t._v("62")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("3")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("3")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("3")]
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
                            [t._v("]")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    s("hr"),
                    t._v(" "),
                    s(
                      "h2",
                      { attrs: { id: "datadocs-conditionformat-save" } },
                      [
                        s(
                          "a",
                          {
                            staticClass: "header-anchor",
                            attrs: { href: "#datadocs-conditionformat-save" },
                          },
                          [t._v("#")]
                        ),
                        t._v(" luckysheet_conditionformat_save"),
                      ]
                    ),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Array")]),
                      t._v(" "),
                      s("li", [t._v("Default：[]")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage： Conditional format configuration information, a one-dimensional array containing multiple conditional format configuration objects,"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        'type: "default": Highlight cell rules and project selection rules,'
                      ),
                    ]),
                    t._v(" "),
                    s("p", [t._v('"dataBar": Data bar,')]),
                    t._v(" "),
                    s("p", [t._v('"icons": Icon set,')]),
                    t._v(" "),
                    s("p", [t._v('"colorGradation": Color scale')]),
                    t._v(" "),
                    s("p", [t._v("Example:")]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v('"default"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"cellrange"')]
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
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("2")]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("2")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"format"')]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"textColor"')]
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
                            [t._v('"#000000"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"cellColor"')]
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
                            [t._v('"#ff0000"')]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"conditionName"')]
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
                            [t._v('"betweenness"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"conditionRange"')]
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
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("2")]
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
                          t._v("\n            "),
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
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("6")]
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
                            [t._v("6")]
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
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("2")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"conditionValue"')]
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
                            [t._v("2")]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v('"dataBar"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"cellrange"')]
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
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("10")]
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
                            [t._v("15")]
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
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("10")]
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
                            [t._v("11")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"format"')]
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
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"#6aa84f"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"#ffffff"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v('"icons"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"cellrange"')]
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
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("19")]
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
                            [t._v("23")]
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
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("2")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"format"')]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"3"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"leftMin"')]
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
                          t._v("\n            "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"0"')]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
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
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v('"colorGradation"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"cellrange"')]
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
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("422")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("100")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("210")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("20")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"left_move"')]
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
                            [t._v("422")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"width_move"')]
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
                            [t._v("100")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"top_move"')]
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
                            [t._v("210")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"height_move"')]
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
                            [t._v("125")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("10")]
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
                            [t._v("15")]
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
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("6")]
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
                            [t._v("6")]
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
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("10")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n                "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("6")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"format"')]
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
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"rgb(99, 190, 123)"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"rgb(255, 235, 132)"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"rgb(248, 105, 107)"')]
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
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "calcchain" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#calcchain" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" calcChain"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Array")]),
                      t._v(" "),
                      s("li", [t._v("Default：[]")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage：Formula chain, used when the cell linked by the formula is changed, all formulas referencing this cell will be refreshed, example:"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("6")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("3")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("23.75")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"=AVERAGE(D3:D6)"')]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v('"w"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"parent"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"chidren"')]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"times"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("7")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("3")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("30")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"=MAX(D3:D6)"')]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v('"w"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"parent"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("null")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"chidren"')]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"times"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "ispivottable" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#ispivottable" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" isPivotTable"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Boolean")]),
                      t._v(" "),
                      s("li", [t._v("Default：false")]),
                      t._v(" "),
                      s("li", [t._v("Usage： Whether PivotTable")]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "pivottable" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#pivottable" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" pivotTable"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Object")]),
                      t._v(" "),
                      s("li", [t._v("Default：{}")]),
                      t._v(" "),
                      s("li", [t._v("Usage： Pivot table settings, example:")]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"pivot_select_save"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("73")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("19")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"left_move"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"width_move"')]
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
                            [t._v("369")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"top_move"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"height_move"')]
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
                            [t._v("259")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("12")]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
                          ),
                          t._v("\n\t"),
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"pivotDataSheetIndex"')]
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
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "//The sheet index where the source data is located"
                              ),
                            ]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v('"subject"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fullname"')]
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
                            [t._v('"subject"')]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v('"student"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fullname"')]
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
                            [t._v('"student"')]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"values"')]
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
                            [t._v("{")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("4")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v('"score"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fullname"')]
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
                            [t._v('"count:score"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"sumtype"')]
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
                            [t._v('"COUNTA"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"nameindex"')]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"showType"')]
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
                            [t._v('"column"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"pivotDatas"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"count:score"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"science"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"mathematics"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"foreign language"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"English"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"total"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Alex"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Joy"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"Tim"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"total"')]
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
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("12")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n\t"),
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"drawPivotTable"')]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"pivotTableBoundary"')]
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
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("5")]
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
                            [t._v("6")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
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
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "filter-select" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#filter-select" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" filter_select"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Object")]),
                      t._v(" "),
                      s("li", [t._v("Default：{}")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage：Filter range, a selection area, a sheet has only one filter range, similar to the "
                        ),
                        s("code", [t._v("luckysheet_select_save")]),
                        t._v(" example:"),
                      ]),
                    ]),
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
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("74")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("73")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("40")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("19")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"left_move"')]
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
                            [t._v("74")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"width_move"')]
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
                            [t._v("221")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"top_move"')]
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
                            [t._v("40")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"height_move"')]
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
                            [t._v("99")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n        "),
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
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("6")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          t._v("\n        "),
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
                          t._v("\n        "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("3")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("2")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "filter" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#filter" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" filter"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Object")]),
                      t._v(" "),
                      s("li", [t._v("Default：{}")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage： Specific settings for filtering, examples:"
                        ),
                      ]),
                    ]),
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
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"caljs"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"rowhidden"')]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"optionstate"')]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"str"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"edr"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"cindex"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"stc"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"edc"')]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"caljs"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"rowhidden"')]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("0")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"optionstate"')]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"str"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"edr"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"cindex"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"stc"')]
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
                          t._v("\n        "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"edc"')]
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
                    s("hr"),
                    t._v(" "),
                    s(
                      "h2",
                      { attrs: { id: "datadocs-alternateformat-save" } },
                      [
                        s(
                          "a",
                          {
                            staticClass: "header-anchor",
                            attrs: { href: "#datadocs-alternateformat-save" },
                          },
                          [t._v("#")]
                        ),
                        t._v(" luckysheet_alternateformat_save"),
                      ]
                    ),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Array")]),
                      t._v(" "),
                      s("li", [t._v("Default：[]")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage： Alternating color configuration, example:"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"cellrange"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("6")]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("5")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n\t"),
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"format"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"head"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#5ed593"')]
                          ),
                          t._v("\n\t\t"),
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"one"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#ffffff"')]
                          ),
                          t._v("\n\t\t"),
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"two"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#e5fbee"')]
                          ),
                          t._v("\n\t\t"),
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"foot"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#a5efcc"')]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\t"),
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"hasRowHeader"')]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"hasRowFooter"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"cellrange"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                            [t._v("6")]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("8")]
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
                            [t._v("12")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n\t"),
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"format"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"head"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#5599fc"')]
                          ),
                          t._v("\n\t\t"),
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"one"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#ffffff"')]
                          ),
                          t._v("\n\t\t"),
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"two"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#ecf2fe"')]
                          ),
                          t._v("\n\t\t"),
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"foot"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#afcbfa"')]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\t"),
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"hasRowHeader"')]
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"hasRowFooter"')]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    s("hr"),
                    t._v(" "),
                    s(
                      "h2",
                      {
                        attrs: {
                          id: "datadocs-alternateformat-save-modelcustom",
                        },
                      },
                      [
                        s(
                          "a",
                          {
                            staticClass: "header-anchor",
                            attrs: {
                              href: "#datadocs-alternateformat-save-modelcustom",
                            },
                          },
                          [t._v("#")]
                        ),
                        t._v(" luckysheet_alternateformat_save_modelCustom"),
                      ]
                    ),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Array")]),
                      t._v(" "),
                      s("li", [t._v("Default：[]")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage：Custom alternate colors, including multiple custom alternate colors configuration, example:"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"head"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                            [t._v('"#6aa84f"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#ffffff"')]
                          ),
                          t._v("\n\t"),
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"one"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#ffffff"')]
                          ),
                          t._v("\n\t"),
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"two"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#e5fbee"')]
                          ),
                          t._v("\n\t"),
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
                          t._v("\n\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"foot"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"fc"')]
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
                          t._v("\n\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token string-property property",
                              },
                            },
                            [t._v('"bc"')]
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
                            [t._v('"#a5efcc"')]
                          ),
                          t._v("\n\t"),
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "chart" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#chart" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" chart"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Array")]),
                      t._v(" "),
                      s("li", [t._v("Default：[]")]),
                      t._v(" "),
                      s("li", [
                        t._v("Usage： Chart configuration (under development)"),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "visibledatarow" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#visibledatarow" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" visibledatarow"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：[]")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage： Position information of all rows, incremental row position data, No need to set up for initialization"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "visibledatacolumn" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#visibledatacolumn" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" visibledatacolumn"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：[]")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage： Position information of all columns, incremental column position data, No need to set up for initialization"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "ch-width" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#ch-width" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" ch_width"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：2322")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage：The width of the entire worksheet area (the gray area including the border), No need to set up for initialization"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                    t._v(" "),
                    s("h2", { attrs: { id: "rh-height" } }, [
                      s(
                        "a",
                        {
                          staticClass: "header-anchor",
                          attrs: { href: "#rh-height" },
                        },
                        [t._v("#")]
                      ),
                      t._v(" rh_height"),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("Type：Number")]),
                      t._v(" "),
                      s("li", [t._v("Default：2322")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "Usage：The height of the entire worksheet area (the gray area containing the border), No need to set up for initialization"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("hr"),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "get-sheet-data" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#get-sheet-data" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Get sheet data"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Configuration")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("Configure the address of "),
                      s("code", [t._v("loadSheetUrl")]),
                      t._v(", the parameters are "),
                      s("code", [t._v("gridKey")]),
                      t._v(" (table primary key) and "),
                      s("code", [t._v("index")]),
                      t._v(" (sheet primary key collection, format is "),
                      s("code", [t._v("[1,2,3]")]),
                      t._v("), the returned data is the "),
                      s("code", [t._v("data")]),
                      t._v(" field set of sheet"),
                    ]),
                  ]),
                  t._v(" "),
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
                            [t._v('"1"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"value 1"')]
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
                            [t._v('"value 2"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
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
                          t._v("\n    "),
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
                          t._v("  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("data"),
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
                            [t._v('"3"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("data"),
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
                    s("p", [
                      s("code", [t._v("r")]),
                      t._v(" stands for row, "),
                      s("code", [t._v("c")]),
                      t._v(" stands for column, and "),
                      s("code", [t._v("v")]),
                      t._v(
                        " stands for the value of the cell. The value can be a character, number, or json string."
                      ),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "The data will only be loaded once, generally speaking, there is only one primary key, but considering that some formulas, charts and pivot tables will refer to the data of other sheets, the front desk will add a judgment, if the current sheet refers to the data of other sheets, then complete the data of the referenced sheet together."
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "update-data" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#update-data" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Update data"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("Configuration")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("Configure the address of "),
                      s("code", [t._v("updateUrl")]),
                      t._v(
                        ", and the parameter sent to the backend is a json string."
                      ),
                    ]),
                  ]),
                  t._v(" "),
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
                          t._v("\n    compress"),
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
                          t._v(" \n    gridKey"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("10004")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    data"),
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
                          t._v("update data"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
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
                          t._v(" "),
                          s("th", [t._v("Example")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("tbody", [
                        s("tr", [
                          s("td", [t._v("compress")]),
                          t._v(" "),
                          s("td", [
                            t._v(
                              "DataDocs uses client pako for zlib parameter compression, which is true if the browser supports compression, otherwise false. The backend can decide whether to decompress the data content based on this parameter"
                            ),
                          ]),
                          t._v(" "),
                          s("td", [
                            t._v(
                              "The process of obtaining parameters on the server side: 1. Serialize json string 2. Decode the data field if the compress field is TRUE 3. Decode the data string URLDecoder.decode(utf-8)"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("gridKey")]),
                          t._v(" "),
                          s("td", [t._v("DataDocs file identifier")]),
                          t._v(" "),
                          s("td", [t._v("none")]),
                        ]),
                        t._v(" "),
                        s("tr", [
                          s("td", [t._v("data")]),
                          t._v(" "),
                          s("td", [
                            t._v(
                              "An array containing updated data. For the parameter format in the array, please see the introduction below. In the example: "
                            ),
                            s("code", [t._v("t")]),
                            t._v(" indicates the update type, "),
                            s("code", [t._v("i")]),
                            t._v(" is the index of the sheet, "),
                            s("code", [t._v("c")]),
                            t._v(" is the row number, "),
                            s("code", [t._v("r")]),
                            t._v(" is the column number, and "),
                            s("code", [t._v("v")]),
                            t._v(" is the value"),
                          ]),
                          t._v(" "),
                          s("td", [
                            s("code", [
                              t._v(
                                "data: [{ t : 'cell', i:0, c : 0, r : 0 , v: 2 }]"
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
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
