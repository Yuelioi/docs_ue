# MakeGeometryScriptBendWarpOption-

添加一个节点，从其成员中创建一个'GeometryScriptBendWarpOptions'。

## 图示

![]($-20221218-14535018.png)

## Inputs

对称的外延。布尔型。对称外延：。对称外延是[-BendExtent,BendExtent]，如果禁用，则使用[-LowerExtent,BendExtent]。

下限范围。浮点数（单精度）。Lower Extent:.当bSymmetricExtents = false时使用的下限范围。

双向的。布尔型。双向性：。如果为真，弯曲以原点为中心，即外延两侧的区域被刚性转化。如果是假的，弯曲开始于下层外延的起点，"下层 "区域不受影响。  

## Outputs

几何图形脚本弯曲翘曲选项。Geometry Script Bend Warp Options结构。
