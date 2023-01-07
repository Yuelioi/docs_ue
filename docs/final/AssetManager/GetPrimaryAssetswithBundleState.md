# GetPrimaryAssetswithBundleState

返回处于给定捆绑状态的资产的列表。必须指定所需的捆绑物。如果 ExcludedBundles 不是空的，它将不会返回这些捆绑状态的任何资产。如果 ValidTypes 不是空的，它将只返回这些类型的资产。如果 ForceCurrentState 为 true，它将使用当前的状态，即使有一个加载正在进行中。

目标是 Kismet 系统库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18001155.png)

## Inputs

在。Exec.

需要的包。名称的数组。

排除的捆绑物。名称的数组。

有效类型。主要资产类型结构的数组。

强制当前状态。布尔值。

## Outputs

输出。执行：执行。

Out Primary Asset Id List: 主要资产 ID 结构的数组。

<hr>

Returns the list of assets that are in a given bundle state. Required Bundles must be specified. If ExcludedBundles is not empty, it will not return any assets in those bundle states. If ValidTypes is not empty, it will only return assets of those types. If ForceCurrentState is true it will use the current state even if a load is in process

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18001155.png)

## Inputs

In: Exec.

Required Bundles: Array of Names.

Excluded Bundles: Array of Names.

Valid Types: Array of Primary Asset Type Structures.

Force Current State: Boolean.

## Outputs

Out: Exec.

Out Primary Asset Id List: Array of Primary Asset Id Structures.
