# CheckinFile

使用当前设置的源码控制提供者来签入一个文件。注意：阻断直到行动完成。

目标是源代码控制帮助器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18495635.png)

## Inputs

在。执行。

In File: 字符串。要签入的文件 - 可以是完全合格的路径、相对路径、长包名称、资产路径或导出的文本路径（通常存储在剪贴板上）。

在描述中。字符串。签到的描述。

Silent: 布尔值。如果是 false（默认），那么就把任何错误信息写到日志中。任何错误文本都可以通过 LastErrorMsg()检索到，无论如何。

## Outputs

出：执行。

返回值。布尔值。如果成功则为 true，失败则为 false，可以调用 LastErrorMsg()获取更多信息。

<hr>

Use currently set source control provider to check in a file.. Note: Blocks until action is complete.

Target is Source Control Helpers

## 图示

![](/uploads/projects/ue-bluprint/20221218-18495635.png)

## Inputs

In: Exec.

In File: String. The file to check in - can be either fully qualified path, relative path, long package name, asset path or export text path (often stored on clipboard).

In Description: String. Description for check in.

Silent: Boolean. if false (default) then write out any error info to the Log. Any error text can be retrieved by LastErrorMsg() regardless..

## Outputs

Out: Exec.

Return Value: Boolean. true if succeeded, false if failed and can call LastErrorMsg() for more info..
