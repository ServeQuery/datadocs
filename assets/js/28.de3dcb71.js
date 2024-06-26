(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    314: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(10),
        n = Object(a.a)(
          {},
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                e("h1", { attrs: { id: "api" } }, [
                  e(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#api" } },
                    [t._v("#")]
                  ),
                  t._v(" API"),
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "DataDocs has opened up the main function API for common data operation requirements, and developers can do any docking development according to their needs."
                  ),
                ]),
                t._v(" "),
                e("p", [t._v("Use note:")]),
                t._v(" "),
                e("ol", [
                  e("li", [
                    t._v(
                      "When script is introduced globally, all APIs are mounted under the window.datadocs object, which can be printed and seen in the browser console; when npm is introduced, all APIs are also mounted under the datadocs object"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("The first parameter of the "),
                    e("code", [t._v("success")]),
                    t._v(
                      " callback function is the return value of the API method"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("If you need a new API, please submit it to github "),
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/issues/new/choose",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("Issues"), e("OutboundLink")],
                      1
                    ),
                    t._v(
                      ", and decide whether to open the new API according to the number of likes"
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    t._v("The required "),
                    e("code", [t._v("order")]),
                    t._v(" parameter in the API method is the value of "),
                    e("code", [t._v("order")]),
                    t._v(" in the worksheet object, not "),
                    e("code", [t._v("index")]),
                  ]),
                ]),
                t._v(" "),
                e("h2", { attrs: { id: "cell-operation" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cell-operation" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Cell operation"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "getcellvalue-row-column-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getcellvalue-row-column-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getCellValue(row, column [,setting])"),
                  e("div", { attrs: { id: "getCellValue" } }),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [row]: The row number of the cell; an integer starting from 0, 0 means the first row"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [column]: The number of the column where the cell is located; an integer starting from 0, 0 means the first column"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{String} [type]: The value type of the cell, which can be set to the original value "
                            ),
                            e("code", [t._v("v")]),
                            t._v(" or the display value "),
                            e("code", [t._v("m")]),
                            t._v("; the default value is "),
                            e("code", [t._v("v")]),
                            t._v(
                              ", which means to get the actual value of the cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Get the value of the cell.")]),
                    t._v(" "),
                    e("p", [
                      t._v("In special cases, the cell format is "),
                      e("code", [t._v("yyyy-MM-dd")]),
                      t._v(", when "),
                      e("code", [t._v("type")]),
                      t._v(" is "),
                      e("code", [t._v("'v'")]),
                      t._v(", the display value of "),
                      e("code", [t._v("'m'")]),
                      t._v(" will be forced"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "Returns the v value of the data in the first row and first column of the current worksheet"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.getCellValue(0, 0)")]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "Returns the original value of the cell in the second row and second column of the specified data."
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v('datadocs.getCellValue(1, 1, {type:"m"})'),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "setcellvalue-row-column-value-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#setcellvalue-row-column-value-setting",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setCellValue(row, column, value [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [row]: The row number of the cell; an integer starting from 0, 0 means the first row"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [column]: The number of the column where the cell is located; an integer starting from 0, 0 means the first column"
                        ),
                      ]),
                      t._v(" "),
                      e(
                        "li",
                        [
                          t._v(
                            "{Object| String| Number} [value]: The value to be set; it can be a string or a number, or an object conforming to the DataDocs cell format, refer to "
                          ),
                          e(
                            "RouterLink",
                            { attrs: { to: "/guide/cell.html" } },
                            [t._v("cell attribute table")]
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: Optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Boolean} [isRefresh]: Whether to refresh the interface; the default is "
                            ),
                            e("code", [t._v("true")]),
                            t._v(
                              "; used to control throttling when multiple cells are assigned, the previous cell should be set to "
                            ),
                            e("code", [t._v("false")]),
                            t._v(", and the last cell is set Is "),
                            e("code", [t._v("true")]),
                            t._v("."),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: The callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v(":")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Set the value of a cell, you can also set the entire cell object, which is used to set multiple cell properties at the same time."
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "If you need to update the formula, you can also assign a value here. DataDocs will actively calculate this formula internally and add it to the formula chain, and finally refresh the interface."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            'Set the value of cell "A1" in the current worksheet to "1"\n'
                          ),
                          e("code", [t._v("datadocs.setCellValue(0, 0, 1);")]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            'Set the current worksheet "B1" cell value to the formula "=sum(A1)"\n'
                          ),
                          e("code", [
                            t._v('datadocs.setCellValue(0, 1, "=sum(A1)");'),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            'Set the cell "C1" of the current worksheet to the formula "=sum(A1:B1" with a red background. The cell object can have no '
                          ),
                          e("code", [t._v("v")]),
                          t._v(" and "),
                          e("code", [t._v("m")]),
                          t._v(
                            " values. DataDocs will automatically calculate the result according to the formula information. With "
                          ),
                          e("code", [t._v("v")]),
                          t._v(" and "),
                          e("code", [t._v("m")]),
                          t._v(
                            " values ​​that have not been updated or are non-formula results, DataDocs will still calculate the prepared results based on the data actually associated with the formula.\n"
                          ),
                          e("code", [
                            t._v(
                              'datadocs.setCellValue(0, 2, {f: "=sum(A1:B1)", bg:"#FF0000"})'
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            'Set the "C1" cell again and the new formula can still take effect\n'
                          ),
                          e("code", [
                            t._v(
                              'datadocs.setCellValue(0, 2, {f: "=sum(A1)", bg:"#00FF00"})'
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "clearcell-row-column-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#clearcell-row-column-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" clearCell(row, column [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [row]: The row number of the cell; an integer starting from 0, 0 means the first row"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [column]: The number of the column where the cell is located; an integer starting from 0, 0 means the first column"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Clear the contents of the specified cell of the specified worksheet, return the cleared data, which is different from the function of deleting the cell, no need to set the cell movement"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Clear the contents of cell "),
                        e("code", [t._v("B2")]),
                        t._v(" "),
                        e("code", [t._v("datadocs.clearCell(1,1)")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "deletecell-move-row-column-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#deletecell-move-row-column-setting" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" deleteCell(move, row, column [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{String} [move]: After deleting, whether the cells on the right or below move"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v("Possible values of "),
                      e("code", [t._v("move")]),
                      t._v(" are:"),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "language- extra-class" }, [
                      e("pre", [
                        e("code", [
                          t._v(
                            '+ `"left"`: Move the right cell to the left\n+ `"up"`: Move the lower cell up\n'
                          ),
                        ]),
                      ]),
                    ]),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [row]: The row number of the cell; an integer starting from 0, 0 means the first row"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [column]: The number of the column where the cell is located; an integer starting from 0, 0 means the first column"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Delete the specified cell of the specified worksheet, return the deleted data, and at the same time, specify whether to move the right cell to the left or the bottom cell to move up"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Delete the current cell and after deleting, the right cell moves to the left\n"
                        ),
                        e("code", [t._v("datadocs.deleteCell('left')")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  {
                    attrs: {
                      id: "setcellformat-row-column-attr-value-setting",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#setcellformat-row-column-attr-value-setting",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setCellFormat(row, column, attr, value [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Number} [row]: The row number of the cell; an integer starting from 0, 0 means the first row"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "{Number} [column]: The number of the column where the cell is located; an integer starting from 0, 0 means the first column"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e(
                          "p",
                          [
                            t._v(
                              "{String} [attr]: attribute type, refer to attribute value of "
                            ),
                            e(
                              "RouterLink",
                              { attrs: { to: "/guide/cell.html" } },
                              [t._v("cell attribute table")]
                            ),
                          ],
                          1
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        e(
                          "p",
                          [
                            t._v(
                              "{String | Number | Object} [value]: Specific setting value, one attribute will correspond to multiple values, refer to the value example of "
                            ),
                            e(
                              "RouterLink",
                              { attrs: { to: "/guide/cell.html" } },
                              [t._v("cell attribute table")]
                            ),
                            t._v(", if the attribute type is "),
                            e("code", [t._v("Attr")]),
                            t._v(" is the cell format "),
                            e("code", [t._v("ct")]),
                            t._v(", then the setting value "),
                            e("code", [t._v("value")]),
                            t._v(" should provide a ct object, such as: "),
                            e("code", [t._v('{fa:"General", t:"g"}')]),
                            t._v(
                              ", for example, set the format of cell A1 to percentage format:"
                            ),
                          ],
                          1
                        ),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v(
                              'datadocs.setCellFormat(0, 0, "ct", {fa:"0.00%", t:"n"})'
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Set the properties of a cell. If you want to set the value of a cell or set multiple cell properties at the same time, it is recommended to use "
                      ),
                      e("code", [t._v("setCellValue")]),
                    ]),
                    t._v(" "),
                    e("p", [t._v("Special settings")]),
                    t._v(" "),
                    e("p", [
                      t._v("When setting the border, attr is "),
                      e("code", [t._v('"bd"')]),
                      t._v(
                        ", value is a key/value object, and the border type: "
                      ),
                      e("code", [t._v("borderType")]),
                      t._v("/border thickness:"),
                      e("code", [t._v("style")]),
                      t._v("/border color:"),
                      e("code", [t._v("color")]),
                      t._v(
                        " need to be set at the same time, such as setting A1 unit The border of the grid is all/red/thin:"
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      e("code", [
                        t._v(
                          'datadocs.setCellFormat(0, 0, "bd", {borderType: "border-right",style: "1", color: "#ff0000"})'
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "The complete optional setting parameters are as follows:"
                      ),
                    ]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Border Type "),
                        e("code", [
                          t._v(
                            'borderType: "border-left" | "border-right" | "border-top" | "border-bottom" | "border-all" | "border-outside" | "border-inside" | "border -horizontal" | "border-vertical" | "border-none"'
                          ),
                        ]),
                        t._v(","),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("Border thickness "),
                        e("code", [
                          t._v(
                            "style: 1 Thin | 2 Hair | 3 Dotted | 4 Dashed | 5 DashDot | 6 DashDotDot | 7 Double | 8 Medium | 9 MediumDashed | 10 MediumDashDot | 11 MediumDashDotDot | 12 SlantedDashDot | 13 Thick"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("Border color "),
                        e("code", [t._v("color: hexadecimal color value")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Set the current worksheet A1 cell text bold\n"),
                        e("code", [
                          t._v('datadocs.setCellFormat(0, 0, "bl", 1)'),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "Set the B2 cell background of the second worksheet to red\n"
                        ),
                        e("code", [
                          t._v(
                            'datadocs.setCellFormat(1, 1, "bg", "#ff0000", {order:1})'
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          'Set the value of cell "A1" of the current worksheet to "abc"\n'
                        ),
                        e("code", [
                          t._v("datadocs.setCellFormat(0, 0,'v','abc');"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "find-content-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#find-content-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" find(content [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{String} [content]: the content to find"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Boolean} [isRegularExpression]: Whether to match the regular expression; the default is "
                            ),
                            e("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Boolean} [isWholeWord]: Whether to match the whole word; the default is "
                            ),
                            e("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Boolean} [isCaseSensitive]: Whether to match case sensitively; the default is "
                            ),
                            e("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{String} [type]: cell attribute; the default value is "
                            ),
                            e("code", [t._v('"m"')]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Find the specified content in a worksheet and return a one-bit array of cells composed of the found content, the data format is the same as "
                      ),
                      e("code", [t._v("celldata")]),
                      t._v("."),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Find the string "),
                        e("code", [t._v('"value"')]),
                        t._v(" in the current worksheet\n"),
                        e("code", [t._v('datadocs.find("value")')]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "Find cells in the current worksheet whose formula contains "
                        ),
                        e("code", [t._v('"SUM"')]),
                        t._v(" "),
                        e("code", [t._v('datadocs.find("SUM",{type:"f"})')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "replace-content-replacecontent-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#replace-content-replacecontent-setting",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" replace(content, replaceContent [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{String} [content]: the content to find"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{String} [replaceContent]: The content to be replaced"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Boolean} [isRegularExpression]: Whether to match the regular expression; the default is "
                            ),
                            e("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Boolean} [isWholeWord]: Whether to match the whole word; the default is "
                            ),
                            e("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Boolean} [isCaseSensitive]: Whether to match case sensitively; the default is "
                            ),
                            e("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Find the specified content in a worksheet and replace it with new content, and return a one-bit array of cells composed of the replaced content. The data format is the same as "
                      ),
                      e("code", [t._v("celldata")]),
                      t._v("."),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Find the string "),
                        e("code", [t._v('"value"')]),
                        t._v(" in the current worksheet and replace it with "),
                        e("code", [t._v('"out"')]),
                        t._v(" "),
                        e("code", [t._v('datadocs.replace("value", "out")')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "exiteditmode-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#exiteditmode-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" exitEditMode([,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Exit edit mode. After double-clicking the cell with the mouse, it will enter the cell editing mode. After the editing is completed, when the mouse clicks on the input box elsewhere to lose focus, the editing mode will be exited, and the value of the cell will be saved. This Api is the operation of automatically exiting the editing mode, mainly to trigger the automatic saving of cells."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Manually trigger to exit edit mode\n"),
                        e("code", [t._v("datadocs.exitEditMode()")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "row-and-column-operations" } }, [
                  e(
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
                e(
                  "h3",
                  { attrs: { id: "sethorizontalfrozen-isrange-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#sethorizontalfrozen-isrange-setting" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setHorizontalFrozen(isRange [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Boolean} [isRange]: Whether to freeze rows to selection\nPossible values of "
                          ),
                          e("code", [t._v("isRange")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"false"')]),
                            t._v(": Freeze the first line"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"true"')]),
                            t._v(": freeze line to selection"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: Set when "
                            ),
                            e("code", [t._v("isRange")]),
                            t._v(" is "),
                            e("code", [t._v("true")]),
                            t._v(
                              ", open the frozen cell position, the format is "
                            ),
                            e("code", [
                              t._v("{ row_focus:0, column_focus:0 }"),
                            ]),
                            t._v(
                              ", which means the currently activated cell The number of rows and columns of the grid; the default is obtained from the last selection of the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Freeze row operation")]),
                    t._v(" "),
                    e("p", [
                      t._v("Pay special attention to the setting of "),
                      e("code", [t._v("range")]),
                      t._v(" in "),
                      e("code", [t._v("setting")]),
                      t._v(" only when "),
                      e("code", [t._v("isRange")]),
                      t._v(" is set to "),
                      e("code", [t._v("true")]),
                      t._v(
                        ", which is different from the general range format."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Freeze the first row")]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.setHorizontalFrozen(false)"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Frozen to "),
                          e("code", [t._v("B5")]),
                          t._v(" selection"),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v(
                              "datadocs.setHorizontalFrozen(true, { range: 'B5' })"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "setverticalfrozen-isrange-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#setverticalfrozen-isrange-setting" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setVerticalFrozen(isRange [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Boolean} [isRange]: Whether to freeze the selection\nPossible values of "
                          ),
                          e("code", [t._v("isRange")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"false"')]),
                            t._v(": Freeze the first column"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"true"')]),
                            t._v(": Freeze column to selection"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: Set when "
                            ),
                            e("code", [t._v("isRange")]),
                            t._v(" is "),
                            e("code", [t._v("true")]),
                            t._v(
                              ", open the frozen cell position, the format is "
                            ),
                            e("code", [
                              t._v("{ row_focus:0, column_focus:0 }"),
                            ]),
                            t._v(
                              ", which means the currently activated cell The number of rows and columns of the grid; the default is obtained from the last selection of the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Freeze column operation")]),
                    t._v(" "),
                    e("p", [
                      t._v("Pay special attention to the setting of "),
                      e("code", [t._v("range")]),
                      t._v(" in "),
                      e("code", [t._v("setting")]),
                      t._v(" only when "),
                      e("code", [t._v("isRange")]),
                      t._v(" is set to "),
                      e("code", [t._v("true")]),
                      t._v(
                        ", which is different from the general range format."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Freeze the first column")]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.setVerticalFrozen(false)"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setbothfrozen-isrange-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setbothfrozen-isrange-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setBothFrozen(isRange [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Boolean} [isRange]: Whether to freeze the ranks to the selection\nPossible values of "
                          ),
                          e("code", [t._v("isRange")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"false"')]),
                            t._v(": Freeze ranks"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"true"')]),
                            t._v(": Freeze ranks to selection"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: Set when "
                            ),
                            e("code", [t._v("isRange")]),
                            t._v(" is "),
                            e("code", [t._v("true")]),
                            t._v(
                              ", open the frozen cell position, the format is "
                            ),
                            e("code", [
                              t._v("{ row_focus:0, column_focus:0 }"),
                            ]),
                            t._v(
                              ", which means the currently activated cell The number of rows and columns of the grid; the default is obtained from the last selection of the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Freeze rank operation")]),
                    t._v(" "),
                    e("p", [
                      t._v("Pay special attention to the setting of "),
                      e("code", [t._v("range")]),
                      t._v(" in "),
                      e("code", [t._v("setting")]),
                      t._v(" only when "),
                      e("code", [t._v("isRange")]),
                      t._v(" is set to "),
                      e("code", [t._v("true")]),
                      t._v(
                        ", which is different from the general range format."
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "If you want to use this API to set the freeze after the workbook is initialized, you can execute it in the hook function after the workbook is created, such as:"
                      ),
                    ]),
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
                            [t._v("create")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
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
                            [t._v("hook")]
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
                          t._v("\n\t\t"),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token function-variable function",
                              },
                            },
                            [t._v("workbookCreateAfter")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("function")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t\tluckysheet"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("setBothFrozen")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n\t\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
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
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n\n"),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Frozen ranks")]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.setBothFrozen(false)")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "cancelfrozen-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cancelfrozen-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cancelFrozen([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Cancel freeze operation")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Cancel freeze")]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.cancelFrozen()")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "insertrow-row-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#insertrow-row-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" insertRow(row [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Number} [row]: Insert a blank row in the first few rows, starting from 0"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [number]: The number of blank rows inserted; the default is 1"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v("Insert a blank line in the "),
                      e("code", [t._v("number")]),
                      t._v(" line at the position of the "),
                      e("code", [t._v("row")]),
                      t._v(" line"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v("Insert a blank line at the position of line 2"),
                        ]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.insertRow(1)")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "insertcolumn-column-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#insertcolumn-column-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" insertColumn( column [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Number} [column]: Insert a blank column in the first column"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [number]: The number of blank columns to insert; the default is 1"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v("Insert a blank column in column "),
                      e("code", [t._v("number")]),
                      t._v(" at the position of column "),
                      e("code", [t._v("column")]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Insert 3 blank rows in column 1")]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.insertRow(0, { number: 3 })"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "deleterow-rowstart-rowend-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#deleterow-rowstart-rowend-setting" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" deleteRow(rowStart, rowEnd [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Number} [rowStart]: the starting row to delete"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{Number} [rowEnd]: the end row to be deleted"),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Delete the specified row")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Special reminder, after deleting the row, the serial number of the row will not change, the following row will be added to the above, pay attention to observe whether the data is deleted correctly."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Delete 2-4 lines")]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.deleteRow(1, 3)")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  {
                    attrs: { id: "deletecolumn-columnstart-columnend-setting" },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#deletecolumn-columnstart-columnend-setting",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" deleteColumn(columnStart, columnEnd [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [columnStart]: the starting column to be deleted"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [columnEnd]: the end column to be deleted\nTo"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Delete the specified column")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Special reminder, after deleting the column, the serial number of the column will not change, the right column will be added to the left, pay attention to whether the data is deleted correctly."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Delete 2-4 columns")]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.deleteColumn(1, 3)")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "hiderow-rowstart-rowend-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#hiderow-rowstart-rowend-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" hideRow(rowStart, rowEnd [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [rowStart]: The starting row to be hidden"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{Number} [rowEnd]: the end row to be hidden\nTo"),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Hide the specified row")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Special reminder, after the row is hidden, the row number will change."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Hide 2-4 rows")]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.hideRow(1, 3)")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  {
                    attrs: {
                      id: "hidecolumn-columnstart-columnend-setting-todo",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#hidecolumn-columnstart-columnend-setting-todo",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(
                      " hideColumn(columnStart, columnEnd [,setting])(TODO)"
                    ),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Number} [columnStart]: the starting column to be hidden"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "{Number} [columnEnd]: the end column to be hidden"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Hide the specified column")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Special reminder, after hiding the column, the sequence number of the column will change."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Hide 2-4 columns")]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.hideColumn(1, 3)")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "showrow-rowstart-rowend-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showrow-rowstart-rowend-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" showRow(rowStart, rowEnd [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [rowStart]: the starting row to be displayed"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [rowEnd]: the end row to be displayed\nTo"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Show the specified row")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Display 2-4 lines")]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.showRow(1, 3)")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  {
                    attrs: {
                      id: "showcolumn-columnstart-columnend-setting-todo",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#showcolumn-columnstart-columnend-setting-todo",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(
                      " showColumn(columnStart, columnEnd [,setting])(TODO)"
                    ),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [columnStart]: the starting column to be displayed"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [columnEnd]: the end column to be displayed\nTo"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Show the specified column")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Display 2-4 columns")]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.showColumn(1, 3)")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setrowheight-rowinfo-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setrowheight-rowinfo-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setRowHeight(rowInfo [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Object} [rowInfo]: Correspondence between number of rows and height"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v("Set the height of the specified "),
                      e("s", [t._v("row")]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "Set the height of the first row to 50px and the height of the second row to 60px"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.setRowHeight({0：50，1：60})"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "setcolumnwidth-columninfo-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#setcolumnwidth-columninfo-setting" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setColumnWidth(columnInfo [,setting])"),
                  ]
                ),
                t._v(" "),
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Object} [columnInfo]: Correspondence between the number of columns and the width"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Set the width of the specified column")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "Set the width of the first column to 50px and the width of the second column to 60px"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.setColumnWidth({0：50，1：60})"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getrowheight-rowinfo-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrowheight-rowinfo-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRowHeight(rowInfo [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("{Array} [rowInfo]: The number of rows")]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Get the height of the specified row, get the object corresponding to the number of rows and height"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "The height of the first row is 50px, the height of the second row is 60px, get these values"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.getRowHeight([0,1])")]),
                          t._v("\nReturn to get\n"),
                          e("code", [t._v("{0：50，1：60}")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "getcolumnwidth-columninfo-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#getcolumnwidth-columninfo-setting" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" getColumnWidth(columnInfo [,setting])"),
                  ]
                ),
                t._v(" "),
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v("{Array} [columnInfo]: The number of columns"),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Get the width of the specified column, get the object of the corresponding relationship between the number of columns and the width"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "The width of the first column is 50px, the width of the second column is 60px, get these values"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.getColumnWidth([0,1])")]),
                          t._v("\nReturn to get\n"),
                          e("code", [t._v("{0：50，1：60}")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getdefaultrowheight-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getdefaultrowheight-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getDefaultRowHeight([,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Get the default row height of the specified worksheet"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "Returns the default row height of the current worksheet"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.getDefaultRowHeight()")]),
                          t._v("\nReturn to get\n"),
                          e("code", [t._v("19")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getdefaultcolwidth-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getdefaultcolwidth-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getDefaultColWidth([,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("(TODO)")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Get the default column width of the specified worksheet"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "Returns the default column width of the current worksheet"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.getDefaultColWidth()")]),
                          t._v("\nReturn to get\n"),
                          e("code", [t._v("73")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "selection-operation" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#selection-operation" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Selection operation"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "getrange" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrange" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRange()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Returns an array of current selection objects, there may be multiple selections. The format of each selection area is an object composed of row/column information "
                      ),
                      e("code", [t._v("{row:[0,1],column:[0,1]}")]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            'The current selection is "A1:B2" and "B4:C5", execute'
                          ),
                        ]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.getRange()")])]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"row"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
                                ),
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
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"column"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
                                ),
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
                                  [t._v(",")]
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
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"row"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
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
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("4")]
                                ),
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
                                  [t._v(",")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"column"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
                                ),
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
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                                e(
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getrangewithflatten" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrangewithflatten" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRangeWithFlatten()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Returns an array representing the positions of all cells in the specified area, which is different from the getrange method, which organizes the data of the selection by cell (rather than a continuous area)."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "Select the specified area in the table, and then execute"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.getRange()")])]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"row"')]
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
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
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
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"column"')]
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
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
                                ),
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
                                  [t._v("}")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"row"')]
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
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
                                ),
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
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"column"')]
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
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
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
                                  [t._v("}")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"row"')]
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
                                  [t._v("[")]
                                ),
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
                                  [t._v(",")]
                                ),
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
                                  [t._v("]")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"column"')]
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
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
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
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                                e(
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
                        e("p", [
                          t._v(
                            'Where，{"row":[0,0],"column":[0,2]} denote a whole continuous region.'
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "Select the area above in the table and execute"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.getRangeWithFlatten()")]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"r"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"c"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
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
                                  [t._v(",")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"r"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"c"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
                                ),
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
                                  [t._v(",")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"r"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"c"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
                                ),
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
                                  [t._v(",")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"r"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"c"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
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
                                  [t._v(",")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"r"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("3")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"c"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                                e(
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getrangevalueswithflatte" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrangevalueswithflatte" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRangeValuesWithFlatte()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Returns an array of objects representing the contents of all cells in a specified range"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "Select the specified area in the table, and then execute"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.getRange()")])]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"row"')]
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
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
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
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"column"')]
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
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
                                ),
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
                                  [t._v("}")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"row"')]
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
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
                                ),
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
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"column"')]
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
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
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
                                  [t._v("}")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"row"')]
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
                                  [t._v("[")]
                                ),
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
                                  [t._v(",")]
                                ),
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
                                  [t._v("]")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"column"')]
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
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
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
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                                e(
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
                        e("p", [
                          t._v(
                            'Where，{"row":[0,0],"column":[0,2]} denote a whole continuous region.'
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "Select the area above in the table and execute"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.getRangeValuesWithFlatte()"),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
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
                                    attrs: { class: "token null keyword" },
                                  },
                                  [t._v("null")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("11")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fc"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"n"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"1"')]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
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
                                    attrs: { class: "token null keyword" },
                                  },
                                  [t._v("null")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("11")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fc"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"n"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"2"')]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
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
                                    attrs: { class: "token null keyword" },
                                  },
                                  [t._v("null")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("11")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fc"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("3")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"n"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"3"')]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"Background"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"Background"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
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
                                    attrs: { class: "token null keyword" },
                                  },
                                  [t._v("null")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("11")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fc"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"Border"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"Border"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
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
                                    attrs: { class: "token null keyword" },
                                  },
                                  [t._v("null")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("11")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fc"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                e(
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getrangeaxis" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrangeaxis" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRangeAxis()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Returns an array of coordinate strings corresponding to the current selection. Multiple selections may exist. Each selection may be a single cell (such as A1) or a rectangular region of multiple cells (such as D9: E12)"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            'The current selection is"E10:E14"、"A7:B13"、"C4"、 "A3" and "C6:D9", execute'
                          ),
                        ]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.getRangeAxis()")])]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"E10:E14"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"A7:B13"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"C4"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"A3"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"C6:D9"')]
                                ),
                                e(
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getrangevalue-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrangevalue-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRangeValue([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column:[0 ,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Returns the data of a two-dimensional array of cells in the specified range of the specified worksheet, each cell is an object."
                      ),
                    ]),
                    t._v(" "),
                    e(
                      "p",
                      [
                        e("RouterLink", { attrs: { to: "/guide/cell.html" } }, [
                          t._v("Cell Object Format Reference"),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v('The current selection is "A1:B2", execute'),
                        ]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.getRangeValue()")])]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"vaule1"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"vaule1"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgba(255,255,255)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("11")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fc"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgba(255,255,255)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("11")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fc"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                  [t._v("]")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"vaule2"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"vaule2"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgba(255,255,255)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("11")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fc"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgba(255,255,255)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("11")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fc"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("1")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                  [t._v("]")]
                                ),
                                t._v("\n"),
                                e(
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getrangehtml-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrangehtml-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRangeHtml([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", allows an array of multiple selections; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Copy the data in the specified cell area of the specified worksheet and return the data containing the "
                      ),
                      e("code", [t._v("<table>")]),
                      t._v(
                        "html format, which can be used to paste into excel to maintain the cell style."
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Note that if you copy multiple selections, these selections must have the same row or the same column to copy, and the copied results will also be automatically merged into a concatenated array, for example, multiple selections "
                      ),
                      e("code", [t._v('"C18:C20"')]),
                      t._v(" / "),
                      e("code", [t._v('"E18:E20"')]),
                      t._v(" / "),
                      e("code", [t._v('"G18:H20"')]),
                      t._v(" is allowed, but multiple selections of "),
                      e("code", [t._v('"C18:C20"')]),
                      t._v(" / "),
                      e("code", [t._v('"E18:E21"')]),
                      t._v(" are not allowed"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v('The current selection is "A1:B2", execute'),
                        ]),
                        t._v(" "),
                        e("p", [e("code", [t._v("datadocs.getRangeHtml()")])]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-html extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-html" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("<")]
                                        ),
                                        t._v("table"),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-name" },
                                      },
                                      [t._v("data-type")]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-value" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class:
                                                "token punctuation attr-equals",
                                            },
                                          },
                                          [t._v("=")]
                                        ),
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v('"')]
                                        ),
                                        t._v("luckysheet_copy_action_table"),
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v('"')]
                                        ),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("<")]
                                        ),
                                        t._v("colgroup"),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-name" },
                                      },
                                      [t._v("width")]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-value" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class:
                                                "token punctuation attr-equals",
                                            },
                                          },
                                          [t._v("=")]
                                        ),
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v('"')]
                                        ),
                                        t._v("72px"),
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v('"')]
                                        ),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("</")]
                                        ),
                                        t._v("colgroup"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("<")]
                                        ),
                                        t._v("colgroup"),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-name" },
                                      },
                                      [t._v("width")]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-value" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class:
                                                "token punctuation attr-equals",
                                            },
                                          },
                                          [t._v("=")]
                                        ),
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v('"')]
                                        ),
                                        t._v("72px"),
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v('"')]
                                        ),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("</")]
                                        ),
                                        t._v("colgroup"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("<")]
                                        ),
                                        t._v("tr"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("<")]
                                        ),
                                        t._v("td"),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token special-attr" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: { class: "token attr-name" },
                                          },
                                          [t._v("style")]
                                        ),
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token attr-value",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class:
                                                    "token punctuation attr-equals",
                                                },
                                              },
                                              [t._v("=")]
                                            ),
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class:
                                                    "token value css language-css",
                                                },
                                              },
                                              [
                                                e(
                                                  "span",
                                                  {
                                                    pre: !0,
                                                    attrs: {
                                                      class: "token property",
                                                    },
                                                  },
                                                  [t._v("height")]
                                                ),
                                                e(
                                                  "span",
                                                  {
                                                    pre: !0,
                                                    attrs: {
                                                      class:
                                                        "token punctuation",
                                                    },
                                                  },
                                                  [t._v(":")]
                                                ),
                                                t._v("19px"),
                                                e(
                                                  "span",
                                                  {
                                                    pre: !0,
                                                    attrs: {
                                                      class:
                                                        "token punctuation",
                                                    },
                                                  },
                                                  [t._v(";")]
                                                ),
                                              ]
                                            ),
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t\tvalue1\n\t\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("</")]
                                        ),
                                        t._v("td"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("<")]
                                        ),
                                        t._v("td"),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token special-attr" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: { class: "token attr-name" },
                                          },
                                          [t._v("style")]
                                        ),
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token attr-value",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class:
                                                    "token punctuation attr-equals",
                                                },
                                              },
                                              [t._v("=")]
                                            ),
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t\tvalue3\n\t\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("</")]
                                        ),
                                        t._v("td"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("</")]
                                        ),
                                        t._v("tr"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("<")]
                                        ),
                                        t._v("tr"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("<")]
                                        ),
                                        t._v("td"),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token special-attr" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: { class: "token attr-name" },
                                          },
                                          [t._v("style")]
                                        ),
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token attr-value",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class:
                                                    "token punctuation attr-equals",
                                                },
                                              },
                                              [t._v("=")]
                                            ),
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class:
                                                    "token value css language-css",
                                                },
                                              },
                                              [
                                                e(
                                                  "span",
                                                  {
                                                    pre: !0,
                                                    attrs: {
                                                      class: "token property",
                                                    },
                                                  },
                                                  [t._v("height")]
                                                ),
                                                e(
                                                  "span",
                                                  {
                                                    pre: !0,
                                                    attrs: {
                                                      class:
                                                        "token punctuation",
                                                    },
                                                  },
                                                  [t._v(":")]
                                                ),
                                                t._v("19px"),
                                                e(
                                                  "span",
                                                  {
                                                    pre: !0,
                                                    attrs: {
                                                      class:
                                                        "token punctuation",
                                                    },
                                                  },
                                                  [t._v(";")]
                                                ),
                                              ]
                                            ),
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t\tvalue2\n\t\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("</")]
                                        ),
                                        t._v("td"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("<")]
                                        ),
                                        t._v("td"),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token special-attr" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: { class: "token attr-name" },
                                          },
                                          [t._v("style")]
                                        ),
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token attr-value",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class:
                                                    "token punctuation attr-equals",
                                                },
                                              },
                                              [t._v("=")]
                                            ),
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                            e(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t\t\tvalue4\n\t\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("</")]
                                        ),
                                        t._v("td"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("</")]
                                        ),
                                        t._v("tr"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
                                ),
                                t._v("\n"),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token punctuation",
                                            },
                                          },
                                          [t._v("</")]
                                        ),
                                        t._v("table"),
                                      ]
                                    ),
                                    e(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(">")]
                                    ),
                                  ]
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
                e("h3", { attrs: { id: "getrangejson-title-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrangejson-title-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRangeJson(title [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Boolean} [title]: Whether the first line is the title"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("title")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"true"')]),
                            t._v(": first row is title"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"false"')]),
                            t._v(": The first row is not title"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Copy the data in the specified cell area of the specified worksheet and return the data in "
                      ),
                      e("code", [t._v("json")]),
                      t._v(" format"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            'The current selection is "A1:B2", the first row is the title to get json'
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.getRangeJson(true)")]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"value1"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"value3"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                                e(
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
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            'The current selection is "A1:B2", the first row is not title to get json'
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.getRangeJson(false)")]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"A"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"B"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
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
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"A"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"B"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n"),
                                e(
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "getrangearray-dimensional-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#getrangearray-dimensional-setting" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" getRangeArray(dimensional [,setting])"),
                  ]
                ),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v("{String} [dimensional]: array dimension"),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("dimensional")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"oneDimensional"')]),
                            t._v(": one-dimensional array"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"twoDimensional"')]),
                            t._v(": two-dimensional array"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"custom"')]),
                            t._v(
                              ": a two-dimensional array of custom rows and columns"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v("{Number} [row]: Set when "),
                            e("code", [t._v("dimensional")]),
                            t._v(" is "),
                            e("code", [t._v("custom")]),
                            t._v(
                              ", the number of rows in the multidimensional array"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v("{Number} [column]: Set when "),
                            e("code", [t._v("dimensional")]),
                            t._v(" is "),
                            e("code", [t._v("custom")]),
                            t._v(
                              ", the number of columns in the multidimensional array"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Copy the data in the specified cell area of the specified worksheet, and return the data in a one-dimensional, two-dimensional, or two-dimensional array of custom rows and columns."
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v("Pay special attention to the setting of "),
                      e("code", [t._v("row")]),
                      t._v(" and "),
                      e("code", [t._v("column")]),
                      t._v(" in "),
                      e("code", [t._v("setting")]),
                      t._v(" only when "),
                      e("code", [t._v("dimensional")]),
                      t._v(" is set to "),
                      e("code", [t._v("custom")]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            'The current selection is "A1:B2", a one-dimensional array'
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.getRangeArray('oneDimensional')"),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
                                ),
                                e(
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
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            'The current selection is "A1:B2", a two-dimensional array'
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.getRangeArray('twoDimensional')"),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("]")]
                                ),
                                t._v("\n"),
                                e(
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
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "The current selection area is \"A1:C5\", which is composed of values from'value1' to'value15', and obtains a two-dimensional array data with 3 rows and 2 columns"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v(
                              "datadocs.getRangeArray('custom', { row: 3, column: 2 })"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
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
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value6"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value6"')]
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
                                  [t._v("]")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value11"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value11"')]
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
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
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
                                  [t._v("]")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value7"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value7"')]
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
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value12"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value12"')]
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
                                  [t._v("]")]
                                ),
                                t._v("\n"),
                                e(
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getrangediagonal-type-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrangediagonal-type-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRangeDiagonal(type [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v("{String} [type]: diagonal or diagonal offset"),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("type")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"normal"')]),
                            t._v(": diagonal"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"anti"')]),
                            t._v(": anti-diagonal"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"offset"')]),
                            t._v(": diagonal offset"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{Number} [column]: Set when "),
                          e("code", [t._v("type")]),
                          t._v(" is "),
                          e("code", [t._v("offset")]),
                          t._v(", the number of columns for diagonal offset"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Copy the data in the specified cell area of the specified worksheet, and return the diagonal or diagonal offset data from the "
                      ),
                      e("code", [t._v("column")]),
                      t._v(" column."),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v("Pay special attention to the setting of "),
                      e("code", [t._v("column")]),
                      t._v(" in "),
                      e("code", [t._v("setting")]),
                      t._v(" only when "),
                      e("code", [t._v("type")]),
                      t._v(" is set to "),
                      e("code", [t._v("offset")]),
                      t._v("."),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v('The current selection is "A1:B2", diagonal'),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.getRangeDiagonal('normal')"),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
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
                                e(
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
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            'The current selection is "A1:B2", against the diagonal'
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.getRangeDiagonal('anti')"),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
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
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
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
                                e(
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
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            'The current selection is "A1:B2", and the diagonal is offset by 1 column'
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v(
                              "datadocs.getRangeDiagonal('offset', { column: 1 })"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
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
                                e(
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getrangeboolean-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrangeboolean-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRangeBoolean([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Copy the data in the specified cell area of the specified worksheet, and return the data of Boolean value"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v('The current selection is "A1:B2"')]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.getRangeBoolean()")]),
                        ]),
                        t._v(" "),
                        e("p", [t._v("The returned result is:")]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
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
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("]")]
                                ),
                                t._v("\n"),
                                e(
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setrangeshow-range-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setrangeshow-range-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setRangeShow(range [,setting])"),
                  e("div", { attrs: { id: "setRangeShow" } }),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                        ),
                        e("code", [t._v('"A1:B2"')]),
                        t._v(", "),
                        e("code", [t._v('"sheetName!A1:B2"')]),
                        t._v(" or "),
                        e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                        t._v(
                          ", allows an array of multiple selections; the default is the current selection"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Boolean} [show]: Whether to show the highlight selection effect; the default value is "
                            ),
                            e("code", [t._v("true")]),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Specify one or more selection areas in the worksheet to be selected and choose whether to highlight or not. Multiple format settings are supported."
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Special reminder, the selection range setting involved in DataDocs can refer to this setting"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v("Set the current worksheet selection area "),
                          e("code", [t._v("A1:B2")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v('datadocs.setRangeShow("A1:B2")')]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Set selection range "),
                          e("code", [t._v("A1:B2")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v('datadocs.setRangeShow(["A1:B2"])')]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Set selection range "),
                          e("code", [t._v("A1:B2")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v(
                              "datadocs.setRangeShow({row:[0,1],column:[0,1]})"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Set selection range "),
                          e("code", [t._v("A1:B2")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v(
                              "datadocs.setRangeShow([{row:[0,1],column:[0,1]}])"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Set the selection range "),
                          e("code", [t._v("A1:B2")]),
                          t._v(" and "),
                          e("code", [t._v("C3:D4")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v('datadocs.setRangeShow(["A1:B2","C3:D4"])'),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Set the selection range "),
                          e("code", [t._v("A1:B2")]),
                          t._v(" and "),
                          e("code", [t._v("D3")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v(
                              "datadocs.setRangeShow([{row:[0,1],column:[0,1]},{row:[2,2],column:[3,3]}])"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setrangevalue-data-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setrangevalue-data-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setRangeValue(data [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [data]: The data of a two-dimensional array of cells to be assigned. The value of each cell can be a string or a number, or an object conforming to the DataDocs format. Refer to [cell attribute table](/zh /guide/cell.html)"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Boolean} [isRefresh]: Whether to refresh the interface; the default is "
                            ),
                            e("code", [t._v("true")]),
                            t._v(
                              "; used to control throttling when multiple cells are assigned, the previous cell should be set to "
                            ),
                            e("code", [t._v("false")]),
                            t._v(", and the last cell is set Is "),
                            e("code", [t._v("true")]),
                            t._v("."),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Assign a cell array data to the specified area, the data format is the same as the data obtained by the "
                      ),
                      e("code", [t._v("getRangeValue")]),
                      t._v(" method."),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v("Note that usually the "),
                      e("code", [t._v("getRangeValue")]),
                      t._v(
                        " method only obtains the selection data, but does not include the border and merged cell information. When the "
                      ),
                      e("code", [t._v("setRangeValue")]),
                      t._v(
                        " is executed, it will dynamically determine whether the previous step has executed the "
                      ),
                      e("code", [t._v("getRangeValue")]),
                      t._v(
                        ", if executed, the border will be Obtained from DataDocs configuration together with the merged cell information."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Assign value to current selection")]),
                        t._v(" "),
                        e("div", { staticClass: "language-js extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token keyword" },
                                  },
                                  [t._v("const")]
                                ),
                                t._v(" data "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v("=")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v("\n\t\t\t\t"),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v("\n\t\t\t\t"),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t\t"),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v("\n\t\t\t\t"),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v("\n\t\t\t\t"),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("]")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("]")]
                                ),
                                t._v("\nluckysheet"),
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
                                    attrs: { class: "token function" },
                                  },
                                  [t._v("setRangeValue")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("(")]
                                ),
                                t._v("data"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
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
                                    attrs: {
                                      class: "token literal-property property",
                                    },
                                  },
                                  [t._v("range")]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"A1:B2"')]
                                ),
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
                e(
                  "h3",
                  { attrs: { id: "setrangeformat-attr-value-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#setrangeformat-attr-value-setting" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setRangeFormat(attr, value [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e(
                          "p",
                          [
                            t._v(
                              "{String} [attr]: attribute type,\nRefer to the attribute value of "
                            ),
                            e(
                              "RouterLink",
                              { attrs: { to: "/guide/cell.html" } },
                              [t._v("cell attribute table")]
                            ),
                          ],
                          1
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        e(
                          "p",
                          [
                            t._v(
                              "{String | Number | Object} [value]: Specific setting value, one attribute will correspond to multiple values, refer to the value example of "
                            ),
                            e(
                              "RouterLink",
                              { attrs: { to: "/guide/cell.html" } },
                              [t._v("cell attribute table")]
                            ),
                            t._v(", special case: if The attribute type "),
                            e("code", [t._v("attr")]),
                            t._v(" is the cell format "),
                            e("code", [t._v("ct")]),
                            t._v(", then the setting value "),
                            e("code", [t._v("value")]),
                            t._v(" should provide "),
                            e("code", [t._v("ct.fa")]),
                            t._v(", for example, set the cell format of "),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(" to percentage format:\nTo\n"),
                            e("code", [
                              t._v(
                                'datadocs.setRangeFormat("ct", "0.00%", {range:"A1:B2"})'
                              ),
                            ]),
                          ],
                          1
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Object | String} [range]: Set the target selection range of the parameter. The supported selection format is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1], column:[0,1]}")]),
                            t._v(
                              ", allows an array of multiple selections; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Set the cell format of the specified range, generally used as a processing format, the assignment operation recommends using the "
                      ),
                      e("code", [t._v("setRangeValue")]),
                      t._v(" method"),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v("When setting the border, attr is "),
                      e("code", [t._v('"bd"')]),
                      t._v(
                        ", value is a key/value object, and the border type: "
                      ),
                      e("code", [t._v("borderType")]),
                      t._v("/border thickness:"),
                      e("code", [t._v("style")]),
                      t._v("/border color:"),
                      e("code", [t._v("color")]),
                      t._v(
                        " need to be set at the same time, such as setting "
                      ),
                      e("code", [t._v('" A1:B2"')]),
                      t._v("The border of the cell is all/red/thin:"),
                    ]),
                    t._v(" "),
                    e("p", [
                      e("code", [
                        t._v(
                          'datadocs.setRangeFormat("bd", {borderType: "border-right",style: "1", color: "#ff0000"}, {range:["A1:B2"]})'
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "The complete optional setting parameters are as follows:"
                      ),
                    ]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Border Type "),
                        e("code", [
                          t._v(
                            'borderType: "border-left" | "border-right" | "border-top" | "border-bottom" | "border-all" | "border-outside" | "border-inside" | "border -horizontal" | "border-vertical" | "border-none"'
                          ),
                        ]),
                        t._v(","),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("Border thickness "),
                        e("code", [
                          t._v(
                            "style: 1 Thin | 2 Hair | 3 Dotted | 4 Dashed | 5 DashDot | 6 DashDotDot | 7 Double | 8 Medium | 9 MediumDashed | 10 MediumDashDot | 11 MediumDashDotDot | 12 SlantedDashDot | 13 Thick"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("Border color "),
                        e("code", [t._v("color: hexadecimal color value")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v("Set the cell text in the current worksheet "),
                          e("code", [t._v('"A1:B2"')]),
                          t._v(" range to be bold"),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v(
                              'datadocs.setRangeFormat("bl", 1, {range:"A1:B2"})'
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "Set the background of the cells in the range of "
                          ),
                          e("code", [t._v('"B2"')]),
                          t._v(" and "),
                          e("code", [t._v('"C4:D5"')]),
                          t._v(" of the second worksheet to red"),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v(
                              'datadocs.setRangeFormat("bg", "#ff0000", {range:["B2","C4:D5"], order:1})'
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setrangefilter-type-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setrangefilter-type-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setRangeFilter(type [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{String} [type]: Turn on or off the filtering function"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("type")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"open"')]),
                            t._v(
                              ": Open the filter function and return the current filtered range object"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"close"')]),
                            t._v(
                              ": Close the filter function and return to the scope of the filter before closing"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "For the worksheet of the specified subscript, the filter function is turned on or off for the selected range"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          'Open the filter function of the second worksheet "A1:B2"\n'
                        ),
                        e("code", [
                          t._v(
                            'datadocs.setRangeFilter("open",{range:"A1:B2",order:1})'
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setrangemerge-type-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setrangemerge-type-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setRangeMerge(type [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("{String} [type]: merge cell type")]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("type")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"all"')]),
                            t._v(
                              ": Merge all, all cells in the area are merged into one large cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"horizontal"')]),
                            t._v(
                              ": merge horizontally, cells in the same row in the area are merged into one cell"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"vertical"')]),
                            t._v(
                              ": merge vertically, the cells in the same column in the area are merged into one cell"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", allows an array of multiple selections; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Set the merged cells for the worksheet with the specified subscript and the selected range"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "The current selection'A1:B2' is set to merge cells, the type is merge all"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v('datadocs.setRangeMerge("all")')]),
                          t._v("\nThe data of'A1:B1' is:"),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "language-json extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-json" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"General"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"t"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v(" "),
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"v"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"mc"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"r"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"c"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"rs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"cs"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
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
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"mc"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"r"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"c"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
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
                                  [t._v("]")]
                                ),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"mc"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"r"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"c"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
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
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"mc"')]
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"r"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
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
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"c"')]
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("0")]
                                ),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
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
                                  [t._v("]")]
                                ),
                                t._v("\n"),
                                e(
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "cancelrangemerge-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cancelrangemerge-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" cancelRangeMerge( [setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", allows an array of multiple selections; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Unmerge cells in the selected range for the worksheet with the specified subscript"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "The current selection'A1:B2' is already a merged cell, now you want to cancel the merge"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [t._v("datadocs.cancelRangeMerge()")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setrangesort-type-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setrangesort-type-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setRangeSort(type [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("{String} [type]: sort type")]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("type")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"asc"')]),
                            t._v(": ascending order"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"des"')]),
                            t._v(": descending order"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "For the worksheet of the specified subscript, the sort function is turned on for the selected range, and the sorted data of the selected range is returned."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Set the current selection of the current worksheet to ascending order\n"
                        ),
                        e("code", [t._v('datadocs.setRangeSort("asc")')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "setrangesortmulti-title-sort-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#setrangesortmulti-title-sort-setting",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setRangeSortMulti(title, sort [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Boolean} [title]: Does the data have a title row"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "{Array} [sort]: Column setting, set the column index and sort method to be sorted, the format is like: "
                          ),
                          e("code", [
                            t._v("[{ i:0,sort:'asc' },{ i:1,sort:'des' }]"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "For the worksheet of the specified subscript, the selected range enables the multi-column custom sorting function to return the sorted data of the selected range."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Set the current selection of the current worksheet to a custom sort, the data has a header row, and it is sorted according to the rules of the first column ascending order and the second column descending order\n"
                        ),
                        e("code", [
                          t._v(
                            "datadocs.setRangeSortMulti(true,[{ i:0,sort:'asc' },{ i:1,sort:'des' }])"
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  {
                    attrs: {
                      id: "setrangeconditionalformatdefault-conditionname-conditionvalue-setting",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#setrangeconditionalformatdefault-conditionname-conditionvalue-setting",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(
                      " setRangeConditionalFormatDefault(conditionName, conditionValue [,setting])"
                    ),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{String} [conditionName]: Conditional format rule type"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values ​​of "),
                          e("code", [t._v("conditionName")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"greaterThan"')]),
                            t._v(
                              ": greater than (conditionValue value is numeric or cell range)"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"lessThan"')]),
                            t._v(
                              ": Less than (conditionValue value is numeric value or cell range)"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"betweenness"')]),
                            t._v(
                              ": between (conditionValue value is numeric value or cell range)"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"equal"')]),
                            t._v(
                              ": equal to (conditionValue value is numeric value or cell range)"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"textContains"')]),
                            t._v(
                              ": text contains (conditionValue value is text or cell range)"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"occurrenceDate"')]),
                            t._v(
                              ": date of occurrence (conditionValue value is date)"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"duplicateValue"')]),
                            t._v(
                              ": Duplicate value (conditionValue value is '0': duplicate value, '1': unique value)"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"top10"')]),
                            t._v(
                              ": the first N items (conditionValue value is 1~1000)"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"top10%"')]),
                            t._v(": Top N% (conditionValue value is 1~1000)"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"last10"')]),
                            t._v(
                              ": the last N items (conditionValue is 1~1000)"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"last10%"')]),
                            t._v(": Last N% (conditionValue value is 1~1000)"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"AboveAverage"')]),
                            t._v(
                              ": above average (conditionValue can be an empty array)"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"SubAverage"')]),
                            t._v(
                              ": below average (conditionValue can be an empty array)"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "{Array} [conditionValue]: You can set condition cells or condition values\nValue rules (at least one value in the condition value array and at most two values)"
                          ),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "language-js extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
                                ),
                                e(
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
                        e("p", [
                          t._v(
                            "Or (if the value is the cell range, take the cell value in the upper left corner)"
                          ),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "language-js extra-class" }, [
                          e(
                            "pre",
                            { pre: !0, attrs: { class: "language-js" } },
                            [
                              e("code", [
                                e(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                e(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v("'A1'")]
                                ),
                                e(
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
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("p", [t._v("{Object} [format]: color setting")]),
                            t._v(" "),
                            e("ul", [
                              e("li", [
                                t._v(
                                  "Set the text color and cell color; the default value is "
                                ),
                                e("code", [
                                  t._v(
                                    '{ "textColor": "#000000", "cellColor": "#ff0000" }'
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("p", [
                              t._v(
                                "{Array | Object | String} [cellrange]: The range of the selection, the format of the supported selection is "
                              ),
                              e("code", [t._v('"A1:B2"')]),
                              t._v(", "),
                              e("code", [t._v('"sheetName!A1:B2"')]),
                              t._v(" or "),
                              e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                              t._v(
                                ", allows an array of multiple selections; the default is the current selection"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("p", [
                              t._v(
                                "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("p", [
                              t._v(
                                "{Function} [success]: callback function for the end of the operation"
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "For the worksheet of the specified subscript, the conditional formatting is enabled for the selected range, and some cells are highlighted according to the set conditional formatting rules, and the data after the conditional formatting is enabled is returned."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "Highlight cells with content greater than the number 2\n"
                          ),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"greaterThan\",{ type: 'value', content: [2] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "Highlight the cells whose content is less than the content of cell A1\n"
                          ),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"lessThan\",{ type: 'range', content: ['A1'] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "Highlight cells with content between 2 and 10\n"
                          ),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"betweenness\",{ type: 'value', content: [2,10] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "Highlight the cell whose content is equal to the content of cell A1\n"
                          ),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"equal\",{ type: 'range', content: ['A1'] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "Highlight the cell that contains the content of cell A1\n"
                          ),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"textContains\",{ type: 'range', content: ['A1'] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Highlight cells with dates between "),
                          e("code", [t._v("2020/09/24-2020/10/15")]),
                          t._v(" "),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"occurrenceDate\",{ type: 'value', content: ['2020/09/24 - 2020/10/15'] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "Highlight cells with repeated values, content is 0\n"
                          ),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"duplicateValue\",{ type: 'value', content: [0] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "Highlight the cell with unique value, content is 1\n"
                          ),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"duplicateValue\",{ type: 'value', content: [1] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Highlight the top 20 cells\n"),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"top\",{ type: 'value', content: [20] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Highlight the top 30% of cells\n"),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"topPercent\",{ type: 'value', content: [30] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Highlight the bottom 15 cells\n"),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"last\",{ type: 'value', content: [15] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Highlight the bottom 15% of cells\n"),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"lastPercent\",{ type: 'value', content: [15] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Highlight cells that are above average\n"),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"AboveAverage\",{ type: 'value', content: ['AboveAverage'] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("Highlight cells below average\n"),
                          e("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"SubAverage\",{ type: 'value', content: ['SubAverage'] })"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "setrangeconditionalformat-type-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#setrangeconditionalformat-type-setting",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setRangeConditionalFormat(type [,setting])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{String} [type]: Conditional formatting rule type"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values ​​of "),
                          e("code", [t._v("type")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"dataBar"')]),
                            t._v(": data bar"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"icons"')]),
                            t._v(": icon set"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"colorGradation"')]),
                            t._v(": Color Gradation"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("p", [
                              t._v("{Array | String} [format]: Color setting"),
                            ]),
                            t._v(" "),
                            e("ul", [
                              e("li", [
                                e("p", [
                                  t._v("When "),
                                  e("code", [t._v("type")]),
                                  t._v(" is "),
                                  e("code", [t._v("dataBar")]),
                                  t._v(
                                    ", the gradient color should be set; the default value is blue-white gradient"
                                  ),
                                  e("code", [t._v('["#638ec6", "#ffffff"]')]),
                                ]),
                                t._v(" "),
                                e("p", [t._v("Recommended shortcut value:")]),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "language-js extra-class" },
                                  [
                                    e(
                                      "pre",
                                      {
                                        pre: !0,
                                        attrs: { class: "language-js" },
                                      },
                                      [
                                        e("code", [
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#638ec6"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                                "//Blue-white gradient data bar"
                                              ),
                                            ]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#63c384"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                                "//Green-white gradient data bar"
                                              ),
                                            ]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ff555a"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                                "//Red-white gradient data bar"
                                              ),
                                            ]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffb628"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                                "//Orange-white gradient data bar"
                                              ),
                                            ]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#008aef"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                                "//Light blue-white gradient data bar"
                                              ),
                                            ]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#d6007b"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                                "//Purple-white gradient data bar"
                                              ),
                                            ]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#638ec6"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//Blue data bar")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#63c384"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//green data bar")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ff555a"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//Red data bar")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffb628"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//Orange data bar")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#008aef"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//Light blue data bar")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#d6007b"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//Purple data bar")]
                                          ),
                                          t._v("\n"),
                                        ]),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              e("li", [
                                e("p", [
                                  t._v("When "),
                                  e("code", [t._v("type")]),
                                  t._v(" is "),
                                  e("code", [t._v("icons")]),
                                  t._v(
                                    ', the icon type should be set; the default value is "threeWayArrowMultiColor": the three-way arrow color,'
                                  ),
                                ]),
                                t._v(" "),
                                e("p", [t._v("Possible values ​​are:")]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("threeWayArrowMultiColor")]),
                                  t._v(": three-way arrow (color),"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("threeTriangles")]),
                                  t._v(": 3 triangles,"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("fourWayArrowMultiColor")]),
                                  t._v(": four-way arrow (color),"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("fiveWayArrowMultiColor")]),
                                  t._v(": five-way arrow (color),"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("threeWayArrowGrayColor")]),
                                  t._v(": three-way arrow (gray),"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("fourWayArrowGrayColor")]),
                                  t._v(": four-way arrow (gray),"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("fiveWayArrowGrayColor")]),
                                  t._v(": five-way arrow (gray),"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [
                                    t._v("threeColorTrafficLightRimless"),
                                  ]),
                                  t._v(
                                    ": three-color traffic light (no border),"
                                  ),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("threeSigns")]),
                                  t._v(": three signs,"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("greenRedBlackGradient")]),
                                  t._v(": green-red-black gradient,"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [
                                    t._v("threeColorTrafficLightBordered"),
                                  ]),
                                  t._v(
                                    ": three-color traffic light (with border),"
                                  ),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("fourColorTrafficLight")]),
                                  t._v(": Four-color traffic light,"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("threeSymbolsCircled")]),
                                  t._v(": three symbols (with a circle),"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("tricolorFlag")]),
                                  t._v(": tricolor flag,"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("threeSymbolsnoCircle")]),
                                  t._v(": three symbols (no circle),"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("threeStars")]),
                                  t._v(": 3 stars,"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("fiveQuadrantDiagram")]),
                                  t._v(": five-quadrant diagram,"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("fiveBoxes")]),
                                  t._v(": 5 boxes,"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("grade4")]),
                                  t._v(": Four grades,"),
                                ]),
                                t._v(" "),
                                e("p", [
                                  e("code", [t._v("grade5")]),
                                  t._v(": Five grades,"),
                                ]),
                              ]),
                              t._v(" "),
                              e("li", [
                                e("p", [
                                  t._v("When "),
                                  e("code", [t._v("type")]),
                                  t._v(" is "),
                                  e("code", [t._v("colorGradation")]),
                                  t._v(
                                    ", the color value of the color scale should be set; the default value is green-yellow-red scale"
                                  ),
                                  e("code", [
                                    t._v(
                                      '["rgb(99, 190, 123)", "rgb(255, 235, 132)", "rgb(248, 105, 107)"]'
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("p", [t._v("Recommended shortcut value:")]),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "language-js extra-class" },
                                  [
                                    e(
                                      "pre",
                                      {
                                        pre: !0,
                                        attrs: { class: "language-js" },
                                      },
                                      [
                                        e("code", [
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(255, 235, 132)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//green-yellow-red level")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(255, 235, 132)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//red-yellow-green level")]
                                          ),
                                          t._v("\n\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//green-white-red level")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//red-white-green level")]
                                          ),
                                          t._v("\n\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(90, 138, 198)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//blue-white-red level")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(90, 138, 198)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//red-white-blue level")]
                                          ),
                                          t._v("\n\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//white-red level")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//red-white level")]
                                          ),
                                          t._v("\n\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//green-white level")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//white-green level")]
                                          ),
                                          t._v("\n\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(255, 235, 132)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
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
                                            [t._v("//green-yellow level")]
                                          ),
                                          t._v("\n"),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(255, 235, 132)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//Yellow-green level")]
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
                          e("li", [
                            e("p", [
                              t._v(
                                "{Array | Object | String} [cellrange]: The range of the selection, the format of the supported selection is "
                              ),
                              e("code", [t._v('"A1:B2"')]),
                              t._v(", "),
                              e("code", [t._v('"sheetName!A1:B2"')]),
                              t._v(" or "),
                              e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                              t._v(
                                ", allows an array of multiple selections; the default is the current selection"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("p", [
                              t._v(
                                "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("p", [
                              t._v(
                                "{Function} [success]: callback function for the end of the operation"
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "For the worksheet of the specified subscript, the conditional format is turned on for the selected range, and the data after the conditional format is turned on is returned."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Conditional formatting is enabled for the current selection area, showing gradient\n"
                        ),
                        e("code", [
                          t._v(
                            'datadocs.setRangeConditionalFormat("dataBar", { format: ["#63c384", "#ffffff"] })'
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  {
                    attrs: {
                      id: "deleterangeconditionalformat-itemindex-setting",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#deleterangeconditionalformat-itemindex-setting",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" deleteRangeConditionalFormat(itemIndex [,setting])"),
                  ]
                ),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{Number} [itemIndex]: Conditional format rule index"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "For the worksheet of the specified subscript, delete the conditional format rule, and return the deleted conditional format rule."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Delete the third conditional formatting rule\n"),
                        e("code", [
                          t._v("datadocs.deleteRangeConditionalFormat(2)"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "clearrange-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#clearrange-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" clearRange([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection to be cleared. The format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1] ,column:[0,1]}")]),
                            t._v(
                              ", allows an array of multiple selections; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Clear the contents of the specified cell area of the specified worksheet, return the cleared data, which is different from the function of deleting the selection area, no need to set the cell movement"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Clear the content of the current selection\n"),
                        e("code", [t._v("datadocs.clearRange()")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "deleterange-move-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#deleterange-move-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" deleteRange(move [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{String} [move]: After deleting, whether the cells on the right or below move"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("move")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"left"')]),
                            t._v(": Move the right cell to the left"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"up"')]),
                            t._v(": Move the lower cell up"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection to be deleted, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1] ,column:[0,1]}")]),
                            t._v(
                              ", allows an array composed of multiple selections; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Delete the specified cell range of the specified worksheet, return the deleted data, and at the same time, specify whether to move the right cell to the left or the bottom cell to move up"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Delete the current selection and after deleting, the right cell moves to the left\n"
                        ),
                        e("code", [t._v("datadocs.deleteRange('left')")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "insertrange-move-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#insertrange-move-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" insertRange(move [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{String} [move]: Move the active cell right or down"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("move")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"right"')]),
                            t._v(": Move the active cell to the right"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"bottom"')]),
                            t._v(": move the active cell down"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e(
                            "li",
                            [
                              t._v(
                                "{Array} [data]: The data of a two-dimensional array of cells assigned to the range area, "
                              ),
                              e(
                                "RouterLink",
                                { attrs: { to: "/guide/cell.html" } },
                                [t._v("Cell Object Format Reference")]
                              ),
                              t._v(
                                "; the default value is an empty array, that is, a blank area is inserted"
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The position to be inserted, the range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0, 1],column:[0,1]}")]),
                            t._v(", the default is the current selection"),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            "When data data is not set, an array composed of multiple selections is allowed, and the blank area inserted is the area of these selections."
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            "When the data data is set, it can only be a single selection, and the data data will be inserted into the first cell position of the current selection"
                          ),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "In the specified cell area of the specified worksheet, assign cell data, or create a new blank area, return data data, and at the same time, specify the active cell to move right or down"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Insert a blank cell at the current selection position, and move the current selection cell to the right after inserting\n"
                        ),
                        e("code", [t._v("datadocs.insertRange('right')")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "matrixoperation-type-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#matrixoperation-type-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" matrixOperation(type [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v("{String} [type]: the type of matrix operation"),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("type")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"flipUpDown"')]),
                            t._v(": flip up and down"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"flipLeftRight"')]),
                            t._v(": flip left and right"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"flipClockwise"')]),
                            t._v(": rotate clockwise"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"flipCounterClockwise"')]),
                            t._v(": rotate counterclockwise"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"transpose"')]),
                            t._v(": Transpose"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"deleteZeroByRow"')]),
                            t._v(": delete 0 values at both ends by row"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"deleteZeroByColumn"')]),
                            t._v(": delete zero values at both ends by column"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"removeDuplicateByRow"')]),
                            t._v(": delete duplicate values by row"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"removeDuplicateByColumn"')]),
                            t._v(": remove duplicate values by column"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"newMatrix"')]),
                            t._v(": Produce a new matrix"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Specify the data in the specified cell area of the worksheet to perform matrix operations, and return the result data after the operation is successful"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("Flip current selection upside down")]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.matrixOperation('flipUpDown')"),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            "Copy the original selection as a two-dimensional array:"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v('[["value1","value3"],["value2","value4"]]'),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            "After flipping up and down, the selection is copied as a two-dimensional array:"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v('[["value2","value4"],["value1","value3"]]'),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "matrixcalculation-type-number-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#matrixcalculation-type-number-setting",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" matrixCalculation(type, number [,setting])"),
                  ]
                ),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("{String} [type]: calculation method")]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("type")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [e("code", [t._v('"plus"')]), t._v(": add")]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"minus"')]),
                            t._v(": subtract"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"multiply"')]),
                            t._v(": multiply"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"divided"')]),
                            t._v(": Divide"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"power"')]),
                            t._v(": power"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"root"')]),
                            t._v(": power root"),
                          ]),
                          t._v(" "),
                          e("li", [e("code", [t._v('"log"')]), t._v(": log")]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "{Number} [number]: Calculate the number, such as: 2"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Specify the data in the specified cell area of the worksheet for matrix calculation, and return the result data after the calculation is successful"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "Add 2 to the value of all cells in the current selection"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          e("code", [
                            t._v("datadocs.matrixCalculation('plus', 2)"),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            "Copy the original selection as a two-dimensional array:"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [e("code", [t._v("[[1,2],[3,4]]")])]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            "After adding 2, the selection is copied as a two-dimensional array:"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [e("code", [t._v("[[3,4],[5,6]]")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "worksheet-operations" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#worksheet-operations" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Worksheet operations"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "getallsheets" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getallsheets" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getAllSheets()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Return all worksheet configurations, the format is the same as the worksheet configuration, and the results obtained can be used as options.data when the form is initialized."
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Therefore, this API is suitable for manually operating and configuring a table, and then taking out all the worksheet information to save it, and then use it for table creation in other places. If you want to get all the workbook data including the workbook configuration, it is recommended to use "
                      ),
                      e("a", { attrs: { href: "#toJson()" } }, [
                        t._v("toJson"),
                      ]),
                      t._v(
                        ", and it can be directly used to initialize DataDocs."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Get all the basic information of the first worksheet\n"
                        ),
                        e("code", [t._v("datadocs.getAllSheets()[0]")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getluckysheetfile" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getluckysheetfile" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getLuckysheetfile()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v("Returns a one-dimensional array "),
                      e("code", [t._v("luckysheetfile")]),
                      t._v(" of all table data structures. Unlike the "),
                      e("code", [t._v("getAllSheets")]),
                      t._v(
                        " method, the worksheet parameters obtained by this method will contain many internal variables. The most obvious difference is that the table data operation will maintain "
                      ),
                      e("code", [t._v("luckysheetfile[i]. data")]),
                      t._v(", and the initialization data uses "),
                      e("code", [t._v("options.data[i].celldata")]),
                      t._v(", so "),
                      e("code", [t._v("luckysheetfile")]),
                      t._v(
                        " can be used for debugging, but the initialization table is not applicable."
                      ),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v("In addition, a "),
                      e("code", [t._v("load = 1")]),
                      t._v(
                        " will be added to the loaded worksheet parameters, this parameter needs to be set to 0 when initializing the data. Therefore, to initialize the workbook with the data obtained by "
                      ),
                      e("code", [t._v("getLuckysheetfile()")]),
                      t._v(", two tasks need to be done:"),
                    ]),
                    t._v(" "),
                    e("ul", [
                      e(
                        "li",
                        [
                          t._v("Convert celldata to data, refer to: "),
                          e(
                            "RouterLink",
                            {
                              attrs: {
                                to: "/guide/api.html#transtodata-celldata-setting",
                              },
                            },
                            [t._v("transToData")]
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
                      e("li", [t._v("Load reset to 0 or delete this field")]),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v("Now there is "),
                      e("code", [t._v("getAllSheets")]),
                      t._v(
                        " to complete this work, no need to manually convert the data."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Get all the debugging information of the first worksheet\n"
                        ),
                        e("code", [t._v("datadocs.getLuckysheetfile()[0]")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getsheet-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getsheet-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getSheet([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [index]: worksheet index; the default value is the current worksheet index"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [name]: Worksheet name; the default value is the current worksheet name"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "According to index/order/name, quickly return the configuration of the specified worksheet, same as "
                      ),
                      e("code", [t._v("luckysheetfile[i]")]),
                      t._v(
                        ". If multiple parameters are set, the priority is: index> order> name."
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getsheetdata-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getsheetdata-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getSheetData([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Quickly return the data of the specified worksheet, same as "
                      ),
                      e("code", [t._v("luckysheetfile[i].data")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getconfig-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getconfig-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getConfig([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Quickly return to the config configuration of the specified worksheet, same as "
                      ),
                      e("code", [t._v("luckysheetfile[i].config")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setconfig-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setconfig-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setConfig([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Quickly set the current worksheet config configuration"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "updatasheet-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#updatasheet-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" updataSheet([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v("{Array} [data]: Worksheet Configuration"),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Update the corresponding sheet according to the set sheet configuration"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheetadd-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheetadd-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetAdd([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e(
                            "li",
                            [
                              t._v(
                                "{Object} [sheetObject]: The data of the newly added worksheet; the default value is an empty object.Worksheet data format reference "
                              ),
                              e(
                                "RouterLink",
                                { attrs: { to: "/guide/sheet.html#initial" } },
                                [t._v("options.data")]
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: New worksheet subscript; the default value is the last subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Add a sheet and return the newly added worksheet object. The optional setting data in "
                      ),
                      e("code", [t._v("setting")]),
                      t._v(" is "),
                      e("code", [t._v("sheetObject")]),
                      t._v(", and a blank worksheet will be added if "),
                      e("code", [t._v("sheetObject")]),
                      t._v(" is not passed."),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Add a blank worksheet at the subscript position of the last worksheet\n"
                        ),
                        e("code", [t._v("datadocs.setSheetAdd()")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheetdelete-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheetdelete-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetDelete([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Delete the worksheet of the specified subscript and return the deleted worksheet object"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Delete current worksheet\n"),
                        e("code", [t._v("datadocs.setSheetDelete()")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheetcopy-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheetcopy-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetCopy([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters"),
                      ]),
                    ]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [targetOrder]: The target index position of the newly copied worksheet; the default value is the next index position of the current worksheet index (incremental)\n"
                        ),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: The subscript of the copied worksheet; the default value is the subscript of the current worksheet"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Copy the worksheet with the specified subscript to the specified subscript position, optionally set the specified subscript position "
                      ),
                      e("code", [t._v("targetOrder")]),
                      t._v(" in "),
                      e("code", [t._v("setting")]),
                      t._v(", and return the newly copied worksheet object"),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Copy the current worksheet to the next subscript position\n"
                        ),
                        e("code", [t._v("datadocs.setSheetCopy()")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheethide-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheethide-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetHide([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: The hidden worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Hide the worksheet of the specified subscript and return the hidden worksheet object"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Hide current worksheet\n"),
                        e("code", [t._v("datadocs.setSheetHide(true)")]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("Hide the third worksheet\n"),
                        e("code", [t._v("datadocs.setSheetHide({order:2})")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheetshow-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheetshow-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetShow([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: The subscript of the unhidden worksheet; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Unhide the worksheet of the specified subscript, and return the unhidden worksheet object"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Unhide the third worksheet\n"),
                        e("code", [t._v("datadocs.setSheetShow({order:2})")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheetactive-order-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheetactive-order-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetActive(order [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [order]: The subscript of the worksheet to be activated"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Set the worksheet of the specified subscript as the current worksheet (active state), that is, switch to the specified worksheet and return the activated worksheet object"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Switch to the second worksheet\n"),
                        e("code", [t._v("datadocs.setSheetActive(1)")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheetname-name-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheetname-name-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetName(name [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [t._v("{String} [name]: new worksheet name")]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Modify worksheet name")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          'Modify the name of the current worksheet to "CellSheet"\n'
                        ),
                        e("code", [t._v('datadocs.setSheetName("CellSheet")')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheetcolor-color-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheetcolor-color-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetColor(color [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [t._v("{String} [color]: Worksheet color")]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Set the color at the worksheet name")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Modify the color of the current worksheet name to red\n"
                        ),
                        e("code", [t._v('datadocs.setSheetColor("#ff0000")')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheetmove-type-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheetmove-type-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetMove(type [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{String | Number} [type]: The moving direction of the worksheet or the subscript of the moving target,"
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("type")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"left"')]),
                            t._v(": to the left"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"right"')]),
                            t._v(": to the right"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v("1")]),
                            t._v("/"),
                            e("code", [t._v("2")]),
                            t._v("/"),
                            e("code", [t._v("3")]),
                            t._v("/...: Specify subscript"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Specify the worksheet to move one position to the left or right, or specify subscript, and return the specified worksheet object"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Move the current worksheet one position to the left\n"
                        ),
                        e("code", [t._v('datadocs.setSheetMove("left")')]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "Move the second worksheet to the subscript position of the fourth worksheet\n"
                        ),
                        e("code", [t._v("datadocs.setSheetMove(3,{order:1})")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheetorder-orderlist-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheetorder-orderlist-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetOrder(orderList [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [orderList]: Worksheet order, set the index and order of the worksheet to specify the position, such as:"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "language-json extra-class" }, [
                      e("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        e("code", [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("index"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("'sheet_01'"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("order"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("2")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("index"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("'sheet_02'"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("order"),
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
                            [t._v("}")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("index"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("'sheet_03'"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("order"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
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
                            [t._v("]")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    e("p", [
                      t._v(
                        "The order in the array is not important, the key is to specify the correspondence between sheet index and order."
                      ),
                    ]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Reorder the positions of all worksheets and specify an array of worksheet order."
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "Rearrange the worksheets, this workbook contains 3 worksheets"
                        ),
                      ]),
                    ]),
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
                            [t._v("setSheetOrder")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("index")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'sheet_01'")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("order")]
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
                            [t._v("2")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("index")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'sheet_02'")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("order")]
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
                            [t._v("}")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\t"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("index")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'sheet_03'")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("order")]
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
                            [t._v("0")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
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
                            [t._v("]")]
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setsheetzoom-zoom-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setsheetzoom-zoom-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setSheetZoom(zoom [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [t._v("{Number} [zoom]: Worksheet zoom ratio")]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Set worksheet zoom ratio")]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Set the current worksheet zoom ratio to 0.5"),
                      ]),
                    ]),
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
                            [t._v("setSheetZoom")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0.5")]
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
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "showgridlines-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showgridlines-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" showGridLines([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: The subscript of the worksheet that needs to show the grid lines; the default value is the subscript of the current worksheet"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Show the grid lines of the specified subscript worksheet, and return the worksheet object of the operation"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Show the grid lines of the current worksheet\n"),
                        e("code", [t._v("datadocs.showGridLines()")]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("Show the grid lines of the third worksheet\n"),
                        e("code", [t._v("datadocs.showGridLines({order:2})")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "hidegridlines-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#hidegridlines-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" hideGridLines([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: The subscript of the worksheet that needs to hdie the grid lines; the default value is the subscript of the current worksheet"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Hide the grid lines of the specified subscript worksheet, and return the worksheet object of the operation"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Usage")]), t._v(":")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("Hide grid lines of current worksheet\n"),
                        e("code", [t._v("datadocs.hideGridLines()")]),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("Hide the grid lines of the third worksheet\n"),
                        e("code", [t._v("datadocs.hideGridLines({order:2})")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "workbook-operations" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#workbook-operations" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Workbook operations"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "create-options-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#create-options-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" create(options [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [options]: All configuration information of the table"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function after the table is created successfully"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e(
                      "p",
                      [
                        t._v(
                          "Initialize a DataDocs, which can contain multiple worksheets, refer to "
                        ),
                        e(
                          "RouterLink",
                          { attrs: { to: "/guide/config.html" } },
                          [t._v("Configuration List")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "refresh-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#refresh-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" refresh([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: The callback function after the table is refreshed successfully"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Refresh canvas")]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "scroll-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#scroll-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" scroll([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [scrollWidth]: horizontal scroll value. The default is the current horizontal scroll position."
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [scrollHeight]: Vertical scroll value. The default is the current vertical scroll position."
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [targetRow]: Scroll vertically to the specified row number. The default is the current vertical scroll position."
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [targetColumn]: scroll horizontally to the specified column number. The default is the current horizontal scroll position."
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: The callback function after the table is refreshed successfully"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Scroll current worksheet position")]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "resize-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#resize-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" resize([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Automatically resize the canvas according to the window size"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "destroy-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#destroy-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" destroy([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function after the table is released successfully"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Delete and release table")]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getscreenshot-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getscreenshot-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getScreenshot([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The range of the selection, the format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1],column: [0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Returns the base64 format image generated after the screenshot of the specified selection"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setworkbookname-name-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setworkbookname-name-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setWorkbookName(name [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [t._v("{Number} [name]: Workbook name")]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Set workbook name")]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getworkbookname-name-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getworkbookname-name-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getWorkbookName(name [,setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("get workbook name")]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "undo-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#undo-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" undo([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Undo the current operation and return the operation object that was just undone"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "redo-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#redo-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" redo([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Redo the current operation and return the operation object that was just redone"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "refreshformula-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#refreshformula-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" refreshFormula([setting])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Function} [success]: callback function for the end of the operation"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Force refresh formula. When you directly modify the values of multiple cells without triggering a refresh, and these cells are associated with formulas, you can use this API to force a formula refresh to be triggered at the end."
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "refreshmenubuttonfocus-data-r-c-success" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#refreshmenubuttonfocus-data-r-c-success",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" refreshMenuButtonFocus([data],[r],[c],[success])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [t._v("{Array}  [data]: Operational data")]),
                      t._v(" "),
                      e("li", [t._v("{Number} [r]: Specified row")]),
                      t._v(" "),
                      e("li", [t._v("{Number} [c]: Specified column")]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Function} [success]: callback function for the end of the operation"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Refreshes the top status bar status of the specified cell."
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  {
                    attrs: {
                      id: "checkthestatusoftheselectedcells-type-status",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#checkthestatusoftheselectedcells-type-status",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" checkTheStatusOfTheSelectedCells(type,status)"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [t._v("{String} type: type")]),
                      t._v(" "),
                      e("li", [t._v("{String} status: Target state value")]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Check whether the status of all specified types of cells in the selection meets the conditions (mainly bold, italics, strikeouts, underscores, etc.)."
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "chart" } }, [
                  e(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#chart" } },
                    [t._v("#")]
                  ),
                  t._v(" Chart"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "insertchart-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#insertchart-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" insertChart([setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The selection range of the chart data. The format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1] ,column:[0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Generate a chart in the specified selection area of the specified worksheet, and return the chart parameter object, including the chart id"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "setchart-chartid-attr-value-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#setchart-chartid-attr-value-setting" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setChart(chartId, attr, value [,setting])"),
                  ]
                ),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("p", [
                          t._v(
                            "{String} [chartId]: Specify the id of the chart to be modified"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [t._v("{String} [attr]: attribute type")]),
                        t._v(" "),
                        e("p", [
                          t._v("Possible values of "),
                          e("code", [t._v("attr")]),
                          t._v(" are:"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            e("code", [t._v('"left"')]),
                            t._v(
                              ": the distance from the left to the edge of the worksheet"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"top"')]),
                            t._v(
                              ": the distance from the top edge to the edge of the worksheet"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"width"')]),
                            t._v(": the width of the chart frame"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"height"')]),
                            t._v(": the height of the chart outline"),
                          ]),
                          t._v(" "),
                          e("li", [
                            e("code", [t._v('"chartOptions"')]),
                            t._v(": detailed settings for the chart"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v(
                            "{Number | Object}} [value]: attribute value, when "
                          ),
                          e("code", [t._v("attr")]),
                          t._v(" is "),
                          e("code", [t._v("chartOptions")]),
                          t._v(
                            ", directly set the configuration object of the entire chart"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("p", [
                          t._v("{PlainObject} [setting]: optional parameters"),
                        ]),
                        t._v(" "),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Modify the parameters of the specified id chart and return the modified parameters of the entire chart"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getchart-chartid" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getchart-chartid" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getChart(chartId)"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{String} [chartId]: Specify the chart id to be obtained"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v("Get the parameters of the specified id chart"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "deletechart-chartid-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#deletechart-chartid-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" deleteChart(chartId [,setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{String} [chartId]: the id of the chart to be deleted\nTo"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Delete the chart with the specified id and return the parameters of the deleted chart"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "data-verification" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#data-verification" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Data Verification"),
                ]),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "setdataverification-option-setting" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#setdataverification-option-setting" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setDataVerification(option, [setting])"),
                  ]
                ),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [option]: Configuration information for data verification"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The selection area for data verification, The format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1] ,column:[0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Specify the worksheet range to set the data verification function and set the parameters"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "deletedataverification-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#deletedataverification-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" deleteDataVerification([setting])"),
                ]),
                t._v(" "),
                e("p", [
                  t._v("[todo, to be confirmed whether it is reasonable]"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Array | Object | String} [range]: The selection area for data verification, The format of the supported selection is "
                            ),
                            e("code", [t._v('"A1:B2"')]),
                            t._v(", "),
                            e("code", [t._v('"sheetName!A1:B2"')]),
                            t._v(" or "),
                            e("code", [t._v("{row:[0,1] ,column:[0,1]}")]),
                            t._v(
                              ", can only be a single selection; the default is the current selection"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Specify the worksheet range to delete the data verification function"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "worksheet-protection" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#worksheet-protection" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Worksheet Protection"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "setprotection-option-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setprotection-option-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setProtection(option, [setting])"),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Object} [option]: Configuration information for worksheet protection"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Number} [order]: Worksheet subscript; the default value is the current worksheet subscript"
                            ),
                          ]),
                          t._v(" "),
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Specify the worksheet to set the worksheet protection"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "public-method" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#public-method" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Public method"),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "transtocelldata-data-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#transtocelldata-data-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" transToCellData(data [,setting])"),
                  e("div", { attrs: { id: "transToCellData" } }),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [t._v("{Array} [data]: data\nTo")]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "data => celldata, data two-dimensional array data is converted into a one-dimensional array in {r, c, v} format"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "transtodata-celldata-setting" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#transtodata-celldata-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" transToData(celldata [,setting])"),
                  e("div", { attrs: { id: "transToData" } }),
                ]),
                t._v(" "),
                e("p", [t._v("[todo]")]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [t._v("{Array} [celldata]: data\nTo")]),
                      t._v(" "),
                      e("li", [
                        t._v("{PlainObject} [setting]: optional parameters\n"),
                        e("ul", [
                          e("li", [
                            t._v(
                              "{Function} [success]: callback function for the end of the operation"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "celldata => data, the celldata one-dimensional array data is converted into the two-dimensional array required by the table"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "tojson" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tojson" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" toJson()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "The exported json string can be directly used as the parameter "
                      ),
                      e("code", [t._v("options")]),
                      t._v(" when the workbook is initialized by "),
                      e("code", [t._v("datadocs.create(options)")]),
                      t._v(
                        ". The usage scenario is to manually save all the parameters after the user manipulates the table, and then initialize the table elsewhere. Use, similar to the import and export of a datadocs proprietary format."
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h2", { attrs: { id: "legacy-api" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#legacy-api" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Legacy API"),
                ]),
                t._v(" "),
                e("div", { staticClass: "custom-block warning" }, [
                  e("p", { staticClass: "custom-block-title" }, [
                    t._v("WARNING"),
                  ]),
                  t._v(" "),
                  e("p", [
                    t._v(
                      "To maintain compatibility, the old version of the API is still supported, but its use is deprecated."
                    ),
                  ]),
                ]),
                t._v(" "),
                e("h3", { attrs: { id: "getcellvalue-r-c-data-type" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getcellvalue-r-c-data-type" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getcellvalue([r] [,c] [,data] [,type])"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [r]: The row number of the cell; optional value; an integer starting from 0, 0 means the first row"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [c]: The number of the column where the cell is located; optional value; an integer starting from 0, 0 means the first column"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Array} [data]: table data, two-dimensional array; optional value; default value is the current table data"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{String} [type]: cell attribute value; optional value; the default value is'v', which means to get the actual value of the cell"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v("This method is to get the value of the cell."),
                    ]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "datadocs.getcellvalue(): returns all data of the current worksheet;"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "datadocs.getcellvalue(0): returns the data of the first row of the current worksheet;"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "datadocs.getcellvalue(null,0): returns the data in the first column of the current worksheet;"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "datadocs.getcellvalue(0,0): returns the v value of the cell data in the first row and the first column of the current worksheet;"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "datadocs.getcellvalue(1,1,null,'m'): Returns the original value of the cell in the second row and second column of the specified data."
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Special case: the cell format is yyyy-MM-dd, when the type is'v', the display value of'm' will be mandatory"
                      ),
                    ]),
                    t._v(" "),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommend to use the new API: "),
                        e("a", { attrs: { href: "#getCellValue" } }, [
                          t._v("getCellValue"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getluckysheetfile-2" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getluckysheetfile-2" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getluckysheetfile()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v("Returns a one-dimensional array "),
                      e("code", [t._v("luckysheetfile")]),
                      t._v(" of all table data structures"),
                    ]),
                    t._v(" "),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommend to use new API: "),
                        e("a", { attrs: { href: "#getLuckysheetfile()" } }, [
                          t._v("getLuckysheetfile"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getconfig" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getconfig" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getconfig()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Quickly return to the current sheet config configuration, the config information of each worksheet is still contained in the luckysheetfile."
                      ),
                    ]),
                    t._v(" "),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommend to use new API: "),
                        e(
                          "a",
                          { attrs: { href: "#getConfig(%5Bsetting%5D)" } },
                          [t._v("getConfig")]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getluckysheet-select-save" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getluckysheet-select-save" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getluckysheet_select_save()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Returns an array of current selection objects, there may be multiple selections."
                      ),
                    ]),
                    t._v(" "),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommend to use new API: "),
                        e("a", { attrs: { href: "#getRange()" } }, [
                          t._v("getRange"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  { attrs: { id: "getdatabyselection-range-sheetorder" } },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#getdatabyselection-range-sheetorder" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" getdatabyselection([range] [,sheetOrder])"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v("{Object} [range]: Selection object, "),
                        e("code", [
                          t._v("object: {row: [r1, r2], column: [c1, c2] }"),
                        ]),
                        t._v("; the default is the current first selection."),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [sheetOrder]: Table subscript, an integer starting from 0, 0 means the first table; the default is the current table subscript."
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Returns the data of the first selection in a table."
                      ),
                    ]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        e("code", [t._v("datadocs.getdatabyselection()")]),
                        t._v(
                          ": Returns the data of the current selection of the current worksheet"
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        e("code", [
                          t._v("datadocs.getdatabyselection(null,1)"),
                        ]),
                        t._v(
                          ": Returns the data of the current selection of the second worksheet"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommend to use the new API: "),
                        e(
                          "a",
                          { attrs: { href: "#getRangeValue(%5Bsetting%5D)" } },
                          [t._v("getRangeValue")]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e(
                  "h3",
                  {
                    attrs: {
                      id: "luckysheetrefreshgrid-scrollwidth-scrollheight",
                    },
                  },
                  [
                    e(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#luckysheetrefreshgrid-scrollwidth-scrollheight",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" luckysheetrefreshgrid(scrollWidth, scrollHeight)"),
                  ]
                ),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [scrollWidth]: horizontal scroll value. The default is the current horizontal scroll position."
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [scrollHeight]: Vertical scroll value. The default is the current vertical scroll position."
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Refresh the canvas display data according to scrollWidth and scrollHeight."
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setcellvalue-r-c-d-v" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setcellvalue-r-c-d-v" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setcellvalue(r, c, d, v)"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Number} [r]: The row number of the cell; an integer starting from 0, 0 means the first row."
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Number} [c]: The number of the column where the cell is located; an integer starting from 0, 0 means the first column."
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Array} [d]: table data; optional value; two-dimensional array."
                        ),
                      ]),
                      t._v(" "),
                      e("li", [
                        t._v(
                          "{Object | String | Number} [v]: The value to be set; it can be an object, and the object must conform to the cell object format."
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v("Set the value of a cell. Can be used with "),
                      e("code", [t._v("datadocs.jfrefreshgrid()")]),
                      t._v(" to refresh and view cell value changes."),
                    ]),
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
                            [t._v("setcellvalue")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
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
                            [t._v("0")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" datadocs"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("flowdata")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'abc'")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
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
                            [t._v("jfrefreshgrid")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          e(
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
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "jfrefreshgrid" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#jfrefreshgrid" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" jfrefreshgrid()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Refresh canvas")]),
                    t._v(" "),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommended new API: "),
                        e("a", { attrs: { href: "#refresh(%5Bsetting%5D)" } }, [
                          t._v("refresh"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "setluckysheet-select-save-v" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setluckysheet-select-save-v" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setluckysheet_select_save(v)"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [v]：The selection value (array) to be set. Comply with the selection format rules, such as "
                        ),
                        e("code", [
                          t._v("[{ row: [r1, r2], column: [c1, c2] }]"),
                        ]),
                        t._v("."),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Set the value of the current table selection area. With "
                      ),
                      e("code", [t._v("datadocs.selectHightlightShow()")]),
                      t._v(
                        ", you can view the selection changes in the interface."
                      ),
                    ]),
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
                            [t._v("setluckysheet_select_save")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("row")]
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
                            [t._v("0")]
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
                            [t._v("1")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("column")]
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
                            [t._v("0")]
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
                            [t._v("1")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
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
                            [t._v("selectHightlightShow")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommend to use new API:"),
                        e("a", { attrs: { href: "#setRangeShow" } }, [
                          t._v("setRangeShow"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "selecthightlightshow" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#selecthightlightshow" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" selectHightlightShow()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Highlight the current selection")]),
                    t._v(" "),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommend to use new API:"),
                        e("a", { attrs: { href: "#setRangeShow" } }, [
                          t._v("setRangeShow"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "flowdata" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#flowdata" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" flowdata()"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [t._v("Quickly get the data of the current table")]),
                    t._v(" "),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommend to use new API:"),
                        e("a", { attrs: { href: "#getSheetData()" } }, [
                          t._v("getSheetData"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "buildgriddata-file" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#buildgriddata-file" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" buildGridData(file)"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e(
                        "li",
                        [
                          t._v("{Object} [file]："),
                          e(
                            "RouterLink",
                            { attrs: { to: "/guide/sheet.html" } },
                            [t._v("luckysheetfile")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v(
                        "Generate a two-dimensional array that the table can recognize"
                      ),
                    ]),
                    t._v(" "),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommend to use new API:"),
                        e("a", { attrs: { href: "#transToData" } }, [
                          t._v("transToData"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("hr"),
                t._v(" "),
                e("h3", { attrs: { id: "getgriddata-data" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getgriddata-data" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getGridData(data)"),
                ]),
                t._v(" "),
                e("ul", [
                  e("li", [
                    e("p", [e("strong", [t._v("Parameter")]), t._v("：")]),
                    t._v(" "),
                    e("ul", [
                      e("li", [
                        t._v(
                          "{Array} [data]: Two-dimensional array data of the worksheet"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("li", [
                    e("p", [e("strong", [t._v("Explanation")]), t._v("：")]),
                    t._v(" "),
                    e("p", [
                      t._v("Convert two-dimensional array data into "),
                      e("code", [t._v("{r, c, v}")]),
                      t._v(" format one-dimensional array"),
                    ]),
                    t._v(" "),
                    e("blockquote", [
                      e("p", [
                        t._v("Recommend to use new API:"),
                        e("a", { attrs: { href: "#transToCellData" } }, [
                          t._v("transToCellData"),
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
      e.default = n.exports;
    },
  },
]);
