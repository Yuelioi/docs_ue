# AsyncLoadPrimaryAssetClassList

将一个主要资产类别的列表加载到内存中，这将导致它们一直被加载，直到明确地卸载。当加载成功或失败时，将发生完成事件，加载的列表将包含完成时发现的所有请求的类。如果指定了LoadBundles，这些包会和资产一起被加载。

目标是Async Action Load Primary Asset Class List

## 图示

![]($-20221218-17595991.png)

## Inputs

在。执行。

主要资产列表。主要资产ID结构的数组。

加载捆绑物。名称的数组。 

## Outputs

输出。执行：执行。

已完成。执行。已完成。

已加载。对象类引用数组。
