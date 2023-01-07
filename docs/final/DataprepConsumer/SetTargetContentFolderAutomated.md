# SetTargetContentFolderAutomated

设置消费者应该移动资产的包的路径（如果适用）。这个版本不会弹出任何界面。一般来说，这个包的路径被替换为资产所在的临时路径。

目标是 Dataprep 内容消费者

## 图示

![](/uploads/projects/ue-bluprint/20221218-18361733.png)

## Inputs

在。Exec.

目标。Dataprep Content Consumer 对象参考。

在目标内容文件夹中。String. : 保存任何资产的包的路径。

## Outputs

输出。Exec.

Out Failure Reason（失败原因）。文本：字符串，解释设置目标内容文件夹失败的原因。

返回值。布尔值。如果分配成功则为 true，否则为 false。

<hr>

Sets the path of the package the consumer should move assets to if applicable.. This version won't pop any ui. Generally, this package path is substituted to the temporary path the assets are in

Target is Dataprep Content Consumer

## 图示

![](/uploads/projects/ue-bluprint/20221218-18361733.png)

## Inputs

In: Exec.

Target: Dataprep Content Consumer Object Reference.

In Target Content Folder: String. : Path of the package to save any assets in.

## Outputs

Out: Exec.

Out Failure Reason: Text. : String explaining reason of failure to set the target content folder.

Return Value: Boolean. true if the assignment has been successful, false otherwise.
