# AsyncLoadPrimaryAsset

将一个主要的资产对象加载到内存中，这将导致它一直被加载，直到它被明确卸载。当加载成功或失败时，完成事件就会发生，你应该对加载的对象进行铸造，以验证它是正确的类型。如果指定了LoadBundles，这些包会和资产一起被加载。

目标是Async Action Load Primary Asset

## 图示

![]($-20221218-17595767.png)

## Inputs

在。执行。

Primary Asset: 主要资产ID结构。

加载捆绑资产。名称的数组。 

## Outputs

输出。执行：执行。

已完成。执行。已完成。

已加载。对象参考。
