(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    329: function (t, v, _) {
      "use strict";
      _.r(v);
      var s = _(10),
        a = Object(s.a)(
          {},
          function () {
            var t = this,
              v = t._self._c;
            return v(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                v("h1", { attrs: { id: "单元格" } }, [
                  v(
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
                v("h2", { attrs: { id: "基本单元格" } }, [
                  v(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#基本单元格" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 基本单元格"),
                ]),
                t._v(" "),
                v("p", [
                  t._v(
                    "单元格是Luckysheet中最基本的单位，每个单元格都会保存为一个对象，一个工作表的数据则会保存为一个由单元格对象组成的二维数组，并存入当前工作表的 "
                  ),
                  v("code", [t._v("luckysheetfile[i].data")]),
                  t._v("中。"),
                ]),
                t._v(" "),
                v("p", [t._v("单元格对象包含以下单元格属性")]),
                t._v(" "),
                v("table", [
                  v("tr", [
                    v("td", [t._v("属性值")]),
                    t._v(" "),
                    v("td", [t._v("全称")]),
                    t._v(" "),
                    v("td", [
                      v("div", { staticStyle: { width: "100px" } }, [
                        t._v("说明"),
                      ]),
                    ]),
                    t._v(" "),
                    v("td", [t._v("值示例")]),
                    t._v(" "),
                    v("td", [t._v("Aspose方法或者属性")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("ct")]),
                    t._v(" "),
                    v("td", [t._v("celltype")]),
                    t._v(" "),
                    v("td", [t._v("单元格值格式：文本、时间等")]),
                    t._v(" "),
                    v("td", [
                      v("code", [
                        t._v(
                          '{\n            "fa": "General",\n            "t": "g"\n        }'
                        ),
                      ]),
                      v("a", { attrs: { href: "#cellStyle" } }, [
                        t._v("单元格值格式"),
                      ]),
                    ]),
                    t._v(" "),
                    v("td"),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("bg")]),
                    t._v(" "),
                    v("td", [t._v("background")]),
                    t._v(" "),
                    v("td", [t._v("背景颜色")]),
                    t._v(" "),
                    v("td", [t._v("#fff000")]),
                    t._v(" "),
                    v("td", [t._v("setBackgroundColor")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("ff")]),
                    t._v(" "),
                    v("td", [t._v("fontfamily")]),
                    t._v(" "),
                    v("td", [t._v("字体")]),
                    t._v(" "),
                    v("td", [
                      t._v(
                        "0 Times New Roman、 1 Arial、2 Tahoma 、3 Verdana、4 微软雅黑、5 宋体（Song）、6 黑体（ST Heiti）、7 楷体（ST Kaiti）、 8 仿宋（ST FangSong）、9 新宋体（ST Song）、10 华文新魏、11 华文行楷、12 华文隶书"
                      ),
                    ]),
                    t._v(" "),
                    v("td", [t._v("Style.Font object's Name property.")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("fc")]),
                    t._v(" "),
                    v("td", [t._v("fontcolor")]),
                    t._v(" "),
                    v("td", [t._v("字体颜色")]),
                    t._v(" "),
                    v("td", [t._v("#fff000")]),
                    t._v(" "),
                    v("td", [t._v("Style.Font object's Color property")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("bl")]),
                    t._v(" "),
                    v("td", [t._v("bold")]),
                    t._v(" "),
                    v("td", [t._v("粗体")]),
                    t._v(" "),
                    v("td", [t._v("0 常规 、 1加粗")]),
                    t._v(" "),
                    v("td", [
                      t._v("Style.Font object's IsBold property to true."),
                    ]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("it")]),
                    t._v(" "),
                    v("td", [t._v("italic")]),
                    t._v(" "),
                    v("td", [t._v("斜体")]),
                    t._v(" "),
                    v("td", [t._v("0 常规 、 1 斜体")]),
                    t._v(" "),
                    v("td"),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("fs")]),
                    t._v(" "),
                    v("td", [t._v("fontsize")]),
                    t._v(" "),
                    v("td", [t._v("字体大小")]),
                    t._v(" "),
                    v("td", [t._v("14")]),
                    t._v(" "),
                    v("td", [t._v("Style.Font object's Size property.")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("cl")]),
                    t._v(" "),
                    v("td", [t._v("cancelline")]),
                    t._v(" "),
                    v("td", [t._v("删除线")]),
                    t._v(" "),
                    v("td", [t._v("0 常规 、 1 删除线")]),
                    t._v(" "),
                    v("td", [t._v("Style.Font object's Underline property")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("un")]),
                    t._v(" "),
                    v("td", [t._v("underline")]),
                    t._v(" "),
                    v("td", [t._v("下划线")]),
                    t._v(" "),
                    v("td", [t._v("0 无 、 1 有")]),
                    t._v(" "),
                    v("td"),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("vt")]),
                    t._v(" "),
                    v("td", [t._v("verticaltype")]),
                    t._v(" "),
                    v("td", [t._v("垂直对齐")]),
                    t._v(" "),
                    v("td", [t._v("0 中间、1 上、2下")]),
                    t._v(" "),
                    v("td", [t._v("setVerticalAlignment")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("ht")]),
                    t._v(" "),
                    v("td", [t._v("horizontaltype")]),
                    t._v(" "),
                    v("td", [t._v("水平对齐")]),
                    t._v(" "),
                    v("td", [t._v("0 居中、1 左、2右")]),
                    t._v(" "),
                    v("td", [t._v("setHorizontalAlignment")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("mc")]),
                    t._v(" "),
                    v("td", [t._v("mergecell")]),
                    t._v(" "),
                    v("td", [t._v("合并单元格")]),
                    t._v(" "),
                    v("td", [
                      t._v(
                        "主单元格{ r:0, c:0, rs: 2, cs:2 }，辅单元格{ r:0, c:0 }，"
                      ),
                      v("a", { attrs: { href: "#mergeCell" } }, [
                        t._v("合并单元格案例"),
                      ]),
                    ]),
                    t._v(" "),
                    v("td", [t._v("Merge")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("tr")]),
                    t._v(" "),
                    v("td", [t._v("textrotate")]),
                    t._v(" "),
                    v("td", [t._v("竖排文字")]),
                    t._v(" "),
                    v("td", [t._v("3")]),
                    t._v(" "),
                    v("td", [t._v("setRotationAngle")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("rt")]),
                    t._v(" "),
                    v("td", [t._v("rotatetext")]),
                    t._v(" "),
                    v("td", [t._v("文字旋转角度")]),
                    t._v(" "),
                    v("td", [t._v("介于0~180之间的整数，包含0和180")]),
                    t._v(" "),
                    v("td", [t._v("setRotationAngle")]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("tb")]),
                    t._v(" "),
                    v("td", [t._v("textbeak")]),
                    t._v(" "),
                    v("td", [t._v("文本换行")]),
                    t._v(" "),
                    v("td", [t._v("0 截断、1溢出、2 自动换行")]),
                    t._v(" "),
                    v("td", [
                      t._v("2：setTextWrapped "),
                      v("br"),
                      t._v(" 0和1：IsTextWrapped = true"),
                    ]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("v")]),
                    t._v(" "),
                    v("td", [t._v("value")]),
                    t._v(" "),
                    v("td", [t._v("原始值")]),
                    t._v(" "),
                    v("td"),
                    t._v(" "),
                    v("td"),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("m")]),
                    t._v(" "),
                    v("td", [t._v("monitor")]),
                    t._v(" "),
                    v("td", [t._v("显示值")]),
                    t._v(" "),
                    v("td"),
                    t._v(" "),
                    v("td"),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("f")]),
                    t._v(" "),
                    v("td", [t._v("function")]),
                    t._v(" "),
                    v("td", [t._v("公式")]),
                    t._v(" "),
                    v("td"),
                    t._v(" "),
                    v("td", [
                      t._v("setFormula "),
                      v("br"),
                      t._v(" setArrayFormula "),
                      v("br"),
                      t._v(" workbook.calculateFormula();"),
                    ]),
                  ]),
                  t._v(" "),
                  v("tr", [
                    v("td", [t._v("ps")]),
                    t._v(" "),
                    v("td", [t._v("comment")]),
                    t._v(" "),
                    v("td", [t._v("批注")]),
                    t._v(" "),
                    v("td", [
                      v("code", [
                        t._v("\n        {"),
                        v("br"),
                        t._v("\n            height: 140,//批注框高度 "),
                        v("br"),
                        t._v("\n            width: 73,//批注框宽度 "),
                        v("br"),
                        t._v(
                          "\n            left: 75,//批注框距离左边工作表边缘位置 "
                        ),
                        v("br"),
                        t._v(
                          "\n            top: 22,//批注框距离上边工作表边缘位置 "
                        ),
                        v("br"),
                        t._v("\n            isshow: true,//是否显示批注"),
                        v("br"),
                        t._v('\n            value: "jhbk"//批注内容'),
                        v("br"),
                        t._v("\n        }\n        "),
                      ]),
                    ]),
                    t._v(" "),
                    v("td"),
                  ]),
                ]),
                t._v(" "),
                v("p", [t._v("一个规范的单元格对象如下：")]),
                t._v(" "),
                v("div", { staticClass: "language-json extra-class" }, [
                  v("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    v("code", [
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"ct"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//单元格值格式")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"fa"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"General"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("  "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//格式名称为自动格式")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"t"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"n"'),
                      ]),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//格式类型为数字类型")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("233"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//内容的原始值为 233")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"m"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("233"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//内容的显示值为 233")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"bg"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"#f6b26b"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v('//背景为 "#f6b26b"')]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"ff"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v('// 字体为 "Arial"')]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"fc"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"#990000"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v('//字体颜色为 "#990000"')]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"bl"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//字体加粗")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"it"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//字体斜体")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"fs"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("9"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//字体大小为 9px")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"cl"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//启用删除线")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"ht"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//水平居中")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"vt"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//垂直居中")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"tr"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("2"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//文字旋转 -45°")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"tb"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("2"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//文本自动换行")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"ps"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//批注")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"left"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("92"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//批注框左边距")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"top"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("10"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//批注框上边距")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"width"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("91"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//批注框宽度")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"height"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("48"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//批注框高度")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"value"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"I am a comment"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//批注内容")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"isshow"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token boolean" } },
                        [t._v("true")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//批注框为显示状态")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"f"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"=SUM(233)"'),
                      ]),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//单元格是一个求和公式")]
                      ),
                      t._v("\n"),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                v(
                  "h3",
                  { attrs: { id: "为什么会有原始值-v-和显示值-m-的区分" } },
                  [
                    v(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#为什么会有原始值-v-和显示值-m-的区分",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 为什么会有原始值 "),
                    v("code", [t._v("v")]),
                    t._v(" 和显示值 "),
                    v("code", [t._v("m")]),
                    t._v(" 的区分？"),
                  ]
                ),
                t._v(" "),
                v("p", [
                  t._v(
                    "Luckysheet在存储数字类型的内容时，支持多种格式转换，所以需要保留原始值来做更多处理，比如同样一个数字"
                  ),
                  v("code", [t._v("1")]),
                  t._v("，设置成百分比格式就是"),
                  v("code", [t._v('"100%"')]),
                  t._v("，设置成两位小数数字就是"),
                  v("code", [t._v('"1.00"')]),
                  t._v("，"),
                ]),
                t._v(" "),
                v("p", [
                  t._v(
                    "还有一个原因是日期和时间格式的内容原始值会存储为一个数字，默认情况下，Luckysheet把"
                  ),
                  v("code", [t._v("1900-1-1 0:00:00")]),
                  t._v("存储为"),
                  v("code", [t._v("1")]),
                  t._v("，把"),
                  v("code", [t._v("1900-1-1 0:00:00")]),
                  t._v("以后的每一个时刻存储为该时刻与"),
                  v("code", [t._v("1900-1-1 0:00:00")]),
                  t._v("这个时刻的差值（以天为单位）。比如"),
                  v("code", [t._v("44127")]),
                  t._v("就表示"),
                  v("code", [t._v("2020-10-23")]),
                  t._v("这一天。"),
                ]),
                t._v(" "),
                v("p", [t._v("以下是特殊格式的例子：")]),
                t._v(" "),
                v("p", [t._v("百分比 "), v("code", [t._v("100%")])]),
                t._v(" "),
                v("div", { staticClass: "language-json extra-class" }, [
                  v("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    v("code", [
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"ct"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"fa"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"0%"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"t"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"n"'),
                      ]),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"m"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"100%"'),
                      ]),
                      t._v("\n"),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                v("p", [t._v("小数 "), v("code", [t._v("1.00")])]),
                t._v(" "),
                v("div", { staticClass: "language-json extra-class" }, [
                  v("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    v("code", [
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"ct"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"fa"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"##0.00"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"t"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"n"'),
                      ]),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"m"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"1.00"'),
                      ]),
                      t._v("\n"),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                v("p", [t._v("日期 "), v("code", [t._v("2020-10-23")])]),
                t._v(" "),
                v("div", { staticClass: "language-json extra-class" }, [
                  v("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    v("code", [
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"ct"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"fa"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"yyyy-MM-dd"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"t"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"d"'),
                      ]),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("44127"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"m"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"2020-10-23"'),
                      ]),
                      t._v("\n"),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                v("h2", { attrs: { id: "合并单元格" } }, [
                  v(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#合并单元格" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 合并单元格"),
                  v("div", { attrs: { id: "mergeCell" } }),
                ]),
                t._v(" "),
                v("p", [
                  t._v(
                    "设置一个合并单元格，需要处理两个地方，一是单元格对象中设置"
                  ),
                  v("code", [t._v("mc")]),
                  t._v("属性，二是在"),
                  v("code", [t._v("config")]),
                  t._v("中设置"),
                  v("code", [t._v("merge")]),
                  t._v("。"),
                ]),
                t._v(" "),
                v("p", [t._v('比如，将"A1:B2"单元格合并为一个单元格')]),
                t._v(" "),
                v("ul", [
                  v("li", [
                    v("p", [t._v("第一步：先设置四个单元格的参数")]),
                    t._v(" "),
                    v("div", { staticClass: "language-json extra-class" }, [
                      v("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        v("code", [
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          t._v("\n    "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"m"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"merge cell"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"ct"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"fa"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"General"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"t"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"g"')]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"v"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"merge cell"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"mc"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//合并单元格必备属性")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"r"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//主单元格的行号")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"c"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//主单元格的列号")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rs"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("2")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//合并单元格占的行数")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"cs"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("2")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//合并单元格占的列数")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n    "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"mc"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"r"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//主单元格的行号")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"c"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//主单元格的列号")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n    "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"mc"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"r"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//主单元格的行号")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"c"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//主单元格的列号")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n    "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"mc"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"r"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//主单元格的行号")]
                          ),
                          t._v("\n            "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"c"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//主单元格的列号")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n    "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n"),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    v("p", [
                      t._v("合并单元格的关键属性是"),
                      v("code", [t._v("mc")]),
                      t._v(
                        "，主单元格是选区范围中左上角的单元格，包含4个属性 r/c/rs/cs ,分别表示 row/column/rowspan/columnspan，在这里，就表示从主单元格A1（row 0 column 0）开始到右边2行下方2列的单元格进行合并，选区范围中的其他单元格则只需要设置主单元格位置即可。"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  v("li", [
                    v("p", [
                      t._v("第二步：再设置"),
                      v("code", [t._v("config.merge")]),
                    ]),
                    t._v(" "),
                    v("div", { staticClass: "language-json extra-class" }, [
                      v("pre", { pre: !0, attrs: { class: "language-json" } }, [
                        v("code", [
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"0_0"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"r"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"c"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("0")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"rs"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("2")]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token property" } },
                            [t._v('"cs"')]
                          ),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("2")]
                          ),
                          t._v("\n    "),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                        ]),
                      ]),
                    ]),
                    v("p", [
                      t._v("对象中的key为 "),
                      v("code", [t._v("r + '_' + c")]),
                      t._v(" 的拼接值，value同主单元格的"),
                      v("code", [t._v("mc")]),
                      t._v(
                        "设置: r:行数，c:列数，rs：合并的行数，cs:合并的列数"
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                v("blockquote", [
                  v(
                    "p",
                    [
                      t._v("merge 详细参考："),
                      v(
                        "RouterLink",
                        { attrs: { to: "/guide/data.html#config" } },
                        [t._v("表格数据config")]
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                v("h2", { attrs: { id: "含边框单元格" } }, [
                  v(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#含边框单元格" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 含边框单元格"),
                ]),
                t._v(" "),
                v("p", [
                  t._v("单元格的边框设置与合并单元格类似，需要在"),
                  v("code", [t._v("config")]),
                  t._v("中设置"),
                  v("code", [t._v("borderInfo")]),
                  t._v("，区别在于不需要设置单元格对象。\n加入"),
                ]),
                t._v(" "),
                v("p", [
                  t._v('比如，将"A1"单元格设置一个黑色细实线的全部边框'),
                ]),
                t._v(" "),
                v("p", [
                  t._v("设置"),
                  v("code", [t._v("config.borderInfo")]),
                  t._v("为"),
                ]),
                t._v(" "),
                v("div", { staticClass: "language-json extra-class" }, [
                  v("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    v("code", [
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"rangeType"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"range"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"borderType"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"border-all"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"color"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"#000"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"style"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"1"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"range"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"row"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"column"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      t._v("\n"),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                v("p", [
                  t._v(
                    "而其单元格对象不需要增加设置，如下只是基础的内容和格式设置"
                  ),
                ]),
                t._v(" "),
                v("div", { staticClass: "language-json extra-class" }, [
                  v("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    v("code", [
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"m"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"borderCell"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"ct"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n                "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"fa"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"General"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n                "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"t"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"g"'),
                      ]),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"borderCell"'),
                      ]),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      t._v("\n"),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                v("blockquote", [
                  v(
                    "p",
                    [
                      t._v("borderInfo 详细参考："),
                      v(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/guide/sheet.html#config-borderinfo",
                          },
                        },
                        [t._v("config.borderInfo")]
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                v("h2", { attrs: { id: "简化的单元格数据" } }, [
                  v(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#简化的单元格数据" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 简化的单元格数据"),
                ]),
                t._v(" "),
                v("p", [
                  t._v("特别强调的是，表格初始化的时候，采用的是"),
                  v("code", [t._v("r/c/v")]),
                  t._v("对象组成的一维数组格式，其中"),
                  v("code", [t._v("v")]),
                  t._v("的值一般是设置为单元格对象。为了节约后台的存储空间，"),
                  v("code", [t._v("v")]),
                  t._v(
                    "的值支持简写格式，直接写为一个字符串即可，渲染进Luckysheet后自动识别为自动格式即，"
                  ),
                  v("code", [t._v('"ct": { "fa": "General", "t": "n" }')]),
                ]),
                t._v(" "),
                v("p", [
                  t._v("以下为初始化3个单元格信息，第三个单元格即为简写格式："),
                ]),
                t._v(" "),
                v("div", { staticClass: "language-json extra-class" }, [
                  v("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    v("code", [
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"r"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"c"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"f"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"=MAX(A7:A9)"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"ct"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n                "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"fa"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"General"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n                "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"t"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"n"'),
                      ]),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("100"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"m"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"100"'),
                      ]),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"r"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"c"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("1"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"f"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"=SUM(A2)"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"bg"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"#fff000"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("12"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n            "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"m"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"12"'),
                      ]),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"r"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"c"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("2"),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"value 2"'),
                      ]),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                v("blockquote", [
                  v(
                    "p",
                    [
                      t._v("了解 "),
                      v(
                        "RouterLink",
                        { attrs: { to: "/guide/data.html#celldata" } },
                        [t._v("celldata的使用")]
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                v("h2", { attrs: { id: "单元格值格式" } }, [
                  v(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#单元格值格式" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 单元格值格式"),
                  v("div", { attrs: { id: "cellStyle" } }),
                ]),
                t._v(" "),
                v("p", [
                  t._v("值格式即为单元格对象中 "),
                  v("code", [t._v("ct")]),
                  t._v(" 的设置，"),
                ]),
                t._v(" "),
                v("p", [t._v("如下为自动格式的单元格")]),
                t._v(" "),
                v("div", { staticClass: "language-json extra-class" }, [
                  v("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    v("code", [
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"ct"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"fa"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"General"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n        "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"t"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"g"'),
                      ]),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"m"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"2424"'),
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"v"')]
                      ),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("2424"),
                      ]),
                      t._v("\n"),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                v("table", [
                  v("thead", [
                    v("tr", [
                      v("th", [t._v("参数")]),
                      t._v(" "),
                      v("th", [t._v("说明")]),
                      t._v(" "),
                      v("th", [t._v("值")]),
                    ]),
                  ]),
                  t._v(" "),
                  v("tbody", [
                    v("tr", [
                      v("td", [t._v("fa")]),
                      t._v(" "),
                      v("td", [t._v("Format格式的定义串")]),
                      t._v(" "),
                      v("td", [t._v('如"General"')]),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("t")]),
                      t._v(" "),
                      v("td", [t._v("Type类型")]),
                      t._v(" "),
                      v("td", [t._v('如"g"')]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                v("h3", { attrs: { id: "可选择的设置如下" } }, [
                  v(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#可选择的设置如下" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 可选择的设置如下"),
                ]),
                t._v(" "),
                v("table", [
                  v("thead", [
                    v("tr", [
                      v("th", [t._v("格式")]),
                      t._v(" "),
                      v("th", [t._v("ct.fa")]),
                      t._v(" "),
                      v("th", [t._v("ct.t")]),
                      t._v(" "),
                      v("th", [t._v("m 值示例")]),
                      t._v(" "),
                      v("th", [t._v("备注")]),
                    ]),
                  ]),
                  t._v(" "),
                  v("tbody", [
                    v("tr", [
                      v("td", [t._v("自动")]),
                      t._v(" "),
                      v("td", [t._v("General")]),
                      t._v(" "),
                      v("td", [t._v("g/n")]),
                      t._v(" "),
                      v("td", [t._v("DataDocs")]),
                      t._v(" "),
                      v("td", [
                        t._v("自动格式，也是默认的格式；单元格内容为数字时，"),
                        v("code", [t._v("m")]),
                        t._v("的值为"),
                        v("code", [t._v("'n'")]),
                      ]),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("纯文本")]),
                      t._v(" "),
                      v("td", [t._v("@")]),
                      t._v(" "),
                      v("td", [t._v("s")]),
                      t._v(" "),
                      v("td", [t._v("DataDocs")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [
                        v("br"),
                        v("br"),
                        v("br"),
                        v("strong", [t._v("数字格式")]),
                      ]),
                      t._v(" "),
                      v("td"),
                      t._v(" "),
                      v("td"),
                      t._v(" "),
                      v("td"),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("整数")]),
                      t._v(" "),
                      v("td", [t._v("0")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1235")]),
                      t._v(" "),
                      v("td", [t._v("0位小数")]),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("数字一位小数")]),
                      t._v(" "),
                      v("td", [t._v("0.0")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1234.6")]),
                      t._v(" "),
                      v("td", [
                        t._v(
                          "点后面0的个数就代表小数位数,如果原始数字位数大,设置位数小时会做四舍五入"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("数字两位小数")]),
                      t._v(" "),
                      v("td", [t._v("0.00")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1234.56")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("百分比整数")]),
                      t._v(" "),
                      v("td", [t._v("0%")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("123456%")]),
                      t._v(" "),
                      v("td", [t._v("也支持 #0% 的用法")]),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("百分比")]),
                      t._v(" "),
                      v("td", [t._v("0.00%")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("123456.00%")]),
                      t._v(" "),
                      v("td", [
                        t._v(
                          "也支持 #0.00% 的用法,点后面0的个数就代表小数位数"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("科学计数")]),
                      t._v(" "),
                      v("td", [t._v("0.00E+00")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1.23E+03")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("科学计数")]),
                      t._v(" "),
                      v("td", [t._v("##0.0E+0")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1.2E+3")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("分数")]),
                      t._v(" "),
                      v("td", [t._v("# ?/?")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1234 5/9")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("分数")]),
                      t._v(" "),
                      v("td", [t._v("# ??/??")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1234 14/25")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("万元")]),
                      t._v(" "),
                      v("td", [t._v("w")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("12万3456")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("万元2位小数")]),
                      t._v(" "),
                      v("td", [t._v("w0.00")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("12万3456.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("会计")]),
                      t._v(" "),
                      v("td", [t._v("¥(0.00)")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td"),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [t._v("#,##0")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1,235")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [t._v("#,##0.00")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1,234.56")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [v("code", [t._v("#,##0_);(#,##0)")])]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1,235")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [v("code", [t._v("#,##0_);[Red](#,##0)")])]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1,235")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [v("code", [t._v("#,##0.00_);(#,##0.00)")])]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1,234.56")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [
                        v("code", [t._v("#,##0.00_);[Red](#,##0.00)")]),
                      ]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1,234.56")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [t._v("$#,##0_);($#,##0)")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$1,235")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [v("code", [t._v("$#,##0_);[Red]($#,##0)")])]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$1,235")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [t._v("$#,##0.00_);($#,##0.00)")]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$1,234.56")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [
                        v("code", [t._v("$#,##0.00_);[Red]($#,##0.00)")]),
                      ]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$1,234.56")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [
                        v("em", [t._v("($* #,##0")]),
                        t._v(");"),
                        v("em", [t._v('(...($* "-"')]),
                        t._v(");"),
                        v("em", [t._v("(@")]),
                        t._v(")"),
                      ]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 1,235")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [
                        v("em", [t._v("(* #,##0")]),
                        t._v(");"),
                        v("em", [t._v("(*...")]),
                        t._v('(* "-"'),
                        v("em", [t._v(");")]),
                        t._v("(@_)"),
                      ]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1,235")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [
                        v("em", [t._v("($* #,##0.00")]),
                        t._v(");"),
                        v("em", [t._v('(...($* "-"')]),
                        t._v(");"),
                        v("em", [t._v("(@")]),
                        t._v(")"),
                      ]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 1,234.56")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("更多数字格式")]),
                      t._v(" "),
                      v("td", [
                        v("em", [t._v("(* #,##0.00")]),
                        t._v(');...* "-"??'),
                        v("em", [t._v(");")]),
                        t._v("(@_)"),
                      ]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("1,234.56")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [
                        v("br"),
                        v("br"),
                        v("br"),
                        v("strong", [t._v("时间日期格式")]),
                      ]),
                      t._v(" "),
                      v("td"),
                      t._v(" "),
                      v("td"),
                      t._v(" "),
                      v("td"),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("时间")]),
                      t._v(" "),
                      v("td", [t._v("hh:mm AM/PM")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("10:23 AM")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("时间24H")]),
                      t._v(" "),
                      v("td", [t._v("hh:mm")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("10:23")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期时间")]),
                      t._v(" "),
                      v("td", [t._v("yyyy-MM-dd hh:mm AM/PM")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("2020-07-29 10:23 AM")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期时间24H")]),
                      t._v(" "),
                      v("td", [t._v("yyyy-MM-dd hh:mm")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("2020-07-29 10:23")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v("yyyy-MM-dd")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("1930-08-05")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v("yyyy/MM/dd")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("1930/8/5")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v('yyyy"年"M"月"d"日"')]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("1930年8月5日")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v("MM-dd")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("08-05")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v("M-d")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("8-5")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v('M"月"d"日"')]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("8月5日")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v("h:mm:ss")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("13:30:30")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v("h:mm")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("13:30")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v("AM/PM hh:mm")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("下午01:30")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v("AM/PM h:mm")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("下午1:30")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v("AM/PM h:mm:ss")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("下午1:30:30")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("日期")]),
                      t._v(" "),
                      v("td", [t._v("MM-dd AM/PM hh:mm")]),
                      t._v(" "),
                      v("td", [t._v("d")]),
                      t._v(" "),
                      v("td", [t._v("下08-05 下午01:30")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [
                        v("br"),
                        v("br"),
                        v("br"),
                        v("strong", [t._v("货币格式")]),
                      ]),
                      t._v(" "),
                      v("td"),
                      t._v(" "),
                      v("td"),
                      t._v(" "),
                      v("td"),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:人民币")]),
                      t._v(" "),
                      v("td", [t._v('"¥" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("¥ 123.00")]),
                      t._v(" "),
                      v("td", [t._v("也支持 ¥ #.00 或者 ¥0.00")]),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:美元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:欧元")]),
                      t._v(" "),
                      v("td", [t._v('"€" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("€ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:英镑")]),
                      t._v(" "),
                      v("td", [t._v('"￡" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("￡ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:港元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:日元")]),
                      t._v(" "),
                      v("td", [t._v('"￥" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("￥ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:阿尔巴尼亚列克")]),
                      t._v(" "),
                      v("td", [t._v('"Lek" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Lek 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:阿尔及利亚第纳尔")]),
                      t._v(" "),
                      v("td", [t._v('"din" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("din 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:阿富汗尼")]),
                      t._v(" "),
                      v("td", [t._v('"Af" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Af 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:阿根廷比索")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:阿拉伯联合酋长国迪拉姆")]),
                      t._v(" "),
                      v("td", [t._v('"dh" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("dh 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:阿鲁巴弗罗林")]),
                      t._v(" "),
                      v("td", [t._v('"Afl" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Afl 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:阿曼里亚尔")]),
                      t._v(" "),
                      v("td", [t._v('"Rial" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Rial 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:阿塞拜疆马纳特")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:埃及镑")]),
                      t._v(" "),
                      v("td", [t._v('"￡" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("￡ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:埃塞俄比亚比尔")]),
                      t._v(" "),
                      v("td", [t._v('"Birr" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Birr 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:安哥拉宽扎")]),
                      t._v(" "),
                      v("td", [t._v('"Kz" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Kz 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:澳大利亚元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:澳门元")]),
                      t._v(" "),
                      v("td", [t._v('"MOP" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("MOP 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:巴巴多斯元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:巴布亚新几内亚基那")]),
                      t._v(" "),
                      v("td", [t._v('"PGK" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("PGK 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:巴哈马元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:巴基斯坦卢比")]),
                      t._v(" "),
                      v("td", [t._v('"Rs" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Rs 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:巴拉圭瓜拉尼")]),
                      t._v(" "),
                      v("td", [t._v('"Gs" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Gs 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:巴林第纳尔")]),
                      t._v(" "),
                      v("td", [t._v('"din" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("din 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:巴拿马巴波亚")]),
                      t._v(" "),
                      v("td", [t._v('"B/" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("B/ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:巴西里亚伊")]),
                      t._v(" "),
                      v("td", [t._v('"R$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("R$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:白俄罗斯卢布")]),
                      t._v(" "),
                      v("td", [t._v('"р" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("р 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:百慕大元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:保加利亚列弗")]),
                      t._v(" "),
                      v("td", [t._v('"lev" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("lev 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:冰岛克朗")]),
                      t._v(" "),
                      v("td", [t._v('"kr" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("kr 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:波黑可兑换马克")]),
                      t._v(" "),
                      v("td", [t._v('"KM" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("KM 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:波兰兹罗提")]),
                      t._v(" "),
                      v("td", [t._v('"z?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("z? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:玻利维亚诺")]),
                      t._v(" "),
                      v("td", [t._v('"Bs" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Bs 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:伯利兹元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:博茨瓦纳普拉")]),
                      t._v(" "),
                      v("td", [t._v('"P" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("P 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:不丹努扎姆")]),
                      t._v(" "),
                      v("td", [t._v('"Nu" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Nu 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:布隆迪法郎")]),
                      t._v(" "),
                      v("td", [t._v('"FBu" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("FBu 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:朝鲜圆")]),
                      t._v(" "),
                      v("td", [t._v('"?KP" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("?KP 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:丹麦克朗")]),
                      t._v(" "),
                      v("td", [t._v('"kr" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("kr 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:东加勒比元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:多米尼加比索")]),
                      t._v(" "),
                      v("td", [t._v('"RD$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("RD$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:俄国卢布")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:厄立特里亚纳克法")]),
                      t._v(" "),
                      v("td", [t._v('"Nfk" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Nfk 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:非洲金融共同体法郎")]),
                      t._v(" "),
                      v("td", [t._v('"CFA" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("CFA 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:菲律宾比索")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:斐济元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:佛得角埃斯库多")]),
                      t._v(" "),
                      v("td", [t._v('"CVE" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("CVE 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:福克兰群岛镑")]),
                      t._v(" "),
                      v("td", [t._v('"￡" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("￡ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:冈比亚达拉西")]),
                      t._v(" "),
                      v("td", [t._v('"GMD" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("GMD 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:刚果法郎")]),
                      t._v(" "),
                      v("td", [t._v('"FrCD" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("FrCD 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:哥伦比亚比索")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:哥斯达黎加科朗")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:古巴比索")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:古巴可兑换比索")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:圭亚那元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:哈萨克斯坦坚戈")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:海地古德")]),
                      t._v(" "),
                      v("td", [t._v('"HTG" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("HTG 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:韩元")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:荷属安的列斯盾")]),
                      t._v(" "),
                      v("td", [t._v('"NAf." 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("NAf. 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:洪都拉斯拉伦皮拉")]),
                      t._v(" "),
                      v("td", [t._v('"L" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("L 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:吉布提法郎")]),
                      t._v(" "),
                      v("td", [t._v('"Fdj" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Fdj 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:吉尔吉斯斯坦索姆")]),
                      t._v(" "),
                      v("td", [t._v('"KGS" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("KGS 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:几内亚法郎")]),
                      t._v(" "),
                      v("td", [t._v('"FG" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("FG 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:加拿大元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:加纳塞地")]),
                      t._v(" "),
                      v("td", [t._v('"GHS" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("GHS 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:柬埔寨瑞尔")]),
                      t._v(" "),
                      v("td", [t._v('"Riel" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Riel 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:捷克克朗")]),
                      t._v(" "),
                      v("td", [t._v('"K?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("K? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:津巴布韦元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:卡塔尔里亚尔")]),
                      t._v(" "),
                      v("td", [t._v('"Rial" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Rial 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:开曼群岛元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:科摩罗法郎")]),
                      t._v(" "),
                      v("td", [t._v('"CF" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("CF 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:科威特第纳尔")]),
                      t._v(" "),
                      v("td", [t._v('"din" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("din 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:克罗地亚库纳")]),
                      t._v(" "),
                      v("td", [t._v('"kn" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("kn 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:肯尼亚先令")]),
                      t._v(" "),
                      v("td", [t._v('"Ksh" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Ksh 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:莱索托洛蒂")]),
                      t._v(" "),
                      v("td", [t._v('"LSL" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("LSL 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:老挝基普")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:黎巴嫩镑")]),
                      t._v(" "),
                      v("td", [t._v('"L￡" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("L￡ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:立陶宛立特")]),
                      t._v(" "),
                      v("td", [t._v('"Lt" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Lt 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:利比亚第纳尔")]),
                      t._v(" "),
                      v("td", [t._v('"din" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("din 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:利比亚元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:卢旺达法郎")]),
                      t._v(" "),
                      v("td", [t._v('"RF" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("RF 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:罗马尼亚列伊")]),
                      t._v(" "),
                      v("td", [t._v('"RON" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("RON 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:马达加斯加阿里亚里")]),
                      t._v(" "),
                      v("td", [t._v('"Ar" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Ar 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:马尔代夫拉菲亚")]),
                      t._v(" "),
                      v("td", [t._v('"Rf" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Rf 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:马拉维克瓦查")]),
                      t._v(" "),
                      v("td", [t._v('"MWK" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("MWK 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:马来西亚林吉特")]),
                      t._v(" "),
                      v("td", [t._v('"RM" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("RM 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:马其顿戴第纳尔")]),
                      t._v(" "),
                      v("td", [t._v('"din" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("din 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:毛里求斯卢比")]),
                      t._v(" "),
                      v("td", [t._v('"MURs" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("MURs 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:毛里塔尼亚乌吉亚")]),
                      t._v(" "),
                      v("td", [t._v('"MRO" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("MRO 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:蒙古图格里克")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:孟加拉塔卡")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:秘鲁新索尔")]),
                      t._v(" "),
                      v("td", [t._v('"S/" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("S/ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:缅甸开亚特")]),
                      t._v(" "),
                      v("td", [t._v('"K" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("K 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:摩尔多瓦列伊")]),
                      t._v(" "),
                      v("td", [t._v('"MDL" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("MDL 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:摩洛哥迪拉姆")]),
                      t._v(" "),
                      v("td", [t._v('"dh" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("dh 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:莫桑比克梅蒂卡尔")]),
                      t._v(" "),
                      v("td", [t._v('"MTn" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("MTn 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:墨西哥比索")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:纳米比亚元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:南非兰特")]),
                      t._v(" "),
                      v("td", [t._v('"R" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("R 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:南苏丹镑")]),
                      t._v(" "),
                      v("td", [t._v('"￡" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("￡ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:尼加拉瓜科多巴")]),
                      t._v(" "),
                      v("td", [t._v('"C$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("C$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:尼泊尔卢比")]),
                      t._v(" "),
                      v("td", [t._v('"Rs" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Rs 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:尼日利亚奈拉")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:挪威克朗")]),
                      t._v(" "),
                      v("td", [t._v('"kr" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("kr 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:乔治亚拉瑞")]),
                      t._v(" "),
                      v("td", [t._v('"GEL" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("GEL 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:人民币（离岸）")]),
                      t._v(" "),
                      v("td", [t._v('"￥" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("￥ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:瑞典克朗")]),
                      t._v(" "),
                      v("td", [t._v('"kr" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("kr 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:瑞士法郎")]),
                      t._v(" "),
                      v("td", [t._v('"CHF" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("CHF 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:塞尔维亚第纳尔")]),
                      t._v(" "),
                      v("td", [t._v('"din" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("din 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:塞拉利昂利昂")]),
                      t._v(" "),
                      v("td", [t._v('"SLL" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("SLL 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:塞舌尔卢比")]),
                      t._v(" "),
                      v("td", [t._v('"SCR" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("SCR 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:沙特里亚尔")]),
                      t._v(" "),
                      v("td", [t._v('"Rial" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Rial 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:圣多美多布拉")]),
                      t._v(" "),
                      v("td", [t._v('"Db" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Db 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:圣赫勒拿群岛磅")]),
                      t._v(" "),
                      v("td", [t._v('"￡" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("￡ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:斯里兰卡卢比")]),
                      t._v(" "),
                      v("td", [t._v('"Rs" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Rs 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:斯威士兰里兰吉尼")]),
                      t._v(" "),
                      v("td", [t._v('"SZL" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("SZL 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:苏丹镑")]),
                      t._v(" "),
                      v("td", [t._v('"SDG" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("SDG 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:苏里南元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:所罗门群岛元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:索马里先令")]),
                      t._v(" "),
                      v("td", [t._v('"SOS" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("SOS 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:塔吉克斯坦索莫尼")]),
                      t._v(" "),
                      v("td", [t._v('"Som" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Som 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:太平洋法郎")]),
                      t._v(" "),
                      v("td", [t._v('"FCFP" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("FCFP 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:泰国铢")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:坦桑尼亚先令")]),
                      t._v(" "),
                      v("td", [t._v('"TSh" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("TSh 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:汤加潘加")]),
                      t._v(" "),
                      v("td", [t._v('"T$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("T$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:特立尼达和多巴哥元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:突尼斯第纳尔")]),
                      t._v(" "),
                      v("td", [t._v('"din" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("din 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:土耳其里拉")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:瓦努阿图瓦图")]),
                      t._v(" "),
                      v("td", [t._v('"VUV" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("VUV 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:危地马拉格查尔")]),
                      t._v(" "),
                      v("td", [t._v('"Q" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Q 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:委内瑞拉博利瓦")]),
                      t._v(" "),
                      v("td", [t._v('"Bs" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Bs 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:文莱元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:乌干达先令")]),
                      t._v(" "),
                      v("td", [t._v('"UGX" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("UGX 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:乌克兰格里夫尼亚")]),
                      t._v(" "),
                      v("td", [t._v('"грн." 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("грн. 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:乌拉圭比索")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:乌兹别克斯坦苏姆")]),
                      t._v(" "),
                      v("td", [t._v('"so?m" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("so?m 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:西萨摩亚塔拉")]),
                      t._v(" "),
                      v("td", [t._v('"WST" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("WST 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:新加坡元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:新台币")]),
                      t._v(" "),
                      v("td", [t._v('"NT$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("NT$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:新西兰元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:匈牙利福林")]),
                      t._v(" "),
                      v("td", [t._v('"Ft" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Ft 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:叙利亚镑")]),
                      t._v(" "),
                      v("td", [t._v('"￡" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("￡ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:牙买加元")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:亚美尼亚德拉姆")]),
                      t._v(" "),
                      v("td", [t._v('"Dram" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Dram 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:也门里亚尔")]),
                      t._v(" "),
                      v("td", [t._v('"Rial" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Rial 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:伊拉克第纳尔")]),
                      t._v(" "),
                      v("td", [t._v('"din" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("din 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:伊朗里亚尔")]),
                      t._v(" "),
                      v("td", [t._v('"Rial" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Rial 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:以色列新谢克尔")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:印度卢比")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:印度尼西亚卢比")]),
                      t._v(" "),
                      v("td", [t._v('"Rp" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("Rp 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:约旦第纳尔")]),
                      t._v(" "),
                      v("td", [t._v('"din" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("din 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:越南盾")]),
                      t._v(" "),
                      v("td", [t._v('"?" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("? 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:赞比亚克瓦查")]),
                      t._v(" "),
                      v("td", [t._v('"ZMW" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("ZMW 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:直布罗陀镑")]),
                      t._v(" "),
                      v("td", [t._v('"￡" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("￡ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:智利比索")]),
                      t._v(" "),
                      v("td", [t._v('"$" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("$ 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("货币:中非金融合作法郎")]),
                      t._v(" "),
                      v("td", [t._v('"FCFA" 0.00')]),
                      t._v(" "),
                      v("td", [t._v("n")]),
                      t._v(" "),
                      v("td", [t._v("FCFA 123.00")]),
                      t._v(" "),
                      v("td"),
                    ]),
                  ]),
                ]),
                t._v(" "),
                v("p", [
                  t._v("以上配置参考了"),
                  v(
                    "a",
                    {
                      attrs: {
                        href: "https://docs.aspose.com/display/cellsnet/List+of+Supported+Number+Formats#ListofSupportedNumberFormats-Aspose.Cells",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("Aspose.Cells"), v("OutboundLink")],
                    1
                  ),
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
      v.default = a.exports;
    },
  },
]);
