# FilterbyIDName

根据对象的ID名称对数组进行过滤。

目标是编辑器过滤器库

## 图示

![]($-20221218-18542156.png)

## Inputs

在。执行。

目标数组。对象引用的数组。要过滤的对象数组。该数组不会改变。

Name Sub String: 字符串。对象的ID名称的文本。

String Match：字符串。EEditorScriptingStringMatchType枚举。包含NameSubString或与通配符*? 或完全相同的值...

过滤器类型。EEditorScriptingFilterType枚举。如果符合条件，应该包括或不包括数组的项目。

## Outputs

输出。执行：执行。

返回值。对象引用的数组。过滤后的列表.