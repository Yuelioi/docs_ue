# SaveAsset

保存资产所处的包。所有住在包里的对象都会被保存。将尝试先检出文件。资产将在被保存之前被加载。

目标是编辑器资产库

## 图示

![]($-20221218-18473012.png)

## Inputs

在。执行。

储蓄的资产。字符串。

仅当Is Dirty。布尔值。只有在资产变脏时才签出/保存。

## Outputs

出：执行。

返回值。布尔值。如果操作成功为真。
Save the packages the assets live in. All objects that live in the package will be saved.. Will try to checkout the file first. The Asset will be loaded before being saved.

Target is Editor Asset Library

## 图示

![]($-20221218-18473012.png)

## Inputs

In: Exec.

Asset to Save: String.

Only if Is Dirty: Boolean. Only checkout/save the asset if it's dirty..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

