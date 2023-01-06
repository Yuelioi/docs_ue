# CheckoutDirectory

从内容浏览器检出资产。如果需要，它将加载资产。所有在目录中的对象将被签出。资产在被检出前将被加载。

目标是编辑器资产库

## 图示

![]($-20221218-18465878.png)

## Inputs

在。执行。

目录路径。字符串。要检查的资产的目录。

递归。布尔值。如果AssetPath是一个文件夹，搜索将是递归的，并将检查子文件夹中的资产。

## Outputs

出：执行。

返回值。布尔值。如果操作成功为真。
Checkout assets from the Content Browser. It will load the assets if needed.. All objects that are in the directory will be checkout. Assets will be loaded before being checkout.

Target is Editor Asset Library

## 图示

![]($-20221218-18465878.png)

## Inputs

In: Exec.

Directory Path: String. Directory of the assets that to checkout..

Recursive: Boolean. If the AssetPath is a folder, the search will be recursive and will checkout the asset in the sub folders..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

