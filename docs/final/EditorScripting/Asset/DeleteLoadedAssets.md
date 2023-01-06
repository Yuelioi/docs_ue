# DeleteLoadedAssets

从内容浏览器中删除已经加载的资产。这是一个强制删除。它不检查资产是否在其他层级或演员处有引用。它将关闭所有的资产编辑器，并可能清除交易缓冲区（撤销历史）。将尝试把文件标记为已删除。

目标是编辑器资产库

## 图示

![]($-20221218-18470694.png)

## Inputs

在。执行。

要删除的资产。对象引用的数组。我们想删除的资产。

## Outputs

出：执行。

返回值。布尔值。如果操作成功为真。
Delete assets from the Content Browser that are already loaded.. This is a Force Delete. It doesn't check if the assets have references in other Levels or by Actors.. It will close all the asset editors and may clear the Transaction buffer (Undo History).. Will try to mark the files as deleted.

Target is Editor Asset Library

## 图示

![]($-20221218-18470694.png)

## Inputs

In: Exec.

Assets to Delete: Array of Object References. Assets that we want to delete..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

