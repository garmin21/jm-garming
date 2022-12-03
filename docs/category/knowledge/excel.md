---
title: 12-03 html表格导出到Excel
date: "2022-12-03"
categories:
  - experience
tags:
  - experience
publish: true
---

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>仅支持window系统</title>
  </head>
  <body>
    <button id="btn">excel</button>

    <table id="table">
      <thead>
        <tr>
          <th colspan="2">The table header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
      </tbody>
    </table>

    <script>
      function tabletoExcel(table, name) {
        var uri = "data:application/vnd.ms-excel;base64,",
          template =
            '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
          base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)));
          },
          format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
              return c[p];
            });
          };
        if (!table.nodeType) table = document.getElementById(table);
        var ctx = { worksheet: name || "Worksheet", table: table.innerHTML };
        window.location.href = uri + base64(format(template, ctx));
      }
      var btn = document.querySelector("#btn");
      btn.addEventListener("click", function () {
        tabletoExcel("table", "name");
      });
    </script>
  </body>
</html>
```
