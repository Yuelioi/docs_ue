# MakeCoarseLocalizationSettings

添加一个节点，从其成员中创建一个 "CoarseLocalizationSettings"。

## 图示

![]($-20221218-14483995.png)

## Inputs

启用。布尔型。启用：。如果为真，粗略的本地化将被激活。

启用GPS：布尔值。启用GPS：。如果为真，可以使用GPS进行定位（"定位 "也必须在项目设置->平台->Hololens->Capabilities中启用）。

启用Wifi：布尔值。启用Wifi：。如果为真，WiFi可用于本地化（"wiFiControl "也必须在项目设置->平台->Hololens->Capabilities中启用）。

BLEBeacon UUIDs。字符串的阵列。BLEBeacon UUIDs:.可用于本地化的蓝牙信标UUID列表（"蓝牙 "也必须在项目设置->平台->Holens->Capabilities中启用）。  

## Outputs

粗略的本地化设置。粗略的本地化设置结构。
