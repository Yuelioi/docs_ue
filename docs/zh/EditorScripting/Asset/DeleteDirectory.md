# DeleteDirectory

删除一个目录内的软件包。如果该目录是空的，就删除该目录。这是一个强制删除。它不检查资产是否在其他层级或演员处有引用。它将关闭所有的资产编辑器，并可能清除交易缓冲区（撤销历史）。将尝试把文件标记为已删除。资产在被删除之前会被加载。搜索始终是递归的。它将尝试删除子文件夹。

目标是编辑器资产库

## 图示

![]($-20221218-18470460.png)

## Inputs

在。执行。

目录路径。字符串。将被标记为删除的目录。

## Outputs

出：执行。

返回值。布尔值。如果操作成功为真。