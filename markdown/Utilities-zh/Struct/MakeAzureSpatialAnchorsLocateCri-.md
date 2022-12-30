# MakeAzureSpatialAnchorsLocateCri-

添加一个节点，从其成员中创建一个 "AzureSpatialAnchorsLocateCriteria"。

## 图示

![]($-20221218-14473989.png)

## Inputs

绕过缓存。布尔型。绕过缓存：。如果为真，设备本地缓存的锚点被忽略。

标识符。字符串的阵列。Identifiers:.具体的锚点标识符列表，用于定位。

近锚。Azure Cloud Spatial Anchor Object Reference.近锚：.指定（可选）一个锚点，围绕它来定位锚点。

近锚点距离。Float（单精度）。近锚点距离：。指定在NearAnchor附近定位锚点的距离，单位是厘米。

近锚点最大结果数。整数。Near Anchor Max Result Count:.指定NearAnchor周围的最大锚点数量来定位。

搜索附近的设备。布尔型。搜索附近的设备：.指定是否在设备位置附近搜索...

近设备距离。Float (single-precision).近设备距离：。指定在设备附近定位锚的距离，单位是厘米。

近设备最大结果数。整数。近设备最大结果数：。指定设备周围的最大锚点数量来定位。

要求的类别。EAzureSpatialAnchorDataCategory枚举。要求的类别：.指定要检索的数据。

战略。EAzureSpatialAnchorsLocateStrategy Enum.策略：。指定定位锚点的方法。  

## Outputs

蔚蓝空间锚点定位标准。Azure Spatial Anchors定位标准结构。
