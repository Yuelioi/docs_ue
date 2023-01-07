# GetAssets_Message

获取所有符合过滤器的资产数据。如果组件的数组中至少有一个元素，返回的资产必须满足每个过滤器组件。如果资产与某个组件中的任何元素相匹配，则资产将满足该组件。

目标是资产注册处

## 图示

![](/uploads/projects/ue-bluprint/20221218-18004255.png)

## Inputs

在。执行。

目标。对象参考。

过滤器。ARFilter 结构（通过引用）。过滤器适用于 AssetRegistry 中的资产。

## Outputs

输出。执行：执行。

Out 资产数据。资产数据结构的数组。此路径中的资产列表。

返回值。布尔值。

<hr>

Gets asset data for all assets that match the filter.. Assets returned must satisfy every filter component if there is at least one element in the component's array.. Assets will satisfy a component if they match any of the elements in it.

Target is Asset Registry

## 图示

![](/uploads/projects/ue-bluprint/20221218-18004255.png)

## Inputs

In: Exec.

Target: Object Reference.

Filter: ARFilter Structure (by ref). filter to apply to the assets in the AssetRegistry.

## Outputs

Out: Exec.

Out Asset Data: Array of Asset Data Structures. the list of assets in this path.

Return Value: Boolean.
