# GetAssets_Message

Gets asset data for all assets that match the filter.. Assets returned must satisfy every filter component if there is at least one element in the component's array.. Assets will satisfy a component if they match any of the elements in it.

Target is Asset Registry

## 图示

![]($-20221218-18004255.png)

## Inputs

In: Exec.

Target: Object Reference.

Filter: ARFilter Structure (by ref). filter to apply to the assets in the AssetRegistry.  

## Outputs

Out: Exec.

Out Asset Data: Array of Asset Data Structures. the list of assets in this path.

Return Value: Boolean.

