# SaveDirectory

保存资产在目录中的包。所有在该目录中的对象都将被保存。将尝试先检出文件。资产将在被保存之前被加载。

目标是编辑器资产库

## 图示

![]($-20221218-18473127.png)

## Inputs

在。执行。

目录路径。字符串。将被签出和保存的目录。

仅当Is Dirty。布尔值。只检查脏的资产。

递归。布尔型。搜索将是递归的，它将在子文件夹中保存资产。

## Outputs

出：执行。

返回值。布尔值。如果操作成功为真。
Save the packages the assets live in inside the directory. All objects that are in the directory will be saved.. Will try to checkout the file first. Assets will be loaded before being saved.

Target is Editor Asset Library

## 图示

![]($-20221218-18473127.png)

## Inputs

In: Exec.

Directory Path: String. Directory that will be checked out and saved..

Only if Is Dirty: Boolean. Only checkout asset that are dirty..

Recursive: Boolean. The search will be recursive and it will save the asset in the sub folders..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

