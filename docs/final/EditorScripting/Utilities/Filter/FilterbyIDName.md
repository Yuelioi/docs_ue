# FilterbyIDName

根据对象的 ID 名称对数组进行过滤。

目标是编辑器过滤器库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18542156.png)

## Inputs

在。执行。

目标数组。对象引用的数组。要过滤的对象数组。该数组不会改变。

Name Sub String: 字符串。对象的 ID 名称的文本。

String Match：字符串。EEditorScriptingStringMatchType 枚举。包含 NameSubString 或与通配符\*? 或完全相同的值...

过滤器类型。EEditorScriptingFilterType 枚举。如果符合条件，应该包括或不包括数组的项目。

## Outputs

输出。执行：执行。

返回值。对象引用的数组。过滤后的列表.

<hr>

Filter the array based on the Object's ID name.

Target is Editor Filter Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18542156.png)

## Inputs

In: Exec.

Target Array: Array of Object References. Array of Object to filter. The array will not change..

Name Sub String: String. The text the Object's ID name..

String Match: EEditorScriptingStringMatchType Enum. Contains the NameSubString OR matches with the wildcard \*? OR exactly the same value..

Filter Type: EEditorScriptingFilterType Enum. Should include or not the array's item if it respects the condition..

## Outputs

Out: Exec.

Return Value: Array of Object References. The filtered list..
