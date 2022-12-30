# BreakGeometryScriptBendWarpOptio-

添加一个节点，将'GeometryScriptBendWarpOptions'分解到其成员字段中。

## 图示

![]($-20221218-14364816.png)

## 输入

Geometry Script Bend Warp Options: Geometry Script Bend Warp Options Structure (by ref).  

## Outputs

对称外延。布尔值。对称外延：。对称外延是[-BendExtent,BendExtent]，如果禁用，则使用[-LowerExtent,BendExtent]。

Lower Extent。Float（单精度）。Lower Extent:. 当bSymmetricExtents = false时使用的下限范围。

双向性。布尔值。双向性：。如果为真，弯曲以原点为中心，即外延两侧的区域是刚性转换的。如果是假的，则弯曲从下端延伸的起点开始，"下端 "区域不受影响。
