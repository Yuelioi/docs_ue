# DeleteAsset

删除资产所处的包。所有住在包里的对象都将被删除。这是一个强制删除。它不检查该资产是否在其他层级或演员处有引用。它将关闭所有的资产编辑器，并可能清除交易缓冲区（撤销历史）。将尝试把文件标记为已删除。资产在被删除之前会被加载。

目标是编辑器资产库

## 图示

![]($-20221218-18470344.png)

## Inputs

在。执行。

要删除的资产路径。字符串。我们要删除的资产的路径。

## Outputs

出：执行。

返回值。布尔值。如果操作成功为真。
Delete the package the assets live in. All objects that live in the package will be deleted.. This is a Force Delete. It doesn't check if the asset has references in other Levels or by Actors.. It will close all the asset editors and may clear the Transaction buffer (Undo History).. Will try to mark the file as deleted. The Asset will be loaded before being deleted.

Target is Editor Asset Library

## 图示

![]($-20221218-18470344.png)

## Inputs

In: Exec.

Asset Path to Delete: String. Asset Path of the asset that we want to delete..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

