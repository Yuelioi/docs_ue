# GetPrimaryAssetswithBundleState

返回处于给定捆绑状态的资产的列表。必须指定所需的捆绑物。如果ExcludedBundles不是空的，它将不会返回这些捆绑状态的任何资产。如果ValidTypes不是空的，它将只返回这些类型的资产。如果ForceCurrentState为true，它将使用当前的状态，即使有一个加载正在进行中。

目标是Kismet系统库

## 图示

![]($-20221218-18001155.png)

## Inputs

在。Exec.

需要的包。名称的数组。

排除的捆绑物。名称的数组。

有效类型。主要资产类型结构的数组。

强制当前状态。布尔值。 

## Outputs

输出。执行：执行。

Out Primary Asset Id List: 主要资产ID结构的数组。
