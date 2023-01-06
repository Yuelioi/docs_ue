# MarkFilesforDelete

使用当前设置的源码控制提供者从源码控制中删除文件，并删除该文件。注意：阻断直到动作完成。

目标是源代码控制帮助器

## 图示

![]($-20221218-18501569.png)

## Inputs

在。执行。

在文件中。字符串的阵列。

Silent: 布尔值。如果是false（默认），那么就把任何错误信息写到日志中。任何错误文本都可以通过LastErrorMsg()检索到，无论如何。

## Outputs

出：执行。

返回值。布尔值。如果成功则为true，失败则为false，可以调用LastErrorMsg()获取更多信息。
Use currently set source control provider to remove files from source control and delete the files.. Note: Blocks until action is complete.

Target is Source Control Helpers

## 图示

![]($-20221218-18501569.png)

## Inputs

In: Exec.

In Files: Array of Strings.

Silent: Boolean. if false (default) then write out any error info to the Log. Any error text can be retrieved by LastErrorMsg() regardless..  

## Outputs

Out: Exec.

Return Value: Boolean. true if succeeded, false if failed and can call LastErrorMsg() for more info..

