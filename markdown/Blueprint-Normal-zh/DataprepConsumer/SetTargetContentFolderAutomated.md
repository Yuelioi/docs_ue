# SetTargetContentFolderAutomated

设置消费者应该移动资产的包的路径（如果适用）。这个版本不会弹出任何界面。一般来说，这个包的路径被替换为资产所在的临时路径。

目标是Dataprep内容消费者

## 图示

![]($-20221218-18361733.png)

## Inputs

在。Exec.

目标。Dataprep Content Consumer对象参考。

在目标内容文件夹中。String. : 保存任何资产的包的路径。 

## Outputs

输出。Exec.

Out Failure Reason（失败原因）。文本：字符串，解释设置目标内容文件夹失败的原因。

返回值。布尔值。如果分配成功则为true，否则为false。
