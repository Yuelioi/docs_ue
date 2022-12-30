# BreakCoarseLocalizationSettings

添加一个节点，将'CoarseLocalizationSettings'分解成其成员字段

## 图示

![]($-20221218-14323239.png)

## Inputs

粗略的本地化设置。粗略的本地化设置结构（通过引用）。 

## Outputs

启用。布尔值。启用：。如果为真，粗略的本地化将被激活。

启用GPS：布尔值。启用GPS：。如果为真，GPS可用于定位（"定位 "也必须在项目设置->平台->Hololens->Capabilities中启用）。

启用Wifi：布尔值。启用Wifi：。如果为真，WiFi可用于本地化（"wiFiControl "也必须在项目设置->平台->Hololens->Capabilities中启用）。

BLEBeacon UUIDs。字符串的数组。BLEBeacon UUIDs:. 可用于本地化的蓝牙信标UUID列表（"蓝牙 "也必须在项目设置->平台->Hololens->Capabilities中启用）。
