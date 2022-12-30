# FilterbyLevelName

通过演员所属的级别过滤阵列。

目标是编辑器过滤器库

## 图示

![]($-20221218-18542428.png)

## Inputs

在。执行。

目标数组。Actor对象的数组引用。要过滤的Actor数组。该数组不会改变。

等级名称。名称。行为者所属等级的名称（与ContentBrowser中的名称相同）。

过滤器类型。EEditorScriptingFilterType枚举。如果它符合条件，应该包括或不包括数组的项目。

## Outputs

输出。执行。

返回值。演员对象引用的数组。过滤后的列表。