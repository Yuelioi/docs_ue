# GetCurrentBundleState

返回一个给定的主要资产的加载包列表。如果该资产根本没有被加载，这将返回false。如果ForceCurrentState为true，它将返回当前状态，即使加载正在进行中。

目标是Kismet系统库

## 图示

![]($-20221218-18000333.png)

## Inputs

在。执行。

主要资产标识。Primary Asset Id 结构。

力量当前状态。布尔型。 

## Outputs

出场。执行：执行。

输出捆绑。名称的数组。

返回值。布尔值。返回一个给定的主要资产的已加载捆绑的列表。如果资产根本没有被加载，这将返回false。如果ForceCurrentState为真，它将返回当前状态，即使加载正在进行中。

Returns the list of loaded bundles for a given Primary Asset. This will return false if the asset is not loaded at all.. If ForceCurrentState is true it will return the current state even if a load is in process

Target is Kismet System Library

## 图示

![]($-20221218-18000333.png)

## Inputs

In: Exec.

Primary Asset Id: Primary Asset Id Structure.

Force Current State: Boolean.  

## Outputs

Out: Exec.

Out Bundles: Array of Names.

Return Value: Boolean. Returns the list of loaded bundles for a given Primary Asset. This will return false if the asset is not loaded at all.. If ForceCurrentState is true it will return the current state even if a load is in process.

