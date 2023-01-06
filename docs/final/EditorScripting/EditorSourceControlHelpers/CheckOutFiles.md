# CheckOutFiles

使用当前设置的源码控制提供者来签出指定的文件。注意：阻断，直到行动完成。

目标是源代码控制帮助器

## 图示

![]($-20221218-18500034.png)

## Inputs

在。执行。

在文件中。字符串的数组。要检出的文件 - 可以是完全合格的路径、相对路径、长包名称、资产路径或导出文本路径（通常存储在剪贴板上）。

Silent: 布尔值。如果是false（默认），那么就把任何错误信息写到日志中。任何错误文本都可以通过LastErrorMsg()检索到，无论如何。

## Outputs

出：执行。

返回值。布尔值。如果成功则为true，失败则为false，可以调用LastErrorMsg()获取更多信息。
Use currently set source control provider to check out specified files.. Note: Blocks until action is complete.

Target is Source Control Helpers

## 图示

![]($-20221218-18500034.png)

## Inputs

In: Exec.

In Files: Array of Strings. Files to check out - can be either fully qualified path, relative path, long package name, asset path or export text path (often stored on clipboard).

Silent: Boolean. if false (default) then write out any error info to the Log. Any error text can be retrieved by LastErrorMsg() regardless..  

## Outputs

Out: Exec.

Return Value: Boolean. true if succeeded, false if failed and can call LastErrorMsg() for more info..

