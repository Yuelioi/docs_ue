# DeleteLoadedAsset

从内容浏览器中删除一个已经加载的资产。这是一个强制删除。它不检查该资产是否在其他层级或演员处有引用。它将关闭所有的资产编辑器，并可能清除交易缓冲区（撤销历史）。将尝试把文件标记为删除。

目标是编辑器资产库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18470578.png)

## Inputs

在。执行。

要删除的资产。对象参考。我们想删除的资产。

## Outputs

出：执行。

返回值。布尔值。如果操作成功为真。

<hr>

Delete an asset from the Content Browser that is already loaded.. This is a Force Delete. It doesn't check if the asset has references in other Levels or by Actors.. It will close all the asset editors and may clear the Transaction buffer (Undo History).. Will try to mark the file as deleted.

Target is Editor Asset Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18470578.png)

## Inputs

In: Exec.

Asset to Delete: Object Reference. Asset that we want to delete..

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..
