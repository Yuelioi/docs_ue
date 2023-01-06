# FilterbyActorLabel

根据演员的标签（我们在编辑器中看到的）过滤阵列

目标是编辑器过滤器库

## 图示

![]($-20221218-18541757.png)

## Inputs

在。执行。

目标数组。Actor对象的数组引用。要过滤的Actor数组。该数组不会改变。

Name Sub String: 字符串。演员的标签文本。

String Match：字符串。EEditorScriptingStringMatchType枚举。包含NameSubString或与通配符*? 或完全相同的值...

过滤器类型。EEditorScriptingFilterType枚举。如果符合条件，应该包括或不包括数组的项目。

忽略大小写：布尔值。确定字符串比较的大小写敏感性选项。

## Outputs

输出。执行。

返回值。演员对象引用数组。过滤后的列表...
Filter the array based on the Actor's label (what we see in the editor)

Target is Editor Filter Library

## 图示

![]($-20221218-18541757.png)

## Inputs

In: Exec.

Target Array: Array of Actor Object References. Array of Actor to filter. The array will not change..

Name Sub String: String. The text the Actor's Label..

String Match: EEditorScriptingStringMatchType Enum. Contains the NameSubString OR matches with the wildcard *? OR exactly the same value..

Filter Type: EEditorScriptingFilterType Enum. Should include or not the array's item if it respects the condition..

Ignore Case: Boolean. Determines case sensitivity options for string comparisons..  

## Outputs

Out: Exec.

Return Value: Array of Actor Object References. The filtered list..

