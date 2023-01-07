# QueryFileState

使用当前设置的源控制提供者查询文件的源控制状态。注意：阻断，直到行动完成。

目标是源代码控制帮助器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18501705.png)

## Inputs

在。执行。

在文件中：字符串。要查询的文件 - 可以是完全合格的路径、相对路径、长包名称、资产路径或导出文本路径（通常存储在剪贴板上）。

Silent: 布尔值。如果是 false（默认），那么就把任何错误信息写到日志中。任何错误文本都可以通过 LastErrorMsg()检索到，无论如何。

## Outputs

出：执行。

返回值。源控制状态结构。源控制状态--见 USourceControlState。如果它的值不能被设置，它的 bIsValid 将被设置为 false。

<hr>

Use currently set source control provider to query a file's source control state.. Note: Blocks until action is complete.

Target is Source Control Helpers

## 图示

![](/uploads/projects/ue-bluprint/20221218-18501705.png)

## Inputs

In: Exec.

In File: String. The file to query - can be either fully qualified path, relative path, long package name, asset path or export text path (often stored on clipboard).

Silent: Boolean. if false (default) then write out any error info to the Log. Any error text can be retrieved by LastErrorMsg() regardless..

## Outputs

Out: Exec.

Return Value: Source Control State Structure. Source control state - see USourceControlState. It will have bIsValid set to false if it could not have its values set..
