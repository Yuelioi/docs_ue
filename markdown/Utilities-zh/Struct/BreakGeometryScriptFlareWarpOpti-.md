# BreakGeometryScriptFlareWarpOpti-

添加一个节点，将'GeometryScriptFlareWarpOptions'分解到其成员字段中

## 图示

![]($-20221218-14370048.png)

## Inputs

Geometry Script Flare Warp Options:Geometry Script Flare Warp Options结构（按参考）。  

## Outputs

对称的外延。布尔型。对称外延：。对称外延是[-BendExtent,BendExtent]，如果禁用，则使用[-LowerExtent,BendExtent]。

下限范围。浮点数（单精度）。Lower Extent:.当bSymmetricExtents = false时使用的下限范围。

Flare类型。EGeometryScriptFlareType枚举。Flare Type:.确定用作位移的轮廓。
