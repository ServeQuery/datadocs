(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    327: function (t, s, a) {
      "use strict";
      a.r(s);
      var n = a(10),
        e = Object(n.a)(
          {},
          function () {
            var t = this,
              s = t._self._c;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s(
                  "h1",
                  {
                    attrs: { id: "datadocs-已不再维护-推荐使用-univer-替代" },
                  },
                  [
                    s(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#datadocs-已不再维护-推荐使用-univer-替代",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" DataDocs 已不再维护，推荐使用 "),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/dream-num/univer",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("Univer"), s("OutboundLink")],
                      1
                    ),
                    t._v(" 替代"),
                  ]
                ),
                t._v(" "),
                s("h1", { attrs: { id: "快速上手" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#快速上手" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 快速上手"),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "基本介绍" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#基本介绍" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 基本介绍"),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "DataDocs ，一款纯前端类似excel的在线表格，功能强大、配置简单、完全开源。"
                  ),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "demo" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#demo" } },
                    [t._v("#")]
                  ),
                  t._v(" Demo"),
                ]),
                t._v(" "),
                s("p", [
                  s(
                    "a",
                    {
                      attrs: {
                        href: "https://servequery.github.io/datadocs/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("在线demo"), s("OutboundLink")],
                    1
                  ),
                ]),
                t._v(" "),
                s("p", [
                  s("img", {
                    attrs: {
                      src: "/DataDocs/img/LuckysheetDemo.gif",
                      alt: "演示",
                    },
                  }),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "在线案例" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#在线案例" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 在线案例"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s(
                      "a",
                      {
                        attrs: {
                          href: "http://datadocs.lashuju.com/demo/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("协同编辑Demo"), s("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "特性" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#特性" } },
                    [t._v("#")]
                  ),
                  t._v(" 特性"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "🛠️格式设置" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#🛠️格式设置" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 🛠️格式设置"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("样式")]),
                    t._v(" (修改字体样式，字号，颜色或者其他通用的样式)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("条件格式")]),
                    t._v(
                      " (突出显示所关注的单元格或单元格区域；强调异常值；使用数据栏、色阶和图标集（与数据中的特定变体对应）直观地显示数据)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [s("strong", [t._v("文本对齐及旋转")])]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("支持文本的截断、溢出、自动换行")]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("数据类型")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        s("strong", [t._v("货币, 百分比, 数字, 日期")]),
                      ]),
                      t._v(" "),
                      s("li", [
                        s("strong", [t._v("Custom")]),
                        t._v(" (和excel保持一致，例如： "),
                        s("code", [t._v("##,###0.00")]),
                        t._v(" , "),
                        s("code", [
                          t._v("$1,234.56$##,###0.00_);[Red]($##,###0.00)"),
                        ]),
                        t._v(", "),
                        s("code", [
                          t._v('_($* ##,###0.00_);_(...($* "-"_);_(@_)'),
                        ]),
                        t._v(", "),
                        s("code", [t._v("08-05 PM 01:30MM-dd AM/PM hh:mm")]),
                        t._v(" )"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("单元格内多样式")]),
                    t._v(
                      " (Alt+Enter单元格内换行、上标、下标、单元格内可定义每个文字的不同样式)"
                    ),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "🧬单元格" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#🧬单元格" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 🧬单元格"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("拖拽选取来修改单元格")]),
                    t._v(
                      " (对选区进行操作，可以拖动四边来移动选区，也可以在右下角对选区进行下拉填充操作)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("选区下拉填充")]),
                    t._v(
                      " (对于一个1,2,3,4,5的序列，将会按照间隔为1进行下拉填充，而对2,4,6,8将会以2作为间隔。支持等差数列，等比数列，日期，周，天，月，年，中文数字填充)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("自动填充选项")]),
                    t._v(
                      " (下拉填充后，会出现填充选项的菜单，支持选择复制，序列，仅格式，只填充格式，天，月，年的选择)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("多选区操作")]),
                    t._v(
                      " (可以按住Ctrl键进行单元格多选操作，支持多选区的复制粘贴)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("查找和替换")]),
                    t._v(
                      " (对内容进行查找替换，支持正则表达式，整词，大小写敏感)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("定位")]),
                    t._v(
                      " (可以根据单元格的数据类型进行自动定位并选中，选中后可以批量进行格式等操作)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [s("strong", [t._v("合并单元格")])]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("数据验证(表单功能)")]),
                    t._v("  (支持Checkbox, drop-down list, datePicker)"),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "🖱️行和列操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#🖱️行和列操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 🖱️行和列操作"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [s("strong", [t._v("隐藏，插入，删除行或列")])]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("冻结行或列")]),
                    t._v(
                      " (支持冻结首行和首列，冻结到选区，冻结调节杆可以进行拖动操作)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("文本分列")]),
                    t._v(
                      " (可以把文本根据不同符号进行拆分，和excel的分列功能类似)"
                    ),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "🔨操作体验" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#🔨操作体验" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 🔨操作体验"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [s("strong", [t._v("撤销/重做")])]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("复制/粘贴/剪切操作")]),
                    t._v(
                      " (支持Luckysheet到excel和excel到Luckysheet带格式的互相拷贝)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("快捷键支持")]),
                    t._v(
                      " (快捷键操作保持与excel一致，如果有不同或者缺失请反馈给我们)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("格式刷")]),
                    t._v(" (与google sheet类似)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("任意选区拖拽")]),
                    t._v(
                      " (选择单元格，输入公式，插入图表，会与选区相关，可以通过任意拖动和放大缩小选区来改变与之关联的参数)"
                    ),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "⚙️公式和函数" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#⚙️公式和函数" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" ⚙️公式和函数"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("内置公式")]),
                    t._v(" "),
                    s("ul", [
                      s("li", [
                        t._v("数学 (SUMIFS, AVERAGEIFS, SUMIF, SUM, etc.)"),
                      ]),
                      t._v(" "),
                      s("li", [t._v("文本 (CONCATENATE, REGEXMATCH, MID)")]),
                      t._v(" "),
                      s("li", [
                        t._v("日期 (DATEVALUE, DATEDIF, NOW, WEEKDAY, etc.)"),
                      ]),
                      t._v(" "),
                      s("li", [t._v("财务 (PV, FV, IRR, NPV, etc.)")]),
                      t._v(" "),
                      s("li", [t._v("逻辑 (IF, AND, OR, IFERROR, etc.)")]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "查找和引用 (VLOOKUP, HLOOkUP, INDIRECT, OFFSET, etc.)"
                        ),
                      ]),
                      t._v(" "),
                      s("li", [
                        t._v(
                          "动态数组 (Excel2019新函数，SORT,FILTER,UNIQUE,RANDARRAY,SEQUENCE)"
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("公式支持数组")]),
                    t._v(" (={1,2,3,4,5,6}, Crtl+Shift+Enter)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("远程公式")]),
                    t._v(
                      " (DM_TEXT_TFIDF, DM_TEXT_TEXTRANK,DATA_CN_STOCK_CLOSE etc. Need remote interface, can realize complex calculation)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("自定义公式")]),
                    t._v(
                      "  (根据身份证识别年龄，性别，生日，省份，城市等. AGE_BY_IDCARD, SEX_BY_IDCARD, BIRTHDAY_BY_IDCARD, PROVINCE_BY_IDCARD, CITY_BY_IDCARD, etc. 可以任意加入自己的公式哦)"
                    ),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "📐表格操作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#📐表格操作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 📐表格操作"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("筛选")]),
                    t._v(" (支持颜色、数字、字符、日期的筛选)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("排序")]),
                    t._v(" (同时加入多个字段进行排序)"),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "📈数据透视表" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#📈数据透视表" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 📈数据透视表"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("字段拖拽")]),
                    t._v(
                      " (操作方式与excel类似，拖动字段到行、列、数值、筛选等4个区域)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("聚合方式")]),
                    t._v(
                      "  (支持汇总、计数、去重计数、平均、最大、最小、中位数、协方差、标准差、方差等计算)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("筛选数据")]),
                    t._v(" (可对字段进行筛选后再进行汇总)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("数据透视表下钻")]),
                    t._v(
                      " (双击数据透视表中的数据，可以下钻查看到明细，操作方式与excel一致)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("根据数据透视表新建图表")]),
                    t._v(" (数据透视表产生的数据也可以进行图表的制作)"),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "📊图表" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#📊图表" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 📊图表"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("支持的图表类型")]),
                    t._v(
                      " (目前折线图、柱状图、面积图、条形图、饼图可以使用，散点图、雷达图、仪表盘、漏斗图正在接入，其他图表正在陆续开发中，请大家给予建议)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("关于图表插件")]),
                    t._v("  (图表使用了一个中间插件"),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/mengshukeji/chartMix",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("ChartMix"), s("OutboundLink")],
                      1
                    ),
                    t._v(
                      "(MIT协议): 目前支持ECharts，正在逐步接入Highcharts、阿里G2、amCharts、googleChart、chart.js)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("Sparklines小图")]),
                    t._v(
                      " (以公式的形式进行设置和展示，目前支持：折线图、面积图、柱状图、累积图、条形图、离散图、三态图、饼图、箱线图等)"
                    ),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "✍️分享及写作" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#✍️分享及写作" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" ✍️分享及写作"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("评论")]),
                    t._v(" (评论的删除、添加、修改、隐藏)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("共享编辑")]),
                    t._v(" (支持多用户共享编辑，内置API)"),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "📚插入对象" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#📚插入对象" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 📚插入对象"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("插入图片")]),
                    t._v(
                      " (支持JPG,PNG,SVG的插入、修改和删除，并且随表格的变动而产生变化)"
                    ),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "⚡luckysheet专有" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#⚡luckysheet专有" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" ⚡Luckysheet专有"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("矩阵计算")]),
                    t._v(
                      " (通过右键菜单进行支持：对选区内的数据进行转置、旋转、数值计算)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("截图")]),
                    t._v(" (把选区的内容进行截图展示)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("复制到其他格式")]),
                    t._v(
                      ' (右键菜单的"复制为", 支持复制为json、array、对角线数据、去重等)'
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("EXCEL导入及导出")]),
                    t._v(
                      " (专为Luckysheet打造的导入导出插件，支持密码、水印、公式等的本地导入导出，导出正在开发)"
                    ),
                  ]),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "⏱️未来开发计划" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#⏱️未来开发计划" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" ⏱️未来开发计划"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("打印及设置")]),
                    t._v(" (像excel一样进行打印设置，并导出为图片或者PDF)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("树形菜单")]),
                    t._v(" (类似excel中的分级显示（分组）)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("表格新功能")]),
                    t._v(" (类似excel中表格的筛选器和切片器)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("CSV,TXT导入及导出")]),
                    t._v(
                      " (专为Luckysheet打造的导入导出插件，支持密码、水印、公式等的本地导入导出)"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("插入svg形状")]),
                    t._v(" (支持"),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/mengshukeji/Pentool",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("Pen tool"), s("OutboundLink")],
                      1
                    ),
                    t._v("的插入、修改和删除，并且随表格的变动而产生变化)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("文档")]),
                    t._v(" (完善文档和API)"),
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("敬请期待...")]),
                    t._v(" (可以提出好的建议给我们)"),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "开发模式" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#开发模式" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 开发模式"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "环境" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#环境" } },
                    [t._v("#")]
                  ),
                  t._v(" 环境"),
                ]),
                t._v(" "),
                s("p", [
                  s(
                    "a",
                    {
                      attrs: {
                        href: "https://nodejs.org/en/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("Node.js"), s("OutboundLink")],
                    1
                  ),
                  t._v(" Version >= 6"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "安装" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#安装" } },
                    [t._v("#")]
                  ),
                  t._v(" 安装"),
                ]),
                t._v(" "),
                s("div", { staticClass: "language-shell extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-shell" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("npm")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("install")]
                      ),
                      t._v("\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("npm")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("install")]
                      ),
                      t._v(" gulp "),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token parameter variable" },
                        },
                        [t._v("-g")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                s("h3", { attrs: { id: "开发" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#开发" } },
                    [t._v("#")]
                  ),
                  t._v(" 开发"),
                ]),
                t._v(" "),
                s("div", { staticClass: "language-shell extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-shell" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("npm")]
                      ),
                      t._v(" run dev\n"),
                    ]),
                  ]),
                ]),
                s("h3", { attrs: { id: "打包" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#打包" } },
                    [t._v("#")]
                  ),
                  t._v(" 打包"),
                ]),
                t._v(" "),
                s("div", { staticClass: "language-shell extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-shell" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("npm")]
                      ),
                      t._v(" run build\n"),
                    ]),
                  ]),
                ]),
                s("h2", { attrs: { id: "使用步骤" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#使用步骤" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 使用步骤"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "第一步" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#第一步" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 第一步"),
                ]),
                t._v(" "),
                s("p", [t._v("引入依赖，有2种方式")]),
                t._v(" "),
                s("h4", { attrs: { id: "cdn" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#cdn" } },
                    [t._v("#")]
                  ),
                  t._v(" CDN"),
                ]),
                t._v(" "),
                s("div", { staticClass: "language-html extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("stylesheet"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v(
                              "https://cdn.jsdelivr.net/npm/datadocs@latest/dist/plugins/css/pluginsCss.css"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        ),
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("stylesheet"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v(
                              "https://cdn.jsdelivr.net/npm/datadocs@latest/dist/plugins/plugins.css"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        ),
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("stylesheet"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v(
                              "https://cdn.jsdelivr.net/npm/datadocs@latest/dist/css/datadocs.css"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        ),
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("stylesheet"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v(
                              "https://cdn.jsdelivr.net/npm/datadocs@latest/dist/assets/iconfont/iconfont.css"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        ),
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v(
                              "https://cdn.jsdelivr.net/npm/datadocs@latest/dist/plugins/js/plugin.js"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v(
                              "https://cdn.jsdelivr.net/npm/datadocs@latest/dist/datadocs.umd.js"
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                s("p", [
                  t._v("注意，"),
                  s("code", [
                    t._v(
                      "https://cdn.jsdelivr.net/npm/datadocs@latest/dist/datadocs.umd.js"
                    ),
                  ]),
                  t._v(
                    "这个路径意思是会拉取到最新的luckysheet代码，但是如果Luckysheet刚刚发布，jsdelivr网站可能还没来得及从npm上同步过去，故而使用这个路径还是会拉到上一个版本，我们推荐您直接指定最新版本。"
                  ),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "想要指定Luckysheet版本，请在所有的CDN依赖文件后面加上版本号，如："
                  ),
                  s("code", [
                    t._v(
                      "https://cdn.jsdelivr.net/npm/datadocs@2.1.12/dist/datadocs.umd.js"
                    ),
                  ]),
                  t._v("。"),
                ]),
                t._v(" "),
                s("blockquote", [
                  s("p", [
                    t._v("如何知道最新版本是哪一版？查看最新 "),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/releases",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("release记录"), s("OutboundLink")],
                      1
                    ),
                    t._v(" 或者 "),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/blob/master/package.json",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("package.json"), s("OutboundLink")],
                      1
                    ),
                    t._v(" 的"),
                    s("code", [t._v("version")]),
                    t._v("字段。"),
                  ]),
                ]),
                t._v(" "),
                s("p", [
                  t._v("如果不方便访问 jsdelivr.net，还可以采用本地方式引入"),
                ]),
                t._v(" "),
                s("h4", { attrs: { id: "本地引入" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#本地引入" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 本地引入"),
                ]),
                t._v(" "),
                s("p", [
                  s("code", [t._v("npm run build")]),
                  t._v("后"),
                  s("code", [t._v("dist")]),
                  t._v(
                    "文件夹下的所有文件复制到项目目录，然后通过相对路径引入"
                  ),
                ]),
                t._v(" "),
                s("div", { staticClass: "language-html extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("stylesheet"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("./plugins/css/pluginsCss.css"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        ),
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("stylesheet"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("./plugins/plugins.css"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        ),
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("stylesheet"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("./css/datadocs.css"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        ),
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("link"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("rel")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("stylesheet"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("href")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                            t._v("./assets/iconfont/iconfont.css"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("'")]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        ),
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("./plugins/js/plugin.js"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("src")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("./datadocs.umd.js"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      s("span", { pre: !0, attrs: { class: "token script" } }),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                s("h3", { attrs: { id: "第二步" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#第二步" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 第二步"),
                ]),
                t._v(" "),
                s("p", [t._v("指定一个表格容器")]),
                t._v(" "),
                s("div", { staticClass: "language-html extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("div"),
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("id")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("datadocs"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token special-attr" } },
                          [
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token attr-name" } },
                              [t._v("style")]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token attr-value" } },
                              [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token punctuation attr-equals",
                                    },
                                  },
                                  [t._v("=")]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v('"')]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: {
                                      class: "token value css language-css",
                                    },
                                  },
                                  [
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token property" },
                                      },
                                      [t._v("margin")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(":")]
                                    ),
                                    t._v("0px"),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(";")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token property" },
                                      },
                                      [t._v("padding")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(":")]
                                    ),
                                    t._v("0px"),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(";")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token property" },
                                      },
                                      [t._v("position")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(":")]
                                    ),
                                    t._v("absolute"),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(";")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token property" },
                                      },
                                      [t._v("width")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(":")]
                                    ),
                                    t._v("100%"),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(";")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token property" },
                                      },
                                      [t._v("height")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(":")]
                                    ),
                                    t._v("100%"),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(";")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token property" },
                                      },
                                      [t._v("left")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(":")]
                                    ),
                                    t._v(" 0px"),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(";")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token property" },
                                      },
                                      [t._v("top")]
                                    ),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(":")]
                                    ),
                                    t._v(" 0px"),
                                    s(
                                      "span",
                                      {
                                        pre: !0,
                                        attrs: { class: "token punctuation" },
                                      },
                                      [t._v(";")]
                                    ),
                                  ]
                                ),
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v('"')]
                                ),
                              ]
                            ),
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("div"),
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                s("h3", { attrs: { id: "第三步" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#第三步" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 第三步"),
                ]),
                t._v(" "),
                s("p", [t._v("创建一个表格")]),
                t._v(" "),
                s("div", { staticClass: "language-javascript extra-class" }, [
                  s(
                    "pre",
                    { pre: !0, attrs: { class: "language-javascript" } },
                    [
                      s("code", [
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("<")]
                        ),
                        t._v("script"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(">")]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("$")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("function")]
                        ),
                        t._v(" "),
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
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n        "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("//配置项")]
                        ),
                        t._v("\n        "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("var")]
                        ),
                        t._v(" options "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("=")]
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
                            attrs: { class: "token literal-property property" },
                          },
                          [t._v("container")]
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
                          [t._v("'datadocs'")]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token comment" } },
                          [t._v("//luckysheet为容器id")]
                        ),
                        t._v("\n        "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        t._v("\n        datadocs"),
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
                        t._v("options"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
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
                          [t._v(")")]
                        ),
                        t._v("\n"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("<")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v("/")]
                        ),
                        t._v("script"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token operator" } },
                          [t._v(">")]
                        ),
                        t._v("\n"),
                      ]),
                    ]
                  ),
                ]),
                s("h2", { attrs: { id: "整体结构" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#整体结构" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 整体结构"),
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "格式" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#格式" } },
                    [t._v("#")]
                  ),
                  t._v(" 格式"),
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "一个完整的Luckysheet表格文件的数据格式为：luckysheetfile，一个表格文件包含若干个sheet文件，对应excel的sheet0、sheet1等。"
                  ),
                ]),
                t._v(" "),
                s("p", [
                  t._v("一个Luckysheet文件的示例如下，该表格包含3个sheet："),
                  s("code", [
                    t._v(
                      "luckysheetfile = [ {sheet1设置}, {sheet2设置}, {sheet3设置} ]"
                    ),
                  ]),
                  t._v("\n相当于excel的3个sheet"),
                ]),
                t._v(" "),
                s("p", [
                  s("img", {
                    attrs: {
                      src: "/DataDocs/img/excel.png",
                      alt: "excel sheet",
                    },
                  }),
                ]),
                t._v(" "),
                s("p", [
                  t._v("文件中的一个sheet的数据"),
                  s("code", [t._v("luckysheetfile[0]")]),
                  t._v("的结构如下："),
                ]),
                t._v(" "),
                s("div", { staticClass: "language-json extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-json" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"Cell"'),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//工作表名称")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('""'),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//工作表颜色")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"0"'),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//工作表索引")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"1"'),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//激活状态")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"0"'),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//工作表的顺序")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//是否隐藏")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("36"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//行数")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("18"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//列数")]
                      ),
                      t._v("\n\t"),
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
                      t._v("\n\t\t"),
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
                        [t._v("//合并单元格")]
                      ),
                      t._v("\n\t\t"),
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
                        [t._v("//表格行高")]
                      ),
                      t._v("\n\t\t"),
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
                        [t._v("//表格列宽")]
                      ),
                      t._v("\n\t\t"),
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
                        [t._v("//隐藏行")]
                      ),
                      t._v("\n\t\t"),
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
                        [t._v("//隐藏列")]
                      ),
                      t._v("\n\t\t"),
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
                        [t._v("//边框")]
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
                        [t._v("//初始化使用的单元格数据")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//更新和存储使用的单元格数据")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("0"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//左右滚动条位置")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("315"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//上下滚动条位置")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//选中的区域")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//条件格式")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//公式链")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//是否数据透视表")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//数据透视表设置")]
                      ),
                      t._v("\n\t"),
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
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//筛选范围")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//筛选配置")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//交替颜色")]
                      ),
                      t._v("\n\t"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"luckysheet_alternateformat_save_modelCustom"')]
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
                        [t._v("//自定义交替颜色\t")]
                      ),
                      t._v("\n\t"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"freezen"')]
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
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//冻结行列")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//图表配置")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//所有行的位置")]
                      ),
                      t._v("\n\t"),
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
                        [t._v("//所有列的位置")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("2322"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//工作表区域的宽度")]
                      ),
                      t._v("\n\t"),
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
                      s("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("949"),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//工作表区域的高度")]
                      ),
                      t._v("\n\t"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [t._v('"load"')]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"1"'),
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("//已加载过此sheet的标识")]
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
                s("h3", { attrs: { id: "查看方式" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#查看方式" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 查看方式"),
                ]),
                t._v(" "),
                s("p", [
                  t._v("在chrome的console中查看\n"),
                  s("code", [t._v("datadocs.getluckysheetfile()")]),
                  t._v("\n可以看到完整设置\n"),
                  s("code", [t._v("[{shee1}, {sheet2}, {sheet3}]")]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "快捷键" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#快捷键" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 快捷键"),
                ]),
                t._v(" "),
                s("table", [
                  s("thead", [
                    s("tr", [
                      s("th", [t._v("快捷键")]),
                      t._v(" "),
                      s("th", [t._v("功能")]),
                    ]),
                  ]),
                  t._v(" "),
                  s("tbody", [
                    s("tr", [
                      s("td", [t._v("CTRL + C")]),
                      t._v(" "),
                      s("td", [t._v("复制单元格")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + V")]),
                      t._v(" "),
                      s("td", [t._v("粘贴单元格")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + X")]),
                      t._v(" "),
                      s("td", [t._v("剪切单元格")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + Z")]),
                      t._v(" "),
                      s("td", [t._v("撤销")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + Y")]),
                      t._v(" "),
                      s("td", [t._v("重做")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + A")]),
                      t._v(" "),
                      s("td", [t._v("全选")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + B")]),
                      t._v(" "),
                      s("td", [t._v("加粗")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + F")]),
                      t._v(" "),
                      s("td", [t._v("查找")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + H")]),
                      t._v(" "),
                      s("td", [t._v("替换")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + I")]),
                      t._v(" "),
                      s("td", [t._v("斜体")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + UP/DOWN/LEFT/RIGHT")]),
                      t._v(" "),
                      s("td", [t._v("快捷调整单元格选框")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("SHIFT + UP/DOWN/LEFT/RIGHT")]),
                      t._v(" "),
                      s("td", [t._v("调整选区")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("CTRL + 鼠标左击")]),
                      t._v(" "),
                      s("td", [t._v("多选单元格")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("SHIFT + 鼠标左击")]),
                      t._v(" "),
                      s("td", [t._v("调整选区")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("UP/DOWN/LEFT/RIGHT")]),
                      t._v(" "),
                      s("td", [t._v("移动单元格选框")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("ENTER")]),
                      t._v(" "),
                      s("td", [t._v("编辑单元格")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("TAB")]),
                      t._v(" "),
                      s("td", [t._v("向右移动单元格选框")]),
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("DELETE")]),
                      t._v(" "),
                      s("td", [t._v("清除单元格数据")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "指引" } }, [
                  s(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#指引" } },
                    [t._v("#")]
                  ),
                  t._v(" 指引"),
                ]),
                t._v(" "),
                s("p", [
                  t._v("如果您使用Luckysheet遇到了问题，按以下步骤来寻找答案"),
                ]),
                t._v(" "),
                s("ol", [
                  s("li", [t._v("使用多吉或者Google搜索常见技术问题")]),
                  t._v(" "),
                  s("li", [
                    t._v("Luckysheet相关的问题优先查看"),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("Luckysheet官方文档"), s("OutboundLink")],
                      1
                    ),
                    t._v("（注意标注TODO的功能暂未实现）"),
                  ]),
                  t._v(" "),
                  s("li", [
                    t._v("搜索"),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/guide/FAQ.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("常见问题列表"), s("OutboundLink")],
                      1
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    t._v("搜索"),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://support.qq.com/product/288322",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("官方论坛"), s("OutboundLink")],
                      1
                    ),
                    t._v("，看看有没有人已经遇到过"),
                  ]),
                  t._v(" "),
                  s("li", [t._v("尝试自己检查或试验以找到答案")]),
                  t._v(" "),
                  s("li", [t._v("请尝试阅读源代码以找到答案，")]),
                ]),
                t._v(" "),
                s("p", [t._v("如果以上方法都没有解决您的问题，可以考虑：")]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    t._v("去"),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://support.qq.com/product/288322",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("官方论坛"), s("OutboundLink")],
                      1
                    ),
                    t._v("提问"),
                  ]),
                  t._v(" "),
                  s("li", [t._v("去Luckysheet官方微信群或者QQ群提问")]),
                  t._v(" "),
                  s("li", [
                    t._v("发现有明显问题的或者需求无法满足的，直接提交"),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://servequery.github.io/datadocs/issues",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("issues"), s("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                s("blockquote", [
                  s("p", [
                    t._v("推荐阅读 "),
                    s(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("提问的智慧"), s("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                s("p", [
                  t._v("同时，我们强烈推荐您帮助我们丰富Luckysheet社区"),
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    t._v(
                      "如果您发现文档或者代码有问题，您可以通过提交PR来贡献。所有合理的改动、优化、修正，或者文档的修正、更新相关的提交都会被接受"
                    ),
                  ]),
                  t._v(" "),
                  s("li", [
                    t._v(
                      "当您有了一部分使用或者二次开发Luckysheet的经验，我们鼓励您通过博文分享出来"
                    ),
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
      s.default = e.exports;
    },
  },
]);
