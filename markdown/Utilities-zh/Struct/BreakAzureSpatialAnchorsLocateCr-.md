# BreakAzureSpatialAnchorsLocateCr-

添加一个节点，将'AzureSpatialAnchorsLocateCriteria'分解为其成员字段

## 图示

![]($-20221218-14314051.png)

## Inputs

Azure Spatial Anchors Locate Criteria: Azure Spatial Anchors Locate Criteria结构（通过引用）。 

## Outputs

绕过缓存。Boolean. 绕过缓存：。如果为真，则忽略设备本地缓存的锚点。

Identifiers（标识符）。字符串的数组。Identifiers:. 要定位的具体锚点标识符的列表。

近似锚点。Azure Cloud Spatial Anchor Object Reference。近锚点：。指定（可选）一个锚点，围绕该锚点进行定位。

近锚点距离。浮点数（单精度）。近锚点距离：。指定在NearAnchor附近定位锚点的距离，单位是厘米。

近锚最大结果计数。整数。近锚点最大结果数：。指定定位NearAnchor周围锚点的最大数量。

搜索附近的设备。Boolean. 搜索附近的设备:. 指定是否要在设备位置附近搜索。

近设备距离。浮点数（单精度）。靠近设备的距离:. 指定在设备附近寻找锚点的距离，单位是厘米。

近设备最大结果数。整数。近设备最大结果数：。指定在设备周围定位的最大锚点数量。

要求的类别。EAzureSpatialAnchorDataCategory枚举。要求的类别：。指定要检索的数据。

策略。EAzureSpatialAnchorsLocateStrategy Enum。策略:. 指定定位锚点的方法。
