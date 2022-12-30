# MakeGeometryScriptTwistWarpOptio-

添加一个节点，从其成员中创建一个'GeometryScriptTwistWarpOptions'。

## 图示

![]($-20221218-14544148.png)

## Inputs

对称的外延。布尔型。对称外延：。对称外延是[-BendExtent,BendExtent]，如果禁用，则使用[-LowerExtent,BendExtent]。

下限范围。浮点数（单精度）。Lower Extent:.当bSymmetricExtents = false时使用的下限范围。

双向的。布尔型。双向性：。如果是true，扭曲是以原点为中心的，即外延两侧的区域都是刚性转换的。如果是假的，扭曲从下层外延的起点开始，"下层 "区域不受影响。  

## Outputs

Geometry Script Twist Warp Options:Geometry Script Twist Warp Options结构。
