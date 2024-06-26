(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    328: function (t, s, a) {
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
                s("h1", { attrs: { id: "api" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#api" } },
                    [t._v("#")]
                  ),
                  t._v(" API"),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Luckysheet针对常用的数据操作需求，开放了主要功能的API，开发者可以根据需要进行任意对接开发。"
                  ),
                ]),
                t._v(" "),
                s("p", [t._v("使用注意：")]),
                t._v(" "),
                s("ol", [
                  s("li", [
                    t._v(
                      "script全局引入时，所有API均挂载到window.luckysheet对象下面，可以在浏览器控制台打印看到；npm引入时，API也全部挂载在luckysheet对象下"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("code", [t._v("success")]),
                    t._v("回调函数第一个参数为API方法的返回值"),
                  ]),
                  t._v(" "),
                  s("li", [
                    t._v("需要新的API请到github "),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/issues/new/choose",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("Issues"), s("OutboundLink")],
                      1
                    ),
                    t._v("中提交，根据点赞数决定是否开放新API"),
                  ]),
                  t._v(" "),
                  s("li", [
                    t._v("API方法中所需的"),
                    s("code", [t._v("order")]),
                    t._v("参数为工作表对象中的"),
                    s("code", [t._v("order")]),
                    t._v("的值，而不是"),
                    s("code", [t._v("index")]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "单元格操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#单元格操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 单元格操作"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "getcellvalue-row-column-setting" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getcellvalue-row-column-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getCellValue(row, column [,setting])"),
                  s("div", { attrs: { id: "getCellValue" } }),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "{Number} [row]: 单元格所在行数；从0开始的整数，0表示第一行"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "{Number} [column]: 单元格所在列数；从0开始的整数，0表示第一列"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{String} [type]: 单元格的值类型，可以设置为原始值"
                            ),
                            s("code", [t._v("v")]),
                            t._v("或者显示值"),
                            s("code", [t._v("m")]),
                            t._v("；默认值为"),
                            s("code", [t._v("v")]),
                            t._v(",表示获取单元格的实际值"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("获取单元格的值。")]),
                    t._v(" "),
                    s("p", [
                      t._v("特殊情况，单元格格式为"),
                      s("code", [t._v("yyyy-MM-dd")]),
                      t._v("，"),
                      s("code", [t._v("type")]),
                      t._v("为"),
                      s("code", [t._v("'v'")]),
                      t._v("时会强制取"),
                      s("code", [t._v("'m'")]),
                      t._v("显示值"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("返回当前工作表第1行第1列单元格的数据的v值"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.getCellValue(0, 0)")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("返回指定data数据的第2行第2列单元格的显示值。"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v('datadocs.getCellValue(1, 1, {type:"m"})'),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "setcellvalue-row-column-value-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "{Number} [row]: 单元格所在行数；从0开始的整数，0表示第一行"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "{Number} [column]: 单元格所在列数；从0开始的整数，0表示第一列"
                        ),
                      ]),
                      t._v(" "),
                      s(
                        "li",
                        [
                          t._v(
                            "{Object | String | Number} [value]: 要设置的值；可以为字符串或数字，或为符合Luckysheet单元格格式的对象，参考 "
                          ),
                          s(
                            "RouterLink",
                            { attrs: { to: "/guide/cell.html" } },
                            [t._v("单元格属性表")]
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Boolean} [isRefresh]: 是否刷新界面；默认为"),
                            s("code", [t._v("true")]),
                            t._v(
                              "；用于多个单元格赋值时候控制节流，前面单元格赋值的时候应设置为\t"
                            ),
                            s("code", [t._v("false")]),
                            t._v("，最后一个单元格赋值时设置为"),
                            s("code", [t._v("true")]),
                            t._v("。"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "设置某个单元格的值，也可以设置整个单元格对象，用于同时设置多个单元格属性。"
                      ),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "如果需要更新公式，也可以在这里赋值，Luckysheet在内部会主动把这个公式做计算并加入到公式链中，最后重刷界面。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v('设置当前工作表"A1"单元格的值为"1"\n    \t'),
                          s("code", [t._v("datadocs.setCellValue(0, 0, 1);")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v(
                            '设置当前工作表"B1"单元格的值为公式"=sum(A1)"\n    \t'
                          ),
                          s("code", [
                            t._v('datadocs.setCellValue(0, 1, "=sum(A1)");'),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v(
                            '设置当前工作表"C1"单元格的值为公式"=sum(A1:B1"，并带有红色背景，单元格对象可以不带'
                          ),
                          s("code", [t._v("v")]),
                          t._v("和"),
                          s("code", [t._v("m")]),
                          t._v(
                            "值，Luckysheet会根据公式信息自动计算结果，如果带了未更新或者是非公式结果的"
                          ),
                          s("code", [t._v("v")]),
                          t._v("和"),
                          s("code", [t._v("m")]),
                          t._v(
                            "值，Luckysheet也仍然会根据公式实际关联的数据计算出准备的结果。\n    \t"
                          ),
                          s("code", [
                            t._v(
                              'datadocs.setCellValue(0, 2, {f: "=sum(A1:B1)", bg:"#FF0000"})'
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [
                          t._v('再次设置"C1"单元格新的公式仍然可以生效'),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v(
                              'datadocs.setCellValue(0, 2, {f: "=sum(A1)", bg:"#00FF00"})'
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "clearcell-row-column-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "{Number} [row]: 单元格所在行数；从0开始的整数，0表示第一行"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "{Number} [column]: 单元格所在列数；从0开始的整数，0表示第一列"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "清除指定工作表指定单元格的内容，返回清除掉的数据，不同于删除单元格的功能，不需要设定单元格移动情况"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("清空单元格"),
                        s("code", [t._v("B2")]),
                        t._v("内容\n"),
                        s("code", [t._v("datadocs.clearCell(1,1)")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "deletecell-move-row-column-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "{String} [move]: 删除后，右侧还是下方的单元格移动"
                          ),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("move")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"left"')]),
                            t._v(": 右侧单元格左移"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"up"')]),
                            t._v(": 下方单元格上移"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v(
                            "{Number} [row]: 单元格所在行数；从0开始的整数，0表示第一行"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v(
                            "{Number} [column]: 单元格所在列数；从0开始的整数，0表示第一列"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "删除指定工作表指定单元格，返回删除掉的数据，同时，指定是右侧单元格左移还是下方单元格上移"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("删除当前单元格并且在删除后，右侧单元格左移\n"),
                        s("code", [t._v("datadocs.deleteCell('left')")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  {
                    attrs: {
                      id: "setcellformat-row-column-attr-value-setting",
                    },
                  },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "{Number} [row]: 单元格所在行数；从0开始的整数，0表示第一行"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v(
                            "{Number} [column]: 单元格所在列数；从0开始的整数，0表示第一列"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s(
                          "p",
                          [
                            t._v("{String} [attr]: 属性类型，参考 "),
                            s(
                              "RouterLink",
                              { attrs: { to: "/guide/cell.html" } },
                              [t._v("单元格属性表")]
                            ),
                            t._v("的属性值"),
                          ],
                          1
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        s(
                          "p",
                          [
                            t._v(
                              "{String | Number | Object} [value]: 具体的设置值，一个属性会对应多个值，参考 "
                            ),
                            s(
                              "RouterLink",
                              { attrs: { to: "/guide/cell.html" } },
                              [t._v("单元格属性表")]
                            ),
                            t._v("的值示例，如果属性类型"),
                            s("code", [t._v("attr")]),
                            t._v("是单元格格式"),
                            s("code", [t._v("ct")]),
                            t._v("，则设置值"),
                            s("code", [t._v("value")]),
                            t._v("应提供ct对象，如："),
                            s("code", [t._v('{fa:"General", t:"g"}')]),
                            t._v("，比如设置A1单元格的格式为百分比格式："),
                          ],
                          1
                        ),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v(
                              'datadocs.setCellFormat(0, 0, "ct", {fa:"0.00%", t:"n"})'
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "设置某个单元格的属性，如果要设置单元格的值或者同时设置多个单元格属性，推荐使用"
                      ),
                      s("code", [t._v("setCellValue")]),
                    ]),
                    t._v(" "),
                    s("p", [t._v("特殊的设置")]),
                    t._v(" "),
                    s("p", [
                      t._v("边框设置时，attr为"),
                      s("code", [t._v('"bd"')]),
                      t._v("，value为一个key/value对象，需要同时设置边框类型:"),
                      s("code", [t._v("borderType")]),
                      t._v("/边框粗细:"),
                      s("code", [t._v("style")]),
                      t._v("/边框颜色:"),
                      s("code", [t._v("color")]),
                      t._v("，比如设置A1单元格的边框为所有/红色/细："),
                    ]),
                    t._v(" "),
                    s("p", [
                      s("code", [
                        t._v(
                          'datadocs.setCellFormat(0, 0, "bd", {borderType: "border-right",style: "1", color: "#ff0000"})'
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("p", [t._v("完整可选的设置参数如下：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("边框类型 "),
                        s("code", [
                          t._v(
                            'borderType："border-left" | "border-right" | "border-top" | "border-bottom" | "border-all" | "border-outside" | "border-inside" | "border-horizontal" | "border-vertical" | "border-none"'
                          ),
                        ]),
                        t._v("，"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("边框粗细 "),
                        s("code", [
                          t._v(
                            "style: 1 Thin | 2 Hair | 3 Dotted | 4 Dashed | 5 DashDot | 6 DashDotDot | 7 Double | 8 Medium | 9 MediumDashed | 10 MediumDashDot | 11 MediumDashDotDot | 12 SlantedDashDot | 13 Thick"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("边框颜色 "),
                        s("code", [t._v("color: 16进制颜色值")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("设置当前工作表A1单元格文本加粗\n"),
                        s("code", [
                          t._v('datadocs.setCellFormat(0, 0, "bl", 1)'),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("设置第二个工作表的B2单元格背景为红色\n"),
                        s("code", [
                          t._v(
                            'datadocs.setCellFormat(1, 1, "bg", "#ff0000", {order:1})'
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v('设置当前工作表"A1"单元格的值为"abc"\n'),
                        s("code", [
                          t._v("datadocs.setCellFormat(0, 0, 'v', 'abc');"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "find-content-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{String} [content]: 要查找的内容")]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Boolean} [isRegularExpression]: 是否正则表达式匹配；默认为 "
                            ),
                            s("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Boolean} [isWholeWord]: 是否整词匹配；默认为 "
                            ),
                            s("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Boolean} [isCaseSensitive]: 是否区分大小写匹配；默认为 "
                            ),
                            s("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{String} [type]: 单元格属性；默认值为"),
                            s("code", [t._v('"m"')]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "查找一个工作表中的指定内容，返回查找到的内容组成的单元格一位数组，数据格式同"
                      ),
                      s("code", [t._v("celldata")]),
                      t._v("。"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("当前工作表查找"),
                        s("code", [t._v('"value"')]),
                        t._v("字符串\n"),
                        s("code", [t._v('datadocs.find("value")')]),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("当前工作表查找公式包含"),
                        s("code", [t._v('"SUM"')]),
                        t._v("的单元格\n"),
                        s("code", [t._v('datadocs.find("SUM",{type:"f"})')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "replace-content-replacecontent-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{String} [content]: 要查找的内容")]),
                      t._v(" "),
                      s("li", [
                        t._v("{String} [replaceContent]: 要替换的内容"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Boolean} [isRegularExpression]: 是否正则表达式匹配；默认为 "
                            ),
                            s("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Boolean} [isWholeWord]: 是否整词匹配；默认为 "
                            ),
                            s("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Boolean} [isCaseSensitive]: 是否区分大小写匹配；默认为 "
                            ),
                            s("code", [t._v("false")]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "查找一个工作表中的指定内容并替换成新的内容，返回替换后的内容组成的单元格一位数组，数据格式同"
                      ),
                      s("code", [t._v("celldata")]),
                      t._v("。"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("当前工作表查找"),
                        s("code", [t._v('"value"')]),
                        t._v("字符串并替换为"),
                        s("code", [t._v('"out"')]),
                        t._v(" "),
                        s("code", [t._v('datadocs.replace("value", "out")')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "exiteditmode-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "退出编辑模式。鼠标双击单元格后，会进入单元格编辑模式，编辑完成后，当鼠标再次点击别的地方输入框失焦的时候，则会退出编辑模式，随即单元格的值会进行保存。此Api就是自动退出编辑模式的操作，主要是为了触发自动保存单元格。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("手动触发退出编辑模式\n"),
                        s("code", [t._v("datadocs.exitEditMode()")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h2", { attrs: { id: "行和列操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#行和列操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 行和列操作"),
                ]),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "sethorizontalfrozen-isrange-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{Boolean} [isRange]: 是否冻结行到选区\n"),
                          s("code", [t._v("isRange")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"false"')]),
                            t._v(": 冻结首行"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"true"')]),
                            t._v(": 冻结行到选区"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("{Array | Object | String} [range]: "),
                            s("code", [t._v("isRange")]),
                            t._v("为"),
                            s("code", [t._v("true")]),
                            t._v("的时候设置，开启冻结的单元格位置，格式为"),
                            s("code", [
                              t._v("{ row_focus:0, column_focus:0 }"),
                            ]),
                            t._v(
                              "，意为当前激活的单元格的行数和列数；默认从当前选区最后的一个选区中取得"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("冻结行操作")]),
                    t._v(" "),
                    s("p", [
                      t._v("特别注意，只有在"),
                      s("code", [t._v("isRange")]),
                      t._v("设置为"),
                      s("code", [t._v("true")]),
                      t._v("的时候，才需要设置"),
                      s("code", [t._v("setting")]),
                      t._v("中的"),
                      s("code", [t._v("range")]),
                      t._v("，且与一般的range格式不同。"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("冻结首行")]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.setHorizontalFrozen(false)"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("冻结到"),
                          s("code", [t._v("B5")]),
                          t._v("选区"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
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
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "setverticalfrozen-isrange-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{Boolean} [isRange]: 是否冻结列到选区\n"),
                          s("code", [t._v("isRange")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"false"')]),
                            t._v(": 冻结首列"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"true"')]),
                            t._v(": 冻结列到选区"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("{Array | Object | String} [range]: "),
                            s("code", [t._v("isRange")]),
                            t._v("为"),
                            s("code", [t._v("true")]),
                            t._v("的时候设置，开启冻结的单元格位置，格式为"),
                            s("code", [
                              t._v("{ row_focus:0, column_focus:0 }"),
                            ]),
                            t._v(
                              "，意为当前激活的单元格的行数和列数；默认从当前选区最后的一个选区中取得"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("冻结列操作")]),
                    t._v(" "),
                    s("p", [
                      t._v("特别注意，只有在"),
                      s("code", [t._v("isRange")]),
                      t._v("设置为"),
                      s("code", [t._v("true")]),
                      t._v("的时候，才需要设置"),
                      s("code", [t._v("setting")]),
                      t._v("中的"),
                      s("code", [t._v("range")]),
                      t._v("，且与一般的range格式不同。"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("冻结首列")]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.setVerticalFrozen(false)"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setbothfrozen-isrange-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{Boolean} [isRange]: 是否冻结行列到选区\n"),
                          s("code", [t._v("isRange")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"false"')]),
                            t._v(": 冻结行列"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"true"')]),
                            t._v(": 冻结行列到选区"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("{Array | Object | String} [range]: "),
                            s("code", [t._v("isRange")]),
                            t._v("为"),
                            s("code", [t._v("true")]),
                            t._v("的时候设置，开启冻结的单元格位置，格式为"),
                            s("code", [
                              t._v("{ row_focus:0, column_focus:0 }"),
                            ]),
                            t._v(
                              "，意为当前激活的单元格的行数和列数；默认从当前选区最后的一个选区中取得"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("冻结行列操作")]),
                    t._v(" "),
                    s("p", [
                      t._v("特别注意，只有在"),
                      s("code", [t._v("isRange")]),
                      t._v("设置为"),
                      s("code", [t._v("true")]),
                      t._v("的时候，才需要设置"),
                      s("code", [t._v("setting")]),
                      t._v("中的"),
                      s("code", [t._v("range")]),
                      t._v("，且与一般的range格式不同。"),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "如果想在工作簿初始化后使用此API设置冻结，可以在工作簿创建后的钩子函数中执行，比如："
                      ),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          t._v("datadocs"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("create")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
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
                                class: "token literal-property property",
                              },
                            },
                            [t._v("hook")]
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
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token function-variable function",
                              },
                            },
                            [t._v("workbookCreateAfter")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("function")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n\t\t\t\tluckysheet"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("setBothFrozen")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token boolean" } },
                            [t._v("false")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n\t\t\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n\t\t"),
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
                            [t._v(")")]
                          ),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("冻结行列")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.setBothFrozen(false)")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "cancelfrozen-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("取消冻结操作")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("取消冻结")]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.cancelFrozen()")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "insertrow-row-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{Number} [row]: 在第几行插入空白行，从0开始"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("{Number} [number]: 插入的空白行数；默认为 1"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("在第"),
                      s("code", [t._v("row")]),
                      t._v("行的位置，插入"),
                      s("code", [t._v("number")]),
                      t._v("行空白行"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("在第2行的位置插入1行空白行")]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.insertRow(1)")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "insertcolumn-column-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{Number} [column]: 在第几列插入空白列")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("{Number} [number]: 插入的空白列数；默认为 1"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("在第"),
                      s("code", [t._v("column")]),
                      t._v("列的位置，插入"),
                      s("code", [t._v("number")]),
                      t._v("列空白列"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("在第1列的位置插入3行空白行")]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.insertColumn(0, { number: 3 })"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "deleterow-rowstart-rowend-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{Number} [rowStart]: 要删除的起始行")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{Number} [rowEnd]: 要删除的结束行")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("删除指定的行")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "特别提醒，删除行之后，行的序号并不会变化，下面的行会补充到上面，注意观察数据是否被正确删除即可。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("删除2-4行")]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.deleteRow(1, 3)")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  {
                    attrs: { id: "deletecolumn-columnstart-columnend-setting" },
                  },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{Number} [columnStart]: 要删除的起始列"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{Number} [columnEnd]: 要删除的结束列")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("删除指定的列")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "特别提醒，删除列之后，列的序号并不会变化，右边的列会补充到左边，注意观察数据是否被正确删除即可。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("删除2-4列")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.deleteColumn(1, 3)")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "hiderow-rowstart-rowend-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{Number} [rowStart]: 要隐藏的起始行")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{Number} [rowEnd]: 要隐藏的结束行")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("隐藏指定的行")]),
                    t._v(" "),
                    s("p", [t._v("特别提醒，隐藏行之后，行的序号会变化。")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("隐藏2-4行")]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.hideRow(1, 3)")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  {
                    attrs: {
                      id: "hidecolumn-columnstart-columnend-setting-todo",
                    },
                  },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{Number} [columnStart]: 要隐藏的起始列"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{Number} [columnEnd]: 要隐藏的结束列")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("隐藏指定的列")]),
                    t._v(" "),
                    s("p", [t._v("特别提醒，隐藏列之后，列的序号会变化。")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("隐藏2-4列")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.hideColumn(1, 3)")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "showrow-rowstart-rowend-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{Number} [rowStart]: 要显示的起始行")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{Number} [rowEnd]: 要显示的结束行")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("显示指定的行")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("显示2-4行")]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.showRow(1, 3)")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  {
                    attrs: {
                      id: "showcolumn-columnstart-columnend-setting-todo",
                    },
                  },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{Number} [columnStart]: 要显示的起始列"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{Number} [columnEnd]: 要显示的结束列")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("显示指定的列")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("显示2-4列")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.showColumn(1, 3)")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setrowheight-rowinfo-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{Object} [rowInfo]: 行数和高度对应关系"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("设置指定行的高度")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("设置第一行高度为50px，第二行高度为60px"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.setRowHeight({0：50，1：60})"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "setcolumnwidth-columninfo-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{Object} [columnInfo]: 列数和宽度对应关系"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("设置指定列的宽度")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("设置第一列宽度为50px，第二列宽度为60px"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.setColumnWidth({0：50，1：60})"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getrowheight-rowinfo-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "{Array} [rowInfo]: 行号下标组成的数组；行号下标从0开始；"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "获取指定工作表指定行的高度，得到行号和高度对应关系的对象（第一行行号为0）"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "第一行高度为50px，第二行高度为60px，获取这些值"
                          ),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.getRowHeight([0,1])")]),
                          t._v("\n返回得到\n"),
                          s("code", [t._v("{0：50，1：60}")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "getcolumnwidth-columninfo-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "{Array} [columnInfo]: 列号下标组成的数组；列号下标从0开始；"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "获取指定工作表指定列的宽度，得到列号和宽度对应关系的对象（第一列列号为0）"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "第一列宽度为50px，第二列宽度为60px，获取这些值"
                          ),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.getColumnWidth([0,1])")]),
                          t._v("\n返回得到\n"),
                          s("code", [t._v("{0：50，1：60}")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getdefaultrowheight-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("获取工作表的默认行高")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("返回工作表的默认行高")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.getDefaultRowHeight()")]),
                          t._v("\n返回得到\n"),
                          s("code", [t._v("19")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getdefaultcolwidth-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("获取工作表的默认列宽")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("返回工作表的默认列宽")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.getDefaultColWidth()")]),
                          t._v("\n返回得到\n"),
                          s("code", [t._v("73")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h2", { attrs: { id: "选区操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#选区操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 选区操作"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "getrange" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "返回当前选区对象的数组，可能存在多个选区。每个选区的格式为row/column信息组成的对象"
                      ),
                      s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v('当前选区为"A1:B2"和"B4:C5"，执行')]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.getRange()")])]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
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
                                t._v(" "),
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
                                  [t._v("]")]
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
                                t._v("\n\t"),
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("4")]
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
                                t._v(" "),
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
                                  [t._v("]")]
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
                                t._v("\n"),
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
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getrangewithflatten" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "返回表示指定区域内所有单元格位置的数组，区别getRange方法，该方法以cell单元格(而非某块连续的区域)为单位来组织选区的数据。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("在表格中选择指定的区域，然后执行")]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.getRange()")])]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
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
                                  [t._v(",")]
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
                                  [t._v(",")]
                                ),
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
                                  [t._v(",")]
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t"),
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
                                  [t._v(",")]
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
                                t._v("\n\t"),
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
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
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
                                  [t._v(",")]
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
                                  [t._v("}")]
                                ),
                                t._v("\n"),
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
                        s("p", [
                          t._v(
                            '其中，{"row":[0,0],"column":[0,2]} 表示的是一整块连续的区域。'
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("在表格中选择上面的区域，然后执行")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.getRangeWithFlatten()")]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
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
                                t._v("\n\t"),
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
                                t._v("\n\t"),
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
                                t._v("\n\t"),
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
                                t._v("\n\t"),
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
                                  [t._v("}")]
                                ),
                                t._v("\n"),
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
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getrangevalueswithflatte" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("返回表示指定区域内所有单元格内容的对象数组"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("在表格中选择指定的区域，然后执行")]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.getRange()")])]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
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
                                  [t._v(",")]
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
                                  [t._v(",")]
                                ),
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
                                  [t._v(",")]
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
                                  [t._v(",")]
                                ),
                                t._v("\n\t"),
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
                                  [t._v(",")]
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
                                t._v("\n\t"),
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
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
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
                                  [t._v(",")]
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
                                  [t._v("}")]
                                ),
                                t._v("\n"),
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
                        s("p", [
                          t._v(
                            '其中，{"row":[0,0],"column":[0,2]} 表示的是一整块连续的区域。'
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("在表格中选择上面的区域，然后执行")]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.getRangeValuesWithFlatte()"),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v("11")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v('"n"')]
                                ),
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"1"')]
                                ),
                                t._v("\n\t"),
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
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v("11")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v('"n"')]
                                ),
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"2"')]
                                ),
                                t._v("\n\t"),
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
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v("11")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v('"n"')]
                                ),
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t"),
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
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
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
                                  [t._v('"Background"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v('"g"')]
                                ),
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"Background"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v("11")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t"),
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
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
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
                                  [t._v('"Border"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v('"g"')]
                                ),
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"Border"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v("11")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t"),
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getrangeaxis" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "返回对应当前选区的坐标字符串数组，可能存在多个选区。每个选区可能是单个单元格(如 A1)或多个单元格组成的矩形区域(如 D9:E12)"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            '当前选区为"E10:E14"、"A7:B13"、"C4"、 "A3"和"C6:D9"，执行'
                          ),
                        ]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.getRangeAxis()")])]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"E10:E14"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"A7:B13"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"C4"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"A3"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"C6:D9"')]
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
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getrangevalue-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "返回指定工作表指定范围的单元格二维数组数据，每个单元格为一个对象。"
                      ),
                    ]),
                    t._v(" "),
                    s(
                      "p",
                      [
                        s("RouterLink", { attrs: { to: "/guide/cell.html" } }, [
                          t._v("单元格对象格式参考"),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v('当前选区为"A1:B2"，执行')]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.getRangeValue()")])]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v('"vaule1"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"vaule1"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"rgba(255,255,255)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v("11")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v('"value3"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value3"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"rgba(255,255,255)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v("11")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
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
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v('"vaule2"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"vaule2"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"rgba(255,255,255)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v("11")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  [t._v('"value4"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value4"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bg"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"rgba(255,255,255)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"bl"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"it"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ff"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"fs"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v("11")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"rgb(51, 51, 51)"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ht"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"vt"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getrangehtml-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，允许多个选区组成的数组；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("复制指定工作表指定单元格区域的数据，返回包含"),
                      s("code", [t._v("<table>")]),
                      t._v(
                        "html格式的数据，可用于粘贴到excel中保持单元格样式。"
                      ),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "特别注意，如果复制多个选区，这几个选区必须有相同的行或者相同的列才能复制，复制出的结果也会自动合并成衔接的数组，比如，多选"
                      ),
                      s("code", [t._v('"C18:C20"')]),
                      t._v(" / "),
                      s("code", [t._v('"E18:E20"')]),
                      t._v(" / "),
                      s("code", [t._v('"G18:H20"')]),
                      t._v("是允许的，但是多选"),
                      s("code", [t._v('"C18:C20"')]),
                      t._v(" / "),
                      s("code", [t._v('"E18:E21"')]),
                      t._v("是不允许的"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v('当前选区为"A1:B2"，执行')]),
                        t._v(" "),
                        s("p", [s("code", [t._v("datadocs.getRangeHtml()")])]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
                        s("div", { staticClass: "language-html extra-class" }, [
                          s(
                            "pre",
                            { pre: !0, attrs: { class: "language-html" } },
                            [
                              s("code", [
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-name" },
                                      },
                                      [t._v("data-type")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-value" },
                                      },
                                      [
                                        s(
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
                                        s(
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
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-name" },
                                      },
                                      [t._v("width")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-value" },
                                      },
                                      [
                                        s(
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
                                        s(
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
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-name" },
                                      },
                                      [t._v("width")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token attr-value" },
                                      },
                                      [
                                        s(
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
                                        s(
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
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token special-attr" },
                                      },
                                      [
                                        s(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: { class: "token attr-name" },
                                          },
                                          [t._v("style")]
                                        ),
                                        s(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token attr-value",
                                            },
                                          },
                                          [
                                            s(
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
                                            s(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                            s(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class:
                                                    "token value css language-css",
                                                },
                                              },
                                              [
                                                s(
                                                  "span",
                                                  {
                                                    pre: !0,
                                                    attrs: {
                                                      class: "token property",
                                                    },
                                                  },
                                                  [t._v("height")]
                                                ),
                                                s(
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
                                                s(
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
                                            s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token special-attr" },
                                      },
                                      [
                                        s(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: { class: "token attr-name" },
                                          },
                                          [t._v("style")]
                                        ),
                                        s(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token attr-value",
                                            },
                                          },
                                          [
                                            s(
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
                                            s(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                            s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token special-attr" },
                                      },
                                      [
                                        s(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: { class: "token attr-name" },
                                          },
                                          [t._v("style")]
                                        ),
                                        s(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token attr-value",
                                            },
                                          },
                                          [
                                            s(
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
                                            s(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                            s(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class:
                                                    "token value css language-css",
                                                },
                                              },
                                              [
                                                s(
                                                  "span",
                                                  {
                                                    pre: !0,
                                                    attrs: {
                                                      class: "token property",
                                                    },
                                                  },
                                                  [t._v("height")]
                                                ),
                                                s(
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
                                                s(
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
                                            s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token special-attr" },
                                      },
                                      [
                                        s(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: { class: "token attr-name" },
                                          },
                                          [t._v("style")]
                                        ),
                                        s(
                                          "span",
                                          {
                                            pre: !0,
                                            attrs: {
                                              class: "token attr-value",
                                            },
                                          },
                                          [
                                            s(
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
                                            s(
                                              "span",
                                              {
                                                pre: !0,
                                                attrs: {
                                                  class: "token punctuation",
                                                },
                                              },
                                              [t._v('"')]
                                            ),
                                            s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token tag" } },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token tag" },
                                      },
                                      [
                                        s(
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
                                    s(
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getrangejson-title-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{Boolean} [title]: 是否首行为标题")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("title")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"true"')]),
                            t._v(": 首行为标题"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"false"')]),
                            t._v(": 首行不为标题"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("复制指定工作表指定单元格区域的数据，返回"),
                      s("code", [t._v("json")]),
                      t._v("格式的数据"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v('当前选区为"A1:B2"，首行为标题取得json')]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.getRangeJson(true)")]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
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
                                  [t._v('"value3"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value4"')]
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
                                t._v("\n"),
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
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v('当前选区为"A1:B2"，首行不为标题取得json'),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.getRangeJson(false)")]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
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
                                  [t._v('"A"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value1"')]
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
                                  [t._v('"B"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value3"')]
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
                                t._v("\n\t"),
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
                                  [t._v('"A"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value2"')]
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
                                  [t._v('"B"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value4"')]
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
                                t._v("\n"),
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
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "getrangearray-dimensional-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{String} [dimensional]: 数组维度")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("dimensional")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"oneDimensional"')]),
                            t._v(": 一维数组"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"twoDimensional"')]),
                            t._v(": 二维数组"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "复制指定工作表指定单元格区域的数据，返回一维、二维或者自定义行列数的二维数组的数据。"
                      ),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("特别注意，只有在"),
                      s("code", [t._v("dimensional")]),
                      t._v("设置为"),
                      s("code", [t._v("custom")]),
                      t._v("的时候，才需要设置"),
                      s("code", [t._v("setting")]),
                      t._v("中的"),
                      s("code", [t._v("row")]),
                      t._v("和"),
                      s("code", [t._v("column")]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v('当前选区为"A1:B2"，一维数组')]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.getRangeArray('oneDimensional')"),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
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
                      t._v(" "),
                      s("li", [
                        s("p", [t._v('当前选区为"A1:B2"，二维数组')]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.getRangeArray('twoDimensional')"),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value1"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value3"')]
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
                                t._v("\n\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value2"')]
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"value4"')]
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
                                t._v("\n"),
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
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v(
                            "当前选区为\"A1:C5\"，由 'value1'到'value15'的值组成，得到3\t行2列的二维数组数据"
                          ),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v(
                              "datadocs.getRangeArray('custom', { row: 3, column: 2 })"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value1"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
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
                                  [t._v('"value1"')]
                                ),
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
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
                                  [t._v('"value6"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value6"')]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
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
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
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
                                  [t._v('"value11"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value11"')]
                                ),
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value2"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
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
                                  [t._v('"value2"')]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
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
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
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
                                  [t._v('"value7"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value7"')]
                                ),
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
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
                                  [t._v('"value12"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value12"')]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getrangediagonal-type-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{String} [type]: 对角线还是对角线偏移")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("type")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"normal"')]),
                            t._v(": 对角线"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"anti"')]),
                            t._v(": 反对角线"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"offset"')]),
                            t._v(": 对角线偏移"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("{Number} [column]: "),
                            s("code", [t._v("type")]),
                            t._v("为"),
                            s("code", [t._v("offset")]),
                            t._v("的时候设置，对角偏移的列数"),
                          ]),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "复制指定工作表指定单元格区域的数据，返回对角线或者对角线偏移"
                      ),
                      s("code", [t._v("column")]),
                      t._v("列后的数据。"),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("特别注意，只有在"),
                      s("code", [t._v("type")]),
                      t._v("设置为"),
                      s("code", [t._v("offset")]),
                      t._v("的时候，才需要设置"),
                      s("code", [t._v("setting")]),
                      t._v("中的"),
                      s("code", [t._v("column")]),
                      t._v("。"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v('当前选区为"A1:B2"，对角线')]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.getRangeDiagonal('normal')"),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value1"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t"),
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
                                  [t._v('"value1"')]
                                ),
                                t._v("\n\t"),
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
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value4"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t"),
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
                                  [t._v('"value4"')]
                                ),
                                t._v("\n\t"),
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
                                  [t._v("]")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v('当前选区为"A1:B2"，反对角线')]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.getRangeDiagonal('anti')"),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value3"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t"),
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
                                  [t._v('"value3"')]
                                ),
                                t._v("\n\t"),
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
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value2"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t"),
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
                                  [t._v('"value2"')]
                                ),
                                t._v("\n\t"),
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
                                  [t._v("]")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v('当前选区为"A1:B2"，对角线偏移1列')]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v(
                              "datadocs.getRangeDiagonal('offset', { column: 1 })"
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value3"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t"),
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
                                  [t._v('"value3"')]
                                ),
                                t._v("\n\t"),
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getrangeboolean-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "复制指定工作表指定单元格区域的数据，返回布尔值的数据"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v('当前选区为"A1:B2"')]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.getRangeBoolean()")]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("则返回结果为：")]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
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
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
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
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
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
                                t._v("\n\t"),
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
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
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
                                    attrs: { class: "token boolean" },
                                  },
                                  [t._v("false")]
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
                                t._v("\n"),
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
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setrangeshow-range-setting" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setrangeshow-range-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setRangeShow(range [,setting])"),
                  s("div", { attrs: { id: "setRangeShow" } }),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                        ),
                        s("code", [t._v('"A1:B2"')]),
                        t._v("、"),
                        s("code", [t._v('"sheetName!A1:B2"')]),
                        t._v("或者"),
                        s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                        t._v("，允许多个选区组成的数组；默认为当前选区"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Boolean} [show]: 是否显示高亮选中效果；默认值为 "
                            ),
                            s("code", [t._v("true")]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "指定工作表选中一个或多个选区为选中状态并选择是否高亮，支持多种格式设置。"
                      ),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "特别提醒，Luckysheet中涉及到的选区范围设置都可以参考这个设置"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("设定当前工作表选区范围"),
                          s("code", [t._v("A1:B2")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v('datadocs.setRangeShow("A1:B2")')]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("设定选区范围"),
                          s("code", [t._v("A1:B2")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v('datadocs.setRangeShow(["A1:B2"])')]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("设定选区范围"),
                          s("code", [t._v("A1:B2")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v(
                              "datadocs.setRangeShow({row:[0,1],column:[0,1]})"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("设定选区范围"),
                          s("code", [t._v("A1:B2")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v(
                              "datadocs.setRangeShow([{row:[0,1],column:[0,1]}])"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("设定选区范围"),
                          s("code", [t._v("A1:B2")]),
                          t._v("和"),
                          s("code", [t._v("C3:D4")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v('datadocs.setRangeShow(["A1:B2","C3:D4"])'),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("设定选区范围"),
                          s("code", [t._v("A1:B2")]),
                          t._v("和"),
                          s("code", [t._v("D3")]),
                          t._v(":"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setrangevalue-data-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s(
                        "li",
                        [
                          t._v(
                            "{Array} [data]: 要赋值的单元格二维数组数据，每个单元格的值，可以为字符串或数字，或为符合Luckysheet格式的对象，参考 "
                          ),
                          s(
                            "RouterLink",
                            { attrs: { to: "/guide/cell.html" } },
                            [t._v("单元格属性表")]
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Boolean} [isRefresh]: 是否刷新界面；默认为"),
                            s("code", [t._v("true")]),
                            t._v(
                              "；用于多个单元格赋值时候控制节流，前面单元格赋值的时候应设置为\t"
                            ),
                            s("code", [t._v("false")]),
                            t._v("，最后一个单元格赋值时设置为"),
                            s("code", [t._v("true")]),
                            t._v("。"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("将一个单元格数组数据赋值到指定的区域，数据格式同"),
                      s("code", [t._v("getRangeValue")]),
                      t._v("方法取到的数据。"),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("注意一点，通常"),
                      s("code", [t._v("getRangeValue")]),
                      t._v(
                        "方法只是取得选区数据，但是不包含边框和合并单元格信息，当执行"
                      ),
                      s("code", [t._v("setRangeValue")]),
                      t._v("的时候，会动态判断上一步是否执行过"),
                      s("code", [t._v("getRangeValue")]),
                      t._v(
                        "，如果执行过，会将边框和合并单元格信息一并从Luckysheet配置中取得。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("赋值到当前选区")]),
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
                                    attrs: { class: "token keyword" },
                                  },
                                  [t._v("const")]
                                ),
                                t._v(" data "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value1"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v("\n\t\t\t\t"),
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
                                t._v("\n\t\t\t\t"),
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
                                  [t._v('"value1"')]
                                ),
                                t._v("\n\t\t\t"),
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value3"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v("\n\t\t\t\t"),
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
                                t._v("\n\t\t\t\t"),
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
                                  [t._v('"value3"')]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value2"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v("\n\t\t\t\t"),
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
                                t._v("\n\t\t\t\t"),
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
                                  [t._v('"value2"')]
                                ),
                                t._v("\n\t\t\t"),
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
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value4"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                t._v("\n\t\t\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token string-property property",
                                    },
                                  },
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t\t\t"),
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
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"g"')]
                                ),
                                t._v("\n\t\t\t\t"),
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
                                t._v("\n\t\t\t\t"),
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
                                  [t._v('"value4"')]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("]")]
                                ),
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("]")]
                                ),
                                t._v("\nluckysheet"),
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
                                  {
                                    pre: !0,
                                    attrs: { class: "token function" },
                                  },
                                  [t._v("setRangeValue")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("(")]
                                ),
                                t._v("data"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
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
                                  [t._v("range")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token operator" },
                                  },
                                  [t._v(":")]
                                ),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v('"A1:B2"')]
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
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "setrangeformat-attr-value-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s(
                          "p",
                          [
                            t._v("{String} [attr]: 属性类型，\n参考 "),
                            s(
                              "RouterLink",
                              { attrs: { to: "/guide/cell.html" } },
                              [t._v("单元格属性表")]
                            ),
                            t._v("的属性值"),
                          ],
                          1
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        s(
                          "p",
                          [
                            t._v(
                              "{String | Number | Object} [value]: 具体的设置值，一个属性会对应多个值，参考 "
                            ),
                            s(
                              "RouterLink",
                              { attrs: { to: "/guide/cell.html" } },
                              [t._v("单元格属性表")]
                            ),
                            t._v("的值示例，特殊情况：如果属性类型"),
                            s("code", [t._v("attr")]),
                            t._v("是单元格格式"),
                            s("code", [t._v("ct")]),
                            t._v("，则设置值"),
                            s("code", [t._v("value")]),
                            t._v("应提供"),
                            s("code", [t._v("ct.fa")]),
                            t._v("，比如设置"),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("单元格的格式为百分比格式："),
                          ],
                          1
                        ),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v(
                              'datadocs.setRangeFormat("ct", "0.00%", {range:"A1:B2"})'
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Object | String} [range]: 设置参数的目标选区范围，支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，允许多个选区组成的数组；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "设置指定范围的单元格格式，一般用作处理格式，赋值操作推荐使用"
                      ),
                      s("code", [t._v("setRangeValue")]),
                      t._v("方法"),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("边框设置时，attr为"),
                      s("code", [t._v('"bd"')]),
                      t._v("，value为一个key/value对象，需要同时设置边框类型:"),
                      s("code", [t._v("borderType")]),
                      t._v("/边框粗细:"),
                      s("code", [t._v("style")]),
                      t._v("/边框颜色:"),
                      s("code", [t._v("color")]),
                      t._v("/，比如设置"),
                      s("code", [t._v('"A1:B2"')]),
                      t._v("单元格的边框为所有/红色/细："),
                    ]),
                    t._v(" "),
                    s("p", [
                      s("code", [
                        t._v(
                          'datadocs.setRangeFormat("bd", {borderType: "border-right",style: "1", color: "#ff0000"}, {range:["A1:B2"]})'
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("p", [t._v("完整可选的设置参数如下：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("边框类型 "),
                        s("code", [
                          t._v(
                            'borderType："border-left" | "border-right" | "border-top" | "border-bottom" | "border-all" | "border-outside" | "border-inside" | "border-horizontal" | "border-vertical" | "border-none"'
                          ),
                        ]),
                        t._v("，"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("边框粗细 "),
                        s("code", [
                          t._v(
                            "style: 1 Thin | 2 Hair | 3 Dotted | 4 Dashed | 5 DashDot | 6 DashDotDot | 7 Double | 8 Medium | 9 MediumDashed | 10 MediumDashDot | 11 MediumDashDotDot | 12 SlantedDashDot | 13 Thick"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("边框颜色 "),
                        s("code", [t._v("color: 16进制颜色值")]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("设置当前工作表"),
                          s("code", [t._v('"A1:B2"')]),
                          t._v("范围的单元格文本加粗"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v(
                              'datadocs.setRangeFormat("bl", 1, {range:"A1:B2"})'
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("设置第二个工作表的"),
                          s("code", [t._v('"B2"')]),
                          t._v("和"),
                          s("code", [t._v('"C4:D5"')]),
                          t._v("范围的单元格背景为红色"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setrangefilter-type-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{String} [type]: 打开还是关闭筛选功能")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("type")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"open"')]),
                            t._v(": 打开筛选功能，返回当前筛选的范围对象"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"close"')]),
                            t._v(": 关闭筛选功能，返回关闭前筛选的范围对象"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("为指定下标的工作表，选定的范围开启或关闭筛选功能"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v('打开第二个工作表"A1:B2"范围的筛选功能\n'),
                        s("code", [
                          t._v(
                            'datadocs.setRangeFilter("open",{range:"A1:B2",order:1})'
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setrangemerge-type-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{String} [type]: 合并单元格类型")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("type")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"all"')]),
                            t._v(
                              ": 全部合并，区域内所有单元格合并成一个大的单元格"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"horizontal"')]),
                            t._v(
                              ": 水平合并，区域内在同一行的单元格合并成一个单元格"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"vertical"')]),
                            t._v(
                              ": 垂直合并，区域内在同一列的单元格合并成一个单元格"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，允许多个选区组成的数组；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("为指定下标的工作表，选定的范围设定合并单元格"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "当前选区 'A1:B2' 设置为合并单元格，类型为全部合并"
                          ),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v('datadocs.setRangeMerge("all")')]),
                          t._v("\n得到 'A1:B1' 的数据为："),
                        ]),
                        t._v(" "),
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
                                  [t._v("[")]
                                ),
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"m"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"value1"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"ct"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"fa"')]
                                ),
                                s(
                                  "span",
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
                                  [t._v('"General"')]
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
                                  [t._v('"g"')]
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
                                t._v("\n\t\t\t"),
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
                                  [t._v('"value1"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(",")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"mc"')]
                                ),
                                s(
                                  "span",
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
                                t._v(" "),
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
                                  { pre: !0, attrs: { class: "token number" } },
                                  [t._v("2")]
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
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"mc"')]
                                ),
                                s(
                                  "span",
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
                                t._v(" "),
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
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
                                t._v("\n\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"mc"')]
                                ),
                                s(
                                  "span",
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
                                t._v(" "),
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                t._v("\n\t\t"),
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("{")]
                                ),
                                t._v("\n\t\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token property" },
                                  },
                                  [t._v('"mc"')]
                                ),
                                s(
                                  "span",
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
                                t._v(" "),
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
                                  { pre: !0, attrs: { class: "token number" } },
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
                                t._v("\n\t\t"),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("}")]
                                ),
                                t._v("\n\t"),
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "cancelrangemerge-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，允许多个选区组成的数组；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("为指定下标的工作表，选定的范围取消合并单元格"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "当前选区 'A1:B2' 已为合并单元格，现在要取消合并"
                          ),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("datadocs.cancelRangeMerge()")]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setrangesort-type-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{String} [type]: 排序类型")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("type")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [s("code", [t._v('"asc"')]), t._v(": 升序")]),
                          t._v(" "),
                          s("li", [s("code", [t._v('"des"')]), t._v(": 降序")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "为指定下标的工作表，选定的范围开启排序功能，返回选定范围排序后的数据。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("设置当前工作表当前选区为升序\n"),
                        s("code", [t._v('datadocs.setRangeSort("asc")')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "setrangesortmulti-title-sort-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{Boolean} [title]: 数据是否具有标题行")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v(
                            "{Array} [sort]: 列设置，设置需要排序的列索引和排序方式，格式如："
                          ),
                          s("code", [
                            t._v("[{ i:0,sort:'asc' },{ i:1,sort:'des' }]"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "为指定下标的工作表，选定的范围开启多列自定义排序功能，返回选定范围排序后的数据。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "设置当前工作表当前选区为自定义排序，数据具有标题行，且按第一列升序第二列降序的规则进行排序\n"
                        ),
                        s("code", [
                          t._v(
                            "datadocs.setRangeSortMulti(true,[{ i:0,sort:'asc' },{ i:1,sort:'des' }])"
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  {
                    attrs: {
                      id: "setrangeconditionalformatdefault-conditionname-conditionvalue-setting",
                    },
                  },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{String} [conditionName]: 条件格式规则类型"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("conditionName")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"greaterThan"')]),
                            t._v(
                              ": 大于（conditionValue值为 数值或单元格范围）"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"lessThan"')]),
                            t._v(
                              ": 小于（conditionValue值为 数值或单元格范围）"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"betweenness"')]),
                            t._v(
                              ": 介于（conditionValue值为 数值或单元格范围）"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"equal"')]),
                            t._v(
                              ": 等于（conditionValue值为 数值或单元格范围）"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"textContains"')]),
                            t._v(
                              ": 文本包含（conditionValue值为 文本或单元格范围）"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"occurrenceDate"')]),
                            t._v(": 发生日期（conditionValue值为 日期）"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"duplicateValue"')]),
                            t._v(
                              ": 重复值(conditionValue值为 '0':重复值, '1':唯一值)"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"top10"')]),
                            t._v(": 前 N 项（conditionValue值为 1~1000）"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"top10%"')]),
                            t._v(": 前 N%（conditionValue值为 1~1000）"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"last10"')]),
                            t._v(": 后 N 项（conditionValue值为 1~1000）"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"last10%"')]),
                            t._v(": 后 N%（conditionValue值为 1~1000）"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"AboveAverage"')]),
                            t._v(": 高于平均值（conditionValue可为空数组）"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"SubAverage"')]),
                            t._v(": 低于平均值（conditionValue可为空数组）"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v(
                            "{Array} [conditionValue]: 可以设置条件单元格或者条件值\n取值规则 （条件值数组最少一个值，最多两个值）"
                          ),
                        ]),
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
                                  [t._v("]")]
                                ),
                                t._v("\n"),
                              ]),
                            ]
                          ),
                        ]),
                        s("p", [
                          t._v("或者 （若值为单元格范围，则取左上角单元格值）"),
                        ]),
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
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("[")]
                                ),
                                s(
                                  "span",
                                  { pre: !0, attrs: { class: "token string" } },
                                  [t._v("'A1'")]
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
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("p", [t._v("{Object} [format]: 颜色设置")]),
                            t._v(" "),
                            s("ul", [
                              s("li", [
                                t._v("设置文本颜色和单元格颜色；默认值为"),
                                s("code", [
                                  t._v(
                                    '{ "textColor": "#000000", "cellColor": "#ff0000" }'
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("p", [
                              t._v(
                                "{Array | Object | String} [cellrange]: 选区范围,支持选区的格式为"
                              ),
                              s("code", [t._v('"A1:B2"')]),
                              t._v("、"),
                              s("code", [t._v('"sheetName!A1:B2"')]),
                              t._v("或者"),
                              s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                              t._v("，允许多个选区组成的数组；默认为当前选区"),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("p", [
                              t._v(
                                "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("p", [
                              t._v("{Function} [success]: 操作结束的回调函数"),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "为指定下标的工作表，选定的范围开启条件格式，根据设置的条件格式规则突出显示部分单元格，返回开启条件格式后的数据。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("突出显示内容大于数字2的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"greaterThan\",{ type: 'value', content: [2] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示内容小于单元格A1内容的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"lessThan\",{ type: 'range', content: ['A1'] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示内容介于2和10之间的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"betweenness\",{ type: 'value', content: [2,10] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示内容等于单元格A1内容的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"equal\",{ type: 'range', content: ['A1'] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示内容包含单元格A1内容的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"textContains\",{ type: 'range', content: ['A1'] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示日期在 "),
                          s("code", [t._v("2020/09/24 - 2020/10/15")]),
                          t._v(" 之间的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"occurrenceDate\",{ type: 'value', content: ['2020/09/24 - 2020/10/15'] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示重复值的单元格，content为0\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"duplicateValue\",{ type: 'value', content: [0] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示唯一值的单元格，content为1\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"duplicateValue\",{ type: 'value', content: [1] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示排名前20名的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"top\",{ type: 'value', content: [20] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示排名前30%的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"topPercent\",{ type: 'value', content: [30] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示排名后15名的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"last\",{ type: 'value', content: [15] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示排名后15%的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"lastPercent\",{ type: 'value', content: [15] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示高于平均值的单元格\n"),
                          s("code", [
                            t._v(
                              "datadocs.setRangeConditionalFormatDefault(\"AboveAverage\",{ type: 'value', content: ['AboveAverage'] })"
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("突出显示低于平均值的单元格\n"),
                          s("code", [
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
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "setrangeconditionalformat-type-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{String} [type]: 条件格式规则类型")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("type")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"dataBar"')]),
                            t._v(": 数据条"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"icons"')]),
                            t._v(": 图标集"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"colorGradation"')]),
                            t._v(": 色阶"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("p", [
                              t._v("{Array | String} [format]: 颜色设置"),
                            ]),
                            t._v(" "),
                            s("ul", [
                              s("li", [
                                s("p", [
                                  s("code", [t._v("type")]),
                                  t._v("为"),
                                  s("code", [t._v("dataBar")]),
                                  t._v("时，应设置渐变色；默认值为蓝-白渐变"),
                                  s("code", [t._v('["#638ec6", "#ffffff"]')]),
                                ]),
                                t._v(" "),
                                s("p", [t._v("推荐的快捷取值：")]),
                                t._v(" "),
                                s(
                                  "div",
                                  { staticClass: "language-js extra-class" },
                                  [
                                    s(
                                      "pre",
                                      {
                                        pre: !0,
                                        attrs: { class: "language-js" },
                                      },
                                      [
                                        s("code", [
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#638ec6"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//蓝-白渐变 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#63c384"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//绿-白渐变 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ff555a"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//红-白渐变 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffb628"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//橙-白渐变 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#008aef"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//浅蓝-白渐变 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#d6007b"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffffff"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//紫-白渐变 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#638ec6"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//蓝色 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#63c384"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//绿色 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ff555a"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//红色 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#ffb628"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//橙色 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#008aef"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//浅蓝色 数据条")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"#d6007b"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          t._v("   "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//紫色 数据条")]
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
                                  s("code", [t._v("type")]),
                                  t._v("为"),
                                  s("code", [t._v("icons")]),
                                  t._v(
                                    '时，应设置图标类型；默认值为"threeWayArrowMultiColor"：三向箭头彩色，'
                                  ),
                                ]),
                                t._v(" "),
                                s("p", [t._v("可取值为：")]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("threeWayArrowMultiColor")]),
                                  t._v("：三向箭头（彩色），"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("threeTriangles")]),
                                  t._v("：3个三角形，"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("fourWayArrowMultiColor")]),
                                  t._v("：四向箭头（彩色），"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("fiveWayArrowMultiColor")]),
                                  t._v("：五向箭头（彩色），"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("threeWayArrowGrayColor")]),
                                  t._v("：三向箭头（灰色），"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("fourWayArrowGrayColor")]),
                                  t._v("：四向箭头（灰色），"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("fiveWayArrowGrayColor")]),
                                  t._v("：五向箭头（灰色），"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [
                                    t._v("threeColorTrafficLightRimless"),
                                  ]),
                                  t._v("：三色交通灯（无边框），"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("threeSigns")]),
                                  t._v("：三标志，"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("greenRedBlackGradient")]),
                                  t._v("：绿-红-黑渐变，"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [
                                    t._v("threeColorTrafficLightBordered"),
                                  ]),
                                  t._v("：三色交通灯（有边框），"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("fourColorTrafficLight")]),
                                  t._v("：四色交通灯，"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("threeSymbolsCircled")]),
                                  t._v("：三个符号（有圆圈），"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("tricolorFlag")]),
                                  t._v("：三色旗，"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("threeSymbolsnoCircle")]),
                                  t._v("：三个符号（无圆圈），"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("threeStars")]),
                                  t._v("：3个星形，"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("fiveQuadrantDiagram")]),
                                  t._v("：五象限图，"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("fiveBoxes")]),
                                  t._v("：5个框，"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("grade4")]),
                                  t._v("：四等级，"),
                                ]),
                                t._v(" "),
                                s("p", [
                                  s("code", [t._v("grade5")]),
                                  t._v("：五等级，"),
                                ]),
                              ]),
                              t._v(" "),
                              s("li", [
                                s("p", [
                                  s("code", [t._v("type")]),
                                  t._v("为"),
                                  s("code", [t._v("colorGradation")]),
                                  t._v(
                                    "时，应设置色阶颜色值；默认值为绿-黄-红色阶"
                                  ),
                                  s("code", [
                                    t._v(
                                      '["rgb(99, 190, 123)", "rgb(255, 235, 132)", "rgb(248, 105, 107)"]'
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                s("p", [t._v("推荐的快捷取值：")]),
                                t._v(" "),
                                s(
                                  "div",
                                  { staticClass: "language-js extra-class" },
                                  [
                                    s(
                                      "pre",
                                      {
                                        pre: !0,
                                        attrs: { class: "language-js" },
                                      },
                                      [
                                        s("code", [
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(255, 235, 132)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//绿-黄-红色阶")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(255, 235, 132)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//红-黄-绿色阶")]
                                          ),
                                          t._v("\n\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//绿-白-红色阶")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//红-白-绿色阶")]
                                          ),
                                          t._v("\n\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(90, 138, 198)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//蓝-白-红色阶")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(90, 138, 198)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//红-白-蓝色阶")]
                                          ),
                                          t._v("\n\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//白-红色阶")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(248, 105, 107)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//红-白色阶")]
                                          ),
                                          t._v("\n\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//绿-白色阶")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(252, 252, 255)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//白-绿色阶")]
                                          ),
                                          t._v("\n\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(255, 235, 132)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v(",")]
                                          ),
                                          t._v("  "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//绿-黄色阶")]
                                          ),
                                          t._v("\n"),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("[")]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(255, 235, 132)"')]
                                          ),
                                          s(
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
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token string" },
                                            },
                                            [t._v('"rgb(99, 190, 123)"')]
                                          ),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: {
                                                class: "token punctuation",
                                              },
                                            },
                                            [t._v("]")]
                                          ),
                                          t._v("   "),
                                          s(
                                            "span",
                                            {
                                              pre: !0,
                                              attrs: { class: "token comment" },
                                            },
                                            [t._v("//黄-绿色阶")]
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
                            s("p", [
                              t._v(
                                "{Array | Object | String} [cellrange]: 选区范围,支持选区的格式为"
                              ),
                              s("code", [t._v('"A1:B2"')]),
                              t._v("、"),
                              s("code", [t._v('"sheetName!A1:B2"')]),
                              t._v("或者"),
                              s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                              t._v("，允许多个选区组成的数组；默认为当前选区"),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("p", [
                              t._v(
                                "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("p", [
                              t._v("{Function} [success]: 操作结束的回调函数"),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "为指定下标的工作表，选定的范围开启条件格式，返回开启条件格式后的数据。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("当前选区范围开启条件格式，显示渐变色\n"),
                        s("code", [
                          t._v(
                            'datadocs.setRangeConditionalFormat("dataBar", { format: ["#63c384", "#ffffff"] })'
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  {
                    attrs: {
                      id: "deleterangeconditionalformat-itemindex-setting",
                    },
                  },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{Number} [itemIndex]: 条件格式规则索引"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "为指定下标的工作表，删除条件格式规则，返回被删除的条件格式规则。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("删除第三个条件格式规则\n"),
                        s("code", [
                          t._v("datadocs.deleteRangeConditionalFormat(2)"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "clearrange-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 要清除的选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，允许多个选区组成的数组；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "清除指定工作表指定单元格区域的内容，不同于删除选区的功能，不需要设定单元格移动情况"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("清空当前选区内容\n"),
                        s("code", [t._v("datadocs.clearRange()")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "deleterange-move-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "{String} [move]: 删除后，右侧还是下方的单元格移动"
                          ),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("move")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"left"')]),
                            t._v(": 右侧单元格左移"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"up"')]),
                            t._v(": 下方单元格上移"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Object | String} [range]: 要删除的选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "删除指定工作表指定单元格区域，同时，指定是右侧单元格左移还是下方单元格上移"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("删除当前选区并且在删除后，右侧单元格左移\n"),
                        s("code", [t._v("datadocs.deleteRange('left')")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "insertrange-move-setting" } }, [
                  s(
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
                s("p", [t._v("[todo]")]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{String} [move]: 活动单元格右移或者下移"),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("move")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"right"')]),
                            t._v(": 活动单元格右移"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"bottom"')]),
                            t._v(": 活动单元格下移"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s(
                              "p",
                              [
                                t._v(
                                  "{Array} [data]: 赋值到range区域的单元格二维数组数据，"
                                ),
                                s(
                                  "RouterLink",
                                  { attrs: { to: "/guide/cell.html" } },
                                  [t._v("单元格对象格式参考")]
                                ),
                                t._v("；默认值为空数组，即插入空白的区域"),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("p", [
                              t._v(
                                "{Array | Object | String} [range]: 要插入的位置，选区范围，支持选区的格式为"
                              ),
                              s("code", [t._v('"A1:B2"')]),
                              t._v("、"),
                              s("code", [t._v('"sheetName!A1:B2"')]),
                              t._v("或者"),
                              s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                              t._v("，默认为当前选区"),
                            ]),
                            t._v(" "),
                            s("p", [
                              t._v(
                                "当未设置data数据时，允许多个选区组成的数组，插入的空白区域即为这些选区的区域，"
                              ),
                            ]),
                            t._v(" "),
                            s("p", [
                              t._v(
                                "当设置了data数据，只能为单个选区，并且会把data数据插入到当前选区的第一个单元格位置"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("p", [
                              t._v(
                                "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("p", [
                              t._v("{Function} [success]: 操作结束的回调函数"),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "在指定工作表指定单元格区域，赋值单元格数据，或者新建一块空白区域，返回data数据，同时，指定活动单元格右移或者下移"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "当前选区位置插入空白单元格，并且插入后当前选区单元格右移\n"
                        ),
                        s("code", [t._v("datadocs.insertRange('right')")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "matrixoperation-type-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{String} [type]: 矩阵操作的类型")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("type")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"flipUpDown"')]),
                            t._v(": 上下翻转"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"flipLeftRight"')]),
                            t._v(": 左右翻转"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"flipClockwise"')]),
                            t._v(": 顺时针旋转"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"flipCounterClockwise"')]),
                            t._v(": 逆时针旋转api"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"transpose"')]),
                            t._v(": 转置"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"deleteZeroByRow"')]),
                            t._v(": 按行删除两端0值"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"deleteZeroByColumn"')]),
                            t._v(": 按列删除两端0值"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"removeDuplicateByRow"')]),
                            t._v(": 按行删除重复值"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"removeDuplicateByColumn"')]),
                            t._v(": 按列删除重复值"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"newMatrix"')]),
                            t._v(": 生产新矩阵"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "指定工作表指定单元格区域的数据进行矩阵操作，返回操作成功后的结果数据"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("当前选区上下翻转")]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.matrixOperation('flipUpDown')"),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("原来的选区复制为二维数组：")]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v('[["value1","value3"],["value2","value4"]]'),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("上下翻转后选区复制为二维数组：")]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v('[["value2","value4"],["value1","value3"]]'),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "matrixcalculation-type-number-setting" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{String} [type]: 计算方式")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("type")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [s("code", [t._v('"plus"')]), t._v(": 加")]),
                          t._v(" "),
                          s("li", [s("code", [t._v('"minus"')]), t._v(": 减")]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"multiply"')]),
                            t._v(": 乘"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"divided"')]),
                            t._v(": 除"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"power"')]),
                            t._v(": 次方"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"root"')]),
                            t._v(": 次方根"),
                          ]),
                          t._v(" "),
                          s("li", [s("code", [t._v('"log"')]), t._v(": log")]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{Number} [number]: 计算数值，如: 2")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "指定工作表指定单元格区域的数据进行矩阵计算，返回计算成功后的结果数据"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("当前选区所有单元格值加2")]),
                        t._v(" "),
                        s("p", [
                          s("code", [
                            t._v("datadocs.matrixCalculation('plus', 2)"),
                          ]),
                        ]),
                        t._v(" "),
                        s("p", [t._v("原来的选区复制为二维数组：")]),
                        t._v(" "),
                        s("p", [s("code", [t._v("[[1,2],[3,4]]")])]),
                        t._v(" "),
                        s("p", [t._v("加2后选区复制为二维数组：")]),
                        t._v(" "),
                        s("p", [s("code", [t._v("[[3,4],[5,6]]")])]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h2", { attrs: { id: "工作表操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#工作表操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 工作表操作"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "getallsheets" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "返回所有工作表配置，格式同工作表配置，得到的结果可用于表格初始化时作为options.data使用。"
                      ),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "所以此API适用于，手动操作配置完一个表格后，将所有工作表信息取出来自行保存，再用于其他地方的表格创建。如果想得到包括工作簿配置在内的所有工作簿数据，推荐使用 "
                      ),
                      s("a", { attrs: { href: "#toJson()" } }, [
                        t._v("toJson"),
                      ]),
                      t._v("，并且可以直接用于初始化Luckysheet。"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("取得第一个工作表的所有基本信息\n"),
                        s("code", [t._v("datadocs.getAllSheets()[0]")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getluckysheetfile" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("返回所有表格数据结构的一维数组"),
                      s("code", [t._v("luckysheetfile")]),
                      t._v("，不同于"),
                      s("code", [t._v("getAllSheets")]),
                      t._v(
                        "方法，此方法得到的工作表参数会包含很多内部使用变量，最明显的区别是表格数据操作会维护"
                      ),
                      s("code", [t._v("luckysheetfile[i].data")]),
                      t._v("，而初始化数据采用的是"),
                      s("code", [t._v("options.data[i].celldata")]),
                      t._v("，所以"),
                      s("code", [t._v("luckysheetfile")]),
                      t._v("可用于调试使用，但是不适用初始化表格。"),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("除此之外，加载过的工作表参数中会增加一个"),
                      s("code", [t._v("load = 1")]),
                      t._v(
                        "，这个参数在初始化数据的时候需要置为0才行。所以，将"
                      ),
                      s("code", [t._v("getLuckysheetfile()")]),
                      t._v("得到的数据拿来初始化工作簿，需要做两个工作："),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s(
                        "li",
                        [
                          t._v("celldata转为data，参考:"),
                          s(
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
                      s("li", [t._v("load重置为0或者删除此字段")]),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v("现在已有"),
                      s("code", [t._v("getAllSheets")]),
                      t._v("来完成这个工作，无需再手动转化数据。"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("取得第一个工作表的所有调试信息\n"),
                        s("code", [t._v("datadocs.getLuckysheetfile()[0]")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getsheet-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [index]: 工作表索引；默认值为当前工作表索引"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [name]: 工作表名称；默认值为当前工作表名称"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "根据index/order/name，快捷返回指定工作表的配置，同 "
                      ),
                      s("code", [t._v("luckysheetfile[i]")]),
                      t._v(
                        "。如果设置多个参数，优先级为：index > order > name。"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getsheetdata-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("快捷返回指定工作表的数据，同 "),
                      s("code", [t._v("luckysheetfile[i].data")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getconfig-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("快捷返回指定工作表的config配置，同 "),
                      s("code", [t._v("luckysheetfile[i].config")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setconfig-cfg-setting" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#setconfig-cfg-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" setConfig(cfg, [setting])"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{Object} [cfg]: config配置")]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("快捷设置指定工作表config配置")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "updatasheet-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array} [data]: 需要更新的工作表配置，参考create这个API的option.data"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("根据所传的工作表配置，更新相应的工作表")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheetadd-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s(
                            "li",
                            [
                              t._v(
                                "{Object} [sheetObject]: 新增的工作表的数据；默认值为空对象，工作表数据格式参考"
                              ),
                              s(
                                "RouterLink",
                                {
                                  attrs: {
                                    to: "/guide/sheet.html#初始化配置",
                                  },
                                },
                                [t._v("options.data")]
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 新增的工作表下标；默认值为最后一个下标位置"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("新增一个sheet，返回新增的工作表对象，"),
                      s("code", [t._v("setting")]),
                      t._v("中可选设置数据为 "),
                      s("code", [t._v("sheetObject")]),
                      t._v("，不传"),
                      s("code", [t._v("sheetObject")]),
                      t._v("则会新增一个空白的工作表。"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("在最后一个工作表下标位置新增一个空白的工作表\n"),
                        s("code", [t._v("datadocs.setSheetAdd()")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheetdelete-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("删除指定下标的工作表，返回已删除的工作表对象"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("删除当前工作表\n"),
                        s("code", [t._v("datadocs.setSheetDelete()")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheetcopy-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [targetOrder]: 新复制的工作表目标下标位置；默认值为当前工作表下标的下一个下标位置（递增）"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 被复制的工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("复制指定下标的工作表到指定下标位置，在"),
                      s("code", [t._v("setting")]),
                      t._v("中可选设置指定下标位置"),
                      s("code", [t._v("targetOrder")]),
                      t._v("，返回新复制的工作表对象"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("复制当前工作表到下一个下标位置\n"),
                        s("code", [t._v("datadocs.setSheetCopy()")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheethide-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 被隐藏的工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("隐藏指定下标的工作表，返回被隐藏的工作表对象"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("隐藏当前工作表\n"),
                        s("code", [t._v("datadocs.setSheetHide()")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("隐藏第三个工作表\n"),
                        s("code", [t._v("datadocs.setSheetHide({order:2})")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheetshow-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 被取消隐藏的工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "取消隐藏指定下标的工作表，返回被取消隐藏的工作表对象"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("取消隐藏第三个工作表\n"),
                        s("code", [t._v("datadocs.setSheetShow({order:2})")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheetactive-order-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{Number} [order]: 要激活的工作表下标")]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "设置指定下标的工作表为当前工作表（激活态），即切换到指定的工作表，返回被激活的工作表对象"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("切换到第二个工作表\n"),
                        s("code", [t._v("datadocs.setSheetActive(1)")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheetname-name-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{String} [name]: 新的工作表名称")]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("修改工作表名称")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v('修改当前工作表名称为"CellSheet"\n'),
                        s("code", [t._v('datadocs.setSheetName("CellSheet")')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheetcolor-color-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{String} [color]: 工作表颜色")]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("设置工作表名称处的颜色")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("修改当前工作表名称处的颜色为红色\n"),
                        s("code", [t._v('datadocs.setSheetColor("#ff0000")')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheetmove-type-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "{String | Number} [type]: 工作表移动方向或者移动的目标下标，"
                          ),
                        ]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("type")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"left"')]),
                            t._v(": 向左"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"right"')]),
                            t._v(": 向右"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v("1")]),
                            t._v("/"),
                            s("code", [t._v("2")]),
                            t._v("/"),
                            s("code", [t._v("3")]),
                            t._v("/...: 指定下标"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "指定工作表向左边或右边移动一个位置，或者指定下标，返回指定的工作表对象"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("当前工作表向左移动一个位置\n"),
                        s("code", [t._v('datadocs.setSheetMove("left")')]),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("第二个工作表移动到第四个工作表的下标位置\n"),
                        s("code", [t._v("datadocs.setSheetMove(3,{order:1})")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheetorder-orderlist-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "{Array} [orderList]: 工作表顺序，设置工作表的index和order来指定位置，如："
                        ),
                      ]),
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
                          t._v("\n\t"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("index"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("'sheet_01'"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("order"),
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
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("index"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("'sheet_02'"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("order"),
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
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("index"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v("'sheet_03'"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("order"),
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
                            [t._v("}")]
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
                            [t._v("]")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    s("p", [
                      t._v(
                        "数组中顺序并不重要，关键是指定sheet index和order的对应关系。"
                      ),
                    ]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("重新排序所有工作表的位置，指定工作表顺序的数组。"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("重排工作表，此工作簿含有3个工作表")]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          t._v("datadocs"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("setSheetOrder")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n\t"),
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
                            [t._v("index")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'sheet_01'")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("order")]
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
                            [t._v("index")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'sheet_02'")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("order")]
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
                            [t._v("index")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'sheet_03'")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("order")]
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
                            [t._v("}")]
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
                            [t._v("]")]
                          ),
                          s(
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setsheetzoom-zoom-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v(
                            "{Number} [zoom]: 工作表缩放比例，值范围为0.1 ~ 4；"
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("设置工作表缩放比例")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [s("li", [t._v("设置当前工作表缩放比例为0.5")])]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          t._v("datadocs"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("setSheetZoom")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0.5")]
                          ),
                          s(
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "showgridlines-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 需要显示网格线的工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("显示指定下标工作表的网格线，返回操作的工作表对象"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("显示当前工作表的网格线\n"),
                        s("code", [t._v("datadocs.showGridLines()")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("显示第三个工作表的网格线\n"),
                        s("code", [t._v("datadocs.showGridLines({order:2})")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "hidegridlines-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 需要隐藏网格线的工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("隐藏指定下标工作表的网格线，返回操作的工作表对象"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("隐藏当前工作表的网格线\n"),
                        s("code", [t._v("datadocs.hideGridLines()")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("隐藏第三个工作表的网格线\n"),
                        s("code", [t._v("datadocs.hideGridLines({order:2})")]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h2", { attrs: { id: "工作簿操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#工作簿操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 工作簿操作"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "create-options" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#create-options" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" create(options)"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{Object} [options]:表格的所有配置信息")]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s(
                      "p",
                      [
                        t._v("初始化一个Luckysheet，可包含多个工作表，参考 "),
                        s(
                          "RouterLink",
                          { attrs: { to: "/guide/config.html" } },
                          [t._v("配置列表")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "refresh-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Function} [success]: 表格刷新成功后的回调函数"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("刷新canvas")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "scroll-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [scrollLeft]：横向滚动值。默认为当前横向滚动位置。"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [scrollTop]：纵向滚动值。默认为当前纵向滚动位置。"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [targetRow]：纵向滚动到指定的行号。默认为当前纵向滚动位置。"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [targetColumn]：横向滚动到指定的列号。默认为当前横向滚动位置。"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Function} [success]: 表格刷新成功后的回调函数"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("滚动当前工作表位置")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "resize-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("根据窗口大小自动resize画布")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "destroy-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Function} [success]: 表格释放成功后的回调函数"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("删除并释放表格")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getscreenshot-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Object | String} [range]: 选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("返回当前表格指定选区截图后生成的base64格式的图片"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setworkbookname-name-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{String} [name]: 工作簿名称")]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("设置工作簿名称")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getworkbookname-setting" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getworkbookname-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getWorkbookName([,setting])"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("获取工作簿名称")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "undo-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("撤销当前操作，返回刚刚撤销的操作对象")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "redo-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("重做当前操作，返回刚刚重做的操作对象")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "refreshformula-success" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#refreshformula-success" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" refreshFormula([success])"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{Function} [success]: 操作结束的回调函数"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "强制刷新公式。当你直接修改了多个单元格的值，且没有触发刷新，且这些单元格跟公式相关联，则可以使用这个api最后强制触发一次公式刷新。"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "pagerinit-setting" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#pagerinit-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" pagerInit([setting])"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 参数配置\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} \t\t[pageIndex]:  当前的页码（必填）。"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} \t\t[pageSize]:   每页显示多少条数据（必填）。"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Number} \t\t[total]:  总条数（必填）。"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Boolean} \t[showTotal]:  是否显示总数，默认关闭：false。"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Boolean} \t[showSkip]:  是否显示跳页，默认关闭：false。"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Boolean} \t[showPN]:  是否显示上下翻页，默认开启：true。"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Array} \t\t[selectOption]:  选择分页的条数。"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              '{String} \t\t[prevPage]:  上翻页文字描述，默认"上一页"。'
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              '{String} \t\t[nextPage]:  下翻页文字描述，默认"下一页"。'
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              '{String} \t\t[totalTxt]:  数据总条数文字描述，默认"总共：{total}"。'
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "初始化分页器。ps：create阶段，可以直接配置options.pager参数，渲染阶段会将options.pager作为参数来初始化分页器，可通过钩子函数onTogglePager来监听页码的切换"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "refreshmenubuttonfocus-data-r-c-success" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{Array}  [data]: 操作数据")]),
                      t._v(" "),
                      s("li", [t._v("{Number} [r]: 指定的行")]),
                      t._v(" "),
                      s("li", [t._v("{Number} [c]: 指定的列")]),
                      t._v(" "),
                      s("li", [
                        t._v("{Function} [success]: 操作结束的回调函数"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("刷新指定单元格的顶部状态栏状态。")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  {
                    attrs: {
                      id: "checkthestatusoftheselectedcells-type-status",
                    },
                  },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{String} type: 类型")]),
                      t._v(" "),
                      s("li", [t._v("{String} status: 目标状态值")]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "检查选区内所有cell指定类型的状态是否满足条件（主要是粗体、斜体、删除线和下划线等等）。"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h2", { attrs: { id: "图表" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#图表" } },
                    [t._v("#")]
                  ),
                  t._v(" 图表"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "insertchart-setting" } }, [
                  s(
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
                s("p", [t._v("[todo]")]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Array | Object | String} [range]: 图表数据的选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "指定工作表指定选区范围生成一个图表，返回图表参数对象，包含图表唯一标识符chart id"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "setchart-chartid-attr-value-setting" } },
                  [
                    s(
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
                s("p", [t._v("[todo]")]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [
                          t._v("{String} [chartId]: 指定要修改的图表id"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{String} [attr]: 属性类型")]),
                        t._v(" "),
                        s("p", [
                          s("code", [t._v("attr")]),
                          t._v("可能的值有："),
                        ]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            s("code", [t._v('"left"')]),
                            t._v(": 左边到工作表边缘的距离"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"top"')]),
                            t._v(": 上边到工作表边缘的距离"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"width"')]),
                            t._v(": 图表外框的宽度"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"height"')]),
                            t._v(": 图表外框的高度"),
                          ]),
                          t._v(" "),
                          s("li", [
                            s("code", [t._v('"chartOptions"')]),
                            t._v(": 图表的详细设置项"),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [
                          t._v("{Number | Object}} [value]: 属性值，当"),
                          s("code", [t._v("attr")]),
                          t._v("为"),
                          s("code", [t._v("chartOptions")]),
                          t._v("时，直接设置整个chart的配置对象"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("修改指定id图表的参数，返回修改后的整个图表参数"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getchart-chartid" } }, [
                  s(
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
                s("p", [t._v("[todo]")]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{String} [chartId]: 指定要获取的图表id")]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("获取指定id图表的参数")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "deletechart-chartid-setting" } }, [
                  s(
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
                s("p", [t._v("[todo]")]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("p", [t._v("{String} [chartId]: 要删除的图表id")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("删除指定id图表，返回被删除的图表的参数")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h2", { attrs: { id: "数据验证" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#数据验证" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 数据验证"),
                ]),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "setdataverification-optionitem-setting" } },
                  [
                    s(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#setdataverification-optionitem-setting",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" setDataVerification(optionItem, [setting])"),
                  ]
                ),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s(
                          "p",
                          [
                            t._v(
                              "{Object} [optionItem]: 数据验证的配置信息，具体详细的配置信息参考"
                            ),
                            s(
                              "RouterLink",
                              {
                                attrs: {
                                  to: "/guide/sheet.html#dataVerification",
                                },
                              },
                              [t._v("dataVerification")]
                            ),
                          ],
                          1
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Object | String} [range]: 数据验证的选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("指定工作表范围设置数据验证功能，并设置参数"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "deletedataverification-setting" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Object | String} [range]: 数据验证的选区范围,支持选区的格式为"
                            ),
                            s("code", [t._v('"A1:B2"')]),
                            t._v("、"),
                            s("code", [t._v('"sheetName!A1:B2"')]),
                            t._v("或者"),
                            s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                            t._v("，只能为单个选区；默认为当前选区"),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("指定工作表范围删除数据验证功能")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h2", { attrs: { id: "图片" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#图片" } },
                    [t._v("#")]
                  ),
                  t._v(" 图片"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "insertimage-src-setting" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#insertimage-src-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" insertImage(src, [setting])"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{String} [src]: 图片src")]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [rowIndex]: 要插入图片的单元格行下标；默认为当前选区聚焦单元格行下标 || 0"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{Number} [colIndex]: 要插入图片的单元格列下标；默认为当前选区聚焦单元格列下标 || 0"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("在指定的工作表中指定单元格位置插入图片")]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "deleteimage-setting" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#deleteimage-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" deleteImage([setting])"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v(
                              "{String | Array} [idList]: 要删除图片的id集合，也可为字符串"
                            ),
                            s("code", [t._v('"all"')]),
                            t._v("，all为所有的字符串；默认为"),
                            s("code", [t._v('"all"')]),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("删除指定工作表中的图片")]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "getimageoption-setting" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getimageoption-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getImageOption([setting])"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("获取指定工作表的图片配置")]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "工作表保护" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#工作表保护" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 工作表保护"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "setprotection-option-setting" } }, [
                  s(
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
                s("p", [t._v("[todo]")]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{Object} [option]: 工作表保护的配置信息"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("{PlainObject} [setting]: 可选参数\n"),
                        s("ul", [
                          s("li", [
                            t._v(
                              "{Number} [order]: 工作表下标；默认值为当前工作表下标"
                            ),
                          ]),
                          t._v(" "),
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("指定工作表设置工作表保护功能")]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h2", { attrs: { id: "工具方法" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#工具方法" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 工具方法"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "transtocelldata-data-setting" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#transtocelldata-data-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" transToCellData(data [,setting])"),
                  s("div", { attrs: { id: "transToCellData" } }),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [s("p", [t._v("{Array} [data]: data数据")])]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "data => celldata ，data二维数组数据转化成 {r, c, v}格式一维数组"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "transtodata-celldata-setting" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#transtodata-celldata-setting" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" transToData(celldata [,setting])"),
                  s("div", { attrs: { id: "transToData" } }),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [s("p", [t._v("{Array} [celldata]: data数据")])]),
                      t._v(" "),
                      s("li", [
                        s("p", [t._v("{PlainObject} [setting]: 可选参数")]),
                        t._v(" "),
                        s("ul", [
                          s("li", [
                            t._v("{Function} [success]: 操作结束的回调函数"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "celldata => data ，celldata一维数组数据转化成表格所需二维数组"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "tojson" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("导出的json字符串可以直接当作"),
                      s("code", [t._v("datadocs.create(options)")]),
                      t._v("初始化工作簿时的参数"),
                      s("code", [t._v("options")]),
                      t._v(
                        "使用，使用场景在用户自己操作表格后想要手动保存全部的参数，再去别处初始化这个表格使用，类似一个luckysheet专有格式的导入导出。"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "changlang-lang" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#changlang-lang" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" changLang([lang])"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{String} [lang]: 语言类型；暂支持"),
                        s("code", [t._v('"zh"')]),
                        t._v("、"),
                        s("code", [t._v('"en"')]),
                        t._v("、"),
                        s("code", [t._v('"es"')]),
                        t._v("；默认为"),
                        s("code", [t._v('"zh"')]),
                        t._v("；"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("传入目标语言，切换到对应的语言界面")]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "closewebsocket" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#closewebsocket" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" closeWebsocket()"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("关闭websocket连接")]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "opensearchdialog" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#opensearchdialog" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" openSearchDialog()"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("打开搜索/替换弹窗")]),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "getrangebytxt-txt" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getrangebytxt-txt" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getRangeByTxt([txt])"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("将字符串格式的工作表范围转换为数组形式")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{String} [txt]: 选区范围,支持选区的格式为"),
                        s("code", [t._v('"A1:B2"')]),
                        t._v("或者指定工作表名称的写法"),
                        s("code", [t._v('"sheetName!A1:B2"')]),
                        t._v("，只支持单个选区；默认为当前最后一个选区"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("当前选区为"),
                        s("code", [t._v("A1:B2")]),
                        t._v("，"),
                        s("code", [t._v("datadocs.getRangeByTxt()")]),
                        t._v("返回："),
                        s("code", [
                          t._v("{column: (2) [0, 1],row: (2) [0, 1]}"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("code", [t._v('datadocs.getRangeByTxt("A1:B2")')]),
                        t._v("返回："),
                        s("code", [
                          t._v("{column: (2) [0, 1],row: (2) [0, 1]}"),
                        ]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("code", [
                          t._v('datadocs.getRangeByTxt("Cell!A1:B2")'),
                        ]),
                        t._v("返回："),
                        s("code", [
                          t._v("{column: (2) [0, 1],row: (2) [0, 1]}"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "gettxtbyrange-range" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#gettxtbyrange-range" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getTxtByRange([range])"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("将数组格式的工作表范围转换为字符串格式的形式"),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "{Array | Object} [range]: 选区范围,支持选区的格式为"
                        ),
                        s("code", [t._v("{row:[0,1],column:[0,1]}")]),
                        t._v("，允许多个选区组成的数组；默认为当前选区"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("示例")]), t._v(":")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("当前选区为"),
                        s("code", [t._v("A1:B3")]),
                        t._v("，"),
                        s("code", [t._v("datadocs.getTxtByRange()")]),
                        t._v("返回：当前选区"),
                        s("code", [t._v('"A1:B3"')]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("code", [
                          t._v(
                            "datadocs.getTxtByRange({column:[0,1],row:[0,2]})"
                          ),
                        ]),
                        t._v("返回："),
                        s("code", [t._v('"A1:B3"')]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("code", [
                          t._v(
                            "datadocs.getTxtByRange([{column:[0,1],row:[0,2]}])"
                          ),
                        ]),
                        t._v("返回："),
                        s("code", [t._v('"A1:B3"')]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("code", [
                          t._v(
                            "datadocs.getTxtByRange([{column:[0,1],row:[0,2]},{column:[1,1],row:[1,2]}])"
                          ),
                        ]),
                        t._v("返回："),
                        s("code", [t._v('"A1:B3,B2:B3"')]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h2", { attrs: { id: "旧版api" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#旧版api" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 旧版API"),
                ]),
                t._v(" "),
                s("div", { staticClass: "custom-block warning" }, [
                  s("p", { staticClass: "custom-block-title" }, [t._v("注意")]),
                  t._v(" "),
                  s("p", [
                    t._v("为保持兼容性，仍然支持旧版API，但是已不推荐使用。"),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "getcellvalue-r-c-data-type" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "{Number} [r]:单元格所在行数；可选值；从0开始的整数，0表示第一行"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "{Number} [c]:单元格所在列数；可选值；从0开始的整数，0表示第一列"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "{Array} [data]:表数据，二维数组；可选值；默认值为当前表格数据"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "{String} [type]:单元格属性值；可选值；默认值为'v',表示获取单元格的实际值"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("此方法为获取单元格的值。")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "datadocs.getcellvalue()：返回当前工作表的所有数据；"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "datadocs.getcellvalue(0)：返回当前工作表第1行数据；"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "datadocs.getcellvalue(null,0)：返回当前工作表第1列数据；"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "datadocs.getcellvalue(0,0)：返回当前工作表第1行第1列单元格的数据的v值；"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "datadocs.getcellvalue(1,1,null,'m'): 返回指定data数据的第2行第2列单元格的原始值。"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "特殊情况：单元格格式为yyyy-MM-dd，type为'v'时会强制取'm'显示值"
                      ),
                    ]),
                    t._v(" "),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API： "),
                        s("a", { attrs: { href: "#getCellValue" } }, [
                          t._v("getCellValue"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getluckysheetfile-2" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("返回所有表格数据结构的一维数组"),
                      s("code", [t._v("luckysheetfile")]),
                    ]),
                    t._v(" "),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API： "),
                        s("a", { attrs: { href: "#getLuckysheetfile()" } }, [
                          t._v("getLuckysheetfile"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getconfig" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v(
                        "快捷返回当前表格config配置，每个工作表的config信息仍然包含在luckysheetfile。"
                      ),
                    ]),
                    t._v(" "),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API： "),
                        s(
                          "a",
                          { attrs: { href: "#getConfig(%5Bsetting%5D)" } },
                          [t._v("getConfig")]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getluckysheet-select-save" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("返回当前选区对象的数组，可能存在多个选区。"),
                    ]),
                    t._v(" "),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API： "),
                        s("a", { attrs: { href: "#getRange()" } }, [
                          t._v("getRange"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  { attrs: { id: "getdatabyselection-range-sheetorder" } },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("{Object} [range]：选区对象，"),
                        s("code", [
                          t._v("object: { row: [r1, r2], column: [c1, c2] }"),
                        ]),
                        t._v("；默认为当前第一个选区。"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "{Number} [sheetOrder]：表格下标，从0开始的整数，0表示第一个表格；默认为当前表格下标。"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("返回某个表格第一个选区的数据。")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("code", [t._v("datadocs.getdatabyselection()")]),
                        t._v(": 返回当前工作表当前选区的数据"),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("code", [
                          t._v("datadocs.getdatabyselection(null,1)"),
                        ]),
                        t._v(": 返回第2个工作表的当前选区的数据"),
                      ]),
                    ]),
                    t._v(" "),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API： "),
                        s(
                          "a",
                          { attrs: { href: "#getRangeValue(%5Bsetting%5D)" } },
                          [t._v("getRangeValue")]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "h3",
                  {
                    attrs: {
                      id: "luckysheetrefreshgrid-scrollwidth-scrollheight",
                    },
                  },
                  [
                    s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "{Number} [scrollWidth]：横向滚动值。默认为当前横向滚动位置。"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "{Number} [scrollHeight]：纵向滚动值。默认为当前纵向滚动位置。"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("按照scrollWidth, scrollHeight刷新canvas展示数据。"),
                    ]),
                    t._v(" "),
                    s("blockquote", [
                      s(
                        "p",
                        [
                          t._v("推荐使用新API： "),
                          s(
                            "RouterLink",
                            {
                              attrs: {
                                to: "/guide/api.html#scroll-setting",
                              },
                            },
                            [t._v("scroll")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setcellvalue-r-c-d-v" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "{Number} [r]：单元格所在行数；从0开始的整数，0表示第一行。"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "{Number} [c]：单元格所在列数；从0开始的整数，0表示第一列。"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v("{Array} [d]：表数据；可选值；二维数组。"),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "{Object | String | Number} [v]：要设置的值；可为对象，对象是是要符合单元格对象格式。"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("设置某个单元格的值。可配合"),
                      s("code", [t._v("datadocs.jfrefreshgrid()")]),
                      t._v("刷新查看单元格值改变。"),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          t._v("datadocs"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("setcellvalue")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
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
                            [t._v("0")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" datadocs"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("flowdata")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
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
                            [t._v("'abc'")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\nluckysheet"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("jfrefreshgrid")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
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
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "jfrefreshgrid" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("刷新canvas")]),
                    t._v(" "),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API： "),
                        s("a", { attrs: { href: "#refresh(%5Bsetting%5D)" } }, [
                          t._v("refresh"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "setluckysheet-select-save-v" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v(
                          "{Array} [v]：要设置的选区值(数组)。符合选区格式规则，如"
                        ),
                        s("code", [
                          t._v("[{ row: [r1, r2], column: [c1, c2] }]"),
                        ]),
                        t._v("。"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("设置当前表格选区的值。配合"),
                      s("code", [t._v("datadocs.selectHightlightShow()")]),
                      t._v("可在界面查看选区改变。"),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "language-js extra-class" }, [
                      s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                        s("code", [
                          t._v("datadocs"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("setluckysheet_select_save")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
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
                          t._v(" "),
                          s(
                            "span",
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("row")]
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
                            [t._v("1")]
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
                            {
                              pre: !0,
                              attrs: {
                                class: "token literal-property property",
                              },
                            },
                            [t._v("column")]
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
                            [t._v("1")]
                          ),
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
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\nluckysheet"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("selectHightlightShow")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API："),
                        s("a", { attrs: { href: "#setRangeShow" } }, [
                          t._v("setRangeShow"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "selecthightlightshow" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("高亮当前选区")]),
                    t._v(" "),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API："),
                        s("a", { attrs: { href: "#setRangeShow" } }, [
                          t._v("setRangeShow"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "flowdata" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("快捷获取当前表格的数据")]),
                    t._v(" "),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API："),
                        s("a", { attrs: { href: "#getSheetData()" } }, [
                          t._v("getSheetData"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "buildgriddata-file" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s(
                        "li",
                        [
                          t._v("{Object} [file]："),
                          s(
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
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [t._v("生成表格可以识别的二维数组")]),
                    t._v(" "),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API："),
                        s("a", { attrs: { href: "#transToData" } }, [
                          t._v("transToData"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s("h3", { attrs: { id: "getgriddata-data" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("p", [s("strong", [t._v("参数")]), t._v("：")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [t._v("{Array} [data]：工作表的二维数组数据")]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [s("strong", [t._v("说明")]), t._v("：")]),
                    t._v(" "),
                    s("p", [
                      t._v("二维数组数据转化成 "),
                      s("code", [t._v("{r, c, v}")]),
                      t._v(" 格式 一维数组"),
                    ]),
                    t._v(" "),
                    s("blockquote", [
                      s("p", [
                        t._v("推荐使用新API："),
                        s("a", { attrs: { href: "#transToCellData" } }, [
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
      s.default = n.exports;
    },
  },
]);
