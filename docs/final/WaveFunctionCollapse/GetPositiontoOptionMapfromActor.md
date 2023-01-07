# GetPositiontoOptionMapfromActor

从一个有 ISM 组件的给定角色中获取 PositionToOptionsMap。当你想从一个 WFC 解决的行为体中获得邻近的瓦片数据以用于后期处理时，这很有用。这将只评估 ISM 组件。

目标是波函数崩溃 BPLibrary

## 图示

![](/uploads/projects/ue-bluprint/20221218-21330141.png)

## Inputs

在。执行。

演员。Actor 对象参考。具有 ISM 组件的演员。

瓦片大小。浮点数（单精度）。瓦片之间的距离。

位置到期权地图。Int 矢量结构到波函数崩溃期权结构的地图。

## Outputs

出：执行。

返回值。布尔值。

<hr>

Get PositionToOptionsMap from a given actor that has ISM components.. This is useful when you want to derive neighboring tile data from a WFC-solved actor to be used for post processing.. This will only evaluate ISM components.

Target is Wave Function Collapse BPLibrary

## 图示

![](/uploads/projects/ue-bluprint/20221218-21330141.png)

## Inputs

In: Exec.

Actor: Actor Object Reference. Actor with ISM components.

Tile Size: Float (single-precision). distance between tiles.

Position to Option Map: Map of Int Vector Structures to Wave Function Collapse Option Structures.

## Outputs

Out: Exec.

Return Value: Boolean.
